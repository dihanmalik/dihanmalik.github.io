import { useEffect, useState } from "react"
import type { FormEvent } from "react"
import {
  IconBriefcase,
  IconHeartFilled,
  IconMessageStar,
  IconSend,
  IconSparkles,
  IconStar,
  IconStarFilled,
  IconUser,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  getWebsiteRatingSummary,
  hasSubmittedRating,
  submitWebsiteRating,
  WEBSITE_RATING_EVENT,
  type AudienceType,
  type WebsiteRatingSummary as RatingSummary,
} from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

type WebsiteRatingFormProps = {
  className?: string
  statusClassName?: string
}

const ratingMessages = [
  "Still finding its orbit",
  "A promising little spark",
  "Solid and nicely put together",
  "This genuinely landed well",
  "Portfolio high-five unlocked!",
] as const

function useWebsiteRatingSummary() {
  const [summary, setSummary] = useState<RatingSummary>({
    ratingCount: 0,
    ratingTotal: 0,
    displayRating: 5,
  })

  useEffect(() => {
    let cancelled = false
    const load = () => {
      void getWebsiteRatingSummary()
        .then((nextSummary) => {
          if (!cancelled) setSummary(nextSummary)
        })
        .catch(() => {
          // Keep the friendly starting score when the summary is unavailable.
        })
    }
    load()
    window.addEventListener(WEBSITE_RATING_EVENT, load)
    return () => {
      cancelled = true
      window.removeEventListener(WEBSITE_RATING_EVENT, load)
    }
  }, [])

  return summary
}

function WebsiteRatingSummaryView({ summary }: { summary: RatingSummary }) {
  const filledStars = Math.round(summary.displayRating)

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-background/80 p-4 shadow-sm">
      <div className="flex items-center gap-1" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= filledStars ? (
            <IconStarFilled key={star} className="text-primary" />
          ) : (
            <IconStar key={star} className="text-muted-foreground" />
          )
        )}
      </div>
      <div className="text-right">
        <strong className="block text-lg">
          {summary.displayRating.toFixed(1)} / 5
        </strong>
        <span className="text-xs text-muted-foreground">
          {summary.ratingCount > 10
            ? `From ${summary.ratingCount.toLocaleString()} kind ratings`
            : "Our cheerful starting score"}
        </span>
      </div>
    </div>
  )
}

export function WebsiteRatingSummary() {
  const summary = useWebsiteRatingSummary()
  return <WebsiteRatingSummaryView summary={summary} />
}

export function WebsiteRatingForm({
  className,
  statusClassName,
}: WebsiteRatingFormProps) {
  const [rating, setRating] = useState(5)
  const [audienceType, setAudienceType] = useState<AudienceType>("visitor")
  const [checking, setChecking] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let cancelled = false
    void hasSubmittedRating()
      .then((hasVoted) => {
        if (!cancelled) setSubmitted(hasVoted)
      })
      .catch(() => {
        if (!cancelled) setError("Rating status could not be loaded.")
      })
      .finally(() => {
        if (!cancelled) setChecking(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const submitRating = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(true)
    setError("")

    try {
      await submitWebsiteRating(rating, audienceType)
      setSubmitted(true)
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Your rating could not be saved."
      )
    } finally {
      setSaving(false)
    }
  }

  if (checking) {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2 rounded-xl border bg-muted/30 p-6 text-sm text-muted-foreground",
          statusClassName
        )}
      >
        <Spinner />
        Checking for a previous high-five…
      </div>
    )
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-3 rounded-xl border bg-muted/30 p-6 text-center",
          statusClassName
        )}
      >
        <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <IconHeartFilled aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1">
          <strong className="text-base">High-five received!</strong>
          <p className="text-sm text-muted-foreground">
            This browser has already left its rating. Thanks for helping me make
            the next version even better.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      className={cn("flex flex-col gap-5", className)}
      onSubmit={submitRating}
    >
      <FieldGroup>
        <FieldSet className="rounded-xl border bg-muted/30 p-4">
          <FieldLegend variant="label">How did it feel?</FieldLegend>
          <ToggleGroup
            value={[String(rating)]}
            onValueChange={(values) => {
              const next = Number(values[0])
              if (next >= 1 && next <= 5) setRating(next)
            }}
            variant="outline"
            size="lg"
            spacing={1}
            className="grid w-full grid-cols-5"
            aria-label="Website rating out of five"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <ToggleGroupItem
                key={value}
                value={String(value)}
                aria-label={`${value} out of 5`}
                className="h-auto w-full flex-col gap-1 py-3 aria-pressed:bg-primary aria-pressed:text-primary-foreground"
              >
                <IconStarFilled aria-hidden="true" />
                <span>{value}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <p
            className="text-center text-sm font-medium text-muted-foreground"
            aria-live="polite"
          >
            {ratingMessages[rating - 1]}
          </p>
        </FieldSet>

        <FieldSet className="rounded-xl border bg-muted/30 p-4">
          <FieldLegend variant="label">And you are here as…</FieldLegend>
          <ToggleGroup
            value={[audienceType]}
            onValueChange={(values) => {
              const next = values[0]
              if (next === "visitor" || next === "recruiter") {
                setAudienceType(next)
              }
            }}
            variant="outline"
            size="lg"
            spacing={1}
            className="grid w-full grid-cols-2"
            aria-label="Your relationship to the portfolio"
          >
            <ToggleGroupItem
              value="visitor"
              className="h-auto w-full py-3 aria-pressed:bg-primary aria-pressed:text-primary-foreground"
            >
              <IconUser aria-hidden="true" />
              Curious visitor
            </ToggleGroupItem>
            <ToggleGroupItem
              value="recruiter"
              className="h-auto w-full py-3 aria-pressed:bg-primary aria-pressed:text-primary-foreground"
            >
              <IconBriefcase aria-hidden="true" />
              Recruiter
            </ToggleGroupItem>
          </ToggleGroup>
        </FieldSet>

        {error ? (
          <Field data-invalid>
            <FieldError>{error}</FieldError>
          </Field>
        ) : null}
      </FieldGroup>

      <Button type="submit" size="lg" disabled={saving}>
        {saving ? (
          <>
            <Spinner data-icon="inline-start" />
            Sending your high-five…
          </>
        ) : (
          <>
            <IconSend data-icon="inline-start" />
            Send my little signal
          </>
        )}
      </Button>
    </form>
  )
}

export function WebsiteRatingDialog() {
  const summary = useWebsiteRatingSummary()

  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="outline" size="lg" className="rounded-full" />}
      >
        <IconMessageStar data-icon="inline-start" />
        Rate this website · {summary.displayRating.toFixed(1)} ★
      </DialogTrigger>
      <DialogContent className="max-h-[90svh] overflow-y-auto p-0 sm:max-w-lg">
        <div className="relative overflow-hidden border-b bg-muted/50 p-6">
          <div
            className="absolute -top-14 -right-10 size-36 rounded-full bg-primary/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-12 size-28 rounded-full bg-primary/5"
            aria-hidden="true"
          />
          <DialogHeader className="relative">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              <IconSparkles aria-hidden="true" />A 30-second vibe check
            </p>
            <DialogTitle className="text-2xl">
              How did this little corner of the internet land?
            </DialogTitle>
            <DialogDescription className="max-w-md leading-relaxed">
              Tap a few stars and tell me what brought you here. No essay, no
              name, and definitely no awkward follow-up email.
            </DialogDescription>
            <WebsiteRatingSummaryView summary={summary} />
          </DialogHeader>
        </div>
        <div className="p-6">
          <WebsiteRatingForm />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            One anonymous rating per browser · no name or IP stored
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
