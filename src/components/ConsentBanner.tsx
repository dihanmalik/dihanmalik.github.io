import { useState } from "react"
import { IconCookie, IconShieldCheck } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { AudienceTypePicker } from "@/components/ui/custom/AudienceTypePicker"
import {
  getVisitorAudienceType,
  getTrackingConsent,
  setTrackingConsent,
  type AudienceType,
  type TrackingConsent,
} from "@/lib/portfolio-data"

export function ConsentBanner() {
  const [consent, setConsent] = useState(getTrackingConsent)
  const [audienceType, setAudienceType] = useState<AudienceType>(
    () => getVisitorAudienceType() ?? "visitor"
  )

  if (consent) return null

  const choose = (next: TrackingConsent) => {
    setTrackingConsent(next, audienceType)
    setConsent(next)
  }

  return (
    <aside
      className="fixed right-3 bottom-3 left-3 z-50 mx-auto flex max-w-lg flex-col gap-3 rounded-lg border bg-popover p-4 text-popover-foreground shadow-lg"
      aria-label="Privacy choices"
    >
      <div className="flex items-start gap-2.5">
        <IconCookie
          className="mt-0.5 size-5 flex-none text-[var(--portfolio-accent)]"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-base font-semibold">
            May I remember this visit?
          </h2>
          <p className="text-xs leading-relaxed text-muted-foreground">
            With permission, I&apos;ll anonymously count visits, time here, and
            game progress using a random browser ID. No ads, fingerprinting, or
            saved IP, name, or email. Everything still works if you decline.
          </p>
        </div>
      </div>
      <AudienceTypePicker
        value={audienceType}
        onValueChange={setAudienceType}
        legend="You’re visiting as…"
        compact
      />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <a className="text-xs underline underline-offset-4" href="/privacy">
          What gets saved?
        </a>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={() => choose("denied")}>
            No, thanks
          </Button>
          <Button size="sm" variant="accent" onClick={() => choose("granted")}>
            <IconShieldCheck data-icon="inline-start" />
            Yes, remember me
          </Button>
        </div>
      </div>
    </aside>
  )
}
