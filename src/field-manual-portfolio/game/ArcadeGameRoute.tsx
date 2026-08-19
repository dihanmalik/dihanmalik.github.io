import { lazy, Suspense, useEffect, useState } from "react"
import { IconArrowLeft, IconDeviceGamepad2 } from "@tabler/icons-react"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

import { requestArcadeExit } from "./game-exit"

import "./arcade-games.css"

const SpaceShooterGame = lazy(() =>
  import("./SpaceShooterGame").then((module) => ({
    default: module.SpaceShooterGame,
  }))
)

const ZombieBatGame = lazy(() =>
  import("./ZombieBatGame").then((module) => ({
    default: module.ZombieBatGame,
  }))
)

type ArcadeGameRouteProps = {
  game: "void-patrol" | "night-shift"
}

function GameRouteLoader({ title }: { title: string }) {
  const [progress, setProgress] = useState(12)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 92) return current
        const step = current < 55 ? 8 : current < 78 ? 4 : 2
        return Math.min(92, current + step)
      })
    }, 180)

    return () => window.clearInterval(interval)
  }, [])

  const status =
    progress < 45
      ? "Unpacking the arcade cabinet"
      : progress < 78
        ? "Warming up controls and sound"
        : "Running final game checks"

  return (
    <div className="arcade-game-route-loader">
      <section className="arcade-game-loader-card" aria-live="polite">
        <IconDeviceGamepad2 aria-hidden="true" />
        <p>NA/10 arcade loading bay</p>
        <h1>{title}</h1>
        <Progress value={progress} className="arcade-game-loader-progress">
          <div className="flex w-full items-center justify-between gap-3">
            <ProgressLabel>Preparing game files</ProgressLabel>
            <ProgressValue>
              {(_formattedValue, value) => `${value ?? progress}%`}
            </ProgressValue>
          </div>
        </Progress>
        <span>{status}…</span>
      </section>
    </div>
  )
}

export function ArcadeGameRoute({ game }: ArcadeGameRouteProps) {
  const title = game === "void-patrol" ? "Void Patrol" : "Night Shift"

  useEffect(() => {
    document.title = `${title} · Nahid Abdulmalik`
  }, [title])

  return (
    <main className="arcade-game-page">
      <a
        className="arcade-game-page-back"
        href="/#game"
        aria-label="Return to the portfolio arcade"
        title="Back to portfolio"
        onClick={(event) => {
          event.preventDefault()
          requestArcadeExit()
        }}
      >
        <IconArrowLeft aria-hidden="true" />
      </a>
      <Suspense fallback={<GameRouteLoader title={title} />}>
        {game === "void-patrol" ? (
          <SpaceShooterGame />
        ) : (
          <ZombieBatGame modal />
        )}
      </Suspense>
    </main>
  )
}
