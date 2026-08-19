import { useEffect } from "react"

import { recordVisit, TRACKING_CONSENT_EVENT } from "@/lib/portfolio-data"

export function VisitorTracker() {
  useEffect(() => {
    const recordCurrentVisit = () => {
      void recordVisit(`${window.location.pathname}${window.location.search}`)
    }
    recordCurrentVisit()
    window.addEventListener(TRACKING_CONSENT_EVENT, recordCurrentVisit)
    return () => {
      window.removeEventListener(TRACKING_CONSENT_EVENT, recordCurrentVisit)
    }
  }, [])

  return null
}
