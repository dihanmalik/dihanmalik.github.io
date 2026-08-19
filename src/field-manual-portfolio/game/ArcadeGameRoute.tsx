import { lazy, Suspense, useEffect } from "react"
import { IconArrowLeft } from "@tabler/icons-react"

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
      >
        <IconArrowLeft aria-hidden="true" />
      </a>
      <Suspense
        fallback={
          <div className="arcade-game-route-loader">Loading {title}…</div>
        }
      >
        {game === "void-patrol" ? (
          <SpaceShooterGame />
        ) : (
          <ZombieBatGame modal />
        )}
      </Suspense>
    </main>
  )
}
