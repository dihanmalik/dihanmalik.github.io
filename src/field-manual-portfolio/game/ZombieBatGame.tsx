import { useCallback, useEffect, useRef, useState } from "react"
import type { FormEvent, PointerEvent as ReactPointerEvent } from "react"
import { observer } from "mobx-react-lite"

import { cn } from "@/lib/utils"

import "./zombie-game.css"
import { zombieGameStore } from "./zombieGameStore"

type GamePhase = "setup" | "playing" | "gameover"
type Direction = "left" | "right" | "up" | "down"
type ZombieKind = "regular" | "boss"
type WeaponKind = "bat" | "shotgun" | "bazooka" | "laser"
type ProjectileKind = Exclude<WeaponKind, "bat"> | "rocket"
type PickupKind = Exclude<WeaponKind, "bat"> | "shield" | "rocket" | "dog"

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
  ring: boolean
}

type Projectile = {
  x: number
  y: number
  vx: number
  vy: number
  damage: number
  kind: ProjectileKind
  hitZombieIds: number[]
  expired?: boolean
}

type BloodParticle = {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  createdAt: number
  expiresAt: number
}

type BloodStain = {
  id: number
  x: number
  y: number
  size: number
  createdAt: number
  expiresAt: number
  rotation: number
}

type PowerBox = {
  x: number
  y: number
  kind: PickupKind
  expiresAt: number
  phase: number
}

type DogCompanion = {
  x: number
  y: number
  facingX: number
  facingY: number
  nextAttackAt: number
  attackingUntil: number
}

type GameEngine = {
  width: number
  height: number
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
  bloodParticles: BloodParticle[]
  bloodStains: BloodStain[]
  projectiles: Projectile[]
  powerBox: PowerBox | null
  weapon: { kind: WeaponKind; ammo: number }
  shieldUntil: number
  nextShieldDamageAt: number
  rocketExpiries: number[]
  nextRocketVolleyAt: number
  dog: DogCompanion | null
  dogUntil: number
  nextPowerBoxAt: number
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
  shakeUntil: number
  shakeStrength: number
  lastHitSoundAt: number
  animationFrame: number
}

const GAME_WIDTH = 320
const GAME_HEIGHT = 180
const PLAYER_SPEED = 94
const BAT_SWING_DURATION = 360
const WEAPON_AMMO: Record<Exclude<WeaponKind, "bat">, number> = {
  shotgun: 30,
  bazooka: 12,
  laser: 60,
}
const SHIELD_DURATION = 24_000
const ROCKET_DURATION = 36_000
const DOG_DURATION = 60_000
const POWER_BOX_LIFETIME = 10_000
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
  electric: "#74e9ff",
  powerBox: "#ffd166",
  blood: "#9e2635",
  bloodDark: "#641b27",
} as const

type ZombieSound = "swing" | "shot" | "hit" | "destroy" | "playerHit" | "pickup" | "shield" | "boss" | "gameover"
const lastBloodSoundAt = new WeakMap<AudioContext, number>()

function playZombieSound(context: AudioContext | null, sound: ZombieSound) {
  if (!context || context.state !== "running") return
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  const start = context.currentTime
  const settings: Record<ZombieSound, { from: number; to: number; duration: number; volume: number; wave: OscillatorType }> = {
    swing: { from: 180, to: 85, duration: 0.09, volume: 0.018, wave: "triangle" },
    shot: { from: 330, to: 95, duration: 0.11, volume: 0.026, wave: "square" },
    hit: { from: 125, to: 58, duration: 0.12, volume: 0.035, wave: "square" },
    destroy: { from: 210, to: 42, duration: 0.2, volume: 0.045, wave: "sawtooth" },
    playerHit: { from: 92, to: 32, duration: 0.28, volume: 0.06, wave: "sawtooth" },
    pickup: { from: 280, to: 720, duration: 0.22, volume: 0.035, wave: "square" },
    shield: { from: 520, to: 180, duration: 0.16, volume: 0.028, wave: "sine" },
    boss: { from: 74, to: 148, duration: 0.5, volume: 0.055, wave: "square" },
    gameover: { from: 155, to: 38, duration: 0.7, volume: 0.05, wave: "triangle" },
  }
  const setting = settings[sound]
  oscillator.type = setting.wave
  oscillator.frequency.setValueAtTime(setting.from, start)
  oscillator.frequency.exponentialRampToValueAtTime(setting.to, start + setting.duration)
  gain.gain.setValueAtTime(setting.volume, start)
  gain.gain.exponentialRampToValueAtTime(0.0001, start + setting.duration)
  oscillator.connect(gain).connect(context.destination)
  oscillator.start(start)
  oscillator.stop(start + setting.duration + 0.01)

  if (sound === "hit" || sound === "destroy") {
    const lastPlayedAt = lastBloodSoundAt.get(context) ?? -1
    const minimumGap = sound === "destroy" ? 0.025 : 0.045
    if (start - lastPlayedAt >= minimumGap) {
      lastBloodSoundAt.set(context, start)
      const duration = sound === "destroy" ? 0.24 : 0.115
      const noiseBuffer = context.createBuffer(
        1,
        Math.ceil(context.sampleRate * duration),
        context.sampleRate
      )
      const samples = noiseBuffer.getChannelData(0)
      for (let index = 0; index < samples.length; index += 1) {
        const progress = index / samples.length
        const envelope = Math.pow(1 - progress, sound === "destroy" ? 1.25 : 2.1)
        const pulse = 0.62 + Math.sin(progress * Math.PI * (sound === "destroy" ? 18 : 10)) * 0.38
        samples[index] = (Math.random() * 2 - 1) * envelope * pulse
      }

      const splatter = context.createBufferSource()
      const filter = context.createBiquadFilter()
      const splatterGain = context.createGain()
      splatter.buffer = noiseBuffer
      filter.type = "lowpass"
      filter.frequency.setValueAtTime(sound === "destroy" ? 620 : 880, start)
      filter.frequency.exponentialRampToValueAtTime(170, start + duration)
      filter.Q.value = sound === "destroy" ? 1.8 : 1.15
      splatterGain.gain.setValueAtTime(sound === "destroy" ? 0.052 : 0.026, start)
      splatterGain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
      splatter.connect(filter).connect(splatterGain).connect(context.destination)
      splatter.start(start)
      splatter.stop(start + duration + 0.01)
    }
  }
}

function startZombieMusic(context: AudioContext) {
  const scheduleLoop = () => {
    if (context.state !== "running") return
    const start = context.currentTime + 0.03
    const bass = [55, 55, 65.41, 49]
    bass.forEach((frequency, index) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const noteStart = start + index * 0.48
      oscillator.type = "sawtooth"
      oscillator.frequency.setValueAtTime(frequency, noteStart)
      gain.gain.setValueAtTime(0.018, noteStart)
      gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.38)
      oscillator.connect(gain).connect(context.destination)
      oscillator.start(noteStart)
      oscillator.stop(noteStart + 0.4)
    })
    ;[0, 0.48, 0.96, 1.44].forEach((offset, index) => {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = "square"
      oscillator.frequency.setValueAtTime(index % 2 === 0 ? 42 : 36, start + offset)
      gain.gain.setValueAtTime(0.012, start + offset)
      gain.gain.exponentialRampToValueAtTime(0.0001, start + offset + 0.1)
      oscillator.connect(gain).connect(context.destination)
      oscillator.start(start + offset)
      oscillator.stop(start + offset + 0.11)
    })
  }
  scheduleLoop()
  const interval = window.setInterval(scheduleLoop, 1_920)
  return () => window.clearInterval(interval)
}

function triggerZombieHaptic(pattern: number | number[]) {
  if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") return
  navigator.vibrate(pattern)
}

function createEngine(width = GAME_WIDTH, height = GAME_HEIGHT): GameEngine {
  return {
    width,
    height,
    player: {
      x: width / 2,
      y: height / 2,
      health: 100,
      facingX: 1,
      facingY: 0,
      hitFlashUntil: 0,
    },
    zombies: [],
    hitEffects: [],
    bloodParticles: [],
    bloodStains: [],
    projectiles: [],
    powerBox: null,
    weapon: { kind: "bat", ammo: 0 },
    shieldUntil: 0,
    nextShieldDamageAt: 0,
    rocketExpiries: [],
    nextRocketVolleyAt: 0,
    dog: null,
    dogUntil: 0,
    nextPowerBoxAt: 0,
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
    shakeUntil: 0,
    shakeStrength: 0,
    lastHitSoundAt: 0,
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
    x = Math.random() * engine.width
    y = margin
  } else if (edge === 1) {
    x = engine.width - margin
    y = Math.random() * engine.height
  } else if (edge === 2) {
    x = Math.random() * engine.width
    y = engine.height - margin
  } else {
    x = margin
    y = Math.random() * engine.height
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
  color: string,
  ring = false
) {
  engine.hitEffects.push({
    id: engine.nextEffectId,
    x,
    y,
    size,
    expiresAt: now + 180,
    color,
    ring,
  })
  engine.nextEffectId += 1
}

function scatterBlood(
  engine: GameEngine,
  x: number,
  y: number,
  now: number,
  count = 8,
  force = 22
) {
  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2
    const speed = force * (0.35 + Math.random() * 0.8)
    engine.bloodParticles.push({
      id: engine.nextEffectId,
      x: x + (Math.random() - 0.5) * 4,
      y: y + (Math.random() - 0.5) * 4,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() < 0.65 ? 1 : 2,
      createdAt: now,
      expiresAt: now + 320 + Math.random() * 260,
    })
    engine.nextEffectId += 1
  }
}

function addBloodStains(
  engine: GameEngine,
  x: number,
  y: number,
  now: number,
  isBoss: boolean
) {
  const count = isBoss ? 7 : 4
  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * (isBoss ? 13 : 7)
    engine.bloodStains.push({
      id: engine.nextEffectId,
      x: x + Math.cos(angle) * distance,
      y: y + Math.sin(angle) * distance,
      size: (isBoss ? 3 : 2) + Math.random() * (isBoss ? 5 : 3),
      createdAt: now,
      expiresAt: now + 14_000 + Math.random() * 7_000,
      rotation: Math.random() * Math.PI,
    })
    engine.nextEffectId += 1
  }
}

function drawBloodStains(
  context: CanvasRenderingContext2D,
  stains: BloodStain[],
  now: number
) {
  stains.forEach((stain) => {
    const fadeStart = stain.expiresAt - 4_000
    const alpha = now > fadeStart ? Math.max(0, (stain.expiresAt - now) / 4_000) : 0.62
    const growth = Math.min(1, (now - stain.createdAt) / 180)
    context.save()
    context.translate(Math.round(stain.x), Math.round(stain.y))
    context.rotate(stain.rotation)
    context.scale(1.45, 0.72)
    context.globalAlpha = alpha
    context.fillStyle = GAME_COLORS.bloodDark
    context.beginPath()
    context.arc(0, 0, stain.size * growth, 0, Math.PI * 2)
    context.fill()
    context.restore()
  })
}

function drawBloodParticles(
  context: CanvasRenderingContext2D,
  particles: BloodParticle[],
  now: number
) {
  particles.forEach((particle) => {
    const duration = particle.expiresAt - particle.createdAt
    const remaining = Math.max(0, particle.expiresAt - now) / duration
    context.globalAlpha = remaining
    context.fillStyle = remaining > 0.55 ? GAME_COLORS.blood : GAME_COLORS.bloodDark
    context.fillRect(
      Math.round(particle.x),
      Math.round(particle.y),
      particle.size,
      particle.size
    )
  })
  context.globalAlpha = 1
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

  if (engine.weapon.kind === "bat" && batPose.canHit) {
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

  if (engine.weapon.kind !== "bat") {
    const weaponAngle = Math.atan2(player.facingY, player.facingX)
    context.save()
    context.translate(x, y)
    context.rotate(weaponAngle)
    context.fillStyle = skinColor
    context.fillRect(3, -3, 5, 6)
    context.fillStyle = GAME_COLORS.ink
    const weaponLength = engine.weapon.kind === "shotgun" ? 23 : engine.weapon.kind === "laser" ? 21 : 18
    const weaponHeight = engine.weapon.kind === "bazooka" ? 7 : 4
    context.fillRect(6, -Math.floor(weaponHeight / 2), weaponLength, weaponHeight)
    context.fillStyle = engine.weapon.kind === "laser" ? GAME_COLORS.electric : GAME_COLORS.bat
    context.fillRect(9, -1, Math.max(5, weaponLength - 6), 2)
    if (engine.weapon.kind === "bazooka") {
      context.fillStyle = GAME_COLORS.cream
      context.fillRect(22, -3, 4, 6)
    }
    context.restore()
    return
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
    const radius = Math.round(
      effect.size * (effect.ring ? 1 - remaining * 0.65 : 1.35 - remaining * 0.35)
    )

    context.save()
    context.globalAlpha = remaining
    context.strokeStyle = effect.color
    context.lineWidth = 2
    context.beginPath()
    if (effect.ring) {
      context.arc(effect.x, effect.y, radius, 0, Math.PI * 2)
      context.stroke()
      context.restore()
      return
    }
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

function drawPowerBox(context: CanvasRenderingContext2D, box: PowerBox, now: number) {
  const pulse = 1 + Math.round((Math.sin(now * 0.008 + box.phase) + 1) * 1.5)
  context.save()
  context.translate(Math.round(box.x), Math.round(box.y))
  context.fillStyle = GAME_COLORS.ink
  context.fillRect(-10 - pulse, -10 - pulse, 20 + pulse * 2, 20 + pulse * 2)
  context.strokeStyle = GAME_COLORS.powerBox
  context.lineWidth = 2
  context.strokeRect(-9 - pulse, -9 - pulse, 18 + pulse * 2, 18 + pulse * 2)
  context.fillStyle = GAME_COLORS.powerBox
  context.fillRect(-7, -7, 14, 14)
  context.fillStyle = GAME_COLORS.ink
  context.font = "bold 7px monospace"
  context.textAlign = "center"
  const label: Record<PickupKind, string> = {
    shotgun: "SG",
    bazooka: "BZ",
    laser: "LS",
    shield: "SH",
    rocket: "RK",
    dog: "DG",
  }
  context.fillText(label[box.kind], 0, 3)
  context.restore()
}

function drawShield(context: CanvasRenderingContext2D, engine: GameEngine, now: number) {
  if (now >= engine.shieldUntil) return
  context.save()
  context.translate(Math.round(engine.player.x), Math.round(engine.player.y))
  context.strokeStyle = GAME_COLORS.electric
  context.lineWidth = 2
  context.globalAlpha = 0.6 + Math.sin(now * 0.025) * 0.22
  for (let arc = 0; arc < 3; arc += 1) {
    const start = now * 0.004 + arc * 2.1
    context.beginPath()
    context.arc(0, 0, 25 + (arc % 2) * 3, start, start + 1.35)
    context.stroke()
  }
  for (let spark = 0; spark < 6; spark += 1) {
    const angle = now * 0.006 + spark * (Math.PI / 3)
    const distance = 23 + Math.sin(now * 0.02 + spark) * 4
    context.fillStyle = GAME_COLORS.cream
    context.fillRect(Math.cos(angle) * distance - 1, Math.sin(angle) * distance - 1, 2, 2)
  }
  context.restore()
}

function drawDog(context: CanvasRenderingContext2D, engine: GameEngine, now: number) {
  const dog = engine.dog
  if (!dog || now >= engine.dogUntil) return
  const x = Math.round(dog.x)
  const y = Math.round(dog.y)
  const facing = dog.facingX < -0.2 ? -1 : 1
  const running = Math.floor(now / 100) % 2
  const lunging = now < dog.attackingUntil

  context.save()
  context.translate(lunging ? facing * 2 : 0, 0)
  context.fillStyle = GAME_COLORS.shadow
  context.fillRect(x - 7, y + 5, 14, 2)
  context.fillStyle = "#9a623f"
  context.fillRect(x - 6, y - 2, 11, 7)
  context.fillRect(x + facing * 5 - (facing < 0 ? 4 : 0), y - 5, 5, 6)
  context.fillStyle = "#5a3829"
  context.fillRect(x + facing * 7 - (facing < 0 ? 4 : 0), y - 4, 2, 2)
  context.fillRect(x - 5, y + 4, 2, 3 + running)
  context.fillRect(x + 3, y + 4, 2, 4 - running)
  context.fillRect(x - facing * 7 - 1, y - 2, 3, 2)
  context.fillStyle = GAME_COLORS.cream
  context.fillRect(x + facing * 6 - (facing < 0 ? 3 : 0), y - 4, 1, 1)
  context.restore()
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
  context.setTransform(1, 0, 0, 1, 0, 0)
  context.fillStyle = GAME_COLORS.ground
  context.fillRect(0, 0, engine.width, engine.height)
  const shakeX = now < engine.shakeUntil ? (Math.random() - 0.5) * engine.shakeStrength : 0
  const shakeY = now < engine.shakeUntil ? (Math.random() - 0.5) * engine.shakeStrength : 0
  context.save()
  context.translate(Math.round(shakeX), Math.round(shakeY))

  context.fillStyle = GAME_COLORS.groundMark
  for (let x = 8; x < engine.width; x += 16) {
    for (let y = 8; y < engine.height; y += 16) {
      context.fillRect(x, y, 1, 1)
    }
  }

  context.strokeStyle = GAME_COLORS.cream
  context.lineWidth = 2
  context.strokeRect(1, 1, engine.width - 2, engine.height - 2)

  drawBloodStains(context, engine.bloodStains, now)
  if (engine.powerBox) drawPowerBox(context, engine.powerBox, now)
  engine.projectiles.forEach((projectile) => {
    context.save()
    context.translate(Math.round(projectile.x), Math.round(projectile.y))
    context.rotate(Math.atan2(projectile.vy, projectile.vx))
    context.fillStyle = projectile.kind === "laser"
      ? GAME_COLORS.electric
      : projectile.kind === "rocket"
        ? GAME_COLORS.danger
        : GAME_COLORS.attack
    const width = projectile.kind === "laser" ? 9 : projectile.kind === "bazooka" ? 6 : projectile.kind === "rocket" ? 5 : 2
    const height = projectile.kind === "bazooka" ? 5 : projectile.kind === "rocket" ? 3 : 2
    context.fillRect(-width / 2, -height / 2, width, height)
    if (projectile.kind === "rocket") {
      context.fillStyle = GAME_COLORS.attack
      context.fillRect(-7, -1, 3, 2)
    }
    context.restore()
  })

  engine.zombies
    .slice()
    .sort((a, b) => a.y - b.y)
    .forEach((zombie) => drawZombie(context, zombie, engine.player.x, now))
  drawDog(context, engine, now)
  drawPlayer(context, engine, now)
  drawShield(context, engine, now)
  drawHitEffects(context, engine.hitEffects, now)
  drawBloodParticles(context, engine.bloodParticles, now)

  const elapsed = Math.floor((now - engine.startedAt) / 1000)
  context.fillStyle = GAME_COLORS.cream
  context.font = "bold 8px monospace"
  context.textAlign = "left"
  context.fillText(`KILLS ${String(engine.score).padStart(3, "0")}`, 8, 13)
  context.textAlign = "center"
  context.fillText(`TIME ${String(elapsed).padStart(3, "0")}`, engine.width / 2, 13)
  context.textAlign = "right"
  context.fillText(`HP ${engine.player.health}`, engine.width - 8, 13)
  context.textAlign = "left"
  context.fillText(
    engine.weapon.kind === "bat" ? "BAT" : `${engine.weapon.kind.toUpperCase()} ${engine.weapon.ammo}`,
    8,
    31
  )
  if (now < engine.shieldUntil) {
    context.fillStyle = GAME_COLORS.electric
    context.fillText(`SHIELD ${Math.ceil((engine.shieldUntil - now) / 1_000)}s`, 8, 41)
  }
  if (engine.rocketExpiries.length > 0) {
    context.fillStyle = GAME_COLORS.attack
    context.fillText(`ROCKETS x${engine.rocketExpiries.length}`, 8, 51)
  }
  if (engine.dog && now < engine.dogUntil) {
    context.fillStyle = GAME_COLORS.cream
    context.fillText(`DOG ${Math.ceil((engine.dogUntil - now) / 1_000)}s`, 8, 61)
  }

  context.fillStyle = GAME_COLORS.danger
  context.fillRect(8, 18, Math.round((engine.player.health / 100) * 54), 3)
  context.strokeStyle = GAME_COLORS.cream
  context.lineWidth = 1
  context.strokeRect(8, 18, 54, 3)

  const boss = engine.zombies.find((zombie) => zombie.kind === "boss")
  if (boss) {
    const bossBarX = engine.width - 50
    context.fillStyle = GAME_COLORS.bossEyes
    context.textAlign = "right"
    context.fillText("BOSS", bossBarX - 5, 29)
    context.fillRect(
      bossBarX,
      26,
      Math.round((boss.health / boss.maxHealth) * 42),
      3
    )
    context.strokeStyle = GAME_COLORS.cream
    context.strokeRect(bossBarX, 26, 42, 3)
  }
  context.restore()
}

export const ZombieBatGame = observer(function ZombieBatGame({
  modal = false,
}: {
  modal?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<GameEngine>(createEngine())
  const audioRef = useRef<AudioContext | null>(null)
  const fireHeldRef = useRef(false)
  const joystickRef = useRef({ x: 0, y: 0 })
  const joystickKnobRef = useRef<HTMLSpanElement>(null)
  const [phase, setPhase] = useState<GamePhase>("setup")
  const [message, setMessage] = useState("")
  const [finalScore, setFinalScore] = useState(0)
  const [worldSize, setWorldSize] = useState({ width: GAME_WIDTH, height: GAME_HEIGHT })
  const [loadout, setLoadout] = useState<{ kind: WeaponKind; ammo: number }>({ kind: "bat", ammo: 0 })

  const attack = useCallback(() => {
    const engine = engineRef.current
    const now = performance.now()

    if (phase !== "playing" || now < engine.nextAttackAt) {
      return
    }

    if (engine.weapon.kind === "bat") {
      engine.attackId += 1
      engine.attackStartedAt = now
      engine.attackingUntil = now + BAT_SWING_DURATION
      engine.nextAttackAt = now + 440
      playZombieSound(audioRef.current, "swing")
      triggerZombieHaptic(10)
      return
    }

    const { kind } = engine.weapon
    const baseAngle = Math.atan2(engine.player.facingY, engine.player.facingX)
    const angles = kind === "shotgun" ? [-0.36, -0.24, -0.12, 0, 0.12, 0.24, 0.36] : [0]
    const speed = kind === "shotgun" ? 145 : kind === "laser" ? 260 : 105
    angles.forEach((offset) => {
      const angle = baseAngle + offset
      engine.projectiles.push({
        x: engine.player.x + Math.cos(angle) * 12,
        y: engine.player.y + Math.sin(angle) * 12,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        damage: kind === "bazooka" ? 8 : kind === "laser" ? 2 : 1,
        kind,
        hitZombieIds: [],
      })
    })
    engine.weapon.ammo -= 1
    engine.nextAttackAt = now + (kind === "shotgun" ? 520 : kind === "laser" ? 180 : 720)
    playZombieSound(audioRef.current, "shot")
    triggerZombieHaptic(kind === "bazooka" ? 35 : 14)
    if (engine.weapon.ammo <= 0) engine.weapon = { kind: "bat", ammo: 0 }
    setLoadout({ ...engine.weapon })
  }, [phase])

  const resetJoystick = useCallback(() => {
    joystickRef.current = { x: 0, y: 0 }
    if (joystickKnobRef.current) {
      joystickKnobRef.current.style.transform = "translate3d(0, 0, 0)"
    }
  }, [])

  const beginGame = useCallback(() => {
    const audioContext = audioRef.current ?? new AudioContext()
    audioRef.current = audioContext
    if (audioContext.state === "suspended") void audioContext.resume()
    const engine = createEngine(worldSize.width, worldSize.height)
    const now = performance.now()
    engine.startedAt = now
    engine.lastFrameAt = now
    engine.nextSpawnAt = now + 1200
    engine.nextBossSpawnAt = now + 18_000
    engine.nextPowerBoxAt = now + 7_000
    engineRef.current = engine
    fireHeldRef.current = false
    resetJoystick()
    setFinalScore(0)
    setMessage("")
    setLoadout({ kind: "bat", ammo: 0 })
    setPhase("playing")
    requestAnimationFrame(() => canvasRef.current?.focus())
  }, [resetJoystick, worldSize])

  useEffect(() => {
    return () => {
      if (audioRef.current && audioRef.current.state !== "closed") {
        void audioRef.current.close()
      }
    }
  }, [])

  useEffect(() => {
    if (phase !== "playing" || !audioRef.current) return undefined
    return startZombieMusic(audioRef.current)
  }, [phase])

  useEffect(() => {
    if (phase === "setup") return undefined
    const canvas = canvasRef.current
    const screen = canvas?.parentElement
    if (!canvas || !screen) return undefined

    const resizeWorld = () => {
      const screenWidth = screen.clientWidth
      const screenHeight = screen.clientHeight
      if (screenWidth < 1 || screenHeight < 1) return

      const aspect = screenWidth / screenHeight
      const baseAspect = GAME_WIDTH / GAME_HEIGHT
      const width = aspect >= baseAspect
        ? Math.max(GAME_WIDTH, Math.round(GAME_HEIGHT * aspect))
        : GAME_WIDTH
      const height = aspect >= baseAspect
        ? GAME_HEIGHT
        : Math.max(GAME_HEIGHT, Math.round(GAME_WIDTH / aspect))
      const engine = engineRef.current
      if (engine.width === width && engine.height === height) return

      const scaleX = width / engine.width
      const scaleY = height / engine.height
      engine.player.x *= scaleX
      engine.player.y *= scaleY
      engine.zombies.forEach((zombie) => {
        zombie.x *= scaleX
        zombie.y *= scaleY
      })
      engine.hitEffects.forEach((effect) => {
        effect.x *= scaleX
        effect.y *= scaleY
      })
      engine.bloodParticles.forEach((particle) => {
        particle.x *= scaleX
        particle.y *= scaleY
      })
      engine.bloodStains.forEach((stain) => {
        stain.x *= scaleX
        stain.y *= scaleY
      })
      if (engine.dog) {
        engine.dog.x *= scaleX
        engine.dog.y *= scaleY
      }
      engine.projectiles.forEach((projectile) => {
        projectile.x *= scaleX
        projectile.y *= scaleY
      })
      if (engine.powerBox) {
        engine.powerBox.x *= scaleX
        engine.powerBox.y *= scaleY
      }
      engine.width = width
      engine.height = height
      canvas.width = width
      canvas.height = height
      setWorldSize({ width, height })
    }

    resizeWorld()
    const observer = new ResizeObserver(resizeWorld)
    observer.observe(screen)
    return () => observer.disconnect()
  }, [phase])

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

      if (fireHeldRef.current && engine.weapon.kind !== "bat") attack()

      let dx = 0
      let dy = 0
      if (engine.keys.has("left")) dx -= 1
      if (engine.keys.has("right")) dx += 1
      if (engine.keys.has("up")) dy -= 1
      if (engine.keys.has("down")) dy += 1

      const keyboardActive = dx !== 0 || dy !== 0
      if (!keyboardActive) {
        dx = joystickRef.current.x
        dy = joystickRef.current.y
      }

      if (dx !== 0 || dy !== 0) {
        const length = Math.hypot(dx, dy)
        const movementStrength = keyboardActive ? 1 : Math.min(1, length)
        dx /= length
        dy /= length
        engine.player.facingX = dx
        engine.player.facingY = dy
        engine.player.x = Math.max(
          10,
          Math.min(
            engine.width - 10,
            engine.player.x + dx * PLAYER_SPEED * movementStrength * delta
          )
        )
        engine.player.y = Math.max(
          24,
          Math.min(
            engine.height - 12,
            engine.player.y + dy * PLAYER_SPEED * movementStrength * delta
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
        engine.shakeUntil = now + 420
        engine.shakeStrength = 4
        playZombieSound(audioRef.current, "boss")
        triggerZombieHaptic([45, 30, 70])
      }

      if (engine.powerBox && now >= engine.powerBox.expiresAt) {
        engine.powerBox = null
        engine.nextPowerBoxAt = now + 5_000 + Math.random() * 4_000
      }
      if (!engine.powerBox && now >= engine.nextPowerBoxAt) {
        const kinds: PickupKind[] = ["shotgun", "bazooka", "laser", "shield", "dog"]
        if (engine.rocketExpiries.length < 5) kinds.push("rocket")
        engine.powerBox = {
          x: 28 + Math.random() * Math.max(1, engine.width - 56),
          y: 45 + Math.random() * Math.max(1, engine.height - 80),
          kind: kinds[Math.floor(Math.random() * kinds.length)],
          expiresAt: now + POWER_BOX_LIFETIME,
          phase: Math.random() * Math.PI * 2,
        }
      }
      if (
        engine.powerBox &&
        Math.hypot(engine.powerBox.x - engine.player.x, engine.powerBox.y - engine.player.y) < 18
      ) {
        const pickup = engine.powerBox
        if (pickup.kind === "shield") {
          engine.shieldUntil = Math.max(now, engine.shieldUntil) + SHIELD_DURATION
          engine.nextShieldDamageAt = now
          playZombieSound(audioRef.current, "shield")
        } else if (pickup.kind === "rocket") {
          if (engine.rocketExpiries.length < 5) {
            engine.rocketExpiries.push(now + ROCKET_DURATION)
            engine.nextRocketVolleyAt = Math.min(engine.nextRocketVolleyAt || now, now + 350)
          }
          playZombieSound(audioRef.current, "pickup")
        } else if (pickup.kind === "dog") {
          engine.dogUntil = Math.max(now, engine.dogUntil) + DOG_DURATION
          engine.dog ??= {
            x: engine.player.x - 14,
            y: engine.player.y + 10,
            facingX: 1,
            facingY: 0,
            nextAttackAt: now,
            attackingUntil: 0,
          }
          playZombieSound(audioRef.current, "pickup")
        } else {
          engine.weapon = { kind: pickup.kind, ammo: WEAPON_AMMO[pickup.kind] }
          setLoadout({ ...engine.weapon })
          playZombieSound(audioRef.current, "pickup")
        }
        triggerZombieHaptic([22, 18, 35])
        addHitEffect(engine, pickup.x, pickup.y, now, 12, GAME_COLORS.powerBox)
        engine.powerBox = null
        engine.nextPowerBoxAt = now + 8_000 + Math.random() * 5_000
      }

      engine.rocketExpiries = engine.rocketExpiries.filter((expiry) => expiry > now)
      if (engine.rocketExpiries.length > 0 && now >= engine.nextRocketVolleyAt) {
        engine.nextRocketVolleyAt = now + 1_450
        if (engine.zombies.length > 0) {
          const targets = engine.zombies
            .slice()
            .sort(
              (a, b) =>
                Math.hypot(a.x - engine.player.x, a.y - engine.player.y) -
                Math.hypot(b.x - engine.player.x, b.y - engine.player.y)
            )
          engine.rocketExpiries.forEach((_, index) => {
            const target = targets[index % targets.length]
            const launchAngle = (index / Math.max(1, engine.rocketExpiries.length)) * Math.PI * 2
            const targetAngle = Math.atan2(
              target.y - engine.player.y,
              target.x - engine.player.x
            )
            engine.projectiles.push({
              x: engine.player.x + Math.cos(launchAngle) * 11,
              y: engine.player.y + Math.sin(launchAngle) * 11,
              vx: Math.cos(targetAngle) * 118,
              vy: Math.sin(targetAngle) * 118,
              damage: 3,
              kind: "rocket",
              hitZombieIds: [],
            })
          })
          playZombieSound(audioRef.current, "shot")
        }
      }

      if (engine.dog && now >= engine.dogUntil) engine.dog = null
      if (engine.dog) {
        const dog = engine.dog
        const nearestZombie = engine.zombies.reduce<Zombie | null>((nearest, zombie) => {
          if (!nearest) return zombie
          return Math.hypot(zombie.x - dog.x, zombie.y - dog.y) <
            Math.hypot(nearest.x - dog.x, nearest.y - dog.y)
            ? zombie
            : nearest
        }, null)
        const zombieDistance = nearestZombie
          ? Math.hypot(nearestZombie.x - dog.x, nearestZombie.y - dog.y)
          : Number.POSITIVE_INFINITY
        const chasing = nearestZombie && zombieDistance < 72
        const followX = engine.player.x - engine.player.facingX * 15 - engine.player.facingY * 9
        const followY = engine.player.y - engine.player.facingY * 15 + engine.player.facingX * 9
        const destinationX = chasing ? nearestZombie.x : followX
        const destinationY = chasing ? nearestZombie.y : followY
        const dogDx = destinationX - dog.x
        const dogDy = destinationY - dog.y
        const dogDistance = Math.max(0.001, Math.hypot(dogDx, dogDy))
        dog.facingX = dogDx / dogDistance
        dog.facingY = dogDy / dogDistance
        const dogSpeed = chasing ? 88 : 72
        const dogStep = Math.min(dogDistance, dogSpeed * delta)
        dog.x += dog.facingX * dogStep
        dog.y += dog.facingY * dogStep

        if (nearestZombie && zombieDistance < 15 && now >= dog.nextAttackAt) {
          dog.nextAttackAt = now + 720
          dog.attackingUntil = now + 170
          nearestZombie.health -= nearestZombie.kind === "boss" ? 1 : 2
          nearestZombie.hitFlashUntil = now + 130
          addHitEffect(engine, nearestZombie.x, nearestZombie.y, now, 7, GAME_COLORS.hit)
          scatterBlood(engine, nearestZombie.x, nearestZombie.y, now, 7, 23)
          playZombieSound(audioRef.current, "hit")
        }
      }

      engine.projectiles.forEach((projectile) => {
        if (projectile.kind === "rocket" && engine.zombies.length > 0) {
          const target = engine.zombies.reduce((nearest, zombie) =>
            Math.hypot(zombie.x - projectile.x, zombie.y - projectile.y) <
            Math.hypot(nearest.x - projectile.x, nearest.y - projectile.y)
              ? zombie
              : nearest
          )
          const angle = Math.atan2(target.y - projectile.y, target.x - projectile.x)
          projectile.vx += (Math.cos(angle) * 125 - projectile.vx) * Math.min(1, delta * 5)
          projectile.vy += (Math.sin(angle) * 125 - projectile.vy) * Math.min(1, delta * 5)
        }
        projectile.x += projectile.vx * delta
        projectile.y += projectile.vy * delta
        const hit = engine.zombies.find(
          (zombie) =>
            !projectile.hitZombieIds.includes(zombie.id) &&
            Math.hypot(zombie.x - projectile.x, zombie.y - projectile.y) <
              (zombie.kind === "boss" ? 16 : 9)
        )
        if (hit) {
          if (projectile.kind === "rocket") {
            engine.zombies.forEach((zombie) => {
              if (Math.hypot(zombie.x - hit.x, zombie.y - hit.y) > 30) return
              zombie.health -= projectile.damage
              zombie.hitFlashUntil = now + 150
              scatterBlood(engine, zombie.x, zombie.y, now, 8, 27)
            })
            addHitEffect(engine, hit.x, hit.y, now, 30, GAME_COLORS.danger, true)
            engine.shakeUntil = now + 190
            engine.shakeStrength = 5
            projectile.expired = true
          } else {
            hit.health -= projectile.damage
            hit.hitFlashUntil = now + (projectile.kind === "bazooka" ? 170 : 110)
            projectile.hitZombieIds.push(hit.id)
            scatterBlood(
              engine,
              hit.x,
              hit.y,
              now,
              projectile.kind === "bazooka" ? 14 : 6,
              projectile.kind === "bazooka" ? 34 : 20
            )
            addHitEffect(
              engine,
              hit.x,
              hit.y,
              now,
              projectile.kind === "bazooka" ? 12 : 6,
              projectile.kind === "laser" ? GAME_COLORS.electric : projectile.kind === "bazooka" ? GAME_COLORS.attack : GAME_COLORS.hit
            )
          }
          if (projectile.kind === "bazooka") {
            engine.shakeUntil = now + 260
            engine.shakeStrength = 7
          } else if (projectile.kind !== "rocket") {
            projectile.expired = true
          }
          playZombieSound(audioRef.current, "hit")
        }
        if (
          projectile.x < -20 || projectile.x > engine.width + 20 ||
          projectile.y < -20 || projectile.y > engine.height + 20
        ) projectile.expired = true
      })
      engine.projectiles = engine.projectiles.filter((projectile) => !projectile.expired)

      engine.bloodParticles.forEach((particle) => {
        particle.x += particle.vx * delta
        particle.y += particle.vy * delta
        const drag = Math.pow(0.035, delta)
        particle.vx *= drag
        particle.vy *= drag
      })
      engine.bloodParticles = engine.bloodParticles.filter(
        (particle) => particle.expiresAt > now
      )
      engine.bloodStains = engine.bloodStains.filter((stain) => stain.expiresAt > now)

      if (now < engine.shieldUntil && now >= engine.nextShieldDamageAt) {
        engine.nextShieldDamageAt = now + 360
        engine.zombies.forEach((zombie) => {
          if (Math.hypot(zombie.x - engine.player.x, zombie.y - engine.player.y) > 31) return
          zombie.health -= zombie.kind === "boss" ? 1 : 2
          zombie.hitFlashUntil = now + 130
          addHitEffect(engine, zombie.x, zombie.y, now, 7, GAME_COLORS.electric)
          scatterBlood(engine, zombie.x, zombie.y, now, 5, 18)
        })
      }

      const survivingZombies: Zombie[] = []
      const batPose = getBatPose(engine, now)
      engine.zombies.forEach((zombie) => {
        const isBoss = zombie.kind === "boss"
        if (zombie.health <= 0) {
          engine.score += isBoss ? 10 : 1
          engine.shakeUntil = now + (isBoss ? 520 : 180)
          engine.shakeStrength = isBoss ? 8 : 4
          playZombieSound(audioRef.current, "destroy")
          triggerZombieHaptic(isBoss ? [75, 35, 110] : 38)
          addHitEffect(engine, zombie.x, zombie.y, now, isBoss ? 16 : 9, GAME_COLORS.danger)
          scatterBlood(engine, zombie.x, zombie.y, now, isBoss ? 30 : 18, isBoss ? 48 : 34)
          addBloodStains(engine, zombie.x, zombie.y, now, isBoss)
          return
        }
        const toPlayerX = engine.player.x - zombie.x
        const toPlayerY = engine.player.y - zombie.y
        const playerDistance = Math.max(0.001, Math.hypot(toPlayerX, toPlayerY))

        zombie.x += (toPlayerX / playerDistance) * zombie.speed * delta
        zombie.y += (toPlayerY / playerDistance) * zombie.speed * delta

        const toZombieX = zombie.x - engine.player.x
        const toZombieY = zombie.y - engine.player.y
        const attackDistance = Math.hypot(toZombieX, toZombieY)
        const inBatPath =
          (toZombieX / Math.max(0.001, attackDistance)) * batPose.directionX +
            (toZombieY / Math.max(0.001, attackDistance)) * batPose.directionY >
          0.35

        if (
          engine.weapon.kind === "bat" &&
          batPose.canHit &&
          attackDistance < (isBoss ? 43 : 34) &&
          inBatPath &&
          zombie.lastHitByAttack !== engine.attackId
        ) {
          zombie.lastHitByAttack = engine.attackId
          zombie.health -= 1
          zombie.hitFlashUntil = now + 130
          engine.shakeUntil = now + (isBoss ? 150 : 90)
          engine.shakeStrength = isBoss ? 4 : 2
          if (now - engine.lastHitSoundAt > 45) {
            playZombieSound(audioRef.current, "hit")
            engine.lastHitSoundAt = now
          }
          triggerZombieHaptic(isBoss ? 30 : 18)
          addHitEffect(
            engine,
            zombie.x,
            zombie.y - (isBoss ? 5 : 2),
            now,
            isBoss ? 10 : 6,
            GAME_COLORS.hit
          )
          scatterBlood(engine, zombie.x, zombie.y, now, isBoss ? 12 : 8, isBoss ? 30 : 23)

          const knockback = isBoss ? 4 : 9
          zombie.x += (toZombieX / Math.max(0.001, attackDistance)) * knockback
          zombie.y += (toZombieY / Math.max(0.001, attackDistance)) * knockback

          if (zombie.health <= 0) {
            engine.score += isBoss ? 10 : 1
            engine.shakeUntil = now + (isBoss ? 520 : 180)
            engine.shakeStrength = isBoss ? 8 : 4
            playZombieSound(audioRef.current, "destroy")
            triggerZombieHaptic(isBoss ? [75, 35, 110] : 38)
            addHitEffect(
              engine,
              zombie.x,
              zombie.y,
              now,
              isBoss ? 16 : 9,
              GAME_COLORS.danger
            )
            scatterBlood(engine, zombie.x, zombie.y, now, isBoss ? 30 : 18, isBoss ? 48 : 34)
            addBloodStains(engine, zombie.x, zombie.y, now, isBoss)
            return
          }
        }

        const contactDistance = isBoss ? 18 : 11
        if (playerDistance < contactDistance && now >= zombie.nextDamageAt) {
          zombie.nextDamageAt = now + (isBoss ? 950 : 700)
          if (now < engine.shieldUntil) {
            zombie.health -= isBoss ? 1 : 2
            zombie.hitFlashUntil = now + 150
            engine.shakeUntil = now + 120
            engine.shakeStrength = 3
            playZombieSound(audioRef.current, "shield")
            triggerZombieHaptic(22)
            addHitEffect(engine, zombie.x, zombie.y, now, 8, GAME_COLORS.electric)
            scatterBlood(engine, zombie.x, zombie.y, now, 6, 20)
          } else {
            const damage = isBoss ? 25 : 10
            engine.player.health = Math.max(0, engine.player.health - damage)
            engine.player.hitFlashUntil = now + 180
            engine.shakeUntil = now + (isBoss ? 520 : 300)
            engine.shakeStrength = isBoss ? 9 : 6
            playZombieSound(audioRef.current, "playerHit")
            triggerZombieHaptic(isBoss ? [95, 35, 125] : 72)
            addHitEffect(
              engine,
              engine.player.x,
              engine.player.y,
              now,
              isBoss ? 11 : 7,
              GAME_COLORS.danger
            )
            scatterBlood(engine, engine.player.x, engine.player.y, now, isBoss ? 14 : 8, 27)
          }

          const playerKnockback = isBoss ? 13 : 6
          engine.player.x = Math.max(
            10,
            Math.min(
              engine.width - 10,
              engine.player.x + (toPlayerX / playerDistance) * playerKnockback
            )
          )
          engine.player.y = Math.max(
            24,
            Math.min(
              engine.height - 12,
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
        fireHeldRef.current = false
        playZombieSound(audioRef.current, "gameover")
        triggerZombieHaptic([120, 45, 180])
        setFinalScore(engine.score)
        setPhase("gameover")
        return
      }

      engine.animationFrame = requestAnimationFrame(frame)
    }

    engine.animationFrame = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(engine.animationFrame)
  }, [attack, phase])

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
        fireHeldRef.current = true
        attack()
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      const direction = keyToDirection[event.key]
      if (direction) {
        event.preventDefault()
        engineRef.current.keys.delete(direction)
      }
      if (event.code === "Space") fireHeldRef.current = false
    }

    canvas.addEventListener("keydown", handleKeyDown)
    canvas.addEventListener("keyup", handleKeyUp)
    const clearHeldDirections = () => {
      engineRef.current.keys.clear()
      fireHeldRef.current = false
      resetJoystick()
    }
    window.addEventListener("blur", clearHeldDirections)
    return () => {
      canvas.removeEventListener("keydown", handleKeyDown)
      canvas.removeEventListener("keyup", handleKeyUp)
      window.removeEventListener("blur", clearHeldDirections)
      clearHeldDirections()
    }
  }, [attack, phase, resetJoystick])

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

  const updateJoystick = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const maxTravel = bounds.width * 0.3
    const offsetX = event.clientX - (bounds.left + bounds.width / 2)
    const offsetY = event.clientY - (bounds.top + bounds.height / 2)
    const distance = Math.hypot(offsetX, offsetY)
    const scale = distance > maxTravel ? maxTravel / distance : 1
    const knobX = offsetX * scale
    const knobY = offsetY * scale
    const normalizedX = knobX / maxTravel
    const normalizedY = knobY / maxTravel
    const normalizedDistance = Math.hypot(normalizedX, normalizedY)
    const deadZone = 0.12

    if (normalizedDistance <= deadZone) {
      joystickRef.current = { x: 0, y: 0 }
    } else {
      const strength = (normalizedDistance - deadZone) / (1 - deadZone)
      joystickRef.current = {
        x: (normalizedX / normalizedDistance) * strength,
        y: (normalizedY / normalizedDistance) * strength,
      }
    }

    if (joystickKnobRef.current) {
      joystickKnobRef.current.style.transform = `translate3d(${knobX}px, ${knobY}px, 0)`
    }
  }

  const engageJoystick = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    updateJoystick(event)
  }

  const releaseJoystick = (event: ReactPointerEvent<HTMLDivElement>) => {
    resetJoystick()
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const holdFire = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    fireHeldRef.current = true
    attack()
  }

  const releaseFire = (event: ReactPointerEvent<HTMLButtonElement>) => {
    fireHeldRef.current = false
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
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * engineRef.current.width
    const pointerY =
      ((event.clientY - bounds.top) / bounds.height) * engineRef.current.height
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
    <section
      id={modal ? undefined : "game"}
      className={cn(
        "manual-game-section scroll-mt-8 border-t",
        modal && "manual-game-section--modal"
      )}
    >
      <div className="manual-game-heading">
        <p className="manual-rule-text">
          <span>05 / After-hours protocol</span>
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
                width={worldSize.width}
                height={worldSize.height}
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
              <div className="manual-game-controls">
                <div
                  className="manual-game-joystick"
                  role="application"
                  aria-label="Analog movement joystick"
                  onPointerDown={engageJoystick}
                  onPointerMove={(event) => {
                    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                      updateJoystick(event)
                    }
                  }}
                  onPointerUp={releaseJoystick}
                  onPointerCancel={releaseJoystick}
                  onLostPointerCapture={resetJoystick}
                >
                  <span className="manual-game-joystick-ring" aria-hidden="true" />
                  <span
                    ref={joystickKnobRef}
                    className="manual-game-joystick-knob"
                    aria-hidden="true"
                  />
                </div>

                <button
                  type="button"
                  className="manual-game-bat"
                  onPointerDown={holdFire}
                  onPointerUp={releaseFire}
                  onPointerCancel={releaseFire}
                  onLostPointerCapture={() => {
                    fireHeldRef.current = false
                  }}
                >
                  {loadout.kind === "bat" ? "BAT" : loadout.kind.toUpperCase()}
                  <span>{loadout.kind === "bat" ? "Space" : `${loadout.ammo} AMMO`}</span>
                </button>
              </div>
            </div>

            <p className="manual-game-help">
              Touch: drag the joystick to move · hold equipped guns to fire
              <br />
              Keyboard: WASD / arrows to move · hold Space to attack
            </p>
          </div>
        )}
      </div>
    </section>
  )
})
