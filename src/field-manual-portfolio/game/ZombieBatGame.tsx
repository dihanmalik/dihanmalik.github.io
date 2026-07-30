import { useCallback, useEffect, useRef, useState } from "react"
import type { FormEvent, PointerEvent as ReactPointerEvent } from "react"
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
} from "@tabler/icons-react"
import { observer } from "mobx-react-lite"

import "./zombie-game.css"
import { zombieGameStore } from "./zombieGameStore"

type GamePhase = "setup" | "playing" | "gameover"
type Direction = "left" | "right" | "up" | "down"
type ZombieKind = "regular" | "boss"

type Zombie = {
  id: number
  kind: ZombieKind
  x: number
  y: number
  speed: number
  health: number
  maxHealth: number
  hitFlashUntil: number
  lastHitByAttack: number
  nextDamageAt: number
}

type HitEffect = {
  id: number
  x: number
  y: number
  size: number
  expiresAt: number
  color: string
}

type GameEngine = {
  player: {
    x: number
    y: number
    health: number
    facingX: number
    facingY: number
    hitFlashUntil: number
  }
  zombies: Zombie[]
  hitEffects: HitEffect[]
  keys: Set<string>
  score: number
  attackId: number
  attackStartedAt: number
  attackingUntil: number
  nextAttackAt: number
  nextSpawnAt: number
  nextBossSpawnAt: number
  startedAt: number
  lastFrameAt: number
  nextZombieId: number
  nextEffectId: number
  animationFrame: number
}

const GAME_WIDTH = 320
const GAME_HEIGHT = 180
const PLAYER_SPEED = 72
const BAT_SWING_DURATION = 360
const GAME_COLORS = {
  ground: "#17261f",
  groundMark: "#294236",
  ink: "#17151a",
  cream: "#f4ead5",
  shadow: "#0d1714",
  playerHair: "#30201b",
  playerSkin: "#e7ad72",
  playerJacket: "#3973c4",
  playerTrousers: "#29354f",
  bat: "#bd7842",
  batDark: "#54311f",
  attack: "#ffd166",
  zombieSkin: "#91b95d",
  zombieShadow: "#54743e",
  zombieShirt: "#7d3446",
  zombieTrousers: "#41414d",
  bossSkin: "#a66ac7",
  bossShirt: "#35203f",
  bossEyes: "#ff5c4d",
  danger: "#e2534a",
  hit: "#fff2a8",
} as const

function createEngine(): GameEngine {
  return {
    player: {
      x: GAME_WIDTH / 2,
      y: GAME_HEIGHT / 2,
      health: 100,
      facingX: 1,
      facingY: 0,
      hitFlashUntil: 0,
    },
    zombies: [],
    hitEffects: [],
    keys: new Set(),
    score: 0,
    attackId: 0,
    attackStartedAt: 0,
    attackingUntil: 0,
    nextAttackAt: 0,
    nextSpawnAt: 0,
    nextBossSpawnAt: 0,
    startedAt: 0,
    lastFrameAt: 0,
    nextZombieId: 1,
    nextEffectId: 1,
    animationFrame: 0,
  }
}

type BatPose = {
  angle: number
  directionX: number
  directionY: number
  progress: number
  isAttacking: boolean
  canHit: boolean
}

function smoothStep(value: number) {
  return value * value * (3 - 2 * value)
}

function getBatPose(engine: GameEngine, now: number): BatPose {
  const facingAngle = Math.atan2(engine.player.facingY, engine.player.facingX)
  const isAttacking = engine.attackStartedAt > 0 && now < engine.attackingUntil
  const progress = isAttacking
    ? Math.min(
        1,
        Math.max(0, (now - engine.attackStartedAt) / BAT_SWING_DURATION)
      )
    : 0
  let offset = 0.55

  if (isAttacking && progress < 0.16) {
    // Pull the bat behind the shoulder.
    offset = 0.55 + (-1.25 - 0.55) * smoothStep(progress / 0.16)
  } else if (isAttacking && progress < 0.78) {
    // Accelerate through the strike.
    const swingProgress = (progress - 0.16) / 0.62
    offset = -1.25 + 2.5 * smoothStep(swingProgress)
  } else if (isAttacking) {
    // Follow through, then return to the resting position.
    const recoveryProgress = (progress - 0.78) / 0.22
    offset = 1.25 + (0.55 - 1.25) * smoothStep(recoveryProgress)
  }

  const angle = facingAngle + offset
  return {
    angle,
    directionX: Math.cos(angle),
    directionY: Math.sin(angle),
    progress,
    isAttacking,
    canHit: isAttacking && progress >= 0.16 && progress < 0.78,
  }
}

function spawnZombie(
  engine: GameEngine,
  elapsedSeconds: number,
  kind: ZombieKind = "regular"
) {
  const edge = Math.floor(Math.random() * 4)
  const isBoss = kind === "boss"
  const margin = isBoss ? 30 : 7
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
    kind,
    x,
    y,
    speed: isBoss
      ? 10 + Math.min(6, elapsedSeconds * 0.05)
      : 16 + Math.random() * 8 + Math.min(12, elapsedSeconds * 0.12),
    health: isBoss ? 14 : 2,
    maxHealth: isBoss ? 14 : 2,
    hitFlashUntil: 0,
    lastHitByAttack: -1,
    nextDamageAt: 0,
  })
  engine.nextZombieId += 1
}

function addHitEffect(
  engine: GameEngine,
  x: number,
  y: number,
  now: number,
  size: number,
  color: string
) {
  engine.hitEffects.push({
    id: engine.nextEffectId,
    x,
    y,
    size,
    expiresAt: now + 180,
    color,
  })
  engine.nextEffectId += 1
}

function drawPlayer(
  context: CanvasRenderingContext2D,
  engine: GameEngine,
  now: number
) {
  const { player } = engine
  const x = Math.round(player.x)
  const y = Math.round(player.y)
  const isWalking = engine.keys.size > 0
  const walkFrame = isWalking ? Math.floor(now / 110) % 2 : 0
  const lookX = player.facingX < -0.25 ? -1 : player.facingX > 0.25 ? 1 : 0
  const isHit = now < player.hitFlashUntil
  const skinColor = isHit ? GAME_COLORS.hit : GAME_COLORS.playerSkin
  const jacketColor = isHit ? GAME_COLORS.danger : GAME_COLORS.playerJacket

  // Ground shadow.
  context.fillStyle = GAME_COLORS.shadow
  context.fillRect(x - 7, y + 12, 14, 2)

  // Legs, boots, and a small alternating walk cycle.
  context.fillStyle = GAME_COLORS.playerTrousers
  context.fillRect(x - 4, y + 6, 3, 6 + walkFrame)
  context.fillRect(x + 1, y + 6, 3, 7 - walkFrame)
  context.fillStyle = GAME_COLORS.ink
  context.fillRect(x - 5, y + 11 + walkFrame, 4, 2)
  context.fillRect(x + 1, y + 12 - walkFrame, 4, 2)

  // Jacket, shirt, collar, and arms.
  context.fillStyle = jacketColor
  context.fillRect(x - 5, y - 2, 10, 9)
  context.fillRect(x - 7, y, 2, 6)
  context.fillRect(x + 5, y, 2, 6)
  context.fillStyle = GAME_COLORS.cream
  context.fillRect(x - 1, y - 1, 2, 7)
  context.fillRect(x - 3, y - 1, 2, 2)
  context.fillRect(x + 1, y - 1, 2, 2)
  context.fillStyle = skinColor
  context.fillRect(x - 7, y + 5, 2, 2)
  context.fillRect(x + 5, y + 5, 2, 2)

  // A warm face with a dark hair silhouette reads separately from zombies.
  context.fillStyle = GAME_COLORS.playerHair
  context.fillRect(x - 5, y - 11, 10, 9)
  context.fillStyle = skinColor
  context.fillRect(x - 4, y - 9, 8, 6)
  context.fillStyle = GAME_COLORS.playerHair
  context.fillRect(x - 4, y - 11, 8, 3)
  context.fillRect(x - 5, y - 10, 2, 4)
  context.fillRect(x + 3, y - 10, 2, 3)
  context.fillRect(x + lookX - 1, y - 7, 1, 1)
  context.fillRect(x + lookX + 2, y - 7, 1, 1)
  context.fillRect(x + lookX, y - 4, 2, 1)

  const batPose = getBatPose(engine, now)

  if (batPose.canHit) {
    const facingAngle = Math.atan2(player.facingY, player.facingX)
    const swingProgress = Math.min(
      1,
      Math.max(0, (batPose.progress - 0.16) / 0.62)
    )
    context.strokeStyle = GAME_COLORS.attack
    context.globalAlpha = 0.65
    context.lineWidth = 2
    context.beginPath()
    context.arc(
      x,
      y,
      24,
      facingAngle - 1.2,
      facingAngle - 1.2 + swingProgress * 2.35
    )
    context.stroke()
    context.globalAlpha = 1
  }

  // Rotate a tapered bat around both hands instead of stretching its length.
  context.save()
  context.translate(x, y)
  context.rotate(batPose.angle)
  context.fillStyle = skinColor
  context.fillRect(2, -3, 5, 6)
  context.fillStyle = GAME_COLORS.batDark
  context.fillRect(5, -2, 8, 4)
  context.beginPath()
  context.moveTo(11, -3)
  context.lineTo(24, -5)
  context.lineTo(28, -3)
  context.lineTo(28, 3)
  context.lineTo(24, 5)
  context.lineTo(11, 3)
  context.closePath()
  context.fill()
  context.fillStyle = GAME_COLORS.bat
  context.beginPath()
  context.moveTo(12, -1)
  context.lineTo(24, -3)
  context.lineTo(26, -2)
  context.lineTo(26, 2)
  context.lineTo(24, 3)
  context.lineTo(12, 1)
  context.closePath()
  context.fill()
  context.fillStyle = GAME_COLORS.batDark
  context.fillRect(4, -3, 3, 6)
  context.restore()
}

function drawZombie(
  context: CanvasRenderingContext2D,
  zombie: Zombie,
  playerX: number,
  now: number
) {
  const x = Math.round(zombie.x)
  const y = Math.round(zombie.y)
  const isBoss = zombie.kind === "boss"
  const isHit = now < zombie.hitFlashUntil
  const scale = isBoss ? 1.7 : 1
  const reachDirection = playerX < zombie.x ? -1 : 1
  const staggerFrame = Math.floor((now + zombie.id * 73) / 180) % 2
  const skinColor = isHit
    ? GAME_COLORS.hit
    : isBoss
      ? GAME_COLORS.bossSkin
      : GAME_COLORS.zombieSkin
  const shirtColor = isHit
    ? GAME_COLORS.danger
    : isBoss
      ? GAME_COLORS.bossShirt
      : GAME_COLORS.zombieShirt

  context.save()
  context.translate(x, y)
  context.scale(scale, scale)
  context.translate(-x, -y)

  // Uneven stance and long shadow.
  context.fillStyle = GAME_COLORS.shadow
  context.fillRect(x - 7, y + 12, 15, 2)
  context.fillStyle = GAME_COLORS.zombieTrousers
  context.fillRect(x - 4, y + 6, 3, 5 + staggerFrame)
  context.fillRect(x + 1, y + 6, 3, 6 - staggerFrame)
  context.fillStyle = GAME_COLORS.ink
  context.fillRect(x - 5, y + 10 + staggerFrame, 4, 3)
  context.fillRect(x + 1, y + 11 - staggerFrame, 5, 2)

  // Reaching arms and blocky hands.
  context.lineWidth = 3
  context.strokeStyle = skinColor
  context.beginPath()
  context.moveTo(x - 4, y)
  context.lineTo(x + reachDirection * 10, y + 1 + staggerFrame)
  context.moveTo(x + 4, y + 2)
  context.lineTo(x + reachDirection * 11, y + 4 - staggerFrame)
  context.stroke()
  context.fillStyle = skinColor
  context.fillRect(x + reachDirection * 10 - 1, y + staggerFrame, 3, 3)
  context.fillRect(x + reachDirection * 11 - 1, y + 3 - staggerFrame, 3, 3)

  // Ragged dark shirt with pale tears.
  context.fillStyle = shirtColor
  context.fillRect(x - 5, y - 2, 10, 9)
  context.fillRect(x - 6, y + 1, 2, 5)
  context.fillStyle = GAME_COLORS.zombieShadow
  context.fillRect(x - 3, y, 3, 2)
  context.fillRect(x + 2, y + 3, 3, 1)
  context.fillRect(x - 4, y + 6, 2, 2)

  // Sickly decayed head, missing corner, sunken eyes, and exposed teeth.
  context.fillStyle = GAME_COLORS.ink
  context.fillRect(x - 5, y - 11, 10, 10)
  context.fillStyle = skinColor
  context.fillRect(x - 4, y - 10, 8, 8)
  context.fillStyle = GAME_COLORS.ground
  context.fillRect(x + 2, y - 10, 3, 2)
  context.fillStyle = isBoss ? GAME_COLORS.bossEyes : GAME_COLORS.ink
  context.fillRect(x - 3, y - 8, 2, 2)
  context.fillRect(x + 2, y - 7, 2, 2)
  context.fillStyle = GAME_COLORS.ink
  context.fillRect(x - 3, y - 4, 6, 2)
  context.fillStyle = GAME_COLORS.cream
  context.fillRect(x - 1, y - 4, 1, 1)
  context.fillRect(x + 2, y - 4, 1, 1)

  if (isBoss) {
    context.fillStyle = GAME_COLORS.cream
    context.fillRect(x - 6, y - 13, 3, 4)
    context.fillRect(x + 3, y - 13, 3, 4)
    context.fillStyle = GAME_COLORS.bossEyes
    context.fillRect(x - 6, y - 14, 2, 2)
    context.fillRect(x + 4, y - 14, 2, 2)
  }

  if (isBoss || zombie.health < zombie.maxHealth) {
    const barWidth = 14
    context.fillStyle = GAME_COLORS.ink
    context.fillRect(x - barWidth / 2 - 1, y - 17, barWidth + 2, 3)
    context.fillStyle = GAME_COLORS.danger
    context.fillRect(
      x - barWidth / 2,
      y - 16,
      Math.ceil((zombie.health / zombie.maxHealth) * barWidth),
      1
    )
  }

  context.restore()
}

function drawHitEffects(
  context: CanvasRenderingContext2D,
  effects: HitEffect[],
  now: number
) {
  effects.forEach((effect) => {
    const remaining = Math.max(0, effect.expiresAt - now) / 180
    const radius = Math.round(effect.size * (1.35 - remaining * 0.35))

    context.save()
    context.globalAlpha = remaining
    context.strokeStyle = effect.color
    context.lineWidth = 2
    context.beginPath()
    context.moveTo(effect.x - radius, effect.y)
    context.lineTo(effect.x + radius, effect.y)
    context.moveTo(effect.x, effect.y - radius)
    context.lineTo(effect.x, effect.y + radius)
    context.moveTo(effect.x - radius + 2, effect.y - radius + 2)
    context.lineTo(effect.x + radius - 2, effect.y + radius - 2)
    context.moveTo(effect.x + radius - 2, effect.y - radius + 2)
    context.lineTo(effect.x - radius + 2, effect.y + radius - 2)
    context.stroke()
    context.restore()
  })
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
  context.fillStyle = GAME_COLORS.ground
  context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

  context.fillStyle = GAME_COLORS.groundMark
  for (let x = 8; x < GAME_WIDTH; x += 16) {
    for (let y = 8; y < GAME_HEIGHT; y += 16) {
      context.fillRect(x, y, 1, 1)
    }
  }

  context.strokeStyle = GAME_COLORS.cream
  context.lineWidth = 2
  context.strokeRect(1, 1, GAME_WIDTH - 2, GAME_HEIGHT - 2)

  engine.zombies
    .slice()
    .sort((a, b) => a.y - b.y)
    .forEach((zombie) => drawZombie(context, zombie, engine.player.x, now))
  drawPlayer(context, engine, now)
  drawHitEffects(context, engine.hitEffects, now)

  const elapsed = Math.floor((now - engine.startedAt) / 1000)
  context.fillStyle = GAME_COLORS.cream
  context.font = "bold 8px monospace"
  context.fillText(`KILLS ${String(engine.score).padStart(3, "0")}`, 8, 13)
  context.fillText(`TIME ${String(elapsed).padStart(3, "0")}`, 132, 13)
  context.fillText(`HP ${engine.player.health}`, 265, 13)

  context.fillStyle = GAME_COLORS.danger
  context.fillRect(8, 18, Math.round((engine.player.health / 100) * 54), 3)
  context.strokeStyle = GAME_COLORS.cream
  context.lineWidth = 1
  context.strokeRect(8, 18, 54, 3)

  const boss = engine.zombies.find((zombie) => zombie.kind === "boss")
  if (boss) {
    context.fillStyle = GAME_COLORS.bossEyes
    context.fillText("BOSS", 205, 29)
    context.fillRect(
      233,
      26,
      Math.round((boss.health / boss.maxHealth) * 42),
      3
    )
    context.strokeStyle = GAME_COLORS.cream
    context.strokeRect(233, 26, 42, 3)
  }
}

export const ZombieBatGame = observer(function ZombieBatGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<GameEngine>(createEngine())
  const [phase, setPhase] = useState<GamePhase>("setup")
  const [message, setMessage] = useState("")
  const [finalScore, setFinalScore] = useState(0)

  const attack = useCallback(() => {
    const engine = engineRef.current
    const now = performance.now()

    if (phase !== "playing" || now < engine.nextAttackAt) {
      return
    }

    engine.attackId += 1
    engine.attackStartedAt = now
    engine.attackingUntil = now + BAT_SWING_DURATION
    engine.nextAttackAt = now + 440
  }, [phase])

  const setDirection = useCallback(
    (direction: Direction, pressed: boolean) => {
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
    engine.nextBossSpawnAt = now + 18_000
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

      if (
        now >= engine.nextBossSpawnAt &&
        !engine.zombies.some((zombie) => zombie.kind === "boss")
      ) {
        spawnZombie(engine, elapsedSeconds, "boss")
        engine.nextBossSpawnAt = now + 45_000
      }

      const survivingZombies: Zombie[] = []
      const batPose = getBatPose(engine, now)
      engine.zombies.forEach((zombie) => {
        const toPlayerX = engine.player.x - zombie.x
        const toPlayerY = engine.player.y - zombie.y
        const playerDistance = Math.max(0.001, Math.hypot(toPlayerX, toPlayerY))

        zombie.x += (toPlayerX / playerDistance) * zombie.speed * delta
        zombie.y += (toPlayerY / playerDistance) * zombie.speed * delta

        const toZombieX = zombie.x - engine.player.x
        const toZombieY = zombie.y - engine.player.y
        const attackDistance = Math.hypot(toZombieX, toZombieY)
        const isBoss = zombie.kind === "boss"
        const inBatPath =
          (toZombieX / Math.max(0.001, attackDistance)) * batPose.directionX +
            (toZombieY / Math.max(0.001, attackDistance)) * batPose.directionY >
          0.35

        if (
          batPose.canHit &&
          attackDistance < (isBoss ? 43 : 34) &&
          inBatPath &&
          zombie.lastHitByAttack !== engine.attackId
        ) {
          zombie.lastHitByAttack = engine.attackId
          zombie.health -= 1
          zombie.hitFlashUntil = now + 130
          addHitEffect(
            engine,
            zombie.x,
            zombie.y - (isBoss ? 5 : 2),
            now,
            isBoss ? 10 : 6,
            GAME_COLORS.hit
          )

          const knockback = isBoss ? 4 : 9
          zombie.x += (toZombieX / Math.max(0.001, attackDistance)) * knockback
          zombie.y += (toZombieY / Math.max(0.001, attackDistance)) * knockback

          if (zombie.health <= 0) {
            engine.score += isBoss ? 10 : 1
            addHitEffect(
              engine,
              zombie.x,
              zombie.y,
              now,
              isBoss ? 16 : 9,
              GAME_COLORS.danger
            )
            return
          }
        }

        const contactDistance = isBoss ? 18 : 11
        if (playerDistance < contactDistance && now >= zombie.nextDamageAt) {
          const damage = isBoss ? 25 : 10
          engine.player.health = Math.max(0, engine.player.health - damage)
          engine.player.hitFlashUntil = now + 180
          zombie.nextDamageAt = now + (isBoss ? 950 : 700)
          addHitEffect(
            engine,
            engine.player.x,
            engine.player.y,
            now,
            isBoss ? 11 : 7,
            GAME_COLORS.danger
          )

          const playerKnockback = isBoss ? 13 : 6
          engine.player.x = Math.max(
            10,
            Math.min(
              GAME_WIDTH - 10,
              engine.player.x + (toPlayerX / playerDistance) * playerKnockback
            )
          )
          engine.player.y = Math.max(
            24,
            Math.min(
              GAME_HEIGHT - 12,
              engine.player.y + (toPlayerY / playerDistance) * playerKnockback
            )
          )
          zombie.x -= (toPlayerX / playerDistance) * 9
          zombie.y -= (toPlayerY / playerDistance) * 9
        }

        survivingZombies.push(zombie)
      })
      engine.zombies = survivingZombies
      engine.hitEffects = engine.hitEffects.filter(
        (effect) => effect.expiresAt > now
      )

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

    const keyToDirection: Record<string, Direction> = {
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
    const clearHeldDirections = () => engineRef.current.keys.clear()
    window.addEventListener("blur", clearHeldDirections)
    return () => {
      canvas.removeEventListener("keydown", handleKeyDown)
      canvas.removeEventListener("keyup", handleKeyUp)
      window.removeEventListener("blur", clearHeldDirections)
      clearHeldDirections()
    }
  }, [attack, phase])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalizedName = zombieGameStore.characterName.trim()

    if (normalizedName.length < 2 || normalizedName.length > 24) {
      setMessage("Use a character name between 2 and 24 characters.")
      return
    }

    setMessage("")
    zombieGameStore.registerPlayer()
    beginGame()
  }

  const holdDirection = (
    event: ReactPointerEvent<HTMLButtonElement>,
    direction: Direction
  ) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    setDirection(direction, true)
  }

  const releaseDirection = (
    event: ReactPointerEvent<HTMLButtonElement>,
    direction: Direction
  ) => {
    setDirection(direction, false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const aimAndAttack = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (phase !== "playing") {
      return
    }

    event.preventDefault()
    const bounds = event.currentTarget.getBoundingClientRect()
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * GAME_WIDTH
    const pointerY =
      ((event.clientY - bounds.top) / bounds.height) * GAME_HEIGHT
    const player = engineRef.current.player
    const dx = pointerX - player.x
    const dy = pointerY - player.y
    const distance = Math.hypot(dx, dy)

    if (distance > 0.001) {
      player.facingX = dx / distance
      player.facingY = dy / distance
    }

    event.currentTarget.focus({ preventScroll: true })
    attack()
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
          <span>NA/10 ARCADE</span>
          <span>BAT BUILD SURVIVE</span>
        </div>

        {phase === "setup" ? (
          <form className="manual-game-form" onSubmit={handleSubmit}>
            <div className="manual-game-form-copy">
              <p className="manual-game-kicker">Player registration</p>
              <h3>Create your survivor</h3>
              <p>
                Your player gets a unique ID and stays saved in this browser.
                Nothing is sent to a server.
              </p>
            </div>

            <label className="manual-game-field">
              <span>Character name</span>
              <input
                type="text"
                name="characterName"
                value={zombieGameStore.characterName}
                minLength={2}
                maxLength={24}
                autoComplete="nickname"
                placeholder="e.g. Pixel Pat"
                onChange={(event) =>
                  zombieGameStore.setCharacterName(event.target.value)
                }
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
                      checked={zombieGameStore.role === option}
                      onChange={() => zombieGameStore.setRole(option)}
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

            <button type="submit" className="manual-game-start">
              Enter the office →
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
                aria-label="Pixel survival game. Use the touch controls or move with WASD and attack with Space."
                onPointerDown={aimAndAttack}
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
                  onPointerUp={(event) => releaseDirection(event, "up")}
                  onPointerCancel={(event) => releaseDirection(event, "up")}
                  onLostPointerCapture={() => setDirection("up", false)}
                >
                  <IconArrowUp />
                </button>
                <button
                  type="button"
                  className="manual-control-left"
                  aria-label="Move left"
                  onPointerDown={(event) => holdDirection(event, "left")}
                  onPointerUp={(event) => releaseDirection(event, "left")}
                  onPointerCancel={(event) => releaseDirection(event, "left")}
                  onLostPointerCapture={() => setDirection("left", false)}
                >
                  <IconArrowLeft />
                </button>
                <button
                  type="button"
                  className="manual-control-down"
                  aria-label="Move down"
                  onPointerDown={(event) => holdDirection(event, "down")}
                  onPointerUp={(event) => releaseDirection(event, "down")}
                  onPointerCancel={(event) => releaseDirection(event, "down")}
                  onLostPointerCapture={() => setDirection("down", false)}
                >
                  <IconArrowDown />
                </button>
                <button
                  type="button"
                  className="manual-control-right"
                  aria-label="Move right"
                  onPointerDown={(event) => holdDirection(event, "right")}
                  onPointerUp={(event) => releaseDirection(event, "right")}
                  onPointerCancel={(event) => releaseDirection(event, "right")}
                  onLostPointerCapture={() => setDirection("right", false)}
                >
                  <IconArrowRight />
                </button>
              </div>

              <button
                type="button"
                className="manual-game-bat"
                onPointerDown={(event) => {
                  event.preventDefault()
                  attack()
                }}
              >
                BAT
                <span>Space</span>
              </button>
            </div>

            <p className="manual-game-help">
              Touch: hold arrows to move · tap BAT or the playfield to swing
              <br />
              Keyboard: WASD / arrows to move · Space to swing
            </p>
          </div>
        )}
      </div>
    </section>
  )
})
