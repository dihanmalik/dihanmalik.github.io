import { useCallback, useEffect, useRef, useState } from "react"
import type { FormEvent, PointerEvent as ReactPointerEvent } from "react"
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconLoader2,
} from "@tabler/icons-react"

import "./zombie-game.css"

type PlayerRole = "visitor" | "recruiter"
type GamePhase = "setup" | "saving" | "playing" | "gameover"

type Zombie = {
  id: number
  x: number
  y: number
  speed: number
  lastHitByAttack: number
  nextDamageAt: number
}

type GameEngine = {
  player: {
    x: number
    y: number
    health: number
    facingX: number
    facingY: number
  }
  zombies: Zombie[]
  keys: Set<string>
  score: number
  attackId: number
  attackingUntil: number
  nextAttackAt: number
  nextSpawnAt: number
  startedAt: number
  lastFrameAt: number
  nextZombieId: number
  animationFrame: number
}

const GAME_WIDTH = 320
const GAME_HEIGHT = 180
const PLAYER_SPEED = 72
const API_URL = import.meta.env.VITE_VISITOR_API_URL as string | undefined

function createEngine(): GameEngine {
  return {
    player: {
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2,
      health: 100,
      facingX: 1,
      facingY: 0,
    },
    zombies: [],
    keys: new Set(),
    score: 0,
    attackId: 0,
    attackingUntil: 0,
    nextAttackAt: 0,
    nextSpawnAt: 0,
    startedAt: 0,
    lastFrameAt: 0,
    nextZombieId: 1,
    animationFrame: 0,
  }
}

function spawnZombie(engine: GameEngine, elapsedSeconds: number) {
  const edge = Math.floor(Math.random() * 4)
  const margin = 7
  let x: number
  let y: number

  if (edge === 0) {
    x = Math.random() * GAME_WIDTH
    y = margin
  } else if (edge === 1) {
    x = GAME_WIDTH - margin
    y = Math.random() * GAME_HEIGHT
  } else if (edge === 2) {
    x = Math.random() * GAME_WIDTH
    y = GAME_HEIGHT - margin
  } else {
    x = margin
    y = Math.random() * GAME_HEIGHT
  }

  engine.zombies.push({
    id: engine.nextZombieId,
    x,
    y,
    speed: 16 + Math.random() * 8 + Math.min(12, elapsedSeconds * 0.12),
    lastHitByAttack: -1,
    nextDamageAt: 0,
  })
  engine.nextZombieId += 1
}

function drawPlayer(
  context: CanvasRenderingContext2D,
  engine: GameEngine,
  now: number
) {
  const { player } = engine
  const x = Math.round(player.x)
  const y = Math.round(player.y)

  context.fillStyle = "#111111"
  context.fillRect(x - 4, y - 7, 8, 8)
  context.fillRect(x - 5, y + 1, 10, 7)
  context.fillRect(x - 4, y + 8, 3, 5)
  context.fillRect(x + 1, y + 8, 3, 5)

  context.fillStyle = "#f4f3eb"
  context.fillRect(x - 2, y - 5, 1, 1)
  context.fillRect(x + 2, y - 5, 1, 1)

  const isAttacking = now < engine.attackingUntil
  const batLength = isAttacking ? 19 : 14
  const batX = x + Math.round(player.facingX * batLength)
  const batY = y + Math.round(player.facingY * batLength)

  context.strokeStyle = "#111111"
  context.lineWidth = 3
  context.beginPath()
  context.moveTo(x + player.facingX * 4, y + player.facingY * 4)
  context.lineTo(batX, batY)
  context.stroke()
  context.fillStyle = "#111111"
  context.fillRect(Math.round(batX) - 2, Math.round(batY) - 2, 4, 4)
}

function drawZombie(context: CanvasRenderingContext2D, zombie: Zombie) {
  const x = Math.round(zombie.x)
  const y = Math.round(zombie.y)

  context.fillStyle = "#111111"
  context.fillRect(x - 5, y - 7, 10, 9)
  context.fillRect(x - 4, y + 2, 8, 7)
  context.fillRect(x - 7, y + 2, 3, 3)
  context.fillRect(x + 4, y + 2, 3, 3)
  context.fillRect(x - 4, y + 9, 3, 4)
  context.fillRect(x + 1, y + 9, 3, 4)

  context.fillStyle = "#f4f3eb"
  context.fillRect(x - 3, y - 4, 2, 2)
  context.fillRect(x + 2, y - 4, 2, 2)
  context.fillRect(x - 2, y, 5, 1)
}

function renderGame(
  canvas: HTMLCanvasElement,
  engine: GameEngine,
  now: number
) {
  const context = canvas.getContext("2d")
  if (!context) {
    return
  }

  context.imageSmoothingEnabled = false
  context.fillStyle = "#f4f3eb"
  context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

  context.fillStyle = "#d7d6cf"
  for (let x = 8; x < GAME_WIDTH; x += 16) {
    for (let y = 8; y < GAME_HEIGHT; y += 16) {
      context.fillRect(x, y, 1, 1)
    }
  }

  context.strokeStyle = "#111111"
  context.lineWidth = 2
  context.strokeRect(1, 1, GAME_WIDTH - 2, GAME_HEIGHT - 2)

  engine.zombies.forEach((zombie) => drawZombie(context, zombie))
  drawPlayer(context, engine, now)

  const elapsed = Math.floor((now - engine.startedAt) / 1000)
  context.fillStyle = "#111111"
  context.font = "bold 8px monospace"
  context.fillText(`KILLS ${String(engine.score).padStart(3, "0")}`, 8, 13)
  context.fillText(`TIME ${String(elapsed).padStart(3, "0")}`, 132, 13)
  context.fillText(`HP ${engine.player.health}`, 265, 13)

  context.fillRect(8, 18, 54, 3)
  context.fillStyle = "#f4f3eb"
  context.fillRect(8 + Math.round((engine.player.health / 100) * 54), 18, 54, 3)
}

export function ZombieBatGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<GameEngine>(createEngine())
  const [phase, setPhase] = useState<GamePhase>("setup")
  const [characterName, setCharacterName] = useState("")
  const [role, setRole] = useState<PlayerRole>("visitor")
  const [message, setMessage] = useState("")
  const [finalScore, setFinalScore] = useState(0)

  const attack = useCallback(() => {
    const engine = engineRef.current
    const now = performance.now()

    if (phase !== "playing" || now < engine.nextAttackAt) {
      return
    }

    engine.attackId += 1
    engine.attackingUntil = now + 180
    engine.nextAttackAt = now + 360
  }, [phase])

  const setDirection = useCallback(
    (direction: string, pressed: boolean) => {
      if (phase !== "playing") {
        return
      }

      const keys = engineRef.current.keys
      if (pressed) {
        keys.add(direction)
      } else {
        keys.delete(direction)
      }
    },
    [phase]
  )

  const beginGame = useCallback(() => {
    const engine = createEngine()
    const now = performance.now()
    engine.startedAt = now
    engine.lastFrameAt = now
    engine.nextSpawnAt = now + 1200
    engineRef.current = engine
    setFinalScore(0)
    setMessage("")
    setPhase("playing")
    requestAnimationFrame(() => canvasRef.current?.focus())
  }, [])

  useEffect(() => {
    if (phase !== "playing") {
      return undefined
    }

    const engine = engineRef.current
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const frame = (now: number) => {
      const delta = Math.min(0.035, (now - engine.lastFrameAt) / 1000)
      engine.lastFrameAt = now
      const elapsedSeconds = (now - engine.startedAt) / 1000

      let dx = 0
      let dy = 0
      if (engine.keys.has("left")) dx -= 1
      if (engine.keys.has("right")) dx += 1
      if (engine.keys.has("up")) dy -= 1
      if (engine.keys.has("down")) dy += 1

      if (dx !== 0 || dy !== 0) {
        const length = Math.hypot(dx, dy)
        dx /= length
        dy /= length
        engine.player.facingX = dx
        engine.player.facingY = dy
        engine.player.x = Math.max(
          10,
          Math.min(GAME_WIDTH - 10, engine.player.x + dx * PLAYER_SPEED * delta)
        )
        engine.player.y = Math.max(
          24,
          Math.min(
            GAME_HEIGHT - 12,
            engine.player.y + dy * PLAYER_SPEED * delta
          )
        )
      }

      if (now >= engine.nextSpawnAt && engine.zombies.length < 45) {
        spawnZombie(engine, elapsedSeconds)
        const spawnInterval = Math.max(620, 2800 - elapsedSeconds * 32)
        engine.nextSpawnAt = now + spawnInterval
      }

      const survivingZombies: Zombie[] = []
      engine.zombies.forEach((zombie) => {
        const toPlayerX = engine.player.x - zombie.x
        const toPlayerY = engine.player.y - zombie.y
        const playerDistance = Math.max(0.001, Math.hypot(toPlayerX, toPlayerY))

        zombie.x += (toPlayerX / playerDistance) * zombie.speed * delta
        zombie.y += (toPlayerY / playerDistance) * zombie.speed * delta

        const toZombieX = zombie.x - engine.player.x
        const toZombieY = zombie.y - engine.player.y
        const attackDistance = Math.hypot(toZombieX, toZombieY)
        const inFront =
          (toZombieX / Math.max(0.001, attackDistance)) *
            engine.player.facingX +
            (toZombieY / Math.max(0.001, attackDistance)) *
              engine.player.facingY >
          -0.15

        if (
          now < engine.attackingUntil &&
          attackDistance < 31 &&
          inFront &&
          zombie.lastHitByAttack !== engine.attackId
        ) {
          zombie.lastHitByAttack = engine.attackId
          engine.score += 1
          return
        }

        if (playerDistance < 11 && now >= zombie.nextDamageAt) {
          engine.player.health = Math.max(0, engine.player.health - 10)
          zombie.nextDamageAt = now + 700
          zombie.x -= (toPlayerX / playerDistance) * 9
          zombie.y -= (toPlayerY / playerDistance) * 9
        }

        survivingZombies.push(zombie)
      })
      engine.zombies = survivingZombies

      renderGame(canvas, engine, now)

      if (engine.player.health <= 0) {
        setFinalScore(engine.score)
        setPhase("gameover")
        return
      }

      engine.animationFrame = requestAnimationFrame(frame)
    }

    engine.animationFrame = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(engine.animationFrame)
  }, [phase])

  useEffect(() => {
    if (phase !== "playing") {
      return undefined
    }

    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const keyToDirection: Record<string, string> = {
      ArrowLeft: "left",
      a: "left",
      A: "left",
      ArrowRight: "right",
      d: "right",
      D: "right",
      ArrowUp: "up",
      w: "up",
      W: "up",
      ArrowDown: "down",
      s: "down",
      S: "down",
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = keyToDirection[event.key]
      if (direction) {
        event.preventDefault()
        engineRef.current.keys.add(direction)
      }
      if (event.code === "Space") {
        event.preventDefault()
        attack()
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      const direction = keyToDirection[event.key]
      if (direction) {
        event.preventDefault()
        engineRef.current.keys.delete(direction)
      }
    }

    canvas.addEventListener("keydown", handleKeyDown)
    canvas.addEventListener("keyup", handleKeyUp)
    return () => {
      canvas.removeEventListener("keydown", handleKeyDown)
      canvas.removeEventListener("keyup", handleKeyUp)
    }
  }, [attack, phase])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalizedName = characterName.trim()

    if (normalizedName.length < 2 || normalizedName.length > 24) {
      setMessage("Use a character name between 2 and 24 characters.")
      return
    }

    if (!API_URL) {
      setMessage(
        "Visitor API is not configured. Add VITE_VISITOR_API_URL before playing."
      )
      return
    }

    setPhase("saving")
    setMessage("")

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          characterName: normalizedName,
          role,
        }),
      })

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as {
          error?: string
        } | null
        throw new Error(result?.error || "Could not save your character.")
      }

      beginGame()
    } catch (error) {
      setPhase("setup")
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not reach the visitor API."
      )
    }
  }

  const holdDirection = (
    event: ReactPointerEvent<HTMLButtonElement>,
    direction: string
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    setDirection(direction, true)
  }

  return (
    <section id="game" className="manual-game-section scroll-mt-8 border-t">
      <div className="manual-game-heading">
        <p className="manual-rule-text">
          <span>04 / After-hours protocol</span>
        </p>
        <div className="manual-game-intro">
          <h2>Last one in the office.</h2>
          <p>
            Sign the night log, grab the baseball bat, and keep the build alive.
            Zombies arrive slowly—then gradually stop being polite.
          </p>
        </div>
      </div>

      <div className="manual-game-cabinet">
        <div className="manual-game-marquee">
          <span>DA/16 ARCADE</span>
          <span>BAT BUILD SURVIVE</span>
        </div>

        {phase === "setup" || phase === "saving" ? (
          <form className="manual-game-form" onSubmit={handleSubmit}>
            <div className="manual-game-form-copy">
              <p className="manual-game-kicker">Player registration</p>
              <h3>Create your survivor</h3>
              <p>
                Your name and role are saved to the visitor log before the game
                begins.
              </p>
            </div>

            <label className="manual-game-field">
              <span>Character name</span>
              <input
                type="text"
                name="characterName"
                value={characterName}
                minLength={2}
                maxLength={24}
                autoComplete="nickname"
                placeholder="e.g. Pixel Pat"
                disabled={phase === "saving"}
                onChange={(event) => setCharacterName(event.target.value)}
              />
            </label>

            <fieldset className="manual-game-role">
              <legend>I am a...</legend>
              <div>
                {(["visitor", "recruiter"] as const).map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="role"
                      value={option}
                      checked={role === option}
                      disabled={phase === "saving"}
                      onChange={() => setRole(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {message && (
              <p className="manual-game-message" role="alert">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="manual-game-start"
              disabled={phase === "saving"}
            >
              {phase === "saving" ? (
                <>
                  <IconLoader2 />
                  Saving player...
                </>
              ) : (
                "Enter the office →"
              )}
            </button>
          </form>
        ) : (
          <div className="manual-game-stage">
            <div className="manual-game-screen">
              <canvas
                ref={canvasRef}
                width={GAME_WIDTH}
                height={GAME_HEIGHT}
                tabIndex={0}
                aria-label="Pixel survival game. Move with WASD or arrow keys and attack with Space."
              />
              {phase === "gameover" && (
                <div className="manual-game-over">
                  <p>Shift over</p>
                  <strong>{finalScore} zombies cleared</strong>
                  <button type="button" onClick={beginGame}>
                    Try another shift
                  </button>
                </div>
              )}
            </div>

            <div className="manual-game-controls">
              <div className="manual-game-dpad" aria-label="Movement controls">
                <button
                  type="button"
                  className="manual-control-up"
                  aria-label="Move up"
                  onPointerDown={(event) => holdDirection(event, "up")}
                  onPointerUp={() => setDirection("up", false)}
                  onPointerCancel={() => setDirection("up", false)}
                >
                  <IconArrowUp />
                </button>
                <button
                  type="button"
                  className="manual-control-left"
                  aria-label="Move left"
                  onPointerDown={(event) => holdDirection(event, "left")}
                  onPointerUp={() => setDirection("left", false)}
                  onPointerCancel={() => setDirection("left", false)}
                >
                  <IconArrowLeft />
                </button>
                <button
                  type="button"
                  className="manual-control-down"
                  aria-label="Move down"
                  onPointerDown={(event) => holdDirection(event, "down")}
                  onPointerUp={() => setDirection("down", false)}
                  onPointerCancel={() => setDirection("down", false)}
                >
                  <IconArrowDown />
                </button>
                <button
                  type="button"
                  className="manual-control-right"
                  aria-label="Move right"
                  onPointerDown={(event) => holdDirection(event, "right")}
                  onPointerUp={() => setDirection("right", false)}
                  onPointerCancel={() => setDirection("right", false)}
                >
                  <IconArrowRight />
                </button>
              </div>

              <button
                type="button"
                className="manual-game-bat"
                onPointerDown={attack}
              >
                BAT
                <span>Space</span>
              </button>
            </div>

            <p className="manual-game-help">
              Keyboard: WASD / arrows to move · Space to swing · Click the game
              first to focus
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
