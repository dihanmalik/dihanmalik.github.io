import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  getTrackingConsent,
  setTrackingConsent,
  type TrackingConsent,
} from "@/lib/portfolio-data"

export function PrivacyRoute() {
  const [consent, setConsent] = useState(getTrackingConsent)

  const choose = (next: TrackingConsent) => {
    setTrackingConsent(next)
    setConsent(next)
  }

  return (
    <main className="min-h-svh bg-background px-6 py-16 text-foreground">
      <article className="mx-auto flex max-w-3xl flex-col gap-8">
        <header className="flex flex-col gap-3">
          <p className="text-xs text-muted-foreground uppercase">
            Privacy notice
          </p>
          <h1 className="text-4xl font-semibold">
            Your data in this portfolio
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            This site uses Firebase to count visits, remember game progress,
            publish optional leaderboard scores, and accept website ratings.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">What is stored</h2>
          <p className="leading-relaxed text-muted-foreground">
            With your permission, Firebase creates an anonymous browser account.
            It stores visit timestamps and paths, game attempts and scores, and
            a random account ID. It does not intentionally store your IP
            address, device fingerprint, email, or real identity.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            If you explicitly join a leaderboard, the nickname and
            visitor/recruiter selection you submit become public with your best
            score. Website ratings store only a 1–5 rating and that audience
            type.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Provider and retention</h2>
          <p className="leading-relaxed text-muted-foreground">
            Data is processed by Google Firebase in the project&apos;s Singapore
            region and is retained until it is no longer useful for the
            portfolio or you request deletion. Firebase may process service
            metadata under Google&apos;s own terms.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Your choice</h2>
          <p className="leading-relaxed text-muted-foreground">
            Your current choice is <strong>{consent ?? "not set"}</strong>. You
            can change it at any time. Declining stops future automatic visitor
            and progress writes; games remain playable. Submitting a leaderboard
            score or rating is a separate action you choose at that moment.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => choose("denied")}>
              Decline tracking
            </Button>
            <Button variant="outline" onClick={() => choose("granted")}>
              Allow tracking
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Questions or deletion</h2>
          <p className="leading-relaxed text-muted-foreground">
            Contact{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:abdulmaliknahid@gmail.com"
            >
              abdulmaliknahid@gmail.com
            </a>{" "}
            to ask about this processing or request deletion.
          </p>
        </section>

        <Button variant="outline" render={<a href="/" />}>
          Return to portfolio
        </Button>
      </article>
    </main>
  )
}
