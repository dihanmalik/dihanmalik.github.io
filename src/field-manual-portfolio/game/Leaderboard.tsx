import { useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"
import { IconDeviceGamepad2, IconTrophy } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  getLeaderboard,
  getOwnLeaderboardEntry,
  isOwnerDevice,
  submitLeaderboardScore,
  type AudienceType,
  type GameId,
  type LeaderboardEntry,
} from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const PROFILE_KEY = "portfolio-leaderboard-profile"

type SavedProfile = {
  nickname: string
  audienceType: AudienceType
}

function readSavedProfile(): SavedProfile {
  try {
    const value = JSON.parse(localStorage.getItem(PROFILE_KEY) ?? "null")
    if (
      value &&
      typeof value.nickname === "string" &&
      (value.audienceType === "visitor" || value.audienceType === "recruiter")
    ) {
      return value
    }
  } catch {
    // Ignore invalid local preferences.
  }
  return { nickname: "", audienceType: "visitor" }
}

function AudienceToggle({
  value,
  onChange,
  label,
  visitorOnly = false,
}: {
  value: AudienceType
  onChange: (value: AudienceType) => void
  label: string
  visitorOnly?: boolean
}) {
  if (visitorOnly) {
    return (
      <FieldSet>
        <FieldLegend variant="label">{label}</FieldLegend>
        <FieldDescription>
          Visitor · owner devices always join the public visitor board.
        </FieldDescription>
      </FieldSet>
    )
  }

  return (
    <FieldSet>
      <FieldLegend variant="label">{label}</FieldLegend>
      <ToggleGroup
        value={[value]}
        onValueChange={(values) => {
          const next = values[0]
          if (next === "visitor" || next === "recruiter") onChange(next)
        }}
        variant="outline"
        spacing={1}
        aria-label={label}
      >
        <ToggleGroupItem value="visitor">Visitor</ToggleGroupItem>
        <ToggleGroupItem value="recruiter">Recruiter</ToggleGroupItem>
      </ToggleGroup>
    </FieldSet>
  )
}

function LeaderboardTable({
  entries,
  loading,
}: {
  entries: LeaderboardEntry[]
  loading: boolean
}) {
  if (loading) {
    return (
      <p className="py-8 text-center text-muted-foreground">Loading scores…</p>
    )
  }

  if (entries.length === 0) {
    return (
      <p className="py-8 text-center text-muted-foreground">
        No scores in this group yet. Take the first spot.
      </p>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">#</TableHead>
          <TableHead>Player</TableHead>
          <TableHead className="text-right">Best</TableHead>
          <TableHead className="text-right">Recorded</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry, index) => (
          <TableRow key={entry.uid}>
            <TableCell>{index + 1}</TableCell>
            <TableCell className="max-w-48 truncate font-medium">
              {entry.nickname}
            </TableCell>
            <TableCell className="text-right font-mono">
              {entry.bestScore.toLocaleString()}
            </TableCell>
            <TableCell className="text-right text-xs whitespace-nowrap text-muted-foreground">
              {formatLeaderboardDate(
                entry.bestScoreAt ?? entry.updatedAt ?? entry.createdAt
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function formatLeaderboardDate(timestamp: LeaderboardEntry["createdAt"]) {
  if (!timestamp) return "—"
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timestamp.toDate())
}

function useLeaderboard(
  gameId: GameId,
  audienceType: AudienceType,
  active: boolean
) {
  const [refreshKey, setRefreshKey] = useState(0)
  const queryKey = `${gameId}:${audienceType}:${refreshKey}`
  const [result, setResult] = useState<{
    key: string
    entries: LeaderboardEntry[]
  }>({ key: "", entries: [] })
  const [failureKey, setFailureKey] = useState("")

  useEffect(() => {
    if (!active) return
    let cancelled = false
    void getLeaderboard(gameId, audienceType)
      .then((nextEntries) => {
        if (!cancelled) {
          setResult({ key: queryKey, entries: nextEntries })
          setFailureKey("")
        }
      })
      .catch(() => {
        if (!cancelled) setFailureKey(queryKey)
      })
    return () => {
      cancelled = true
    }
  }, [active, audienceType, gameId, queryKey, refreshKey])

  return {
    entries: result.key === queryKey ? result.entries : [],
    loading: active && result.key !== queryKey && failureKey !== queryKey,
    error:
      failureKey === queryKey
        ? "The leaderboard is unavailable right now."
        : "",
    refresh: () => setRefreshKey((current) => current + 1),
  }
}

export function LeaderboardDialog({
  gameId,
  gameName,
  triggerClassName,
}: {
  gameId: GameId
  gameName: string
  triggerClassName?: string
}) {
  const [open, setOpen] = useState(false)
  const [audienceType, setAudienceType] = useState<AudienceType>("visitor")
  const leaderboard = useLeaderboard(gameId, audienceType, open)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={<Button variant="outline" className={cn(triggerClassName)} />}
      >
        <IconTrophy data-icon="inline-start" />
        Leaderboard
      </DialogTrigger>
      <DialogContent className="max-h-[85svh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{gameName} leaderboard</DialogTitle>
          <DialogDescription>
            Best score per anonymous browser profile.
          </DialogDescription>
        </DialogHeader>
        <AudienceToggle
          value={audienceType}
          onChange={setAudienceType}
          label="Show scores from"
        />
        {leaderboard.error ? (
          <p role="alert" className="text-destructive">
            {leaderboard.error}
          </p>
        ) : (
          <LeaderboardTable
            entries={leaderboard.entries ?? []}
            loading={leaderboard.loading}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}

export function ScoreSubmissionDialog({
  gameId,
  gameName,
  score,
  onFinished,
  requestOpenKey = 0,
}: {
  gameId: GameId
  gameName: string
  score: number
  onFinished?: () => void
  requestOpenKey?: number
}) {
  const savedProfile = readSavedProfile()
  const ownerDevice = isOwnerDevice()
  const [closedForKey, setClosedForKey] = useState<number | null>(null)
  const [nickname, setNickname] = useState(savedProfile.nickname)
  const [audienceType, setAudienceType] = useState<AudienceType>(
    ownerDevice ? "visitor" : savedProfile.audienceType
  )
  const [saving, setSaving] = useState(false)
  const [checkingProfile, setCheckingProfile] = useState(true)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState("")
  const autoSaveStarted = useRef(false)
  const open = closedForKey !== requestOpenKey
  const leaderboard = useLeaderboard(gameId, audienceType, open && saved)

  useEffect(() => {
    let cancelled = false

    void getOwnLeaderboardEntry(gameId)
      .then(async (entry) => {
        if (cancelled || !entry || autoSaveStarted.current) return
        autoSaveStarted.current = true
        const existingAudience = ownerDevice ? "visitor" : entry.audienceType
        setNickname(entry.nickname)
        setAudienceType(existingAudience)
        setSaving(true)
        await submitLeaderboardScore(
          gameId,
          entry.nickname,
          existingAudience,
          score
        )
        if (!cancelled) {
          localStorage.setItem(
            PROFILE_KEY,
            JSON.stringify({
              nickname: entry.nickname,
              audienceType: existingAudience,
            })
          )
          setSaved(true)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(
            autoSaveStarted.current
              ? "Your score could not be saved automatically. Please try again."
              : "We could not check your player profile. You can still save this score."
          )
        }
      })
      .finally(() => {
        if (!cancelled) {
          setCheckingProfile(false)
          setSaving(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [gameId, ownerDevice, score])

  const finish = () => {
    setClosedForKey(requestOpenKey)
    onFinished?.()
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedNickname = nickname.trim()
    if (!trimmedNickname) {
      setError("Enter a nickname or name.")
      return
    }

    setSaving(true)
    setError("")
    try {
      await submitLeaderboardScore(gameId, trimmedNickname, audienceType, score)
      localStorage.setItem(
        PROFILE_KEY,
        JSON.stringify({ nickname: trimmedNickname, audienceType })
      )
      setSaved(true)
      leaderboard.refresh()
    } catch {
      setError("Your score could not be saved. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog
      open={open}
      disablePointerDismissal
      onOpenChange={() => {
        // Score prompts close only through their explicit action buttons.
      }}
    >
      <DialogContent
        className="max-h-[88svh] overflow-y-auto sm:max-w-lg"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle>
            {checkingProfile
              ? "Checking your player card…"
              : saved
                ? "Your score is recorded"
                : "Save your score?"}
          </DialogTitle>
          <DialogDescription>
            {gameName} · {score.toLocaleString()} points. Your name is used only
            on the leaderboard; progress stays tied to an anonymous browser ID.
          </DialogDescription>
        </DialogHeader>

        {checkingProfile ? (
          <div className="flex min-h-32 flex-col items-center justify-center gap-3 text-center text-muted-foreground">
            <Spinner />
            <p>
              Looking for your anonymous browser profile. Returning players are
              added automatically.
            </p>
          </div>
        ) : saved ? (
          <>
            <AudienceToggle
              value={audienceType}
              onChange={setAudienceType}
              label="Leaderboard group"
              visitorOnly={ownerDevice}
            />
            {leaderboard.error ? (
              <p role="alert" className="text-destructive">
                {leaderboard.error}
              </p>
            ) : (
              <LeaderboardTable
                entries={leaderboard.entries ?? []}
                loading={leaderboard.loading}
              />
            )}
            <DialogFooter>
              <Button onClick={finish}>Done</Button>
            </DialogFooter>
          </>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={submit}>
            <FieldGroup>
              <Field data-invalid={Boolean(error)}>
                <FieldLabel htmlFor={`${gameId}-nickname`}>
                  Nickname or name
                </FieldLabel>
                <Input
                  id={`${gameId}-nickname`}
                  value={nickname}
                  maxLength={24}
                  autoComplete="nickname"
                  placeholder="Arcade name"
                  aria-invalid={Boolean(error)}
                  onChange={(event) => setNickname(event.target.value)}
                />
                {error ? <FieldError>{error}</FieldError> : null}
              </Field>
              <AudienceToggle
                value={audienceType}
                onChange={setAudienceType}
                label="I am a"
                visitorOnly={ownerDevice}
              />
            </FieldGroup>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={finish}>
                Not now
              </Button>
              <Button type="submit" disabled={saving}>
                <IconDeviceGamepad2 data-icon="inline-start" />
                {saving ? "Saving…" : "Add my score"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
