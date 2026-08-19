import { useState } from "react"
import { IconCookie, IconShieldCheck } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  getTrackingConsent,
  setTrackingConsent,
  type TrackingConsent,
} from "@/lib/portfolio-data"

export function ConsentBanner() {
  const [consent, setConsent] = useState(getTrackingConsent)

  if (consent) return null

  const choose = (next: TrackingConsent) => {
    setTrackingConsent(next)
    setConsent(next)
  }

  return (
    <aside
      className="fixed right-4 bottom-4 left-4 z-50 mx-auto flex max-w-3xl flex-col gap-5 rounded-xl border bg-popover p-5 text-popover-foreground shadow-lg"
      aria-label="Privacy choices"
    >
      <div className="flex items-start gap-3">
        <IconCookie aria-hidden="true" />
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-muted-foreground uppercase">
            A tiny pit stop
          </p>
          <h2 className="text-lg font-semibold">
            Can I leave one useful crumb?
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            I&apos;d like to count this visit, measure active time on the site,
            and remember your mini-game progress with an anonymous browser ID.
            No ads, no device fingerprint, and no IP address added to my
            database. Your games work either way.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a className="text-sm underline underline-offset-4" href="/privacy">
          What gets saved?
        </a>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => choose("denied")}>
            No crumbs, thanks
          </Button>
          <Button variant="outline" onClick={() => choose("granted")}>
            <IconShieldCheck data-icon="inline-start" />
            Yes, remember me
          </Button>
        </div>
      </div>
    </aside>
  )
}
