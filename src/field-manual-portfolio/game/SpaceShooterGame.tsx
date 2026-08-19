import { useCallback, useEffect, useRef, useState } from "react"
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react"
import {
  IconDeviceMobileOff,
  IconDeviceMobileVibration,
  IconHandRock,
  IconRipple,
  IconSettings,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react"

import {
  recordGameOver,
  recordGameStart,
  trackInBackground,
} from "@/lib/portfolio-data"

import "./space-shooter.css"
import { LeaderboardDialog, ScoreSubmissionDialog } from "./Leaderboard"

type Phase = "ready" | "playing" | "gameover"
type EnemyKind =
  | "drone"
  | "zigzag"
  | "tank"
  | "shooter"
  | "diver"
  | "cluster"
  | "sentry"
  | "boss"
type PowerUpKind =
  "rapid" | "spread" | "shield" | "health" | "laser" | "rocket" | "arm"

type Bullet = {
  x: number
  y: number
  vx: number
  vy: number
  enemy?: boolean
  rocket?: boolean
  targetId?: number
  burstAt?: number
  burstCount?: number
  expired?: boolean
}
type Enemy = {
  id: number
  kind: EnemyKind
  x: number
  y: number
  width: number
  height: number
  health: number
  maxHealth: number
  speed: number
  phase: number
  nextShotAt: number
  hitUntil: number
  variant: number
  lastRippleId: number
  lastArmId: number
  chargeState: "idle" | "warning" | "charging" | "returning"
  chargeAt: number
  chargeTargetX: number
}
type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}
type BossDestruction = {
  x: number
  y: number
  startedAt: number
  until: number
}
type PowerUp = {
  x: number
  y: number
  kind: PowerUpKind
  speed: number
  phase: number
  expiresAt: number
  fixed?: boolean
}
type Survivor = { x: number; y: number; speed: number; phase: number }
type Companion = {
  x: number
  y: number
  nextLaserAt: number
  laserUntil: number
  activeUntil: number
}
type MeteorEdge = "top" | "right" | "bottom" | "left"
type Meteor = {
  state: "idle" | "warning" | "active"
  edge: MeteorEdge
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  launchAt: number
  movingWarning: boolean
  warningPhase: number
  size: number
}

type Engine = {
  ship: {
    x: number
    y: number
    vx: number
    vy: number
    targetX: number | null
    targetY: number | null
    health: number
    invulnerableUntil: number
    destroyedAt: number
    destroyedUntil: number
  }
  bullets: Bullet[]
  enemies: Enemy[]
  particles: Particle[]
  bossDestructions: BossDestruction[]
  powerUps: PowerUp[]
  survivors: Survivor[]
  colors: typeof GAME_COLORS
  keys: Set<string>
  score: number
  level: number
  levelKills: number
  nextEnemyId: number
  nextSpawnAt: number
  nextShotAt: number
  nextRocketAt: number
  nextSurvivorAt: number
  lastFrameAt: number
  shakeUntil: number
  shakeStrength: number
  powerStacks: PowerUpKind[]
  powerExpiresAt: Record<PowerUpKind, number[]>
  companions: Companion[]
  pickupNotice: { label: string; until: number } | null
  rescued: number
  revivesRemaining: number
  meteorShieldHits: number
  bossNumber: number
  nextBossScore: number
  permanentStackLimit: number
  armCharges: number
  armAttack: {
    id: number
    x: number
    startedAt: number
    until: number
  }
  meteors: Meteor[]
  nextMeteorAt: number
  ripple: {
    id: number
    x: number
    y: number
    startedAt: number
    until: number
    readyAt: number
  }
  lastUiUpdateAt: number
  bossActive: boolean
  bossIntroUntil: number
  lastCollisionSoundAt: number
  lastDestroyedSoundAt: number
  gameTime: number
  timeScale: number
  targetTimeScale: number
  slowMotionUntil: number
  hapticsEnabled: boolean
  animationFrame: number
}

const WIDTH = 480
const HEIGHT = 720
const SHIP_SPEED = 315
const LASER_CHARGE_MS = 4_500
const POWER_EFFECT_MS = 30_000
const RIPPLE_DURATION_MS = 950
const RIPPLE_COOLDOWN_MS = 28_000
const ARM_DURATION_MS = 2_600
const POWER_UP_LIFETIME_MS = 32_000
const METEOR_SPEED = 650
const GAME_COLORS = {
  background: "#070706",
  cream: "#ffffff",
  dimCream: "#a8a8a8",
  ship: "#ffffff",
  shipDim: "#a8a8a8",
  enemy: "#ffffff",
  enemyDim: "#a8a8a8",
  power: "#ffffff",
  powerDim: "#a8a8a8",
}
const COLOR_OPTIONS = [
  { id: "white", label: "White", color: "#ffffff", dim: "#a8a8a8" },
  { id: "cream", label: "Cream", color: "#f2eadc", dim: "#b9b1a4" },
  { id: "cyan", label: "Cyan", color: "#7de8ff", dim: "#579dab" },
  { id: "lime", label: "Lime", color: "#b8ff78", dim: "#7eaa59" },
  { id: "amber", label: "Amber", color: "#ffc766", dim: "#ad884b" },
  { id: "pink", label: "Pink", color: "#ff91d2", dim: "#a9658d" },
] as const
type ColorOption = (typeof COLOR_OPTIONS)[number]
const NUMBER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
})
const POWER_LABELS: Record<PowerUpKind, string> = {
  rapid: "R",
  spread: "S",
  shield: "O",
  health: "+",
  laser: "L",
  rocket: "M",
  arm: "A",
}
const POWER_NAMES: Record<PowerUpKind, string> = {
  rapid: "RAPID FIRE",
  spread: "SPREAD SHOT",
  shield: "IMPACT SHIELD",
  health: "LIFE CORE",
  laser: "PIERCING WING",
  rocket: "HOMING MISSILES",
  arm: "TITAN ARM",
}
const POWER_LIMITS: Record<PowerUpKind, number> = {
  rapid: 3,
  spread: 3,
  shield: 3,
  health: 3,
  laser: 3,
  rocket: 5,
  arm: 1,
}
const STACKABLE_POWER_KINDS: PowerUpKind[] = [
  "rapid",
  "spread",
  "shield",
  "health",
  "laser",
  "rocket",
]
const SHIP_LONG_POWER_KINDS: PowerUpKind[] = ["rapid", "spread"]
const BOSS_PERMANENT_POWER_KINDS: PowerUpKind[] = ["shield", "laser", "rocket"]

function getArmReach(progress: number) {
  return (1 - Math.pow(1 - Math.min(1, progress / 0.78), 3)) * (HEIGHT + 130)
}

function createEngine(): Engine {
  return {
    ship: {
      x: WIDTH / 2,
      y: HEIGHT - 76,
      vx: 0,
      vy: 0,
      targetX: null,
      targetY: null,
      health: 100,
      invulnerableUntil: 0,
      destroyedAt: 0,
      destroyedUntil: 0,
    },
    bullets: [],
    enemies: [],
    particles: [],
    bossDestructions: [],
    powerUps: [],
    survivors: [],
    colors: { ...GAME_COLORS },
    keys: new Set(),
    score: 0,
    level: 1,
    levelKills: 0,
    nextEnemyId: 1,
    nextSpawnAt: 0,
    nextShotAt: 0,
    nextRocketAt: 0,
    nextSurvivorAt: 0,
    lastFrameAt: 0,
    shakeUntil: 0,
    shakeStrength: 0,
    powerStacks: [],
    powerExpiresAt: {
      rapid: [],
      spread: [],
      shield: [],
      health: [],
      laser: [],
      rocket: [],
      arm: [],
    },
    companions: Array.from({ length: 3 }, (_, index) => ({
      x: WIDTH / 2 + (index - 1) * 32,
      y: HEIGHT - 58,
      nextLaserAt: 0,
      laserUntil: 0,
      activeUntil: 0,
    })),
    pickupNotice: null,
    rescued: 0,
    revivesRemaining: 3,
    meteorShieldHits: 0,
    bossNumber: 0,
    nextBossScore: 6_000,
    permanentStackLimit: 0,
    armCharges: 0,
    armAttack: {
      id: 0,
      x: WIDTH / 2,
      startedAt: 0,
      until: 0,
    },
    meteors: [],
    nextMeteorAt: Number.POSITIVE_INFINITY,
    ripple: {
      id: 0,
      x: WIDTH / 2,
      y: HEIGHT - 76,
      startedAt: 0,
      until: 0,
      readyAt: 0,
    },
    lastUiUpdateAt: 0,
    bossActive: false,
    bossIntroUntil: 0,
    lastCollisionSoundAt: 0,
    lastDestroyedSoundAt: 0,
    gameTime: 0,
    timeScale: 1,
    targetTimeScale: 1,
    slowMotionUntil: 0,
    hapticsEnabled: true,
    animationFrame: 0,
  }
}

function overlaps(
  ax: number,
  ay: number,
  aw: number,
  ah: number,
  bx: number,
  by: number,
  bw: number,
  bh: number
) {
  return Math.abs(ax - bx) * 2 < aw + bw && Math.abs(ay - by) * 2 < ah + bh
}

function burst(
  engine: Engine,
  x: number,
  y: number,
  amount: number,
  force = 95,
  lifeMultiplier = 1
) {
  for (let index = 0; index < amount; index += 1) {
    const angle = Math.random() * Math.PI * 2
    const speed = 18 + Math.random() * force
    const life = (0.16 + Math.random() * 0.24) * lifeMultiplier
    engine.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life,
      maxLife: life,
      size: Math.random() > 0.82 ? 3 : 2,
    })
  }
}

function promoteBossPermanentStacks(engine: Engine, now: number) {
  BOSS_PERMANENT_POWER_KINDS.forEach((kind) => {
    const expirations = engine.powerExpiresAt[kind]
    const permanentCount = expirations.filter(
      (expiresAt) => !Number.isFinite(expiresAt)
    ).length
    let promotionsRemaining = Math.max(
      0,
      engine.permanentStackLimit - permanentCount
    )

    for (
      let index = 0;
      index < expirations.length && promotionsRemaining > 0;
      index += 1
    ) {
      if (!Number.isFinite(expirations[index])) continue
      expirations[index] = Number.POSITIVE_INFINITY
      promotionsRemaining -= 1
    }

    if (kind === "laser") {
      const permanentLasers = expirations.filter(
        (expiresAt) => !Number.isFinite(expiresAt)
      ).length
      const permanentCompanions = engine.companions.filter(
        (companion) => !Number.isFinite(companion.activeUntil)
      ).length
      const companionsToPromote = engine.companions
        .filter(
          (companion) =>
            now < companion.activeUntil &&
            Number.isFinite(companion.activeUntil)
        )
        .sort((a, b) => b.activeUntil - a.activeUntil)
        .slice(0, Math.max(0, permanentLasers - permanentCompanions))
      companionsToPromote.forEach((companion) => {
        companion.activeUntil = Number.POSITIVE_INFINITY
      })
    }
  })
}

function triggerHaptic(pattern: number | number[], enabled = true) {
  if (!enabled) return
  if (
    typeof navigator === "undefined" ||
    typeof navigator.vibrate !== "function"
  )
    return
  navigator.vibrate(pattern)
}

function aimMeteorAt(meteor: Meteor, targetX: number, targetY: number) {
  const dx = targetX - meteor.x
  const dy = targetY - meteor.y
  const distance = Math.max(1, Math.hypot(dx, dy))
  meteor.vx = dx / distance
  meteor.vy = dy / distance
}

function startMeteorWarning(engine: Engine, now: number) {
  const edges: MeteorEdge[] =
    engine.level >= 8
      ? ["top", "right", "bottom", "left"]
      : ["top", "right", "left"]
  const edge = edges[Math.floor(Math.random() * edges.length)]
  const padding = 34
  let x: number
  let y: number
  if (edge === "top" || edge === "bottom") {
    x = 50 + Math.random() * (WIDTH - 100)
    y = edge === "top" ? -padding : HEIGHT + padding
  } else {
    x = edge === "left" ? -padding : WIDTH + padding
    y = 120 + Math.random() * (HEIGHT - 240)
  }

  const meteor: Meteor = {
    state: "warning",
    edge,
    x,
    y,
    baseX: x,
    baseY: y,
    vx: 0,
    vy: 1,
    launchAt: now + (engine.level >= 15 ? 2_350 : 1_850),
    movingWarning: engine.level >= 15,
    warningPhase: Math.random() * Math.PI * 2,
    size: 27 + Math.random() * 9,
  }
  aimMeteorAt(
    meteor,
    engine.ship.x + (Math.random() - 0.5) * 105,
    engine.ship.y + (Math.random() - 0.5) * 70
  )
  engine.meteors.push(meteor)
}

type GameSound =
  | "shot"
  | "collision"
  | "playerHit"
  | "enemyDestroyed"
  | "powerup"
  | "boss"
  | "meteorAlert"
  | "meteorLaunch"

function playGameSound(context: AudioContext | null, sound: GameSound) {
  if (!context || context.state !== "running") return
  const start = context.currentTime

  if (sound === "meteorAlert") {
    for (let pulse = 0; pulse < 4; pulse += 1) {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const pulseStart = start + pulse * 0.13
      oscillator.type = "square"
      oscillator.frequency.setValueAtTime(
        pulse % 2 === 0 ? 880 : 660,
        pulseStart
      )
      gain.gain.setValueAtTime(0.028, pulseStart)
      gain.gain.exponentialRampToValueAtTime(0.0001, pulseStart + 0.09)
      oscillator.connect(gain).connect(context.destination)
      oscillator.start(pulseStart)
      oscillator.stop(pulseStart + 0.1)
    }
    return
  }

  if (sound === "meteorLaunch") {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = "sawtooth"
    oscillator.frequency.setValueAtTime(150, start)
    oscillator.frequency.exponentialRampToValueAtTime(38, start + 0.34)
    gain.gain.setValueAtTime(0.045, start)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.36)
    oscillator.connect(gain).connect(context.destination)
    oscillator.start(start)
    oscillator.stop(start + 0.37)
    return
  }

  if (sound === "shot") {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = "square"
    oscillator.frequency.setValueAtTime(760, start)
    oscillator.frequency.exponentialRampToValueAtTime(420, start + 0.035)
    gain.gain.setValueAtTime(0.008, start)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.04)
    oscillator.connect(gain).connect(context.destination)
    oscillator.start(start)
    oscillator.stop(start + 0.045)
    return
  }

  if (sound === "playerHit") {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = "sawtooth"
    oscillator.frequency.setValueAtTime(135, start)
    oscillator.frequency.exponentialRampToValueAtTime(48, start + 0.18)
    gain.gain.setValueAtTime(0.05, start)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.2)
    oscillator.connect(gain).connect(context.destination)
    oscillator.start(start)
    oscillator.stop(start + 0.21)
    return
  }

  if (sound === "enemyDestroyed") {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.type = "square"
    oscillator.frequency.setValueAtTime(310, start)
    oscillator.frequency.exponentialRampToValueAtTime(72, start + 0.1)
    gain.gain.setValueAtTime(0.026, start)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.12)
    oscillator.connect(gain).connect(context.destination)
    oscillator.start(start)
    oscillator.stop(start + 0.13)
    return
  }

  if (sound === "collision") {
    const duration = 0.065
    const buffer = context.createBuffer(
      1,
      Math.ceil(context.sampleRate * duration),
      context.sampleRate
    )
    const channel = buffer.getChannelData(0)
    for (let index = 0; index < channel.length; index += 1) {
      const fade = 1 - index / channel.length
      channel[index] = (Math.random() * 2 - 1) * fade
    }
    const source = context.createBufferSource()
    const filter = context.createBiquadFilter()
    const gain = context.createGain()
    source.buffer = buffer
    filter.type = "bandpass"
    filter.frequency.value = 520
    filter.Q.value = 0.7
    gain.gain.setValueAtTime(0.035, start)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
    source.connect(filter).connect(gain).connect(context.destination)
    source.start(start)
    return
  }

  if (sound === "boss") {
    for (let pulse = 0; pulse < 3; pulse += 1) {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const pulseStart = start + pulse * 0.24
      oscillator.type = "square"
      oscillator.frequency.setValueAtTime(180, pulseStart)
      oscillator.frequency.linearRampToValueAtTime(125, pulseStart + 0.16)
      gain.gain.setValueAtTime(0.035, pulseStart)
      gain.gain.exponentialRampToValueAtTime(0.0001, pulseStart + 0.18)
      oscillator.connect(gain).connect(context.destination)
      oscillator.start(pulseStart)
      oscillator.stop(pulseStart + 0.19)
    }
    return
  }

  ;[523, 784, 1046].forEach((frequency, index) => {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    const noteStart = start + index * 0.055
    oscillator.type = "square"
    oscillator.frequency.value = frequency
    gain.gain.setValueAtTime(0.025, noteStart)
    gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.11)
    oscillator.connect(gain).connect(context.destination)
    oscillator.start(noteStart)
    oscillator.stop(noteStart + 0.12)
  })
}

function startBackgroundMusic(
  context: AudioContext,
  isBossFight: () => boolean
) {
  const master = context.createGain()
  master.gain.value = 0.018
  master.connect(context.destination)
  const melody = [
    220, 277, 330, 415, 330, 277, 247, 330, 220, 277, 370, 415, 370, 330, 277,
    247,
  ]

  const schedulePattern = () => {
    if (context.state !== "running") return
    const start = context.currentTime + 0.04
    melody.forEach((frequency, index) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const noteStart = start + index * 0.2
      oscillator.type = index % 4 === 3 ? "triangle" : "square"
      oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(index % 4 === 0 ? 0.62 : 0.38, noteStart)
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.15)
      oscillator.connect(gain).connect(master)
      oscillator.start(noteStart)
      oscillator.stop(noteStart + 0.16)
    })

    ;[55, 55, 65.4, 49].forEach((frequency, index) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const noteStart = start + index * 0.8
      oscillator.type = "triangle"
      oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(0.42, noteStart)
      gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.68)
      oscillator.connect(gain).connect(master)
      oscillator.start(noteStart)
      oscillator.stop(noteStart + 0.7)
    })

    if (isBossFight()) {
      const bossMelody = [440, 554, 659, 740, 659, 831, 740, 554]
      for (let index = 0; index < 32; index += 1) {
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        const noteStart = start + index * 0.1
        oscillator.type = index % 4 === 0 ? "sawtooth" : "square"
        oscillator.frequency.value = bossMelody[index % bossMelody.length]
        gain.gain.setValueAtTime(index % 4 === 0 ? 0.34 : 0.18, noteStart)
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.075)
        oscillator.connect(gain).connect(master)
        oscillator.start(noteStart)
        oscillator.stop(noteStart + 0.08)
      }
      for (let beat = 0; beat < 8; beat += 1) {
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        const beatStart = start + beat * 0.4
        oscillator.type = "square"
        oscillator.frequency.setValueAtTime(92, beatStart)
        oscillator.frequency.exponentialRampToValueAtTime(42, beatStart + 0.16)
        gain.gain.setValueAtTime(0.45, beatStart)
        gain.gain.exponentialRampToValueAtTime(0.001, beatStart + 0.18)
        oscillator.connect(gain).connect(master)
        oscillator.start(beatStart)
        oscillator.stop(beatStart + 0.19)
      }
    }
  }

  schedulePattern()
  const interval = window.setInterval(schedulePattern, 3_200)
  return () => {
    window.clearInterval(interval)
    const now = context.currentTime
    master.gain.cancelScheduledValues(now)
    master.gain.setValueAtTime(master.gain.value, now)
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.12)
    window.setTimeout(() => master.disconnect(), 180)
  }
}

function spawnEnemy(engine: Engine, now: number, kind?: EnemyKind) {
  const roll = Math.random()
  const selected =
    kind ??
    (engine.level >= 5 && roll < 0.1
      ? "sentry"
      : roll < 0.2
        ? "tank"
        : roll < 0.27
          ? "zigzag"
          : roll < 0.4
            ? "shooter"
            : roll < 0.52
              ? "diver"
              : roll < 0.68
                ? "cluster"
                : "drone")

  if (selected === "cluster") {
    const centerX = 60 + Math.random() * (WIDTH - 120)
    for (let index = 0; index < 9; index += 1) {
      engine.enemies.push({
        id: engine.nextEnemyId,
        kind: "cluster",
        x: centerX + Math.sin(index * 0.72) * 34,
        y: -18 - index * 17,
        width: 15,
        height: 13,
        health: 1,
        maxHealth: 1,
        speed: 72 + engine.level * 3,
        phase: index * 0.72,
        nextShotAt: Number.POSITIVE_INFINITY,
        hitUntil: 0,
        variant: index % 3,
        lastRippleId: 0,
        lastArmId: 0,
        chargeState: "idle",
        chargeAt: 0,
        chargeTargetX: 0,
      })
      engine.nextEnemyId += 1
    }
    return
  }

  const boss = selected === "boss"
  const tank = selected === "tank"
  const shooter = selected === "shooter"
  const diver = selected === "diver"
  const sentry = selected === "sentry"
  const width = boss
    ? 126
    : tank
      ? 42
      : shooter
        ? 34
        : sentry
          ? 34
          : diver
            ? 30
            : 28
  const height = boss
    ? 72
    : tank
      ? 38
      : shooter
        ? 28
        : sentry
          ? 34
          : diver
            ? 32
            : 24
  const health = boss
    ? 140 + engine.level * 32
    : tank
      ? 6 + Math.floor(engine.level / 2)
      : shooter
        ? 4 + Math.floor(engine.level / 3)
        : sentry
          ? 7 + Math.floor(engine.level / 2)
          : diver
            ? 3 + Math.floor(engine.level / 4)
            : 2 + Math.floor(engine.level / 4)

  engine.enemies.push({
    id: engine.nextEnemyId,
    kind: selected,
    x: boss ? WIDTH / 2 : 26 + Math.random() * (WIDTH - 52),
    y: -height,
    width,
    height,
    health,
    maxHealth: health,
    speed: boss
      ? 32
      : (tank ? 42 : shooter ? 50 : sentry ? 64 : diver ? 86 : 68) +
        engine.level * 4,
    phase: Math.random() * Math.PI * 2,
    nextShotAt: now + (boss ? 900 : 1800 + Math.random() * 1200),
    hitUntil: 0,
    variant: boss
      ? Math.max(0, engine.bossNumber - 1) % 5
      : Math.floor(Math.random() * 3),
    lastRippleId: 0,
    lastArmId: 0,
    chargeState: "idle",
    chargeAt: 0,
    chargeTargetX: 0,
  })
  if (boss)
    engine.bossIntroUntil =
      now + Math.min(9_000, 6_000 + engine.bossNumber * 500)
  engine.nextEnemyId += 1
}

function drawPixelShip(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  now: number,
  shield: boolean
) {
  context.save()
  context.translate(Math.round(x), Math.round(y))
  context.scale(0.82, 0.82)
  if (shield) {
    context.strokeStyle = GAME_COLORS.ship
    context.setLineDash([4, 4])
    context.strokeRect(-27, -30, 54, 62)
    context.globalAlpha = 0.45
    context.strokeRect(-23, -26, 46, 54)
    context.globalAlpha = 1
    context.setLineDash([])
  }
  context.fillStyle = now % 120 < 60 ? GAME_COLORS.ship : GAME_COLORS.shipDim
  context.fillRect(-8, 17, 5, 11)
  context.fillRect(3, 17, 5, 11)
  context.fillStyle = GAME_COLORS.ship
  context.fillRect(-3, -24, 6, 5)
  context.fillRect(-6, -19, 12, 30)
  context.fillRect(-11, -10, 22, 25)
  context.fillRect(-17, -3, 34, 17)
  context.fillRect(-23, 8, 46, 7)
  context.fillRect(-20, 15, 8, 5)
  context.fillRect(12, 15, 8, 5)
  context.fillRect(-16, 3, 4, 4)
  context.fillRect(12, 3, 4, 4)
  context.fillStyle = GAME_COLORS.background
  context.fillRect(-3, -13, 6, 9)
  context.fillRect(-8, 7, 4, 5)
  context.fillRect(4, 7, 4, 5)
  context.restore()
}

function drawAnimatedShip(
  context: CanvasRenderingContext2D,
  engine: Engine,
  now: number
) {
  const rippleActive = now < engine.ripple.until
  const armActive = now < engine.armAttack.until
  const rippleProgress = rippleActive
    ? Math.max(
        0,
        Math.min(1, (now - engine.ripple.startedAt) / RIPPLE_DURATION_MS)
      )
    : 0
  const armProgress = armActive
    ? Math.max(
        0,
        Math.min(1, (now - engine.armAttack.startedAt) / ARM_DURATION_MS)
      )
    : 0

  if (rippleActive) {
    const orbitRadius = 26 + rippleProgress * 56
    context.save()
    context.translate(Math.round(engine.ship.x), Math.round(engine.ship.y))
    context.rotate(rippleProgress * Math.PI * 4)
    context.globalAlpha = Math.max(0.2, 1 - rippleProgress)
    context.strokeStyle = GAME_COLORS.ship
    context.lineWidth = 2
    context.strokeRect(
      -orbitRadius,
      -orbitRadius,
      orbitRadius * 2,
      orbitRadius * 2
    )
    context.rotate(Math.PI / 4)
    context.strokeRect(
      -orbitRadius * 0.72,
      -orbitRadius * 0.72,
      orbitRadius * 1.44,
      orbitRadius * 1.44
    )
    context.fillStyle = GAME_COLORS.ship
    for (let index = 0; index < 8; index += 1) {
      const angle = (index / 8) * Math.PI * 2
      context.fillRect(
        Math.round(Math.cos(angle) * orbitRadius - 3),
        Math.round(Math.sin(angle) * orbitRadius - 3),
        6,
        6
      )
    }
    context.restore()
  }

  if (armActive) {
    const pulse = Math.sin(armProgress * Math.PI * 8)
    const bracketDistance = 29 + Math.abs(pulse) * 13
    context.save()
    context.globalAlpha = 0.72
    context.strokeStyle = GAME_COLORS.shipDim
    context.lineWidth = 5
    context.setLineDash([10, 7])
    context.beginPath()
    context.moveTo(engine.ship.x, engine.ship.y + 20)
    context.lineTo(engine.armAttack.x, HEIGHT)
    context.stroke()
    context.setLineDash([])
    context.fillStyle = GAME_COLORS.ship
    context.fillRect(
      engine.ship.x - bracketDistance - 12,
      engine.ship.y - 13,
      12,
      5
    )
    context.fillRect(engine.ship.x + bracketDistance, engine.ship.y - 13, 12, 5)
    context.fillRect(
      engine.ship.x - bracketDistance - 12,
      engine.ship.y + 8,
      12,
      5
    )
    context.fillRect(engine.ship.x + bracketDistance, engine.ship.y + 8, 12, 5)
    context.restore()
  }

  const recoilY = armActive
    ? -Math.sin(Math.min(1, armProgress * 2.4) * Math.PI) * 18
    : 0
  const rotation = rippleActive
    ? rippleProgress * Math.PI * 2
    : armActive
      ? Math.sin(armProgress * Math.PI * 10) * 0.075
      : 0
  const abilityScale = rippleActive
    ? 1 + Math.sin(rippleProgress * Math.PI) * 0.28
    : armActive
      ? 1 + Math.sin(armProgress * Math.PI) * 0.14
      : 1

  context.save()
  context.translate(
    Math.round(engine.ship.x),
    Math.round(engine.ship.y + recoilY)
  )
  context.rotate(rotation)
  context.scale(abilityScale, abilityScale)
  drawPixelShip(context, 0, 0, now, engine.powerStacks.includes("shield"))
  context.restore()
}

function drawDestroyedShip(
  context: CanvasRenderingContext2D,
  engine: Engine,
  now: number
) {
  const duration = Math.max(
    1,
    engine.ship.destroyedUntil - engine.ship.destroyedAt
  )
  const progress = Math.max(
    0,
    Math.min(1, (now - engine.ship.destroyedAt) / duration)
  )
  const distance = 12 + progress * 72
  context.save()
  context.translate(Math.round(engine.ship.x), Math.round(engine.ship.y))
  context.globalAlpha = Math.max(0, 1 - progress)
  context.strokeStyle = GAME_COLORS.ship
  context.lineWidth = 4
  context.beginPath()
  context.arc(0, 0, 12 + progress * 58, 0, Math.PI * 2)
  context.stroke()
  context.fillStyle = GAME_COLORS.ship
  for (let index = 0; index < 12; index += 1) {
    const angle = (index / 12) * Math.PI * 2 + index * 0.17
    const fragmentDistance = distance * (0.72 + (index % 3) * 0.16)
    const size = index % 4 === 0 ? 8 : 5
    context.save()
    context.translate(
      Math.cos(angle) * fragmentDistance,
      Math.sin(angle) * fragmentDistance
    )
    context.rotate(angle + progress * (index % 2 === 0 ? 5 : -5))
    context.fillRect(-size / 2, -2, size, 4)
    context.restore()
  }
  context.restore()
}

function drawEnemy(
  context: CanvasRenderingContext2D,
  enemy: Enemy,
  now: number
) {
  const flash = now < enemy.hitUntil
  context.save()
  context.translate(Math.round(enemy.x), Math.round(enemy.y))
  if (enemy.kind !== "boss") context.scale(0.7, 0.7)
  context.globalAlpha = flash ? 0.5 : 1
  context.fillStyle = GAME_COLORS.enemy
  context.strokeStyle = GAME_COLORS.enemy

  if (enemy.kind === "boss") {
    if (enemy.variant === 0) {
      // Armored space crab with wide claws and a low, plated shell.
      context.fillRect(-44, -27, 88, 7)
      context.fillRect(-54, -20, 108, 35)
      context.fillRect(-62, -11, 124, 19)
      context.fillRect(-75, -22, 18, 13)
      context.fillRect(57, -22, 18, 13)
      context.fillRect(-78, -32, 12, 18)
      context.fillRect(66, -32, 12, 18)
      context.fillRect(-50, 15, 13, 20)
      context.fillRect(-25, 15, 13, 14)
      context.fillRect(12, 15, 13, 14)
      context.fillRect(37, 15, 13, 20)
      context.fillStyle = GAME_COLORS.background
      context.fillRect(-31, -12, 14, 11)
      context.fillRect(17, -12, 14, 11)
      context.fillRect(-19, 5, 38, 6)
      context.fillRect(-5, -24, 10, 9)
    } else if (enemy.variant === 1) {
      // Octopus command organism with a bulbous head and eight blocky limbs.
      context.fillRect(-27, -34, 54, 8)
      context.fillRect(-39, -26, 78, 39)
      context.fillRect(-48, -15, 96, 25)
      context.fillRect(-53, 8, 106, 9)
      ;[-46, -33, -19, -6, 8, 21, 35, 48].forEach((x, index) => {
        context.fillRect(x, 15, 8, 12 + (index % 3) * 5)
        context.fillRect(x + (index < 4 ? -4 : 4), 24 + (index % 3) * 5, 8, 8)
      })
      context.fillStyle = GAME_COLORS.background
      context.fillRect(-25, -14, 13, 13)
      context.fillRect(12, -14, 13, 13)
      context.fillRect(-13, 5, 26, 7)
      context.fillRect(-10, -29, 20, 6)
    } else if (enemy.variant === 2) {
      // Classic alien saucer with a glass dome and engine lights.
      context.fillRect(-17, -33, 34, 7)
      context.fillRect(-30, -26, 60, 13)
      context.fillRect(-45, -14, 90, 13)
      context.fillRect(-64, -2, 128, 19)
      context.fillRect(-52, 17, 104, 8)
      context.fillRect(-34, 25, 15, 9)
      context.fillRect(-7, 25, 14, 12)
      context.fillRect(19, 25, 15, 9)
      context.fillStyle = GAME_COLORS.background
      context.fillRect(-13, -27, 26, 13)
      context.fillRect(-40, 3, 11, 8)
      context.fillRect(-16, 3, 11, 8)
      context.fillRect(5, 3, 11, 8)
      context.fillRect(29, 3, 11, 8)
    } else if (enemy.variant === 3) {
      // Gigantic capital ship with a long armored hull and side batteries.
      context.fillRect(-10, -38, 20, 76)
      context.fillRect(-25, -30, 50, 59)
      context.fillRect(-44, -21, 88, 43)
      context.fillRect(-65, -10, 130, 23)
      context.fillRect(-74, -5, 14, 30)
      context.fillRect(60, -5, 14, 30)
      context.fillRect(-52, 22, 18, 13)
      context.fillRect(34, 22, 18, 13)
      context.fillRect(-7, 29, 14, 11)
      context.fillStyle = GAME_COLORS.background
      context.fillRect(-5, -31, 10, 18)
      context.fillRect(-31, -11, 13, 12)
      context.fillRect(18, -11, 13, 12)
      context.fillRect(-15, 8, 30, 8)
      context.fillRect(-68, 2, 8, 8)
      context.fillRect(60, 2, 8, 8)
    } else {
      // Heavy ram ship built around a reinforced charging spear.
      context.fillRect(-8, -43, 16, 86)
      context.fillRect(-21, -30, 42, 63)
      context.fillRect(-39, -19, 78, 43)
      context.fillRect(-59, -7, 118, 25)
      context.fillRect(-69, 1, 18, 29)
      context.fillRect(51, 1, 18, 29)
      context.fillRect(-38, 24, 17, 14)
      context.fillRect(21, 24, 17, 14)
      context.fillStyle = GAME_COLORS.background
      context.fillRect(-4, -34, 8, 27)
      context.fillRect(-25, -8, 13, 13)
      context.fillRect(12, -8, 13, 13)
      context.fillRect(-13, 11, 26, 8)
      context.fillRect(-62, 8, 9, 10)
      context.fillRect(53, 8, 9, 10)
    }
  } else if (enemy.kind === "tank") {
    context.fillRect(-18, -15, 36, 28)
    context.fillRect(-21, -7, 42, 14)
    context.fillRect(-14, 13, 8, 8)
    context.fillRect(6, 13, 8, 8)
    context.fillRect(-4, 21, 8, 5)
    context.fillStyle = GAME_COLORS.background
    context.fillRect(-11, -7, 7, 7)
    context.fillRect(4, -7, 7, 7)
    context.fillRect(-6, 5, 12, 4)
  } else if (enemy.kind === "shooter") {
    context.fillRect(-13, -12, 26, 24)
    context.fillRect(-17, -7, 34, 10)
    context.fillRect(-20, 7, 8, 14)
    context.fillRect(12, 7, 8, 14)
    context.fillRect(-4, 12, 8, 11)
    context.fillStyle = GAME_COLORS.background
    context.fillRect(-8, -5, 5, 6)
    context.fillRect(3, -5, 5, 6)
  } else if (enemy.kind === "diver") {
    context.fillRect(-4, -17, 8, 32)
    context.fillRect(-10, -9, 20, 17)
    context.fillRect(-15, 3, 30, 8)
    context.fillRect(-11, 11, 6, 8)
    context.fillRect(5, 11, 6, 8)
    context.fillStyle = GAME_COLORS.background
    context.fillRect(-2, -9, 4, 8)
  } else if (enemy.kind === "sentry") {
    context.fillRect(-4, -17, 8, 34)
    context.fillRect(-17, -4, 34, 8)
    context.fillRect(-12, -12, 24, 24)
    context.fillRect(-19, -19, 7, 7)
    context.fillRect(12, -19, 7, 7)
    context.fillRect(-19, 12, 7, 7)
    context.fillRect(12, 12, 7, 7)
    context.fillStyle = GAME_COLORS.background
    context.fillRect(-6, -6, 12, 12)
    context.fillStyle = GAME_COLORS.enemy
    context.fillRect(-2, -2, 4, 4)
    context.fillRect(-2, -9, 4, 8)
  } else if (enemy.kind === "cluster") {
    if (enemy.variant === 0) {
      context.fillRect(-5, -5, 10, 10)
      context.fillRect(-7, -2, 14, 5)
      context.fillRect(-5, 5, 3, 3)
      context.fillRect(2, 5, 3, 3)
    } else if (enemy.variant === 1) {
      context.fillRect(-3, -7, 6, 14)
      context.fillRect(-7, -3, 14, 6)
      context.fillRect(-5, 5, 3, 3)
      context.fillRect(2, 5, 3, 3)
    } else {
      context.fillRect(-3, -7, 6, 3)
      context.fillRect(-6, -4, 12, 8)
      context.fillRect(-3, 4, 6, 5)
      context.fillRect(-8, -1, 3, 4)
      context.fillRect(5, -1, 3, 4)
    }
    context.fillStyle = GAME_COLORS.background
    context.fillRect(-2, -2, 4, 3)
  } else {
    context.fillRect(-12, -9, 24, 18)
    context.fillRect(-17, -4, 7, 13)
    context.fillRect(10, -4, 7, 13)
    if (enemy.kind === "zigzag") {
      context.fillRect(-21, 2, 7, 5)
      context.fillRect(14, 2, 7, 5)
      context.fillRect(-13, -13, 6, 6)
      context.fillRect(7, -13, 6, 6)
    } else if (enemy.variant === 0) {
      context.fillRect(-5, -13, 10, 5)
    } else if (enemy.variant === 1) {
      context.fillRect(-15, -12, 7, 6)
      context.fillRect(8, -12, 7, 6)
      context.fillRect(-4, -15, 8, 7)
    } else {
      context.fillRect(-19, -10, 6, 5)
      context.fillRect(13, -10, 6, 5)
      context.fillRect(-3, -16, 6, 8)
    }
    context.fillRect(-8, 9, 5, 6)
    context.fillRect(3, 9, 5, 6)
    context.fillStyle = GAME_COLORS.background
    context.fillRect(-7, -4, 4, 4)
    context.fillRect(3, -4, 4, 4)
  }
  context.restore()
}

function drawCompanion(
  context: CanvasRenderingContext2D,
  companion: Companion,
  now: number,
  chargeTime: number
) {
  const isFiring = now < companion.laserUntil
  const charge = Math.max(
    0,
    Math.min(1, 1 - (companion.nextLaserAt - now) / chargeTime)
  )

  if (isFiring) {
    context.fillStyle = GAME_COLORS.shipDim
    context.fillRect(
      Math.round(companion.x - 3),
      48,
      7,
      Math.round(companion.y - 55)
    )
    context.fillStyle = GAME_COLORS.ship
    context.fillRect(
      Math.round(companion.x - 1),
      48,
      3,
      Math.round(companion.y - 55)
    )
  }

  context.save()
  context.translate(Math.round(companion.x), Math.round(companion.y))
  context.scale(0.76, 0.76)
  context.fillStyle = GAME_COLORS.ship
  context.fillRect(-9, -6, 18, 12)
  context.fillRect(-13, -2, 26, 7)
  context.fillRect(-5, -10, 10, 4)
  context.fillStyle = GAME_COLORS.background
  context.fillRect(-2, -3, 4, 4)
  context.strokeStyle = GAME_COLORS.ship
  context.strokeRect(-12, 10, 24, 4)
  context.fillStyle = GAME_COLORS.ship
  context.fillRect(-11, 11, Math.round(22 * charge), 2)
  context.restore()
}

function drawSurvivor(
  context: CanvasRenderingContext2D,
  survivor: Survivor,
  now: number
) {
  const bob = Math.sin(survivor.phase) * 2
  context.save()
  context.translate(Math.round(survivor.x), Math.round(survivor.y + bob))
  context.fillStyle = GAME_COLORS.dimCream
  context.globalAlpha = 0.24
  context.fillRect(-13, -45, 3, 28)
  context.fillRect(-2, -45, 4, 28)
  context.fillRect(10, -45, 3, 28)
  context.globalAlpha = 1
  context.fillStyle = GAME_COLORS.cream
  context.fillRect(-3, -9, 6, 6)
  context.fillRect(-4, -2, 8, 11)
  context.fillRect(-8, 0, 4, 3)
  context.fillRect(4, 0, 4, 3)
  context.fillRect(-4, 9, 3, 6)
  context.fillRect(1, 9, 3, 6)
  context.globalAlpha = 0.65 + (Math.sin(now * 0.012) + 1) * 0.175
  context.strokeStyle = GAME_COLORS.cream
  context.strokeRect(-20, -29, 40, 13)
  context.font = "bold 8px monospace"
  context.textAlign = "center"
  context.fillText("HELP!", 0, -20)
  context.globalAlpha = 1
  context.restore()
}

function drawMeteor(
  context: CanvasRenderingContext2D,
  meteor: Meteor,
  now: number
) {
  const angle = Math.atan2(meteor.vy, meteor.vx)
  if (meteor.state === "warning") {
    const blink = Math.floor(now / 120) % 2 === 0
    context.save()
    context.globalAlpha = blink ? 0.9 : 0.4
    context.strokeStyle = GAME_COLORS.enemy
    context.lineWidth = 2
    context.setLineDash([9, 8])
    context.beginPath()
    context.moveTo(meteor.x, meteor.y)
    context.lineTo(meteor.x + meteor.vx * 1_050, meteor.y + meteor.vy * 1_050)
    context.stroke()
    context.setLineDash([])

    const markerX = Math.max(
      20,
      Math.min(WIDTH - 20, meteor.x + meteor.vx * 48)
    )
    const markerY = Math.max(
      68,
      Math.min(HEIGHT - 42, meteor.y + meteor.vy * 48)
    )
    context.translate(Math.round(markerX), Math.round(markerY))
    context.rotate(angle)
    context.fillStyle = GAME_COLORS.enemy
    context.beginPath()
    context.moveTo(18, 0)
    context.lineTo(-10, -12)
    context.lineTo(-5, 0)
    context.lineTo(-10, 12)
    context.closePath()
    context.fill()
    context.rotate(-angle)
    context.font = "bold 10px monospace"
    context.textAlign = "center"
    context.fillText(meteor.movingWarning ? "MOVING METEOR" : "METEOR", 0, -20)
    context.restore()
    return
  }

  if (meteor.state !== "active") return
  context.save()
  context.strokeStyle = GAME_COLORS.enemyDim
  context.globalAlpha = 0.65
  context.lineWidth = 7
  context.beginPath()
  context.moveTo(meteor.x - meteor.vx * 12, meteor.y - meteor.vy * 12)
  context.lineTo(meteor.x - meteor.vx * 68, meteor.y - meteor.vy * 68)
  context.stroke()
  context.globalAlpha = 1
  context.translate(Math.round(meteor.x), Math.round(meteor.y))
  context.rotate(angle)
  context.fillStyle = GAME_COLORS.enemy
  const radius = meteor.size / 2
  context.fillRect(-radius, -radius * 0.7, meteor.size, radius * 1.4)
  context.fillRect(-radius * 0.72, -radius, radius * 1.35, meteor.size)
  context.fillStyle = GAME_COLORS.background
  context.fillRect(-radius * 0.35, -radius * 0.45, radius * 0.45, radius * 0.4)
  context.fillRect(radius * 0.18, radius * 0.1, radius * 0.35, radius * 0.32)
  context.restore()
}

function drawBossDestruction(
  context: CanvasRenderingContext2D,
  destruction: BossDestruction,
  now: number
) {
  const progress = Math.max(
    0,
    Math.min(
      1,
      (now - destruction.startedAt) /
        (destruction.until - destruction.startedAt)
    )
  )
  const alpha = 1 - progress
  context.save()
  context.translate(Math.round(destruction.x), Math.round(destruction.y))
  context.globalAlpha = alpha
  context.strokeStyle = GAME_COLORS.enemy
  context.lineWidth = Math.max(1, 6 - progress * 5)
  for (let ring = 0; ring < 3; ring += 1) {
    const delayedProgress = Math.max(
      0,
      Math.min(1, progress * 1.35 - ring * 0.16)
    )
    context.globalAlpha = alpha * (1 - delayedProgress * 0.45)
    context.beginPath()
    context.arc(0, 0, 18 + delayedProgress * (105 + ring * 34), 0, Math.PI * 2)
    context.stroke()
  }
  context.restore()
}

function drawBossChargeWarning(
  context: CanvasRenderingContext2D,
  engine: Engine,
  now: number
) {
  const boss = engine.enemies.find(
    (enemy) =>
      enemy.kind === "boss" &&
      enemy.variant === 4 &&
      enemy.chargeState === "warning"
  )
  if (!boss) return
  const blink = Math.floor(now / 110) % 2 === 0
  context.save()
  context.globalAlpha = blink ? 0.95 : 0.4
  context.strokeStyle = GAME_COLORS.enemy
  context.lineWidth = 3
  context.setLineDash([12, 8])
  context.beginPath()
  context.moveTo(boss.x, boss.y + boss.height / 2)
  context.lineTo(boss.chargeTargetX, engine.ship.y)
  context.stroke()
  context.setLineDash([])
  context.strokeRect(engine.ship.x - 31, engine.ship.y - 35, 62, 70)
  context.fillStyle = GAME_COLORS.enemy
  context.font = "bold 13px monospace"
  context.textAlign = "center"
  context.fillText("!! CHARGE LOCK !!", WIDTH / 2, 82)
  context.restore()
}

function drawParallaxBackground(
  context: CanvasRenderingContext2D,
  engine: Engine,
  now: number
) {
  const layers = [
    { count: 48, speed: 0.006, parallax: 0.018, size: 1, alpha: 0.2 },
    { count: 34, speed: 0.014, parallax: 0.045, size: 1, alpha: 0.42 },
    { count: 22, speed: 0.027, parallax: 0.085, size: 2, alpha: 0.68 },
  ]
  const shipOffset = engine.ship.x - WIDTH / 2

  layers.forEach((layer, layerIndex) => {
    context.globalAlpha = layer.alpha
    context.fillStyle = "#ffffff"
    for (let index = 0; index < layer.count; index += 1) {
      const seedX = (index * (79 + layerIndex * 14) + layerIndex * 131) % WIDTH
      const seedY = (index * (127 + layerIndex * 10) + layerIndex * 83) % HEIGHT
      const x =
        (((seedX - shipOffset * layer.parallax + WIDTH) % WIDTH) + WIDTH) %
        WIDTH
      const y = (seedY + now * layer.speed) % HEIGHT
      context.fillRect(Math.round(x), Math.round(y), layer.size, layer.size)
      if (layerIndex === 2 && index % 5 === 0) {
        context.fillRect(Math.round(x - 2), Math.round(y), 1, 2)
        context.fillRect(Math.round(x + 3), Math.round(y), 1, 2)
      }
    }
  })

  context.globalAlpha = 1
}

function render(
  context: CanvasRenderingContext2D,
  engine: Engine,
  now: number
) {
  Object.assign(GAME_COLORS, engine.colors)
  const shaking = engine.timeScale > 0.02 && now < engine.shakeUntil
  const shakeX = shaking
    ? (Math.random() - 0.5) * engine.shakeStrength * engine.timeScale
    : 0
  const shakeY = shaking
    ? (Math.random() - 0.5) * engine.shakeStrength * engine.timeScale
    : 0

  context.save()
  context.fillStyle = GAME_COLORS.background
  context.fillRect(0, 0, WIDTH, HEIGHT)
  context.translate(Math.round(shakeX), Math.round(shakeY))

  drawParallaxBackground(context, engine, now)

  engine.bossDestructions.forEach((destruction) =>
    drawBossDestruction(context, destruction, now)
  )
  engine.meteors.forEach((meteor) => drawMeteor(context, meteor, now))
  drawBossChargeWarning(context, engine, now)

  if (now < engine.ripple.until) {
    const progress = Math.max(
      0,
      Math.min(1, (now - engine.ripple.startedAt) / RIPPLE_DURATION_MS)
    )
    const radius = (1 - Math.pow(1 - progress, 3)) * 520
    context.save()
    context.globalAlpha = Math.max(0, 1 - progress)
    context.strokeStyle = GAME_COLORS.ship
    context.lineWidth = 5
    context.beginPath()
    context.arc(engine.ripple.x, engine.ripple.y, radius, 0, Math.PI * 2)
    context.stroke()
    context.globalAlpha *= 0.55
    context.lineWidth = 2
    context.beginPath()
    context.arc(
      engine.ripple.x,
      engine.ripple.y,
      Math.max(0, radius - 18),
      0,
      Math.PI * 2
    )
    context.stroke()
    context.restore()
  }

  if (now < engine.armAttack.until) {
    const progress = Math.max(
      0,
      Math.min(1, (now - engine.armAttack.startedAt) / ARM_DURATION_MS)
    )
    const reach = getArmReach(progress)
    const fistY = HEIGHT + 40 - reach
    context.save()
    context.translate(Math.round(engine.armAttack.x), 0)
    // Segmented forearm, articulated wrist, palm, thumb, and four armored knuckles.
    context.fillStyle = GAME_COLORS.shipDim
    context.fillRect(-48, Math.round(fistY + 70), 96, HEIGHT - fistY)
    context.fillStyle = GAME_COLORS.ship
    context.fillRect(-41, Math.round(fistY + 78), 82, HEIGHT - fistY)
    context.fillRect(-51, Math.round(fistY + 64), 102, 20)
    context.fillRect(-58, Math.round(fistY + 4), 116, 64)
    context.fillRect(-73, Math.round(fistY + 30), 21, 39)
    ;[-57, -28, 1, 30].forEach((knuckleX, index) => {
      context.fillRect(
        knuckleX,
        Math.round(fistY - 27 - (index % 2) * 5),
        27,
        36 + (index % 2) * 5
      )
    })
    context.fillStyle = GAME_COLORS.background
    context.fillRect(-48, Math.round(fistY + 17), 96, 9)
    context.fillRect(-42, Math.round(fistY + 49), 84, 8)
    context.fillRect(-34, Math.round(fistY + 68), 68, 7)
    context.fillRect(-4, Math.round(fistY + 82), 8, 22)
    context.fillRect(-49, Math.round(fistY - 20), 7, 18)
    context.fillRect(-20, Math.round(fistY - 25), 7, 23)
    context.fillRect(9, Math.round(fistY - 25), 7, 23)
    context.fillRect(38, Math.round(fistY - 20), 7, 18)
    context.fillStyle = GAME_COLORS.shipDim
    context.fillRect(-38, Math.round(fistY + 32), 10, 10)
    context.fillRect(28, Math.round(fistY + 32), 10, 10)
    context.fillRect(-5, Math.round(fistY + 58), 10, 10)
    context.restore()
  }

  engine.companions
    .filter((companion) => now < companion.activeUntil)
    .forEach((companion, index) => {
      drawCompanion(context, companion, now, LASER_CHARGE_MS + index * 550)
    })

  engine.bullets.forEach((bullet) => {
    if (bullet.enemy) {
      context.strokeStyle = GAME_COLORS.enemy
      if (bullet.burstAt) {
        context.strokeRect(
          Math.round(bullet.x - 7),
          Math.round(bullet.y - 7),
          14,
          14
        )
        context.strokeRect(
          Math.round(bullet.x - 3),
          Math.round(bullet.y - 3),
          6,
          6
        )
      } else {
        context.strokeRect(
          Math.round(bullet.x - 2),
          Math.round(bullet.y - 2),
          5,
          5
        )
      }
    } else if (bullet.rocket) {
      const angle = Math.atan2(bullet.vy, bullet.vx) + Math.PI / 2
      context.save()
      context.translate(Math.round(bullet.x), Math.round(bullet.y))
      context.rotate(angle)
      context.fillStyle = GAME_COLORS.ship
      context.fillRect(-3, -7, 6, 12)
      context.fillRect(-5, 1, 10, 5)
      context.fillStyle = GAME_COLORS.shipDim
      context.fillRect(-2, 6, 4, 6)
      context.restore()
    } else {
      context.fillStyle = GAME_COLORS.ship
      context.fillRect(Math.round(bullet.x - 1), Math.round(bullet.y - 6), 3, 9)
    }
  })
  engine.powerUps.forEach((powerUp) => {
    const displayY = powerUp.fixed
      ? powerUp.y
      : powerUp.y + Math.sin(powerUp.phase) * 4
    const pulse = 7 + Math.round(Math.sin(now * 0.008 + powerUp.x) + 1)
    context.strokeStyle = GAME_COLORS.power
    context.strokeRect(
      Math.round(powerUp.x - pulse),
      Math.round(displayY - pulse),
      pulse * 2,
      pulse * 2
    )
    context.globalAlpha = 0.45
    context.strokeRect(
      Math.round(powerUp.x - 12),
      Math.round(displayY - 12),
      24,
      24
    )
    context.globalAlpha = 1
    context.fillStyle = GAME_COLORS.power
    context.font = "bold 11px monospace"
    context.textAlign = "center"
    context.fillText(
      POWER_LABELS[powerUp.kind],
      Math.round(powerUp.x),
      Math.round(displayY + 4)
    )
  })
  engine.survivors.forEach((survivor) => drawSurvivor(context, survivor, now))
  engine.enemies.forEach((enemy) => drawEnemy(context, enemy, now))
  context.fillStyle = GAME_COLORS.cream
  engine.particles.forEach((particle) => {
    context.globalAlpha = Math.max(0, particle.life / particle.maxLife)
    context.fillRect(
      Math.round(particle.x),
      Math.round(particle.y),
      particle.size,
      particle.size
    )
  })
  context.globalAlpha = 1
  context.save()
  context.globalAlpha = now < engine.ship.invulnerableUntil ? 0.5 : 1
  if (engine.ship.destroyedUntil > now) {
    drawDestroyedShip(context, engine, now)
  } else {
    drawAnimatedShip(context, engine, now)
  }
  context.restore()
  context.restore()

  if (engine.timeScale < 0.08) {
    context.fillStyle = "rgba(7, 7, 6, 0.5)"
    context.fillRect(0, 0, WIDTH, HEIGHT)
    context.fillStyle = "rgba(7, 7, 6, 0.78)"
    context.fillRect(62, HEIGHT / 2 - 34, WIDTH - 124, 68)
    context.strokeStyle = GAME_COLORS.cream
    context.strokeRect(62, HEIGHT / 2 - 34, WIDTH - 124, 68)
    context.fillStyle = GAME_COLORS.cream
    context.font = "bold 18px monospace"
    context.textAlign = "center"
    context.fillText("PAUSED", WIDTH / 2, HEIGHT / 2 - 3)
    context.font = "bold 10px monospace"
    context.fillText("TOUCH TO RESUME", WIDTH / 2, HEIGHT / 2 + 18)
  }

  context.fillStyle = GAME_COLORS.background
  context.fillRect(0, 0, WIDTH, 52)
  context.strokeStyle = GAME_COLORS.cream
  context.strokeRect(12, 25, 108, 8)
  context.fillStyle = GAME_COLORS.cream
  context.fillRect(
    14,
    27,
    Math.max(0, Math.round(engine.ship.health * 1.04)),
    4
  )
  context.font = "bold 12px monospace"
  context.textAlign = "left"
  context.fillText("LIFE", 12, 17)
  context.fillText(`SCORE ${NUMBER_FORMATTER.format(engine.score)}`, 148, 17)
  context.fillText(`LEVEL ${NUMBER_FORMATTER.format(engine.level)}`, 382, 17)
  context.font = "bold 10px monospace"
  context.fillText(`SAVED ${NUMBER_FORMATTER.format(engine.rescued)}`, 12, 46)
  context.fillText(
    `REVIVES ${NUMBER_FORMATTER.format(engine.revivesRemaining)}`,
    94,
    46
  )

  const boss = engine.enemies.find((enemy) => enemy.kind === "boss")
  if (boss) {
    context.fillText("BOSS", 196, 46)
    context.strokeRect(234, 38, 230, 8)
    context.fillRect(
      236,
      40,
      Math.round(226 * (boss.health / boss.maxHealth)),
      4
    )
  } else {
    context.fillText(
      `NEXT BOSS ${NUMBER_FORMATTER.format(engine.nextBossScore)}`,
      210,
      46
    )
  }

  if (now < engine.bossIntroUntil) {
    const blink = Math.floor(now / 180) % 2 === 0
    if (blink) {
      context.fillStyle = GAME_COLORS.cream
      context.textAlign = "center"
      context.font = "bold 18px monospace"
      context.fillText("!! BOSS SIGNAL !!", WIDTH / 2, 82)
    }
  }

  if (engine.pickupNotice && now < engine.pickupNotice.until) {
    const remaining = engine.pickupNotice.until - now
    context.globalAlpha = Math.min(1, remaining / 350)
    context.fillStyle = GAME_COLORS.background
    context.fillRect(100, 104, WIDTH - 200, 29)
    context.strokeStyle = GAME_COLORS.cream
    context.strokeRect(100, 104, WIDTH - 200, 29)
    context.fillStyle = GAME_COLORS.cream
    context.textAlign = "center"
    context.font = "bold 11px monospace"
    context.fillText(engine.pickupNotice.label, WIDTH / 2, 123)
    context.globalAlpha = 1
  }

  const visibleStacks = STACKABLE_POWER_KINDS.map((kind) => ({
    kind,
    count: engine.powerStacks.filter((stack) => stack === kind).length,
  }))
    .filter(({ count }) => count > 0)
    .map(({ kind, count }) => `${POWER_LABELS[kind]}${count}`)
    .join(" ")
  const rippleRemaining = Math.max(0, engine.ripple.readyAt - now)
  const rippleCharge =
    rippleRemaining === 0
      ? 1
      : Math.max(0, 1 - rippleRemaining / RIPPLE_COOLDOWN_MS)
  context.fillStyle = GAME_COLORS.background
  context.fillRect(0, HEIGHT - 24, WIDTH, 24)
  context.fillStyle = GAME_COLORS.cream
  context.font = "bold 10px monospace"
  context.textAlign = "left"
  context.fillText(
    visibleStacks ? `POWER [${visibleStacks}]` : "POWER [--]",
    12,
    HEIGHT - 8
  )
  context.textAlign = "right"
  context.fillText(
    rippleRemaining === 0
      ? "RIPPLE READY"
      : `RIPPLE ${Math.ceil(rippleRemaining / 1_000)}s`,
    WIDTH - 12,
    HEIGHT - 12
  )
  context.strokeStyle = GAME_COLORS.cream
  context.strokeRect(WIDTH - 102, HEIGHT - 8, 90, 4)
  context.fillRect(WIDTH - 101, HEIGHT - 7, Math.round(88 * rippleCharge), 2)
}

export function SpaceShooterGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef(createEngine())
  const audioRef = useRef<AudioContext | null>(null)
  const [phase, setPhase] = useState<Phase>("ready")
  const [finalScore, setFinalScore] = useState(0)
  const [completedRunNumber, setCompletedRunNumber] = useState(0)
  const [specialStatus, setSpecialStatus] = useState({
    ready: true,
    seconds: 0,
    progress: 1,
  })
  const [armReady, setArmReady] = useState(false)
  const [armProgress, setArmProgress] = useState(0)
  const [muted, setMuted] = useState(false)
  const [hapticsEnabled, setHapticsEnabled] = useState(true)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    COLOR_OPTIONS[0]
  )
  const [shipColor, setShipColor] = useState<ColorOption>(COLOR_OPTIONS[0])
  const [enemyColor, setEnemyColor] = useState<ColorOption>(COLOR_OPTIONS[0])
  const [powerColor, setPowerColor] = useState<ColorOption>(COLOR_OPTIONS[0])

  const pauseGameAudio = useCallback(() => {
    const context = audioRef.current
    if (context && context.state === "running") void context.suspend()
  }, [])

  const resumeGameAudio = useCallback(() => {
    const context = audioRef.current
    if (!muted && context && context.state === "suspended")
      void context.resume()
  }, [muted])

  const openSettings = useCallback(() => {
    setSettingsOpen(true)
    if (phase === "playing") {
      engineRef.current.targetTimeScale = 0
      pauseGameAudio()
    }
  }, [pauseGameAudio, phase])

  const closeSettings = useCallback(() => {
    setSettingsOpen(false)
    if (phase === "playing") {
      engineRef.current.targetTimeScale = 1
      resumeGameAudio()
    }
  }, [phase, resumeGameAudio])

  const toggleSound = useCallback(() => {
    setMuted((current) => {
      const next = !current
      const context = audioRef.current
      if (context && context.state !== "closed") {
        if (next) void context.suspend()
        else if (engineRef.current.targetTimeScale > 0) void context.resume()
      }
      return next
    })
  }, [])

  const toggleHaptics = useCallback(() => {
    setHapticsEnabled((current) => {
      const next = !current
      engineRef.current.hapticsEnabled = next
      if (
        !next &&
        typeof navigator !== "undefined" &&
        typeof navigator.vibrate === "function"
      ) {
        navigator.vibrate(0)
      }
      return next
    })
  }, [])

  const activateSpecial = useCallback(() => {
    if (phase !== "playing") return
    const engine = engineRef.current
    const now = engine.gameTime
    if (now < engine.ripple.readyAt) return

    engine.ripple.id += 1
    engine.ripple.x = engine.ship.x
    engine.ripple.y = engine.ship.y
    engine.ripple.startedAt = now
    engine.ripple.until = now + RIPPLE_DURATION_MS
    engine.ripple.readyAt = now + RIPPLE_COOLDOWN_MS
    engine.pickupNotice = { label: "NOVA RIPPLE DEPLOYED", until: now + 1_300 }
    engine.shakeUntil = now + 480
    engine.shakeStrength = 14
    burst(engine, engine.ship.x, engine.ship.y, 38, 165)
    playGameSound(audioRef.current, "powerup")
    triggerHaptic([32, 28, 52, 24, 76], engine.hapticsEnabled)
    setSpecialStatus({
      ready: false,
      seconds: Math.ceil(RIPPLE_COOLDOWN_MS / 1_000),
      progress: 0,
    })
  }, [phase])

  const activateArm = useCallback(() => {
    if (phase !== "playing") return
    const engine = engineRef.current
    if (engine.armCharges <= 0 || engine.gameTime < engine.armAttack.until)
      return
    const now = engine.gameTime
    engine.armCharges -= 1
    engine.armAttack.id += 1
    engine.armAttack.x = engine.ship.x
    engine.armAttack.startedAt = now
    engine.armAttack.until = now + ARM_DURATION_MS
    engine.pickupNotice = { label: "TITAN ARM DEPLOYED", until: now + 1_350 }
    engine.shakeUntil = now + 900
    engine.shakeStrength = 19
    playGameSound(audioRef.current, "boss")
    triggerHaptic([90, 35, 125, 40, 175], engine.hapticsEnabled)
    setArmReady(false)
  }, [phase])

  const startGame = useCallback(() => {
    const audioContext = audioRef.current ?? new AudioContext()
    audioRef.current = audioContext
    if (!muted && audioContext.state === "suspended") void audioContext.resume()
    if (muted && audioContext.state === "running") void audioContext.suspend()
    const engine = createEngine()
    engine.hapticsEnabled = hapticsEnabled
    const now = performance.now()
    engine.lastFrameAt = now
    engine.gameTime = now
    engine.nextSpawnAt = now + 500
    engine.nextShotAt = now + 180
    engine.nextRocketAt = now + 1_500
    engine.nextSurvivorAt = now + 7_500
    engine.nextMeteorAt = now + 9_000
    engineRef.current = engine
    setFinalScore(0)
    setSpecialStatus({ ready: true, seconds: 0, progress: 1 })
    setArmReady(false)
    setArmProgress(0)
    setPhase("playing")
    trackInBackground(recordGameStart("void-patrol"))
    requestAnimationFrame(() => canvasRef.current?.focus())
  }, [hapticsEnabled, muted])

  useEffect(() => {
    if (phase !== "playing" || muted || !audioRef.current) return undefined
    return startBackgroundMusic(
      audioRef.current,
      () => engineRef.current.bossActive
    )
  }, [muted, phase])

  useEffect(() => {
    if (phase !== "playing") return undefined
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return undefined
    const engine = engineRef.current

    const frame = (frameNow: number) => {
      const rawDelta = Math.min(0.034, (frameNow - engine.lastFrameAt) / 1000)
      engine.lastFrameAt = frameNow
      const cinematicScale = engine.gameTime < engine.slowMotionUntil ? 0.24 : 1
      const desiredTimeScale = engine.targetTimeScale * cinematicScale
      const timeEase =
        1 -
        Math.exp(-rawDelta * (desiredTimeScale > engine.timeScale ? 3.8 : 2.2))
      engine.timeScale += (desiredTimeScale - engine.timeScale) * timeEase
      if (engine.targetTimeScale === 0 && engine.timeScale < 0.01)
        engine.timeScale = 0
      const delta = rawDelta * engine.timeScale
      engine.gameTime += delta * 1_000
      const now = engine.gameTime
      const shipControllable = engine.ship.destroyedUntil === 0

      let moveX = 0
      let moveY = 0
      if (shipControllable && engine.keys.has("left")) moveX -= 1
      if (shipControllable && engine.keys.has("right")) moveX += 1
      if (shipControllable && engine.keys.has("up")) moveY -= 1
      if (shipControllable && engine.keys.has("down")) moveY += 1
      let desiredVx = 0
      let desiredVy = 0
      if (moveX || moveY) {
        engine.ship.targetX = null
        engine.ship.targetY = null
        const length = Math.hypot(moveX, moveY)
        desiredVx = (moveX / length) * SHIP_SPEED
        desiredVy = (moveY / length) * SHIP_SPEED
      } else if (
        shipControllable &&
        engine.ship.targetX !== null &&
        engine.ship.targetY !== null
      ) {
        const targetDx = engine.ship.targetX - engine.ship.x
        const targetDy = engine.ship.targetY - engine.ship.y
        const targetDistance = Math.hypot(targetDx, targetDy)
        if (targetDistance > 1) {
          const targetSpeed = Math.min(SHIP_SPEED * 1.35, targetDistance * 9)
          desiredVx = (targetDx / targetDistance) * targetSpeed
          desiredVy = (targetDy / targetDistance) * targetSpeed
        }
      }
      if (!shipControllable) {
        engine.keys.clear()
        engine.ship.targetX = null
        engine.ship.targetY = null
        engine.ship.vx = 0
        engine.ship.vy = 0
      } else {
        const movementEase = 1 - Math.exp(-delta * 15)
        engine.ship.vx += (desiredVx - engine.ship.vx) * movementEase
        engine.ship.vy += (desiredVy - engine.ship.vy) * movementEase
        engine.ship.x += engine.ship.vx * delta
        engine.ship.y += engine.ship.vy * delta
      }
      engine.ship.x = Math.max(22, Math.min(WIDTH - 22, engine.ship.x))
      engine.ship.y = Math.max(90, Math.min(HEIGHT - 30, engine.ship.y))

      STACKABLE_POWER_KINDS.forEach((kind) => {
        engine.powerExpiresAt[kind] = engine.powerExpiresAt[kind].filter(
          (expiresAt) => now < expiresAt
        )
      })
      engine.powerStacks = STACKABLE_POWER_KINDS.flatMap((kind) =>
        engine.powerExpiresAt[kind].map(() => kind)
      )
      if (!engine.powerStacks.includes("shield")) engine.meteorShieldHits = 0
      const activeCompanions = engine.companions.filter(
        (companion) => now < companion.activeUntil
      )

      if (activeCompanions.length > 0) {
        const companionEase = 1 - Math.exp(-delta * 7)
        const offsets =
          activeCompanions.length === 1
            ? [0]
            : activeCompanions.length === 2
              ? [-30, 30]
              : [-38, 0, 38]
        activeCompanions.forEach((companion, index) => {
          const chargeTime = LASER_CHARGE_MS + index * 550
          companion.x +=
            (engine.ship.x + offsets[index] - companion.x) * companionEase
          companion.y +=
            (engine.ship.y + 13 + (index % 2) * 10 - companion.y) *
            companionEase
          if (companion.nextLaserAt === 0)
            companion.nextLaserAt = now + chargeTime
          if (now >= companion.nextLaserAt) {
            companion.laserUntil = now + 720
            companion.nextLaserAt = now + chargeTime
            playGameSound(audioRef.current, "powerup")
          }
        })
      }

      if (engine.ship.destroyedUntil === 0 && now >= engine.nextShotAt) {
        const spreadStacks = engine.powerStacks.filter(
          (kind) => kind === "spread"
        ).length
        const rapidStacks = engine.powerStacks.filter(
          (kind) => kind === "rapid"
        ).length
        engine.bullets.push({
          x: engine.ship.x,
          y: engine.ship.y - 21,
          vx: 0,
          vy: -470,
        })
        for (let stack = 1; stack <= spreadStacks; stack += 1) {
          const offset = 5 + stack * 4
          const sideVelocity = 75 + stack * 35
          engine.bullets.push(
            {
              x: engine.ship.x - offset,
              y: engine.ship.y - 15,
              vx: -sideVelocity,
              vy: -445,
            },
            {
              x: engine.ship.x + offset,
              y: engine.ship.y - 15,
              vx: sideVelocity,
              vy: -445,
            }
          )
        }
        playGameSound(audioRef.current, "shot")
        engine.nextShotAt = now + Math.max(52, 165 - rapidStacks * 28)
      }

      const rocketStacks = engine.powerStacks.filter(
        (kind) => kind === "rocket"
      ).length
      if (
        engine.ship.destroyedUntil === 0 &&
        rocketStacks > 0 &&
        now >= engine.nextRocketAt &&
        engine.enemies.length > 0
      ) {
        const target =
          engine.enemies.find((enemy) => enemy.kind === "boss") ??
          engine.enemies.reduce((farthest, enemy) =>
            enemy.y < farthest.y ? enemy : farthest
          )
        engine.bullets.push({
          x: engine.ship.x,
          y: engine.ship.y - 24,
          vx: 0,
          vy: -260,
          rocket: true,
          targetId: target.id,
        })
        burst(engine, engine.ship.x, engine.ship.y - 20, 7, 45)
        playGameSound(audioRef.current, "shot")
        engine.nextRocketAt =
          now + Math.max(900, 2_800 - (rocketStacks - 1) * 380)
      }

      if (
        !engine.bossActive &&
        now >= engine.nextSpawnAt &&
        engine.enemies.length < 18
      ) {
        spawnEnemy(engine, now)
        engine.nextSpawnAt = now + Math.max(300, 940 - engine.level * 55)
      }

      if (now >= engine.nextSurvivorAt && engine.survivors.length < 2) {
        engine.survivors.push({
          x: 42 + Math.random() * (WIDTH - 84),
          y: -24,
          speed: 34 + Math.random() * 10,
          phase: Math.random() * Math.PI * 2,
        })
        engine.nextSurvivorAt = now + 12_000 + Math.random() * 7_000
      }

      engine.bullets.forEach((bullet) => {
        if (
          bullet.enemy &&
          bullet.burstAt &&
          now >= bullet.burstAt &&
          !bullet.expired
        ) {
          bullet.expired = true
          const burstCount = bullet.burstCount ?? 10
          const scatterSpeed = Math.min(185, 105 + engine.level * 7)
          for (let index = 0; index < burstCount; index += 1) {
            const angle = (index / burstCount) * Math.PI * 2
            engine.bullets.push({
              x: bullet.x,
              y: bullet.y,
              vx: Math.cos(angle) * scatterSpeed,
              vy: Math.sin(angle) * scatterSpeed,
              enemy: true,
            })
          }
          burst(engine, bullet.x, bullet.y, 14, 82)
          engine.shakeUntil = now + 100
          engine.shakeStrength = 5
        }
        if (bullet.rocket) {
          let target = engine.enemies.find(
            (enemy) => enemy.id === bullet.targetId
          )
          if (!target && engine.enemies.length > 0) {
            target = engine.enemies.reduce((closest, enemy) =>
              Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y) <
              Math.hypot(closest.x - bullet.x, closest.y - bullet.y)
                ? enemy
                : closest
            )
            bullet.targetId = target.id
          }
          if (target) {
            const dx = target.x - bullet.x
            const dy = target.y - bullet.y
            const distance = Math.max(1, Math.hypot(dx, dy))
            const turnEase = 1 - Math.exp(-delta * 6)
            bullet.vx += ((dx / distance) * 330 - bullet.vx) * turnEase
            bullet.vy += ((dy / distance) * 330 - bullet.vy) * turnEase
          }
        }
        bullet.x += bullet.vx * delta
        bullet.y += bullet.vy * delta
      })
      engine.powerUps.forEach((powerUp) => {
        if (!powerUp.fixed) {
          powerUp.y += powerUp.speed * delta
          powerUp.phase += delta * 2.6
        }
      })
      engine.survivors.forEach((survivor) => {
        survivor.y += survivor.speed * delta
        survivor.phase += delta * 4
        survivor.x += Math.sin(survivor.phase) * 11 * delta
      })
      engine.particles.forEach((particle) => {
        particle.x += particle.vx * delta
        particle.y += particle.vy * delta
        particle.vy += 90 * delta
        particle.life -= delta
      })
      if (
        engine.level >= 3 &&
        engine.meteors.length === 0 &&
        now >= engine.nextMeteorAt
      ) {
        const meteorCount =
          engine.level >= 10 ? 2 + Math.floor(Math.random() * 3) : 1
        for (let index = 0; index < meteorCount; index += 1)
          startMeteorWarning(engine, now)
        engine.nextMeteorAt =
          now +
          Math.max(8_500, 16_000 - engine.level * 420) +
          Math.random() * 4_000
        engine.pickupNotice = {
          label:
            meteorCount > 1
              ? `!! ${meteorCount} METEOR TRAJECTORIES !!`
              : "!! METEOR TRAJECTORY DETECTED !!",
          until: now + 1_650,
        }
        playGameSound(audioRef.current, "meteorAlert")
      }
      let meteorLaunched = false
      engine.meteors.forEach((meteor) => {
        if (meteor.state === "warning") {
          if (meteor.movingWarning) {
            const travel = Math.sin(now * 0.0032 + meteor.warningPhase) * 118
            if (meteor.edge === "top" || meteor.edge === "bottom") {
              meteor.x = Math.max(
                28,
                Math.min(WIDTH - 28, meteor.baseX + travel)
              )
            } else {
              meteor.y = Math.max(
                92,
                Math.min(HEIGHT - 62, meteor.baseY + travel)
              )
            }
            aimMeteorAt(meteor, engine.ship.x, engine.ship.y)
          }
          if (now >= meteor.launchAt) {
            meteor.state = "active"
            meteorLaunched = true
          }
        }
        if (meteor.state === "active") {
          meteor.x += meteor.vx * METEOR_SPEED * delta
          meteor.y += meteor.vy * METEOR_SPEED * delta
        }
      })
      if (meteorLaunched) {
        engine.shakeUntil = now + 180
        engine.shakeStrength = 7
        playGameSound(audioRef.current, "meteorLaunch")
      }
      engine.meteors = engine.meteors.filter((meteor) => {
        if (meteor.state !== "active") return true
        return (
          meteor.x >= -110 &&
          meteor.x <= WIDTH + 110 &&
          meteor.y >= -110 &&
          meteor.y <= HEIGHT + 110
        )
      })

      engine.enemies.forEach((enemy) => {
        enemy.phase += delta
        if (enemy.kind === "boss") {
          if (enemy.variant === 4) {
            if (enemy.chargeState === "charging") {
              enemy.x +=
                (enemy.chargeTargetX - enemy.x) * (1 - Math.exp(-delta * 3.5))
              enemy.y += 470 * delta
              if (enemy.y > HEIGHT + 25) {
                enemy.chargeState = "returning"
                enemy.y = -85
              }
              return
            }
            if (enemy.chargeState === "returning") {
              enemy.x += (WIDTH / 2 - enemy.x) * (1 - Math.exp(-delta * 2.2))
              enemy.y += 155 * delta
              if (enemy.y >= 118) {
                enemy.y = 118
                enemy.chargeState = "idle"
                enemy.nextShotAt =
                  now + Math.max(2_300, 3_900 - engine.level * 30)
              }
              return
            }

            enemy.y = Math.min(118, enemy.y + enemy.speed * delta)
            if (enemy.chargeState === "warning") {
              enemy.x +=
                (enemy.chargeTargetX - enemy.x) * (1 - Math.exp(-delta * 2.4))
              if (now >= enemy.chargeAt) {
                enemy.chargeState = "charging"
                engine.shakeUntil = now + 240
                engine.shakeStrength = 9
                playGameSound(audioRef.current, "meteorLaunch")
              }
              return
            }

            enemy.x = WIDTH / 2 + Math.sin(enemy.phase * 0.75) * 130
            if (now >= engine.bossIntroUntil && now >= enemy.nextShotAt) {
              enemy.chargeState = "warning"
              enemy.chargeAt = now + 1_550
              enemy.chargeTargetX = engine.ship.x
              for (let index = 0; index < 2; index += 1) {
                engine.bullets.push({
                  x: enemy.x + (index === 0 ? -24 : 24),
                  y: enemy.y + 28,
                  vx:
                    (engine.ship.x - enemy.x) * (index === 0 ? 0.035 : -0.025),
                  vy: 68 + index * 12,
                  enemy: true,
                  burstAt: now + 1_050 + index * 420,
                  burstCount: 10 + index * 2,
                })
              }
              engine.pickupNotice = {
                label: "!! BOSS CHARGING ATTACK !!",
                until: now + 1_500,
              }
              playGameSound(audioRef.current, "meteorAlert")
              triggerHaptic([24, 55, 24], engine.hapticsEnabled)
            }
            return
          }
          enemy.y = Math.min(118, enemy.y + enemy.speed * delta)
          enemy.x = WIDTH / 2 + Math.sin(enemy.phase * 0.9) * 142
          if (now >= engine.bossIntroUntil && now >= enemy.nextShotAt) {
            const enraged = enemy.health < enemy.maxHealth * 0.5
            const bossBulletSpeed = Math.min(
              220,
              118 + engine.level * 8 + (enraged ? 24 : 0)
            )
            if (enemy.variant === 0) {
              const spread = enraged ? 3 : 2
              for (let angle = -spread; angle <= spread; angle += 1) {
                engine.bullets.push({
                  x: enemy.x + angle * 5,
                  y: enemy.y + 30,
                  vx: angle * (enraged ? 52 : 40),
                  vy: bossBulletSpeed,
                  enemy: true,
                })
              }
            } else if (enemy.variant === 1) {
              const burstTravelMs = 480 + Math.random() * 1_420
              const burstTravelSpeed =
                bossBulletSpeed * (0.38 + Math.random() * 0.5)
              engine.bullets.push({
                x: enemy.x,
                y: enemy.y + 30,
                vx: (engine.ship.x - enemy.x) * 0.08,
                vy: burstTravelSpeed,
                enemy: true,
                burstAt: now + burstTravelMs * (enraged ? 0.82 : 1),
                burstCount: enraged ? 14 : 10,
              })
            } else {
              const minionCount = enraged ? 5 : 3
              for (let index = 0; index < minionCount; index += 1) {
                engine.enemies.push({
                  id: engine.nextEnemyId,
                  kind: "cluster",
                  x: enemy.x + (index - (minionCount - 1) / 2) * 22,
                  y: enemy.y + 34 + Math.abs(index - (minionCount - 1) / 2) * 8,
                  width: 15,
                  height: 13,
                  health: 1,
                  maxHealth: 1,
                  speed: 78 + engine.level * 3,
                  phase: index * 0.7,
                  nextShotAt: Number.POSITIVE_INFINITY,
                  hitUntil: 0,
                  variant: index % 3,
                  lastRippleId: 0,
                  lastArmId: 0,
                  chargeState: "idle",
                  chargeAt: 0,
                  chargeTargetX: 0,
                })
                engine.nextEnemyId += 1
              }
              engine.bullets.push({
                x: enemy.x,
                y: enemy.y + 30,
                vx: Math.max(
                  -80,
                  Math.min(80, (engine.ship.x - enemy.x) * 0.22)
                ),
                vy: bossBulletSpeed,
                enemy: true,
              })
            }
            const baseDelay =
              enemy.variant >= 2 ? 2_250 : enemy.variant === 1 ? 1_450 : 1_080
            enemy.nextShotAt =
              now +
              Math.max(650, baseDelay - engine.level * 24 - (enraged ? 180 : 0))
          }
        } else {
          if (enemy.kind === "shooter") {
            enemy.y = Math.min(185, enemy.y + enemy.speed * delta)
            enemy.x += Math.sin(enemy.phase * 2.2) * 34 * delta
          } else if (enemy.kind === "sentry") {
            enemy.y = Math.min(225, enemy.y + enemy.speed * delta)
            const sentryEase = 1 - Math.exp(-delta * 2.8)
            enemy.x += (engine.ship.x - enemy.x) * sentryEase * 0.42
            enemy.x += Math.sin(enemy.phase * 3.2) * 24 * delta
          } else {
            enemy.y += enemy.speed * (enemy.kind === "diver" ? 1.45 : 1) * delta
          }
          if (enemy.kind === "zigzag")
            enemy.x += Math.sin(enemy.phase * 5) * 78 * delta
          if (enemy.kind === "cluster")
            enemy.x += Math.sin(enemy.phase * 4.4) * 96 * delta
          if (enemy.kind === "diver") {
            enemy.x +=
              Math.max(-90, Math.min(90, engine.ship.x - enemy.x)) *
              delta *
              0.75
          }
          if (
            (enemy.kind === "tank" ||
              enemy.kind === "shooter" ||
              enemy.kind === "sentry") &&
            now >= enemy.nextShotAt
          ) {
            const aimed = enemy.kind === "shooter" || enemy.kind === "sentry"
            const aimX = aimed
              ? Math.max(
                  -125,
                  Math.min(
                    125,
                    (engine.ship.x - enemy.x) *
                      (enemy.kind === "sentry" ? 0.5 : 0.35)
                  )
                )
              : 0
            engine.bullets.push({
              x: enemy.x,
              y: enemy.y + 18,
              vx: 0,
              vy: 155,
              enemy: true,
            })
            if (aimed) {
              engine.bullets[engine.bullets.length - 1].vx = aimX
              engine.bullets[engine.bullets.length - 1].vy =
                enemy.kind === "sentry" ? 195 : 175
            }
            enemy.nextShotAt =
              now +
              (enemy.kind === "sentry"
                ? 1_050
                : enemy.kind === "shooter"
                  ? 1_350
                  : 1_900)
          }
        }
      })

      const consumedBullets = new Set<Bullet>()
      const destroyedEnemies = new Set<Enemy>()
      const destroyEnemy = (enemy: Enemy) => {
        if (destroyedEnemies.has(enemy)) return
        destroyedEnemies.add(enemy)
        const boss = enemy.kind === "boss"
        const scoreByKind: Record<EnemyKind, number> = {
          drone: 100,
          zigzag: 140,
          tank: 250,
          shooter: 220,
          diver: 180,
          cluster: 45,
          sentry: 320,
          boss: 3_500,
        }
        engine.score += scoreByKind[enemy.kind]
        if (!boss) {
          burst(
            engine,
            enemy.x,
            enemy.y,
            enemy.kind === "cluster" ? 8 : 18,
            115
          )
        }
        if (now - engine.lastDestroyedSoundAt > 45) {
          playGameSound(audioRef.current, "enemyDestroyed")
          engine.lastDestroyedSoundAt = now
        }
        engine.shakeUntil = now + (boss ? 620 : 150)
        engine.shakeStrength = boss ? 18 : 8

        if (boss) {
          engine.slowMotionUntil = Math.max(engine.slowMotionUntil, now + 950)
          engine.bossDestructions.push({
            x: enemy.x,
            y: enemy.y,
            startedAt: now,
            until: now + 1_250,
          })
          if (engine.bossNumber >= 3) {
            engine.permanentStackLimit = engine.bossNumber - 2
            promoteBossPermanentStacks(engine, now)
            engine.pickupNotice = {
              label: `PERMANENT STACK LIMIT ${engine.permanentStackLimit}`,
              until: now + 2_400,
            }
          }
          engine.bossActive = false
          engine.level += 1
          engine.levelKills = 0
          engine.nextSpawnAt = now + 1_800
          return
        }

        engine.levelKills += 1
        const dropChance = enemy.kind === "cluster" ? 0.06 : 0.28
        if (Math.random() < dropChance) {
          const kinds: PowerUpKind[] = [
            "rapid",
            "spread",
            "shield",
            "health",
            "laser",
            "rocket",
          ]
          const availableKinds = kinds.filter((kind) =>
            kind === "health"
              ? engine.ship.health < 100
              : engine.powerStacks.filter((stack) => stack === kind).length <
                POWER_LIMITS[kind]
          )
          if (availableKinds.length > 0) {
            engine.powerUps.push({
              x: enemy.x,
              y: enemy.y,
              kind: availableKinds[
                Math.floor(Math.random() * availableKinds.length)
              ],
              speed: 18,
              phase: Math.random() * Math.PI * 2,
              expiresAt: now + POWER_UP_LIFETIME_MS,
            })
          }
        }
        const targetKills = 8 + engine.level * 2
        if (engine.levelKills >= targetKills) {
          engine.levelKills = 0
          engine.level += 1
        }
      }

      if (now < engine.ripple.until) {
        const progress = Math.max(
          0,
          Math.min(1, (now - engine.ripple.startedAt) / RIPPLE_DURATION_MS)
        )
        const radius = (1 - Math.pow(1 - progress, 3)) * 520
        engine.meteors = engine.meteors.filter((meteor) => {
          if (
            meteor.state !== "active" ||
            Math.hypot(meteor.x - engine.ripple.x, meteor.y - engine.ripple.y) >
              radius + meteor.size / 2
          )
            return true
          burst(engine, meteor.x, meteor.y, 64, 340, 4.5)
          engine.shakeUntil = Math.max(engine.shakeUntil, now + 360)
          engine.shakeStrength = Math.max(engine.shakeStrength, 13)
          playGameSound(audioRef.current, "enemyDestroyed")
          return false
        })
        engine.enemies.forEach((enemy) => {
          if (
            destroyedEnemies.has(enemy) ||
            enemy.lastRippleId === engine.ripple.id
          )
            return
          if (
            Math.hypot(enemy.x - engine.ripple.x, enemy.y - engine.ripple.y) >
            radius + enemy.width / 2
          )
            return
          enemy.lastRippleId = engine.ripple.id
          enemy.health -= enemy.kind === "boss" ? 92 : 74
          enemy.hitUntil = now + 160
          burst(engine, enemy.x, enemy.y, enemy.kind === "boss" ? 24 : 14, 145)
          if (enemy.health <= 0) destroyEnemy(enemy)
        })
      }

      if (now < engine.armAttack.until) {
        const progress = Math.max(
          0,
          Math.min(1, (now - engine.armAttack.startedAt) / ARM_DURATION_MS)
        )
        const fistY = HEIGHT + 40 - getArmReach(progress)
        engine.enemies.forEach((enemy) => {
          if (
            destroyedEnemies.has(enemy) ||
            enemy.lastArmId === engine.armAttack.id ||
            Math.abs(enemy.x - engine.armAttack.x) > enemy.width / 2 + 68 ||
            enemy.y < fistY - 58
          )
            return
          enemy.lastArmId = engine.armAttack.id
          enemy.health -= enemy.kind === "boss" ? 145 : 999
          enemy.hitUntil = now + 220
          burst(engine, enemy.x, enemy.y, enemy.kind === "boss" ? 30 : 20, 180)
          if (enemy.health <= 0) destroyEnemy(enemy)
        })
        engine.powerUps.forEach((powerUp) => {
          if (
            Math.abs(powerUp.x - engine.armAttack.x) > 76 ||
            powerUp.y < fistY - 58
          )
            return
          burst(engine, powerUp.x, powerUp.y, 8, 70)
          powerUp.x = engine.ship.x
          powerUp.y = engine.ship.y
        })
      }

      engine.bullets
        .filter((bullet) => !bullet.enemy)
        .forEach((bullet) => {
          const enemy = engine.enemies.find(
            (target) =>
              !destroyedEnemies.has(target) &&
              overlaps(
                bullet.x,
                bullet.y,
                4,
                9,
                target.x,
                target.y,
                target.kind === "boss" ? target.width : target.width * 0.7,
                target.kind === "boss" ? target.height : target.height * 0.7
              )
          )
          if (!enemy) return
          consumedBullets.add(bullet)
          enemy.health -= bullet.rocket ? 8 : 1
          enemy.hitUntil = now + 75
          engine.shakeUntil = now + 72
          engine.shakeStrength = enemy.kind === "boss" ? 7 : 4
          burst(
            engine,
            bullet.x,
            bullet.y,
            bullet.rocket ? 20 : enemy.kind === "boss" ? 9 : 6,
            bullet.rocket ? 125 : 52
          )
          if (now - engine.lastCollisionSoundAt > 34) {
            playGameSound(audioRef.current, "collision")
            engine.lastCollisionSoundAt = now
          }
          if (bullet.rocket) {
            engine.enemies.forEach((nearby) => {
              if (nearby === enemy || destroyedEnemies.has(nearby)) return
              if (Math.hypot(nearby.x - enemy.x, nearby.y - enemy.y) > 46)
                return
              nearby.health -= 3
              nearby.hitUntil = now + 100
              burst(engine, nearby.x, nearby.y, 6, 70)
              if (nearby.health <= 0) destroyEnemy(nearby)
            })
          }
          if (enemy.health > 0) return

          destroyEnemy(enemy)
        })

      engine.companions.forEach((companion) => {
        if (now >= companion.activeUntil || now >= companion.laserUntil) return
        engine.enemies.forEach((enemy) => {
          if (
            destroyedEnemies.has(enemy) ||
            enemy.y > companion.y ||
            Math.abs(enemy.x - companion.x) > enemy.width / 2 + 5
          )
            return
          enemy.health -= 17 * delta
          if (now >= enemy.hitUntil) {
            enemy.hitUntil = now + 85
            burst(engine, companion.x, enemy.y, 4, 36)
          }
          if (enemy.health <= 0) destroyEnemy(enemy)
        })
      })

      engine.bullets
        .filter((bullet) => bullet.enemy && !bullet.expired)
        .forEach((bullet) => {
          if (now < engine.ship.invulnerableUntil) return
          const shieldActive = engine.powerStacks.includes("shield")
          const hitWidth = shieldActive ? 48 : 24
          const hitHeight = shieldActive ? 54 : 30
          if (
            !overlaps(
              bullet.x,
              bullet.y,
              7,
              7,
              engine.ship.x,
              engine.ship.y,
              hitWidth,
              hitHeight
            )
          )
            return
          consumedBullets.add(bullet)
          if (!shieldActive) {
            engine.ship.health = Math.max(0, engine.ship.health - 12)
          }
          engine.ship.invulnerableUntil = now + (shieldActive ? 160 : 650)
          engine.shakeUntil = now + (shieldActive ? 90 : 240)
          engine.shakeStrength = shieldActive ? 5 : 12
          burst(
            engine,
            bullet.x,
            bullet.y,
            shieldActive ? 8 : 14,
            shieldActive ? 70 : 130
          )
          playGameSound(audioRef.current, "playerHit")
          triggerHaptic(shieldActive ? 24 : 68, engine.hapticsEnabled)
        })

      const collidedMeteors = new Set<Meteor>()
      engine.meteors.forEach((meteor) => {
        if (
          meteor.state !== "active" ||
          now < engine.ship.invulnerableUntil ||
          !overlaps(
            meteor.x,
            meteor.y,
            meteor.size,
            meteor.size,
            engine.ship.x,
            engine.ship.y,
            engine.powerStacks.includes("shield") ? 48 : 24,
            engine.powerStacks.includes("shield") ? 54 : 30
          )
        )
          return
        const shieldActive = engine.powerStacks.includes("shield")
        let shieldShattered = false
        if (shieldActive) {
          engine.meteorShieldHits += 1
          if (engine.meteorShieldHits >= 3) {
            engine.powerExpiresAt.shield = []
            engine.powerStacks = engine.powerStacks.filter(
              (kind) => kind !== "shield"
            )
            engine.meteorShieldHits = 0
            shieldShattered = true
            engine.pickupNotice = {
              label: "SHIELD SHATTERED BY METEORS",
              until: now + 1_800,
            }
            burst(engine, engine.ship.x, engine.ship.y, 36, 185)
          } else {
            engine.pickupNotice = {
              label: `SHIELD METEOR IMPACT ${engine.meteorShieldHits}/3`,
              until: now + 1_150,
            }
          }
        } else {
          engine.ship.health = Math.max(0, engine.ship.health - 46)
        }
        engine.ship.invulnerableUntil = now + (shieldActive ? 300 : 1_050)
        engine.shakeUntil = now + 620
        engine.shakeStrength = shieldActive ? 13 : 22
        burst(engine, meteor.x, meteor.y, shieldActive ? 24 : 42, 210)
        playGameSound(audioRef.current, "playerHit")
        triggerHaptic(
          shieldShattered
            ? [85, 30, 110]
            : shieldActive
              ? [38, 24, 38]
              : [125, 35, 75],
          engine.hapticsEnabled
        )
        collidedMeteors.add(meteor)
      })
      engine.meteors = engine.meteors.filter(
        (meteor) => !collidedMeteors.has(meteor)
      )

      engine.enemies.forEach((enemy) => {
        if (destroyedEnemies.has(enemy)) return
        if (enemy.y > HEIGHT + 45) {
          destroyedEnemies.add(enemy)
          if (enemy.kind !== "boss")
            engine.ship.health = Math.max(0, engine.ship.health - 8)
          return
        }
        if (now < engine.ship.invulnerableUntil) return
        const shieldStacks = engine.powerStacks.filter(
          (kind) => kind === "shield"
        ).length
        const shieldActive = shieldStacks > 0
        if (
          !overlaps(
            enemy.x,
            enemy.y,
            enemy.kind === "boss" ? enemy.width : enemy.width * 0.7,
            enemy.kind === "boss" ? enemy.height : enemy.height * 0.7,
            engine.ship.x,
            engine.ship.y,
            shieldActive ? 48 : 24,
            shieldActive ? 54 : 30
          )
        )
          return

        if (shieldActive) {
          enemy.health -=
            enemy.kind === "boss" ? 12 * shieldStacks : enemy.health
          burst(engine, enemy.x, enemy.y, enemy.kind === "boss" ? 16 : 12, 120)
          if (enemy.health <= 0) destroyEnemy(enemy)
        } else {
          destroyedEnemies.add(enemy)
          engine.ship.health = Math.max(
            0,
            engine.ship.health - (enemy.kind === "boss" ? 35 : 18)
          )
        }
        engine.ship.invulnerableUntil = now + (shieldActive ? 240 : 850)
        engine.shakeUntil = now + (shieldActive ? 130 : 320)
        engine.shakeStrength = shieldActive ? 8 : 15
        if (!shieldActive) burst(engine, engine.ship.x, engine.ship.y, 18, 150)
        playGameSound(audioRef.current, "playerHit")
        triggerHaptic(
          shieldActive ? 30 : enemy.kind === "boss" ? [110, 35, 90] : 82,
          engine.hapticsEnabled
        )
      })

      engine.powerUps = engine.powerUps.filter((powerUp) => {
        if (
          engine.ship.destroyedUntil === 0 &&
          overlaps(
            powerUp.x,
            powerUp.y,
            16,
            16,
            engine.ship.x,
            engine.ship.y,
            30,
            36
          )
        ) {
          if (powerUp.kind === "arm") {
            engine.armCharges = 1
            setArmReady(true)
            engine.pickupNotice = {
              label: "TITAN ARM READY · PRESS R",
              until: now + 2_000,
            }
          } else if (powerUp.kind === "health") {
            engine.ship.health = Math.min(100, engine.ship.health + 24)
            engine.pickupNotice = {
              label: "LIFE CORE RESTORED",
              until: now + 1_650,
            }
          } else {
            const currentStacks = engine.powerStacks.filter(
              (kind) => kind === powerUp.kind
            ).length
            if (currentStacks < POWER_LIMITS[powerUp.kind]) {
              const shipLong = SHIP_LONG_POWER_KINDS.includes(powerUp.kind)
              const permanentStacks = engine.powerExpiresAt[
                powerUp.kind
              ].filter((expiresAt) => !Number.isFinite(expiresAt)).length
              const bossPermanent =
                BOSS_PERMANENT_POWER_KINDS.includes(powerUp.kind) &&
                permanentStacks < engine.permanentStackLimit
              const unexpiring = shipLong || bossPermanent
              const effectUntil = unexpiring
                ? Number.POSITIVE_INFINITY
                : now + POWER_EFFECT_MS
              engine.powerStacks.push(powerUp.kind)
              engine.powerExpiresAt[powerUp.kind].push(effectUntil)
              if (powerUp.kind === "laser") {
                const companion = engine.companions.find(
                  (entry) => now >= entry.activeUntil
                )
                if (companion) {
                  companion.activeUntil = effectUntil
                  companion.nextLaserAt =
                    now + LASER_CHARGE_MS + currentStacks * 550
                  companion.laserUntil = 0
                }
              }
              engine.pickupNotice = {
                label: `${POWER_NAMES[powerUp.kind]} ${currentStacks + 1}/${POWER_LIMITS[powerUp.kind]} · ${shipLong ? "SHIP-LONG" : bossPermanent ? "PERMANENT" : "30 SEC"}`,
                until: now + 1_650,
              }
            } else {
              engine.score += 150
              engine.pickupNotice = {
                label: `${POWER_NAMES[powerUp.kind]} MAX`,
                until: now + 1_250,
              }
            }
          }
          burst(engine, powerUp.x, powerUp.y, 16, 125)
          playGameSound(audioRef.current, "powerup")
          return false
        }
        return powerUp.y < HEIGHT + 24 && now < powerUp.expiresAt
      })
      engine.powerUps = engine.powerUps.filter((powerUp) => {
        if (powerUp.kind === "arm") return true
        if (powerUp.kind === "health") return engine.ship.health < 100
        return (
          engine.powerStacks.filter((kind) => kind === powerUp.kind).length <
          POWER_LIMITS[powerUp.kind]
        )
      })

      engine.survivors = engine.survivors.filter((survivor) => {
        if (
          engine.ship.destroyedUntil === 0 &&
          overlaps(
            survivor.x,
            survivor.y,
            18,
            30,
            engine.ship.x,
            engine.ship.y,
            36,
            42
          )
        ) {
          engine.rescued += 1
          engine.score += 500
          const earnedTitanArm = engine.rescued % 5 === 0
          if (earnedTitanArm) {
            engine.armCharges = 1
            setArmReady(true)
            engine.pickupNotice = {
              label: "5 RESCUED · TITAN ARM READY",
              until: now + 2_000,
            }
          } else {
            engine.pickupNotice = {
              label: "SURVIVOR RESCUED",
              until: now + 1_650,
            }
          }
          burst(engine, survivor.x, survivor.y, 22, 105)
          playGameSound(audioRef.current, "powerup")
          return false
        }
        return survivor.y < HEIGHT + 42
      })
      engine.enemies = engine.enemies.filter(
        (enemy) => !destroyedEnemies.has(enemy)
      )
      engine.bullets = engine.bullets.filter(
        (bullet) =>
          !bullet.expired &&
          !consumedBullets.has(bullet) &&
          bullet.y > -30 &&
          bullet.y < HEIGHT + 30 &&
          bullet.x > -30 &&
          bullet.x < WIDTH + 30
      )
      engine.particles = engine.particles.filter(
        (particle) => particle.life > 0
      )
      engine.bossDestructions = engine.bossDestructions.filter(
        (destruction) => now < destruction.until
      )

      if (!engine.bossActive && engine.score >= engine.nextBossScore) {
        engine.bossActive = true
        engine.bossNumber += 1
        engine.nextBossScore += 8_000 + engine.bossNumber * 3_500
        engine.enemies = []
        engine.bullets = engine.bullets.filter((bullet) => !bullet.enemy)
        spawnEnemy(engine, now, "boss")
        playGameSound(audioRef.current, "boss")
      }

      if (now - engine.lastUiUpdateAt > 140) {
        const remaining = Math.max(0, engine.ripple.readyAt - now)
        setSpecialStatus({
          ready: remaining === 0,
          seconds: Math.ceil(remaining / 1_000),
          progress:
            remaining === 0
              ? 1
              : Math.max(0, 1 - remaining / RIPPLE_COOLDOWN_MS),
        })
        setArmProgress(engine.rescued % 5)
        engine.lastUiUpdateAt = now
      }

      if (engine.ship.health <= 0) {
        if (engine.ship.destroyedUntil === 0) {
          const destroyedX = engine.ship.x
          const destroyedY = engine.ship.y
          const lostPowerUps = [...engine.powerStacks]
          if (engine.armCharges > 0) lostPowerUps.push("arm")
          const boss = engine.enemies.find((enemy) => enemy.kind === "boss")

          engine.ship.destroyedAt = now
          engine.ship.destroyedUntil = now + 1_350
          engine.ship.vx = 0
          engine.ship.vy = 0
          engine.ship.targetX = null
          engine.ship.targetY = null
          engine.ship.invulnerableUntil = Number.POSITIVE_INFINITY
          engine.powerStacks = []
          STACKABLE_POWER_KINDS.forEach((kind) => {
            engine.powerExpiresAt[kind] = []
          })
          engine.companions.forEach((companion) => {
            companion.activeUntil = 0
            companion.laserUntil = 0
            companion.nextLaserAt = 0
          })
          engine.armCharges = 0
          engine.meteorShieldHits = 0
          engine.meteors = []
          engine.bullets = engine.bullets.filter((bullet) => !bullet.enemy)
          engine.powerUps = []
          if (engine.bossActive && engine.revivesRemaining > 0) {
            lostPowerUps.forEach((kind, index) => {
              let x = 38 + Math.random() * (WIDTH - 76)
              let y = 255 + Math.random() * (HEIGHT - 365)
              for (
                let attempt = 0;
                attempt < 8 && boss && Math.hypot(x - boss.x, y - boss.y) < 145;
                attempt += 1
              ) {
                x = 38 + Math.random() * (WIDTH - 76)
                y = 255 + Math.random() * (HEIGHT - 365)
              }
              engine.powerUps.push({
                x,
                y,
                kind,
                speed: 0,
                phase: index * 0.7,
                expiresAt: Number.POSITIVE_INFINITY,
                fixed: true,
              })
            })
          }
          engine.pickupNotice = {
            label:
              engine.bossActive && lostPowerUps.length > 0
                ? "SHIP DESTROYED · UPGRADES SCATTERED"
                : "SHIP DESTROYED · RECONSTRUCTING",
            until: now + 1_300,
          }
          setArmReady(false)
          burst(engine, destroyedX, destroyedY, 62, 245)
          engine.shakeUntil = now + 650
          engine.shakeStrength = 24
          playGameSound(audioRef.current, "playerHit")
          triggerHaptic([140, 45, 180], engine.hapticsEnabled)
        }

        if (now < engine.ship.destroyedUntil) {
          render(context, engine, now)
          engine.animationFrame = requestAnimationFrame(frame)
          return
        }

        if (engine.revivesRemaining > 0) {
          engine.revivesRemaining -= 1
          engine.ship.health = 100
          engine.ship.x = WIDTH / 2
          engine.ship.y = HEIGHT - 76
          engine.ship.vx = 0
          engine.ship.vy = 0
          engine.ship.targetX = null
          engine.ship.targetY = null
          engine.ship.invulnerableUntil = now + 2_500
          engine.ship.destroyedAt = 0
          engine.ship.destroyedUntil = 0
          engine.pickupNotice = {
            label: `SHIP RESTORED · ${engine.revivesRemaining} REVIVES LEFT`,
            until: now + 2_400,
          }
          playGameSound(audioRef.current, "powerup")
        } else {
          render(context, engine, now)
          setFinalScore(engine.score)
          setCompletedRunNumber((current) => current + 1)
          setPhase("gameover")
          trackInBackground(recordGameOver("void-patrol", engine.score))
          return
        }
      }
      render(context, engine, now)
      engine.animationFrame = requestAnimationFrame(frame)
    }

    engine.animationFrame = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(engine.animationFrame)
  }, [phase])

  useEffect(() => {
    return () => {
      if (audioRef.current && audioRef.current.state !== "closed") {
        void audioRef.current.close()
      }
    }
  }, [])

  useEffect(() => {
    if (phase !== "playing") return undefined
    const keyMap: Record<string, string> = {
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
    const down = (event: KeyboardEvent) => {
      engineRef.current.targetTimeScale = 1
      resumeGameAudio()
      if (event.key === "r" || event.key === "R") {
        event.preventDefault()
        activateArm()
        return
      }
      if (event.code === "Space" || event.key === "e" || event.key === "E") {
        event.preventDefault()
        activateSpecial()
        return
      }
      const key = keyMap[event.key]
      if (!key) return
      event.preventDefault()
      if (engineRef.current.ship.destroyedUntil > engineRef.current.gameTime)
        return
      engineRef.current.keys.add(key)
    }
    const up = (event: KeyboardEvent) => {
      const key = keyMap[event.key]
      if (!key) return
      event.preventDefault()
      engineRef.current.keys.delete(key)
    }
    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)
    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)
      engineRef.current.keys.clear()
    }
  }, [activateArm, activateSpecial, phase, resumeGameAudio])

  useEffect(() => {
    if (phase !== "playing") return undefined
    const pauseGame = () => {
      engineRef.current.targetTimeScale = 0
      pauseGameAudio()
    }
    window.addEventListener("blur", pauseGame)
    return () => window.removeEventListener("blur", pauseGame)
  }, [pauseGameAudio, phase])

  const moveShipToPointer = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    if (phase !== "playing") return
    if (engineRef.current.ship.destroyedUntil > engineRef.current.gameTime)
      return
    event.preventDefault()
    const bounds = event.currentTarget.getBoundingClientRect()
    engineRef.current.ship.targetX =
      ((event.clientX - bounds.left) / bounds.width) * WIDTH
    engineRef.current.ship.targetY =
      ((event.clientY - bounds.top) / bounds.height) * HEIGHT
  }

  const selectPaletteColor = useCallback(
    (channel: "main" | "ship" | "enemy" | "power", option: ColorOption) => {
      const engineColors = engineRef.current.colors
      if (channel === "main") {
        setSelectedColor(option)
        GAME_COLORS.cream = option.color
        GAME_COLORS.dimCream = option.dim
        engineColors.cream = option.color
        engineColors.dimCream = option.dim
      } else if (channel === "ship") {
        setShipColor(option)
        GAME_COLORS.ship = option.color
        GAME_COLORS.shipDim = option.dim
        engineColors.ship = option.color
        engineColors.shipDim = option.dim
      } else if (channel === "enemy") {
        setEnemyColor(option)
        GAME_COLORS.enemy = option.color
        GAME_COLORS.enemyDim = option.dim
        engineColors.enemy = option.color
        engineColors.enemyDim = option.dim
      } else {
        setPowerColor(option)
        GAME_COLORS.power = option.color
        GAME_COLORS.powerDim = option.dim
        engineColors.power = option.color
        engineColors.powerDim = option.dim
      }
    },
    []
  )

  const colorGroups: Array<{
    id: "main" | "ship" | "enemy" | "power"
    label: string
    selected: ColorOption
  }> = [
    { id: "main", label: "Main / HUD color", selected: selectedColor },
    { id: "ship", label: "Spaceship color", selected: shipColor },
    { id: "enemy", label: "Enemy color", selected: enemyColor },
    { id: "power", label: "Power-up color", selected: powerColor },
  ]

  return (
    <div
      className="space-game-shell"
      style={
        {
          "--game-color": selectedColor.color,
          "--game-color-dim": selectedColor.dim,
        } as CSSProperties
      }
    >
      <div className="space-game-bezel">
        <div className="space-game-top-controls" aria-label="Game settings">
          <button
            type="button"
            className="space-game-special space-game-settings-trigger"
            aria-haspopup="dialog"
            aria-expanded={settingsOpen}
            onClick={openSettings}
          >
            <IconSettings aria-hidden="true" />
            <span>SETTINGS</span>
          </button>
        </div>
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          tabIndex={0}
          aria-label="Monochrome pixel space shooter. Move with WASD, arrow keys, or drag the ship on touch screens. Firing is automatic."
          onPointerDown={(event) => {
            engineRef.current.targetTimeScale = 1
            resumeGameAudio()
            event.currentTarget.setPointerCapture(event.pointerId)
            moveShipToPointer(event)
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId))
              moveShipToPointer(event)
          }}
          onPointerUp={(event) => {
            if (event.pointerType === "touch") {
              engineRef.current.targetTimeScale = 0
              pauseGameAudio()
            }
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId)
            }
          }}
          onPointerCancel={(event) => {
            if (event.pointerType === "touch") {
              engineRef.current.targetTimeScale = 0
              pauseGameAudio()
            }
          }}
        />
        <button
          type="button"
          className="space-game-ability space-game-ability-ripple"
          style={
            {
              "--ability-progress": `${specialStatus.progress * 100}%`,
            } as CSSProperties
          }
          disabled={phase !== "playing" || !specialStatus.ready}
          aria-label={
            specialStatus.ready
              ? "Activate Nova Ripple"
              : `Nova Ripple charging, ${specialStatus.seconds} seconds`
          }
          title={
            specialStatus.ready
              ? "Nova Ripple · Space"
              : `Charging · ${specialStatus.seconds}s`
          }
          onClick={() => {
            engineRef.current.targetTimeScale = 1
            resumeGameAudio()
            activateSpecial()
          }}
        >
          <IconRipple aria-hidden="true" />
        </button>
        <button
          type="button"
          className="space-game-ability space-game-ability-arm"
          style={
            {
              "--ability-progress": `${(armReady ? 1 : armProgress / 5) * 100}%`,
            } as CSSProperties
          }
          disabled={phase !== "playing" || !armReady}
          aria-label={
            armReady
              ? "Activate Titan Arm"
              : `Titan Arm progress, ${armProgress} of 5 survivors rescued`
          }
          title={armReady ? "Titan Arm · R" : `${armProgress}/5 rescued`}
          onClick={() => {
            engineRef.current.targetTimeScale = 1
            resumeGameAudio()
            activateArm()
          }}
        >
          <IconHandRock aria-hidden="true" />
        </button>
        {phase !== "playing" && (
          <div className="space-game-overlay">
            <p>NA/10 DEEP SPACE UNIT</p>
            <h3>{phase === "gameover" ? "SIGNAL LOST" : "VOID PATROL"}</h3>
            {phase === "gameover" ? (
              <strong>FINAL SCORE {NUMBER_FORMATTER.format(finalScore)}</strong>
            ) : (
              <span>
                Infinite ammo · ship-long weapon upgrades · three revives ·
                score-triggered bosses
              </span>
            )}
            <LeaderboardDialog gameId="void-patrol" gameName="Void Patrol" />
            <button type="button" onClick={startGame}>
              {phase === "gameover" ? "REBOOT MISSION" : "START MISSION"}
            </button>
          </div>
        )}
      </div>
      <div className="space-game-controls-row">
        <p className="space-game-help">
          AUTO FIRE · WASD / ARROWS TO MOVE · TITAN ARM EVERY 5 SAVED
        </p>
      </div>
      {settingsOpen && (
        <div className="space-game-settings-backdrop" role="presentation">
          <section
            className="space-game-settings-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="space-game-settings-title"
          >
            <div className="space-game-settings-heading">
              <div>
                <p>VOID PATROL SYSTEM</p>
                <h3 id="space-game-settings-title">SETTINGS</h3>
              </div>
              <button
                type="button"
                onClick={closeSettings}
                aria-label="Close game settings"
              >
                CLOSE
              </button>
            </div>

            <div className="space-game-color-groups">
              {colorGroups.map((group) => (
                <fieldset key={group.id} className="space-game-color-options">
                  <legend>{group.label}</legend>
                  <select
                    value={group.selected.id}
                    aria-label={group.label}
                    onChange={(event) => {
                      const option = COLOR_OPTIONS.find(
                        (entry) => entry.id === event.target.value
                      )
                      if (option) selectPaletteColor(group.id, option)
                    }}
                  >
                    {COLOR_OPTIONS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </fieldset>
              ))}
            </div>

            <div className="space-game-settings-options">
              <button type="button" aria-pressed={!muted} onClick={toggleSound}>
                {muted ? (
                  <IconVolumeOff aria-hidden="true" />
                ) : (
                  <IconVolume aria-hidden="true" />
                )}
                <span>SOUND</span>
                <strong>{muted ? "OFF" : "ON"}</strong>
              </button>
              <button
                type="button"
                aria-pressed={hapticsEnabled}
                onClick={toggleHaptics}
              >
                {hapticsEnabled ? (
                  <IconDeviceMobileVibration aria-hidden="true" />
                ) : (
                  <IconDeviceMobileOff aria-hidden="true" />
                )}
                <span>HAPTICS</span>
                <strong>{hapticsEnabled ? "ON" : "OFF"}</strong>
              </button>
            </div>
          </section>
        </div>
      )}
      {phase === "gameover" ? (
        <ScoreSubmissionDialog
          key={completedRunNumber}
          gameId="void-patrol"
          gameName="Void Patrol"
          score={finalScore}
        />
      ) : null}
    </div>
  )
}
