import { useState } from "react"
import {
  IconPlayerPlayFilled,
  IconRocket,
  IconSkull,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import "./arcade-games.css"

type GameId = "space" | "zombie"

const games = {
  space: {
    label: "Void Patrol",
    kicker: "01 / Monochrome shooter",
    title: "Nothing but white pixels and incoming trouble.",
    description:
      "Auto-fire through endless formations, collect combat power-ups, climb levels, and survive bosses at escalating score thresholds.",
    icon: IconRocket,
  },
  zombie: {
    label: "Night Shift",
    kicker: "02 / Office survival",
    title: "Last one in the office.",
    description:
      "Sign the night log, grab the baseball bat, and keep the build alive while increasingly rude zombies close in.",
    icon: IconSkull,
  },
} satisfies Record<
  GameId,
  {
    label: string
    kicker: string
    title: string
    description: string
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
        <h2>Choose your shift.</h2>
        <p>
          Two compact experiments, rebuilt as fullscreen arcade sessions for
          keyboard and touch.
        </p>
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
                <Button
                  size="lg"
                  render={
                    <a
                      href={
                        id === "space"
                          ? "/games/void-patrol"
                          : "/games/night-shift"
                      }
                    />
                  }
                >
                  <IconPlayerPlayFilled data-icon="inline-start" />
                  Open game
                </Button>
              </div>
              <div className="manual-arcade-preview" aria-hidden="true">
                <span>NA/10 ARCADE</span>
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
