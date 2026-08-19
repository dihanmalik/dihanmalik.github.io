import { useState } from "react"
import {
  IconPlayerPlayFilled,
  IconRocket,
  IconSparkles,
  IconSkull,
} from "@tabler/icons-react"

import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

import "./arcade-games.css"

type GameId = "space" | "zombie"

const games = {
  space: {
    label: "Void Patrol",
    kicker: "01 / Monochrome shooter",
    title: "Nothing but white pixels and incoming trouble.",
    description:
      "Jump into the pilot seat, collect wild power-ups, climb through the levels, and see how long you can hold off the next boss.",
    collaboration:
      "I shaped the combat loop, progression, bosses, interface, sound, and leaderboard experience.",
    icon: IconRocket,
  },
  zombie: {
    label: "Night Shift",
    kicker: "02 / Office survival",
    title: "Last one in the office.",
    description:
      "Clock in for a delightfully terrible night, grab whatever works as a weapon, and survive the office with your loyal dog beside you.",
    collaboration:
      "I directed the survival loop, weapons, zombie behavior, dog companion, sound, and leaderboard experience.",
    icon: IconSkull,
  },
} satisfies Record<
  GameId,
  {
    label: string
    kicker: string
    title: string
    description: string
    collaboration: string
    icon: typeof IconRocket
  }
>

export function ArcadeGames() {
  const [selectedGame, setSelectedGame] = useState<GameId>("space")

  return (
    <section id="game" className="manual-arcade scroll-mt-8 border-t">
      <p className="manual-rule-text">
        <span>05 / After-hours arcade</span>
      </p>
      <div className="manual-arcade-heading">
        <h2>A little arcade break?</h2>
        <div className="manual-arcade-intro">
          <p>
            I dreamed up and built these two fullscreen games with an AI
            engineering companion. Pick one, have fun, and see if you can top
            the leaderboard.
          </p>
          <p className="manual-arcade-collaboration">
            <IconSparkles aria-hidden="true" />
            <span>
              <strong>Human-led, AI-assisted.</strong> I owned the ideas,
              direction, gameplay decisions, and final polish while AI helped me
              explore and iterate faster.
            </span>
          </p>
        </div>
      </div>

      <Tabs
        value={selectedGame}
        onValueChange={(value) => setSelectedGame(value as GameId)}
        className="manual-arcade-tabs"
      >
        <TabsList variant="line" className="manual-arcade-tab-list">
          <TabsTrigger value="space">
            <IconRocket />
            Void Patrol
          </TabsTrigger>
          <TabsTrigger value="zombie">
            <IconSkull />
            Night Shift
          </TabsTrigger>
        </TabsList>

        {(Object.keys(games) as GameId[]).map((id) => {
          const entry = games[id]
          const EntryIcon = entry.icon
          return (
            <TabsContent key={id} value={id} className="manual-arcade-panel">
              <div className="manual-arcade-copy">
                <p>{entry.kicker}</p>
                <h3>{entry.title}</h3>
                <span>{entry.description}</span>
                <p className="manual-arcade-built-with">
                  <IconSparkles aria-hidden="true" />
                  <span>
                    <strong>Created with an AI companion.</strong>{" "}
                    {entry.collaboration}
                  </span>
                </p>
                <a
                  href={
                    id === "space" ? "/games/void-patrol" : "/games/night-shift"
                  }
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "manual-arcade-play-button"
                  )}
                >
                  <IconPlayerPlayFilled data-icon="inline-start" />
                  Play {entry.label}
                </a>
              </div>
              <div className="manual-arcade-preview" aria-hidden="true">
                <span>DIHAN + AI ARCADE</span>
                <EntryIcon />
                <strong>{entry.label}</strong>
                <small>
                  {id === "space"
                    ? "AUTO FIRE / SCORE BOSSES"
                    : "BAT / BUILD / SURVIVE"}
                </small>
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </section>
  )
}
