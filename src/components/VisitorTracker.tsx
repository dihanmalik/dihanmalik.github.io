import { useEffect } from "react"

import {
  hasTrackingConsent,
  isOwnerDevice,
  recordVisit,
  recordVisitDuration,
  TRACKING_CONSENT_EVENT,
} from "@/lib/portfolio-data"

const HEARTBEAT_INTERVAL_MS = 10_000
const MAX_ACTIVE_TICK_MS = 15_000

export function VisitorTracker() {
  useEffect(() => {
    let tracking = false
    let pendingSeconds = 0
    let lastActiveAt = performance.now()
    let syncVersion = 0
    let durationQueue = Promise.resolve()

    const currentPath = () =>
      `${window.location.pathname}${window.location.search}${window.location.hash}`

    const accrueVisibleTime = () => {
      const now = performance.now()
      if (tracking && document.visibilityState === "visible") {
        pendingSeconds +=
          Math.min(MAX_ACTIVE_TICK_MS, now - lastActiveAt) / 1_000
      }
      lastActiveAt = now
    }

    const flushDuration = () => {
      accrueVisibleTime()
      const duration = Math.min(60, Math.floor(pendingSeconds))
      if (duration < 1) return

      pendingSeconds -= duration
      durationQueue = durationQueue
        .then(() => recordVisitDuration(currentPath(), duration))
        .catch(() => {
          pendingSeconds += duration
        })
    }

    const syncTracking = async () => {
      const version = ++syncVersion
      accrueVisibleTime()

      if (!hasTrackingConsent() || isOwnerDevice()) {
        tracking = false
        pendingSeconds = 0
        return
      }

      const visitReady = await recordVisit(currentPath())
      if (version !== syncVersion) return
      tracking = visitReady
      lastActiveAt = performance.now()
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") flushDuration()
      else lastActiveAt = performance.now()
    }

    const heartbeat = window.setInterval(flushDuration, HEARTBEAT_INTERVAL_MS)
    void syncTracking()
    window.addEventListener(TRACKING_CONSENT_EVENT, syncTracking)
    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("pagehide", flushDuration)

    return () => {
      flushDuration()
      tracking = false
      window.clearInterval(heartbeat)
      window.removeEventListener(TRACKING_CONSENT_EVENT, syncTracking)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("pagehide", flushDuration)
    }
  }, [])

  return null
}
