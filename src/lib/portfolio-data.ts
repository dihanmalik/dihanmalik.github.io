import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  where,
  type Timestamp,
} from "firebase/firestore"

import { firestore, getAnonymousUser, getSignedInOwner } from "@/lib/firebase"

export const OWNER_DEVICE_KEY = "portfolio-owner-device"
export const TRACKING_CONSENT_KEY = "portfolio-tracking-consent"
export const TRACKING_CONSENT_EVENT = "portfolio-tracking-consent-change"
const VISIT_SESSION_KEY = "portfolio-visit-recorded"
export const WEBSITE_RATING_EVENT = "portfolio-website-rating-change"

export const GAME_IDS = ["void-patrol", "night-shift"] as const
export type GameId = (typeof GAME_IDS)[number]
export type AudienceType = "visitor" | "recruiter"
export type TrackingConsent = "granted" | "denied"

export type LeaderboardEntry = {
  uid: string
  nickname: string
  audienceType: AudienceType
  bestScore: number
  latestScore: number
  submissions: number
  createdAt?: Timestamp
  updatedAt?: Timestamp
  bestScoreAt?: Timestamp
}

export type VisitorRecord = {
  uid: string
  firstPath: string
  lastPath: string
  firstSeenAt: Timestamp
  lastSeenAt: Timestamp
  visitCount: number
}

export type WebsiteRatingSummary = {
  ratingCount: number
  ratingTotal: number
  displayRating: number
}

export function isOwnerDevice() {
  return localStorage.getItem(OWNER_DEVICE_KEY) === "true"
}

export function getTrackingConsent(): TrackingConsent | null {
  const value = localStorage.getItem(TRACKING_CONSENT_KEY)
  return value === "granted" || value === "denied" ? value : null
}

export function setTrackingConsent(consent: TrackingConsent) {
  localStorage.setItem(TRACKING_CONSENT_KEY, consent)
  if (consent === "denied") sessionStorage.removeItem(VISIT_SESSION_KEY)
  window.dispatchEvent(new CustomEvent(TRACKING_CONSENT_EVENT))
}

export function hasTrackingConsent() {
  return getTrackingConsent() === "granted"
}

export function setOwnerDevice(excluded: boolean) {
  if (excluded) {
    localStorage.setItem(OWNER_DEVICE_KEY, "true")
  } else {
    localStorage.removeItem(OWNER_DEVICE_KEY)
  }
  sessionStorage.removeItem(VISIT_SESSION_KEY)
}

export async function recordVisit(path: string) {
  if (
    isOwnerDevice() ||
    !hasTrackingConsent() ||
    sessionStorage.getItem(VISIT_SESSION_KEY)
  ) {
    return
  }
  sessionStorage.setItem(VISIT_SESSION_KEY, "true")

  try {
    const user = await getAnonymousUser()
    const visitorRef = doc(firestore, "visitors", user.uid)
    const statsRef = doc(firestore, "siteStats", "general")

    await runTransaction(firestore, async (transaction) => {
      const [visitor, stats] = await Promise.all([
        transaction.get(visitorRef),
        transaction.get(statsRef),
      ])

      if (visitor.exists()) {
        transaction.update(visitorRef, {
          lastPath: path,
          lastSeenAt: serverTimestamp(),
          visitCount: Number(visitor.data().visitCount ?? 0) + 1,
        })
        return
      }

      transaction.set(visitorRef, {
        uid: user.uid,
        firstPath: path,
        lastPath: path,
        firstSeenAt: serverTimestamp(),
        lastSeenAt: serverTimestamp(),
        visitCount: 1,
      })
      transaction.set(
        statsRef,
        {
          uniqueVisitors: Number(stats.data()?.uniqueVisitors ?? 0) + 1,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      )
    })
  } catch (error) {
    sessionStorage.removeItem(VISIT_SESSION_KEY)
    console.warn("Visitor tracking is unavailable.", error)
  }
}

export async function recordGameStart(gameId: GameId) {
  if (!hasTrackingConsent()) return
  const user = await getAnonymousUser()
  const progressRef = doc(firestore, "playerProgress", `${user.uid}_${gameId}`)

  await runTransaction(firestore, async (transaction) => {
    const progress = await transaction.get(progressRef)
    const previous = progress.data()
    transaction.set(
      progressRef,
      {
        uid: user.uid,
        gameId,
        attempts: Number(previous?.attempts ?? 0) + 1,
        completedRuns: Number(previous?.completedRuns ?? 0),
        bestScore: Number(previous?.bestScore ?? 0),
        latestScore: Number(previous?.latestScore ?? 0),
        firstPlayedAt: previous?.firstPlayedAt ?? serverTimestamp(),
        lastPlayedAt: serverTimestamp(),
      },
      { merge: true }
    )
  })
}

export async function recordGameOver(gameId: GameId, score: number) {
  if (!hasTrackingConsent()) return
  const user = await getAnonymousUser()
  const progressRef = doc(firestore, "playerProgress", `${user.uid}_${gameId}`)
  const runRef = doc(collection(progressRef, "runs"))

  await runTransaction(firestore, async (transaction) => {
    const progress = await transaction.get(progressRef)
    const previous = progress.data()
    transaction.set(
      progressRef,
      {
        uid: user.uid,
        gameId,
        attempts: Math.max(1, Number(previous?.attempts ?? 0)),
        completedRuns: Number(previous?.completedRuns ?? 0) + 1,
        bestScore: Math.max(score, Number(previous?.bestScore ?? 0)),
        latestScore: score,
        firstPlayedAt: previous?.firstPlayedAt ?? serverTimestamp(),
        lastPlayedAt: serverTimestamp(),
      },
      { merge: true }
    )
    transaction.set(runRef, {
      uid: user.uid,
      gameId,
      score,
      createdAt: serverTimestamp(),
    })
  })
}

export async function submitLeaderboardScore(
  gameId: GameId,
  nickname: string,
  audienceType: AudienceType,
  score: number
) {
  const user = await getAnonymousUser()
  const submittedAudienceType = isOwnerDevice() ? "visitor" : audienceType
  const entryRef = doc(firestore, "leaderboards", gameId, "entries", user.uid)

  await runTransaction(firestore, async (transaction) => {
    const entry = await transaction.get(entryRef)
    const previous = entry.data()
    transaction.set(entryRef, {
      uid: user.uid,
      gameId,
      nickname: nickname.trim(),
      audienceType: submittedAudienceType,
      bestScore: Math.max(score, Number(previous?.bestScore ?? 0)),
      latestScore: score,
      submissions: Number(previous?.submissions ?? 0) + 1,
      createdAt: previous?.createdAt ?? serverTimestamp(),
      updatedAt: serverTimestamp(),
      bestScoreAt:
        !previous?.bestScoreAt || score > Number(previous?.bestScore ?? 0)
          ? serverTimestamp()
          : previous.bestScoreAt,
    })
  })
}

export async function getLeaderboard(
  gameId: GameId,
  audienceType: AudienceType
) {
  const entriesQuery = query(
    collection(firestore, "leaderboards", gameId, "entries"),
    where("audienceType", "==", audienceType),
    orderBy("bestScore", "desc"),
    limit(10)
  )
  const snapshot = await getDocs(entriesQuery)
  return snapshot.docs.map((entry) => entry.data() as LeaderboardEntry)
}

export async function getVisitorList() {
  if (!isOwnerDevice() || !(await getSignedInOwner())) {
    throw new Error("Owner verification is required.")
  }

  const visitorsQuery = query(
    collection(firestore, "visitors"),
    orderBy("lastSeenAt", "desc"),
    limit(100)
  )
  const snapshot = await getDocs(visitorsQuery)
  return snapshot.docs.map((visitor) => visitor.data() as VisitorRecord)
}

export async function hasSubmittedRating() {
  const user = await getAnonymousUser()
  return (await getDoc(doc(firestore, "websiteRatings", user.uid))).exists()
}

export async function submitWebsiteRating(
  rating: number,
  audienceType: AudienceType
) {
  const user = await getAnonymousUser()
  const ratingRef = doc(firestore, "websiteRatings", user.uid)
  const statsRef = doc(firestore, "siteStats", "ratings")

  await runTransaction(firestore, async (transaction) => {
    const [existingRating, stats] = await Promise.all([
      transaction.get(ratingRef),
      transaction.get(statsRef),
    ])
    if (existingRating.exists()) {
      throw new Error("This browser has already submitted a rating.")
    }

    const ratingCount = Number(stats.data()?.ratingCount ?? 0)
    const ratingTotal = Number(stats.data()?.ratingTotal ?? 0)
    transaction.set(ratingRef, {
      uid: user.uid,
      rating,
      audienceType,
      createdAt: serverTimestamp(),
    })
    transaction.set(statsRef, {
      ratingCount: ratingCount + 1,
      ratingTotal: ratingTotal + rating,
      updatedAt: serverTimestamp(),
    })
  })

  window.dispatchEvent(new CustomEvent(WEBSITE_RATING_EVENT))
}

export async function getWebsiteRatingSummary(): Promise<WebsiteRatingSummary> {
  const snapshot = await getDoc(doc(firestore, "siteStats", "ratings"))
  const ratingCount = Number(snapshot.data()?.ratingCount ?? 0)
  const ratingTotal = Number(snapshot.data()?.ratingTotal ?? 0)
  const actualAverage = ratingCount > 0 ? ratingTotal / ratingCount : 5

  return {
    ratingCount,
    ratingTotal,
    displayRating: ratingCount > 10 ? actualAverage : 5,
  }
}

export function trackInBackground(operation: Promise<unknown>) {
  void operation.catch((error) => {
    console.warn("Portfolio tracking is unavailable.", error)
  })
}
