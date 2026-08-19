import { useCallback, useEffect, useMemo, useState } from "react"
import {
  IconBrandGoogle,
  IconRefresh,
  IconShieldLock,
  IconStarFilled,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getSignedInOwner, signInAsOwner } from "@/lib/firebase"
import {
  GAME_IDS,
  getOwnerLeaderboard,
  getOwnerWebsiteRatings,
  getVisitorList,
  isOwnerDevice,
  type GameId,
  type LeaderboardEntry,
  type VisitorRecord,
  type WebsiteRatingRecord,
} from "@/lib/portfolio-data"

const gameNames: Record<GameId, string> = {
  "void-patrol": "Void Patrol",
  "night-shift": "Night Shift",
}

type NicknameByUid = ReadonlyMap<string, string>

function formatDate(
  timestamp:
    | VisitorRecord["lastSeenAt"]
    | LeaderboardEntry["updatedAt"]
    | WebsiteRatingRecord["createdAt"]
) {
  if (!timestamp) return "—"
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timestamp.toDate())
}

function RatingTable({
  ratings,
  nicknamesByUid,
}: {
  ratings: WebsiteRatingRecord[]
  nicknamesByUid: NicknameByUid
}) {
  return (
    <div className="overflow-x-auto border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Anonymous browser ID</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Submitted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ratings.map((rating) => (
            <TableRow key={rating.uid}>
              <TableCell className="font-medium">
                {rating.name ?? nicknamesByUid.get(rating.uid) ?? "—"}
              </TableCell>
              <TableCell className="max-w-64 font-mono text-xs break-all">
                {rating.uid}
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center gap-2 font-medium">
                  <IconStarFilled aria-hidden="true" />
                  {rating.rating} / 5
                </span>
              </TableCell>
              <TableCell className="capitalize">
                {rating.audienceType}
              </TableCell>
              <TableCell className="text-right text-xs whitespace-nowrap">
                {formatDate(rating.createdAt)}
              </TableCell>
            </TableRow>
          ))}
          {ratings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="py-10 text-center">
                No website ratings yet.
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  )
}

function formatDuration(totalSeconds = 0) {
  const seconds = Math.max(0, Math.floor(totalSeconds))
  const hours = Math.floor(seconds / 3_600)
  const minutes = Math.floor((seconds % 3_600) / 60)
  const remainder = seconds % 60

  if (hours > 0) return `${hours}h ${minutes}m ${remainder}s`
  if (minutes > 0) return `${minutes}m ${remainder}s`
  return `${remainder}s`
}

function VisitorTable({
  visitors,
  nicknamesByUid,
}: {
  visitors: VisitorRecord[]
  nicknamesByUid: NicknameByUid
}) {
  return (
    <div className="overflow-x-auto border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Leaderboard name</TableHead>
            <TableHead>Anonymous browser ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>First path</TableHead>
            <TableHead>Last path</TableHead>
            <TableHead className="text-right">Visits</TableHead>
            <TableHead className="text-right">Latest stay</TableHead>
            <TableHead className="text-right">Total time</TableHead>
            <TableHead className="text-right">First seen</TableHead>
            <TableHead className="text-right">Last seen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visitors.map((visitor) => (
            <TableRow key={visitor.uid}>
              <TableCell className="font-medium">
                {nicknamesByUid.get(visitor.uid) ?? "—"}
              </TableCell>
              <TableCell className="max-w-64 font-mono text-xs break-all">
                {visitor.uid}
              </TableCell>
              <TableCell className="capitalize">
                {visitor.audienceType ?? "—"}
              </TableCell>
              <TableCell className="max-w-64 break-all">
                {visitor.firstPath}
              </TableCell>
              <TableCell className="max-w-64 break-all">
                {visitor.lastPath}
              </TableCell>
              <TableCell className="text-right font-mono">
                {visitor.visitCount.toLocaleString()}
              </TableCell>
              <TableCell className="text-right whitespace-nowrap">
                {formatDuration(visitor.lastVisitDurationSeconds)}
              </TableCell>
              <TableCell className="text-right whitespace-nowrap">
                {formatDuration(visitor.totalDurationSeconds)}
              </TableCell>
              <TableCell className="text-right text-xs whitespace-nowrap">
                {formatDate(visitor.firstSeenAt)}
              </TableCell>
              <TableCell className="text-right text-xs whitespace-nowrap">
                {formatDate(visitor.lastSeenAt)}
              </TableCell>
            </TableRow>
          ))}
          {visitors.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="py-10 text-center">
                No visitor records yet.
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  )
}

function LeaderboardTable({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <div className="overflow-x-auto border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Player</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Anonymous browser ID</TableHead>
            <TableHead className="text-right">Best</TableHead>
            <TableHead className="text-right">Latest</TableHead>
            <TableHead className="text-right">Submissions</TableHead>
            <TableHead className="text-right">Best recorded</TableHead>
            <TableHead className="text-right">Last updated</TableHead>
            <TableHead className="text-right">Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry, index) => (
            <TableRow key={entry.uid}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{entry.nickname}</TableCell>
              <TableCell className="capitalize">{entry.audienceType}</TableCell>
              <TableCell className="max-w-64 font-mono text-xs break-all">
                {entry.uid}
              </TableCell>
              <TableCell className="text-right font-mono">
                {entry.bestScore.toLocaleString()}
              </TableCell>
              <TableCell className="text-right font-mono">
                {entry.latestScore.toLocaleString()}
              </TableCell>
              <TableCell className="text-right font-mono">
                {entry.submissions.toLocaleString()}
              </TableCell>
              <TableCell className="text-right text-xs whitespace-nowrap">
                {formatDate(entry.bestScoreAt)}
              </TableCell>
              <TableCell className="text-right text-xs whitespace-nowrap">
                {formatDate(entry.updatedAt)}
              </TableCell>
              <TableCell className="text-right text-xs whitespace-nowrap">
                {formatDate(entry.createdAt)}
              </TableCell>
            </TableRow>
          ))}
          {entries.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="py-10 text-center">
                No leaderboard entries yet.
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </div>
  )
}

export function OwnerInsights() {
  const [ownerVerified, setOwnerVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [visitors, setVisitors] = useState<VisitorRecord[]>([])
  const [ratings, setRatings] = useState<WebsiteRatingRecord[]>([])
  const [leaderboards, setLeaderboards] = useState<
    Record<GameId, LeaderboardEntry[]>
  >({
    "void-patrol": [],
    "night-shift": [],
  })
  const nicknamesByUid = useMemo(() => {
    const latestNames = new Map<
      string,
      { nickname: string; updatedAt: number }
    >()

    GAME_IDS.forEach((gameId) => {
      leaderboards[gameId].forEach((entry) => {
        const updatedAt =
          entry.updatedAt?.toMillis() ?? entry.createdAt?.toMillis() ?? 0
        const current = latestNames.get(entry.uid)

        if (!current || updatedAt >= current.updatedAt) {
          latestNames.set(entry.uid, {
            nickname: entry.nickname,
            updatedAt,
          })
        }
      })
    })

    return new Map(
      Array.from(latestNames, ([uid, entry]) => [uid, entry.nickname])
    )
  }, [leaderboards])

  const loadOwnerData = useCallback(async () => {
    setLoading(true)
    setError("")
    try {
      const [nextVisitors, nextRatings, nextLeaderboards] = await Promise.all([
        getVisitorList(),
        getOwnerWebsiteRatings(),
        Promise.all(GAME_IDS.map((gameId) => getOwnerLeaderboard(gameId))),
      ])
      setVisitors(nextVisitors)
      setRatings(nextRatings)
      setLeaderboards({
        "void-patrol": nextLeaderboards[0],
        "night-shift": nextLeaderboards[1],
      })
      setOwnerVerified(true)
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Owner dashboard data is unavailable."
      )
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    void getSignedInOwner().then((owner) => {
      if (cancelled || !owner) return
      setOwnerVerified(true)
      void loadOwnerData()
    })
    return () => {
      cancelled = true
    }
  }, [loadOwnerData])

  const verifyOwner = async () => {
    setError("")
    setLoading(true)
    try {
      await signInAsOwner()
      setOwnerVerified(true)
      await loadOwnerData()
    } catch (verificationError) {
      setError(
        verificationError instanceof Error
          ? verificationError.message
          : "Owner sign-in failed."
      )
      setLoading(false)
    }
  }

  if (!isOwnerDevice()) return null

  return (
    <section
      id="owner-dashboard"
      className="scroll-mt-8 border-t px-5 py-20 sm:px-10 sm:py-28"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase">
            <IconShieldLock aria-hidden="true" />
            Private owner section
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Visitors, ratings & game records
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Visible only on browsers marked as yours. Detailed records remain
            protected until your owner Google account is verified. Names are
            matched from game leaderboards using the anonymous browser ID.
          </p>
        </div>
        {ownerVerified ? (
          <Button variant="outline" onClick={loadOwnerData} disabled={loading}>
            {loading ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <IconRefresh data-icon="inline-start" />
            )}
            {loading ? "Refreshing…" : "Refresh records"}
          </Button>
        ) : null}
      </div>

      {error ? (
        <p role="alert" className="mt-8 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      {!ownerVerified ? (
        <div className="mt-10 flex flex-col items-start gap-4 border-y py-8">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            This browser has the local owner flag. Verify with your authorized
            Google account to unlock private visitor details and complete game
            records.
          </p>
          <Button size="lg" onClick={verifyOwner} disabled={loading}>
            {loading ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <IconBrandGoogle data-icon="inline-start" />
            )}
            {loading ? "Verifying…" : "Verify owner with Google"}
          </Button>
        </div>
      ) : loading &&
        visitors.length === 0 &&
        ratings.length === 0 &&
        GAME_IDS.every((gameId) => leaderboards[gameId].length === 0) ? (
        <div className="mt-10 flex items-center gap-3 border-y py-10 text-sm text-muted-foreground">
          <Spinner /> Loading private records…
        </div>
      ) : (
        <div className="mt-12 flex flex-col gap-14">
          <section aria-labelledby="owner-visitors-title">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
                  <IconUsers aria-hidden="true" /> Visitor records
                </p>
                <h3
                  id="owner-visitors-title"
                  className="mt-2 text-2xl font-semibold"
                >
                  {visitors.length.toLocaleString()} anonymous browsers
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Up to 100 records · newest activity first
              </p>
            </div>
            <VisitorTable visitors={visitors} nicknamesByUid={nicknamesByUid} />
          </section>

          <section aria-labelledby="owner-ratings-title">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
                  <IconStarFilled aria-hidden="true" /> Website raters
                </p>
                <h3
                  id="owner-ratings-title"
                  className="mt-2 text-2xl font-semibold"
                >
                  {ratings.length.toLocaleString()} submitted ratings
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Up to 100 ratings · newest first
              </p>
            </div>
            <RatingTable ratings={ratings} nicknamesByUid={nicknamesByUid} />
          </section>

          <section aria-labelledby="owner-leaderboards-title">
            <div className="mb-5">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase">
                <IconTrophy aria-hidden="true" /> Game records
              </p>
              <h3
                id="owner-leaderboards-title"
                className="mt-2 text-2xl font-semibold"
              >
                Complete leaderboards
              </h3>
            </div>
            <Tabs defaultValue="void-patrol">
              <TabsList variant="line" className="w-full justify-start">
                {GAME_IDS.map((gameId) => (
                  <TabsTrigger key={gameId} value={gameId}>
                    {gameNames[gameId]} ({leaderboards[gameId].length})
                  </TabsTrigger>
                ))}
              </TabsList>
              {GAME_IDS.map((gameId) => (
                <TabsContent key={gameId} value={gameId} className="mt-4">
                  <LeaderboardTable entries={leaderboards[gameId]} />
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </div>
      )}
    </section>
  )
}
