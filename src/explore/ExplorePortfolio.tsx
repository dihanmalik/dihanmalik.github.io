import { useCallback, useEffect, useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import {
  IconArrowLeft,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconMail,
  IconMapPin,
  IconMaximize,
  IconMinimize,
  IconPlayerPlayFilled,
  IconHandClick,
  IconMoonStars,
  IconRocket,
  IconSparkles,
  IconSun,
  IconVolume,
  IconX,
} from "@tabler/icons-react"
import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

import resume from "@/assets/CV_2026.pdf"
import portrait from "@/assets/me4.png"
import { educationEntries, optimizationNotes, workEntries } from "@/field-manual-portfolio/data"
import { getTechLogos } from "@/features/tech-stacks/constants/techLogos"

import { carModelUrl, loadNatureAsset, NATURE_ASSETS } from "./exploreAssets"

import "./explore-portfolio.css"

type StationId = "hello" | "work" | "stack" | "contact"
type LightMode = "Daylight" | "Night"
type NatureInteraction = {
  x: number
  z: number
  radius: number
  kind: "grass" | "bush" | "bamboo" | "tree" | "mushroom" | "cactus" | "rock"
  visual?: THREE.Object3D
  restScale?: THREE.Vector3
  restRotationX?: number
  restRotationZ?: number
  impact?: number
  impactDirection?: number
}

type Station = {
  id: StationId
  label: string
  eyebrow: string
  x: number
  z: number
  color: number
}

const STATIONS: Station[] = [
  { id: "hello", label: "Start here", eyebrow: "01 / Hello", x: -29.7, z: 31.1, color: 0xff5b35 },
  { id: "work", label: "Selected work", eyebrow: "02 / Career", x: -35.2, z: -24.8, color: 0x5eead4 },
  { id: "stack", label: "The lab", eyebrow: "03 / Toolkit", x: 32.1, z: -28.6, color: 0xffd166 },
  { id: "contact", label: "Open channel", eyebrow: "04 / Contact", x: 28.3, z: 32.3, color: 0xc4b5fd },
]

const TECH = getTechLogos()

const LIGHT_PHASE_MS = 3 * 60 * 1000
const LIGHT_TRANSITION_MS = 15 * 1000
const ISLAND_RADIUS = 60
const DRIVABLE_RADIUS = ISLAND_RADIUS - 1
const STATION_COLLISION_RADIUS = 7
const CENTER_STAGE_COLLISION_RADIUS = 9
const COLLISION_BOUNCE = 0.38

function normalizeModel(
  model: THREE.Object3D,
  targetSize: number,
  dimension: "footprint" | "height" = "footprint"
) {
  let bounds = new THREE.Box3().setFromObject(model)
  const size = bounds.getSize(new THREE.Vector3())
  const sourceSize = dimension === "height" ? size.y : Math.max(size.x, size.z)
  const scale = targetSize / sourceSize
  model.scale.setScalar(scale)
  bounds = new THREE.Box3().setFromObject(model)
  const center = bounds.getCenter(new THREE.Vector3())
  model.position.set(-center.x, -bounds.min.y, -center.z)
}

function terrainHeightAt(x: number, z: number) {
  void x
  void z
  return 0
}

function isGreenLandAt(x: number, z: number) {
  const radius = Math.hypot(x, z)
  const isRingRoad = radius > 20.5 && radius < 35.5
  const isCrossRoad =
    (Math.abs(x) < 6 && Math.abs(z) < 37) ||
    (Math.abs(z) < 6 && Math.abs(x) < 37)
  const isStation = STATIONS.some(
    (station) => Math.hypot(x - station.x, z - station.z) < 7.5
  )
  return radius >= 9 && radius <= 48 && !isRingRoad && !isCrossRoad && !isStation
}

function resolveCircularCollision(
  position: THREE.Vector3,
  centerX: number,
  centerZ: number,
  radius: number,
  heading: number,
  velocity: number
) {
  const offsetX = position.x - centerX
  const offsetZ = position.z - centerZ
  const distance = Math.hypot(offsetX, offsetZ)
  if (distance >= radius) return velocity

  const travelDirection = velocity >= 0 ? 1 : -1
  const fallbackX = -Math.sin(heading) * travelDirection
  const fallbackZ = -Math.cos(heading) * travelDirection
  const normalX = distance > 0.001 ? offsetX / distance : fallbackX
  const normalZ = distance > 0.001 ? offsetZ / distance : fallbackZ
  position.x = centerX + normalX * radius
  position.z = centerZ + normalZ * radius
  return -velocity * COLLISION_BOUNCE
}

function createIslandTerrain() {
  const segments = 96
  const rings = 12
  const radius = ISLAND_RADIUS
  const positions: number[] = [0, 0, 0]
  const colors: number[] = [0.18, 0.48, 0.16]
  const indices: number[] = []

  for (let ring = 1; ring <= rings; ring += 1) {
    const ringRadius = (ring / rings) * radius
    for (let segment = 0; segment < segments; segment += 1) {
      const angle = (segment / segments) * Math.PI * 2
      const x = Math.cos(angle) * ringRadius
      const z = Math.sin(angle) * ringRadius
      const height = terrainHeightAt(x, z)
      positions.push(x, height, z)

      const shore = THREE.MathUtils.smoothstep(ringRadius, 49, 60)
      colors.push(
        THREE.MathUtils.lerp(0.18, 0.58, shore),
        THREE.MathUtils.lerp(0.48, 0.42, shore),
        THREE.MathUtils.lerp(0.16, 0.2, shore)
      )
    }
  }

  for (let segment = 0; segment < segments; segment += 1) {
    indices.push(0, 1 + ((segment + 1) % segments), 1 + segment)
  }
  for (let ring = 1; ring < rings; ring += 1) {
    const innerStart = 1 + (ring - 1) * segments
    const outerStart = 1 + ring * segments
    for (let segment = 0; segment < segments; segment += 1) {
      const next = (segment + 1) % segments
      indices.push(
        innerStart + segment,
        innerStart + next,
        outerStart + next,
        innerStart + segment,
        outerStart + next,
        outerStart + segment
      )
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  const material = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, flatShading: true })
  const terrain = new THREE.Mesh(geometry, material)
  terrain.receiveShadow = true
  return terrain
}

function placeNature(scene: THREE.Scene, assets: THREE.Group[]) {
  const [palm, palmAlt, bamboo, cactus, bush, grass, flower, mushroom] = assets
  const trees = [palm, palmAlt, bamboo]
  const interactions: NatureInteraction[] = []
  const addInteraction = (
    x: number,
    z: number,
    radius: number,
    kind: NatureInteraction["kind"],
    visual?: THREE.Object3D
  ) => {
    interactions.push({
      x,
      z,
      radius,
      kind,
      visual,
      restScale: visual?.scale.clone(),
      restRotationX: visual?.rotation.x,
      restRotationZ: visual?.rotation.z,
      impact: 0,
      impactDirection: 0,
    })
  }
  const overlapsStation = (x: number, z: number, clearance: number) =>
    STATIONS.some((station) => Math.hypot(x - station.x, z - station.z) < clearance)

  for (let index = 0; index < 72; index += 1) {
    const angle = (index / 72) * Math.PI * 2
    const source = trees[index % trees.length]
    const tree = source.clone()
    const treeRadius = index % 4 === 0 ? 51 : index % 2 ? 46 : 42
    const treeX = Math.cos(angle) * treeRadius
    const treeZ = Math.sin(angle) * treeRadius
    if (overlapsStation(treeX, treeZ, 9)) continue
    tree.position.set(treeX, terrainHeightAt(treeX, treeZ), treeZ)
    tree.rotation.y = angle * 2.3
    tree.scale.multiplyScalar(0.82 + (index % 5) * 0.06)
    scene.add(tree)
    addInteraction(
      treeX,
      treeZ,
      source === bamboo ? 2.2 : 2.5,
      source === bamboo ? "bamboo" : "tree",
      tree
    )
  }

  for (let index = 0; index < 30; index += 1) {
    const angle = (index / 30) * Math.PI * 2 + 0.3
    const radius = 43 + (index % 2) * 2.2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    if (overlapsStation(x, z, 8)) continue
    const plant = cactus.clone()
    plant.position.set(x, terrainHeightAt(x, z), z)
    plant.rotation.y = angle * 1.7
    plant.scale.multiplyScalar(0.75 + (index % 3) * 0.12)
    scene.add(plant)
    addInteraction(x, z, 1.55, "cactus", plant)
  }

  for (let index = 0; index < 84; index += 1) {
    const angle = (index / 84) * Math.PI * 2 + 0.18
    const shrub = bush.clone()
    const shrubRadius = 37 + (index % 6) * 1.9
    const shrubX = Math.cos(angle) * shrubRadius
    const shrubZ = Math.sin(angle) * shrubRadius
    if (overlapsStation(shrubX, shrubZ, 8)) continue
    shrub.position.set(shrubX, terrainHeightAt(shrubX, shrubZ), shrubZ)
    shrub.rotation.y = angle
    shrub.scale.multiplyScalar(0.75 + (index % 4) * 0.12)
    scene.add(shrub)
    addInteraction(shrubX, shrubZ, 1.8, "bush", shrub)
  }

  for (let index = 0; index < 30; index += 1) {
    const angle = index * 2.399
    const radius = 35 + (index % 4) * 3.4
    const patchX = Math.cos(angle) * radius
    const patchZ = Math.sin(angle) * radius
    if (overlapsStation(patchX, patchZ, 8)) continue
    const patch = (index % 5 === 0 ? mushroom : index % 3 ? grass : flower).clone()
    patch.position.set(patchX, 0.02, patchZ)
    patch.rotation.y = angle
    patch.scale.multiplyScalar(0.75 + (index % 5) * 0.08)
    scene.add(patch)
    if (index % 5 === 0) addInteraction(patchX, patchZ, 1.2, "mushroom", patch)
  }

  let seed = 4817
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  const placeInstances = (
    source: THREE.Group,
    transforms: THREE.Matrix4[],
    castShadow = false
  ) => {
    source.updateMatrixWorld(true)
    source.traverse((object) => {
      if (!(object instanceof THREE.Mesh) || transforms.length === 0) return
      const instances = new THREE.InstancedMesh(
        object.geometry,
        object.material,
        transforms.length
      )
      const baseMatrix = object.matrixWorld.clone()
      transforms.forEach((transform, index) => {
        instances.setMatrixAt(index, transform.clone().multiply(baseMatrix))
      })
      instances.instanceMatrix.needsUpdate = true
      instances.castShadow = castShadow
      instances.receiveShadow = true
      instances.frustumCulled = false
      scene.add(instances)
    })
  }

  let bambooClusters = 0
  let bambooAttempts = 0
  while (bambooClusters < 12 && bambooAttempts < 600) {
    bambooAttempts += 1
    const clusterAngle = random() * Math.PI * 2
    const clusterRadius = 38 + random() * 9
    const centerX = Math.cos(clusterAngle) * clusterRadius
    const centerZ = Math.sin(clusterAngle) * clusterRadius
    if (!isGreenLandAt(centerX, centerZ)) continue
    const bambooCluster = new THREE.Group()
    bambooCluster.position.set(centerX, terrainHeightAt(centerX, centerZ), centerZ)
    const stalkCount = 3 + Math.floor(random() * 4)
    for (let index = 0; index < stalkCount; index += 1) {
      const angle = random() * Math.PI * 2
      const distance = Math.sqrt(random()) * 3
      const x = centerX + Math.cos(angle) * distance
      const z = centerZ + Math.sin(angle) * distance
      if (!isGreenLandAt(x, z)) continue
      const scale = 0.42 + random() * 0.28
      const stalk = bamboo.clone()
      stalk.position.set(x - centerX, 0, z - centerZ)
      stalk.rotation.y = random() * Math.PI * 2
      stalk.scale.multiplyScalar(scale)
      stalk.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return
        object.castShadow = true
        object.receiveShadow = true
      })
      bambooCluster.add(stalk)
    }
    scene.add(bambooCluster)
    addInteraction(centerX, centerZ, 3.5, "bamboo", bambooCluster)
    bambooClusters += 1
  }

  const grassTransforms: THREE.Matrix4[] = []
  let clustersPlaced = 0
  let attempts = 0
  while (clustersPlaced < 190 && attempts < 4_000) {
    attempts += 1
    const clusterAngle = random() * Math.PI * 2
    const clusterRadius = Math.sqrt(random()) * 47
    const x = Math.cos(clusterAngle) * clusterRadius
    const z = Math.sin(clusterAngle) * clusterRadius
    if (!isGreenLandAt(x, z)) continue

    const bladeCount = 9 + Math.floor(random() * 7)
    for (let blade = 0; blade < bladeCount; blade += 1) {
      const angle = random() * Math.PI * 2
      const distance = Math.sqrt(random()) * 3.1
      const bladeX = x + Math.cos(angle) * distance
      const bladeZ = z + Math.sin(angle) * distance
      if (!isGreenLandAt(bladeX, bladeZ)) continue
      const position = new THREE.Vector3(
        bladeX,
        terrainHeightAt(bladeX, bladeZ) + 0.025,
        bladeZ
      )
      const rotation = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, random() * Math.PI * 2, 0)
      )
      const scale = 0.58 + random() * 0.72
      grassTransforms.push(
        new THREE.Matrix4().compose(position, rotation, new THREE.Vector3(scale, scale, scale))
      )
    }
    addInteraction(x, z, 3.15, "grass")
    clustersPlaced += 1
  }

  placeInstances(grass, grassTransforms)
  return interactions
}

function formatClock(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`
}

function createExploreSoundscape(context: AudioContext) {
  const master = context.createGain()
  const dayBus = context.createGain()
  const nightBus = context.createGain()
  const oceanGain = context.createGain()
  const oceanFilter = context.createBiquadFilter()
  const surfGain = context.createGain()
  const surfFilter = context.createBiquadFilter()
  const engineGain = context.createGain()
  const engineFilter = context.createBiquadFilter()
  const engine = context.createOscillator()
  const grassGain = context.createGain()
  const grassFilter = context.createBiquadFilter()
  const hornGain = context.createGain()
  const hornHighpass = context.createBiquadFilter()
  const hornLowpass = context.createBiquadFilter()
  const waveLfo = context.createOscillator()
  const waveDepth = context.createGain()
  const slowWaveLfo = context.createOscillator()
  const slowWaveDepth = context.createGain()
  const surfWaveDepth = context.createGain()
  const start = context.currentTime

  master.gain.setValueAtTime(0.0001, start)
  master.gain.exponentialRampToValueAtTime(0.72, start + 2.2)
  dayBus.gain.value = 1
  nightBus.gain.value = 0
  dayBus.connect(master)
  nightBus.connect(master)
  master.connect(context.destination)

  const noiseBuffer = context.createBuffer(1, context.sampleRate * 8, context.sampleRate)
  const noise = noiseBuffer.getChannelData(0)
  let rollingNoise = 0
  for (let index = 0; index < noise.length; index += 1) {
    rollingNoise = rollingNoise * 0.972 + (Math.random() * 2 - 1) * 0.045
    noise[index] = rollingNoise
  }

  const createFoliageBuffer = (duration: number, crackleChance: number) => {
    const buffer = context.createBuffer(
      1,
      Math.floor(context.sampleRate * duration),
      context.sampleRate
    )
    const data = buffer.getChannelData(0)
    let softened = 0
    let crackle = 0
    let peak = 0
    for (let index = 0; index < data.length; index += 1) {
      const raw = Math.random() * 2 - 1
      softened += (raw - softened) * 0.075
      if (Math.random() < crackleChance) crackle += (Math.random() * 2 - 1) * 1.5
      crackle *= 0.84
      const progress = index / data.length
      const envelope = Math.pow(Math.sin(progress * Math.PI), 0.52)
      data[index] = ((raw - softened) * 0.42 + softened * 0.7 + crackle) * envelope
      peak = Math.max(peak, Math.abs(data[index]))
    }
    const normalization = peak > 0 ? 0.88 / peak : 1
    for (let index = 0; index < data.length; index += 1) {
      data[index] *= normalization
    }
    return buffer
  }

  const foliageBuffers: Record<NatureInteraction["kind"], AudioBuffer[]> = {
    grass: Array.from({ length: 3 }, () => createFoliageBuffer(0.22, 0.00035)),
    bush: Array.from({ length: 3 }, () => createFoliageBuffer(0.42, 0.0011)),
    bamboo: Array.from({ length: 3 }, () => createFoliageBuffer(0.36, 0.0007)),
    tree: Array.from({ length: 3 }, () => createFoliageBuffer(0.38, 0.0013)),
    mushroom: Array.from({ length: 3 }, () => createFoliageBuffer(0.18, 0.0005)),
    cactus: Array.from({ length: 3 }, () => createFoliageBuffer(0.24, 0.0016)),
    rock: Array.from({ length: 3 }, () => createFoliageBuffer(0.16, 0.002)),
  }
  const grassTextureBuffer = context.createBuffer(
    1,
    context.sampleRate * 5,
    context.sampleRate
  )
  const grassTexture = grassTextureBuffer.getChannelData(0)
  let grassBody = 0
  let grassCrunch = 0
  for (let index = 0; index < grassTexture.length; index += 1) {
    const raw = Math.random() * 2 - 1
    grassBody += (raw - grassBody) * 0.025
    if (Math.random() < 0.0017) grassCrunch += 0.55 + Math.random() * 0.75
    grassCrunch *= 0.91
    const unevenGround = 0.72 + Math.sin(index * 0.00091) * 0.16
      + Math.sin(index * 0.0027 + 1.4) * 0.1
    grassTexture[index] = ((raw - grassBody) * 0.28 + grassBody * 0.75 + grassCrunch)
      * unevenGround
      * 0.42
  }
  const ocean = context.createBufferSource()
  ocean.buffer = noiseBuffer
  ocean.loop = true
  oceanFilter.type = "lowpass"
  oceanFilter.frequency.value = 430
  oceanFilter.Q.value = 0.55
  oceanGain.gain.value = 0.028
  ocean.connect(oceanFilter).connect(oceanGain).connect(dayBus)
  waveLfo.type = "sine"
  waveLfo.frequency.value = 0.074
  waveDepth.gain.value = 0.014
  waveLfo.connect(waveDepth).connect(oceanGain.gain)
  slowWaveLfo.type = "sine"
  slowWaveLfo.frequency.value = 0.031
  slowWaveDepth.gain.value = 0.006
  slowWaveLfo.connect(slowWaveDepth).connect(oceanGain.gain)

  const surfBuffer = context.createBuffer(1, context.sampleRate * 6, context.sampleRate)
  const surfNoise = surfBuffer.getChannelData(0)
  let softenedNoise = 0
  for (let index = 0; index < surfNoise.length; index += 1) {
    softenedNoise = softenedNoise * 0.35 + (Math.random() * 2 - 1) * 0.65
    surfNoise[index] = softenedNoise
  }
  const surf = context.createBufferSource()
  surf.buffer = surfBuffer
  surf.loop = true
  surfFilter.type = "bandpass"
  surfFilter.frequency.value = 920
  surfFilter.Q.value = 0.48
  surfGain.gain.value = 0.007
  surf.connect(surfFilter).connect(surfGain).connect(dayBus)
  surfWaveDepth.gain.value = 0.0045
  waveLfo.connect(surfWaveDepth).connect(surfGain.gain)
  ocean.start()
  surf.start()
  waveLfo.start()
  slowWaveLfo.start()

  engine.type = "sine"
  engine.frequency.value = 82
  engineFilter.type = "lowpass"
  engineFilter.frequency.value = 560
  engineFilter.Q.value = 0.65
  engineGain.gain.value = 0
  engine.connect(engineFilter).connect(engineGain).connect(master)
  engine.start()

  const grassDrive = context.createBufferSource()
  grassDrive.buffer = grassTextureBuffer
  grassDrive.loop = true
  grassDrive.playbackRate.value = 0.72
  grassFilter.type = "bandpass"
  grassFilter.frequency.value = 920
  grassFilter.Q.value = 0.34
  grassGain.gain.value = 0
  grassDrive.connect(grassFilter).connect(grassGain).connect(master)
  grassDrive.start()

  hornGain.gain.value = 0.0001
  hornHighpass.type = "highpass"
  hornHighpass.frequency.value = 190
  hornHighpass.Q.value = 0.7
  hornLowpass.type = "lowpass"
  hornLowpass.frequency.value = 1_850
  hornLowpass.Q.value = 1.15
  hornHighpass.connect(hornLowpass).connect(hornGain).connect(master)

  const playBird = () => {
    if (context.state !== "running") return
    const chirpStart = context.currentTime
    const birdCount = 1 + Math.floor(Math.random() * 3)
    for (let bird = 0; bird < birdCount; bird += 1) {
      const callType = Math.floor(Math.random() * 4)
      const noteCounts = [2, 5, 3, 2]
      const spacings = [0.12, 0.06, 0.15, 0.28]
      const durations = [0.18, 0.075, 0.22, 0.32]
      const baseRanges = [1_450, 2_650, 950, 440]
      const baseSpreads = [850, 900, 650, 240]
      const base = baseRanges[callType] + Math.random() * baseSpreads[callType]
      const birdOffset = Math.random() * 0.24
      const panner = context.createStereoPanner()
      panner.pan.value = Math.random() * 1.6 - 0.8
      panner.connect(dayBus)
      for (let note = 0; note < noteCounts[callType]; note += 1) {
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        const duration = durations[callType]
        const noteStart = chirpStart + birdOffset + note * spacings[callType]
        const alternating = note % 2 === 0 ? 1 : 1.22
        const startFrequency = base * (callType === 2 ? alternating : 1 + note * 0.035)
        const peakFrequency = callType === 3
          ? startFrequency * 0.82
          : callType === 1
            ? startFrequency * (note % 2 ? 0.9 : 1.2)
            : startFrequency * 1.58
        const endFrequency = callType === 3
          ? startFrequency * 0.68
          : startFrequency * (callType === 2 ? 0.92 : 1.06)
        oscillator.type = callType === 2 || callType === 3 ? "triangle" : "sine"
        oscillator.frequency.setValueAtTime(startFrequency, noteStart)
        oscillator.frequency.exponentialRampToValueAtTime(
          peakFrequency,
          noteStart + duration * 0.38
        )
        oscillator.frequency.exponentialRampToValueAtTime(
          endFrequency,
          noteStart + duration * 0.92
        )
        gain.gain.setValueAtTime(0.0001, noteStart)
        gain.gain.exponentialRampToValueAtTime(
          callType === 3 ? 0.007 : callType === 1 ? 0.009 : 0.012,
          noteStart + Math.min(0.025, duration * 0.2)
        )
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + duration)
        oscillator.connect(gain).connect(panner)
        oscillator.start(noteStart)
        oscillator.stop(noteStart + duration + 0.01)
      }
    }
  }

  const playInsect = () => {
    if (context.state !== "running") return
    const insectCount = 1 + Math.floor(Math.random() * 3)
    for (let insect = 0; insect < insectCount; insect += 1) {
      const chirpStart = context.currentTime + Math.random() * 0.1
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const panner = context.createStereoPanner()
      panner.pan.value = Math.random() * 1.8 - 0.9
      oscillator.type = "sine"
      oscillator.frequency.value = 3_500 + Math.random() * 1_750
      gain.gain.setValueAtTime(0.0001, chirpStart)
      for (let pulse = 0; pulse < 3; pulse += 1) {
        const pulseStart = chirpStart + pulse * 0.055
        gain.gain.exponentialRampToValueAtTime(0.006, pulseStart + 0.012)
        gain.gain.exponentialRampToValueAtTime(0.0001, pulseStart + 0.04)
      }
      oscillator.connect(gain).connect(panner).connect(nightBus)
      oscillator.start(chirpStart)
      oscillator.stop(chirpStart + 0.19)
    }
  }

  let birdTimer = 0
  let lastCollisionAt = -Infinity
  let hornActive = false
  let hornOscillators: OscillatorNode[] = []
  let hornVibrato: OscillatorNode | null = null
  const lastVegetationAt: Record<NatureInteraction["kind"], number> = {
    grass: -Infinity,
    bush: -Infinity,
    bamboo: -Infinity,
    tree: -Infinity,
    mushroom: -Infinity,
    cactus: -Infinity,
    rock: -Infinity,
  }
  const scheduleBirds = () => {
    birdTimer = window.setTimeout(() => {
      playBird()
      scheduleBirds()
    }, 850 + Math.random() * 2_650)
  }
  scheduleBirds()
  const insectTimer = window.setInterval(() => {
    if (Math.random() > 0.18) playInsect()
  }, 620)

  const startHorn = () => {
    if (hornActive) return
    if (context.state !== "running") return
    hornActive = true

    const hornStart = context.currentTime
    const vibrato = context.createOscillator()
    const vibratoDepth = context.createGain()
    vibrato.type = "sine"
    vibrato.frequency.value = 6.2
    vibratoDepth.gain.value = 1.8
    vibrato.connect(vibratoDepth)

    hornOscillators = [370, 466.16].map((frequency, index) => {
      const oscillator = context.createOscillator()
      const voiceGain = context.createGain()
      oscillator.type = index === 0 ? "sawtooth" : "square"
      oscillator.frequency.value = frequency
      oscillator.detune.value = index === 0 ? -3 : 3
      voiceGain.gain.value = index === 0 ? 0.72 : 0.28
      vibratoDepth.connect(oscillator.frequency)
      oscillator.connect(voiceGain).connect(hornHighpass)
      oscillator.start(hornStart)
      return oscillator
    })

    hornVibrato = vibrato
    vibrato.start(hornStart)
    hornGain.gain.cancelScheduledValues(hornStart)
    hornGain.gain.setValueAtTime(0.0001, hornStart)
    hornGain.gain.exponentialRampToValueAtTime(0.095, hornStart + 0.028)
  }

  const stopHorn = () => {
    if (!hornActive) return
    hornActive = false
    const hornStop = context.currentTime
    hornGain.gain.cancelScheduledValues(hornStop)
    hornGain.gain.setValueAtTime(Math.max(0.0001, hornGain.gain.value), hornStop)
    hornGain.gain.exponentialRampToValueAtTime(0.0001, hornStop + 0.09)
    hornOscillators.forEach((oscillator) => oscillator.stop(hornStop + 0.1))
    hornVibrato?.stop(hornStop + 0.1)
    hornOscillators = []
    hornVibrato = null
  }

  return {
    update(dayFactor: number, speedFactor: number, onGreenLand: boolean) {
      dayBus.gain.value = dayFactor
      nightBus.gain.value = 1 - dayFactor
      engine.frequency.value += (82 + speedFactor * 168 - engine.frequency.value) * 0.06
      engineFilter.frequency.value +=
        (560 + speedFactor * 440 - engineFilter.frequency.value) * 0.06
      engineGain.gain.value += (speedFactor * 0.012 - engineGain.gain.value) * 0.08
      grassDrive.playbackRate.value +=
        (0.68 + speedFactor * 1.22 - grassDrive.playbackRate.value) * 0.07
      grassFilter.frequency.value +=
        (820 + speedFactor * 1_450 - grassFilter.frequency.value) * 0.06
      const grassTarget = onGreenLand ? Math.pow(speedFactor, 0.72) * 0.021 : 0
      grassGain.gain.value += (grassTarget - grassGain.gain.value) * 0.1
    },
    playInteraction(opening: boolean) {
      if (context.state !== "running") return
      const toneStart = context.currentTime
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(opening ? 390 : 620, toneStart)
      oscillator.frequency.exponentialRampToValueAtTime(
        opening ? 690 : 330,
        toneStart + 0.16
      )
      gain.gain.setValueAtTime(0.0001, toneStart)
      gain.gain.exponentialRampToValueAtTime(0.024, toneStart + 0.018)
      gain.gain.exponentialRampToValueAtTime(0.0001, toneStart + 0.2)
      oscillator.connect(gain).connect(master)
      oscillator.start(toneStart)
      oscillator.stop(toneStart + 0.21)
    },
    startHorn,
    stopHorn,
    playCollision(impactSpeed: number) {
      if (context.state !== "running") return
      const impactStart = context.currentTime
      if (impactStart - lastCollisionAt < 0.18) return
      lastCollisionAt = impactStart

      const strength = Math.min(1, Math.max(0.2, impactSpeed / 14))
      const thud = context.createOscillator()
      const thudGain = context.createGain()
      const scrape = context.createBufferSource()
      const scrapeFilter = context.createBiquadFilter()
      const scrapeGain = context.createGain()

      thud.type = "triangle"
      thud.frequency.setValueAtTime(135 + strength * 45, impactStart)
      thud.frequency.exponentialRampToValueAtTime(58, impactStart + 0.14)
      thudGain.gain.setValueAtTime(0.0001, impactStart)
      thudGain.gain.exponentialRampToValueAtTime(0.025 * strength, impactStart + 0.008)
      thudGain.gain.exponentialRampToValueAtTime(0.0001, impactStart + 0.17)
      thud.connect(thudGain).connect(master)

      scrape.buffer = noiseBuffer
      scrape.playbackRate.value = 0.78 + Math.random() * 0.32
      scrapeFilter.type = "bandpass"
      scrapeFilter.frequency.value = 620 + strength * 520
      scrapeFilter.Q.value = 0.72
      scrapeGain.gain.setValueAtTime(0.0001, impactStart)
      scrapeGain.gain.exponentialRampToValueAtTime(0.012 * strength, impactStart + 0.006)
      scrapeGain.gain.exponentialRampToValueAtTime(0.0001, impactStart + 0.11)
      scrape.connect(scrapeFilter).connect(scrapeGain).connect(master)

      thud.start(impactStart)
      thud.stop(impactStart + 0.18)
      scrape.start(impactStart, Math.random() * 5, 0.12)
    },
    playVegetation(kind: NatureInteraction["kind"], impactSpeed: number) {
      if (context.state !== "running") return
      const rustleStart = context.currentTime
      const cooldown = kind === "grass" ? 0.16 : 0.26
      if (rustleStart - lastVegetationAt[kind] < cooldown) return
      lastVegetationAt[kind] = rustleStart

      const strength = Math.min(1, Math.max(0.25, impactSpeed / 12))
      const rustle = context.createBufferSource()
      const rustleHighpass = context.createBiquadFilter()
      const rustleLowpass = context.createBiquadFilter()
      const rustleGain = context.createGain()
      const panner = context.createStereoPanner()
      const variants = foliageBuffers[kind]
      const peakGain = kind === "grass"
        ? 0.011
        : kind === "bamboo"
          ? 0.046
          : kind === "mushroom"
            ? 0.018
            : kind === "cactus"
              ? 0.032
              : 0.052
      rustle.buffer = variants[Math.floor(Math.random() * variants.length)]
      rustle.playbackRate.value = kind === "grass"
        ? 1.05 + Math.random() * 0.32
        : 0.88 + Math.random() * 0.25
      rustleHighpass.type = "highpass"
      rustleHighpass.frequency.value = kind === "grass" ? 1_150 : kind === "bamboo" ? 720 : 430
      rustleLowpass.type = "lowpass"
      rustleLowpass.frequency.value = kind === "grass" ? 5_200 : kind === "bamboo" ? 4_800 : 3_600
      rustleLowpass.Q.value = 0.42
      panner.pan.value = Math.random() * 0.8 - 0.4
      rustleGain.gain.setValueAtTime(0.0001, rustleStart)
      rustleGain.gain.exponentialRampToValueAtTime(
        peakGain * strength,
        rustleStart + 0.018
      )
      rustleGain.gain.exponentialRampToValueAtTime(
        0.0001,
        rustleStart + (kind === "grass" ? 0.19 : 0.34)
      )
      rustle
        .connect(rustleHighpass)
        .connect(rustleLowpass)
        .connect(rustleGain)
        .connect(panner)
        .connect(master)
      rustle.start(rustleStart)

      if (kind === "bamboo") {
        const knockCount = 2 + Math.floor(Math.random() * 2)
        for (let index = 0; index < knockCount; index += 1) {
          const knockStart = rustleStart + index * (0.035 + Math.random() * 0.025)
          const knock = context.createBufferSource()
          const knockFilter = context.createBiquadFilter()
          const knockGain = context.createGain()
          knock.buffer = noiseBuffer
          knock.playbackRate.value = 0.85 + Math.random() * 0.3
          knockFilter.type = "bandpass"
          knockFilter.frequency.value = 520 + index * 230 + Math.random() * 110
          knockFilter.Q.value = 7.5
          knockGain.gain.setValueAtTime(0.0001, knockStart)
          knockGain.gain.exponentialRampToValueAtTime(0.032 * strength, knockStart + 0.003)
          knockGain.gain.exponentialRampToValueAtTime(0.0001, knockStart + 0.065)
          knock.connect(knockFilter).connect(knockGain).connect(panner)
          knock.start(knockStart, Math.random() * 5, 0.07)
        }
      } else if ((kind === "bush" || kind === "tree") && Math.random() > 0.35) {
        const twig = context.createBufferSource()
        const twigFilter = context.createBiquadFilter()
        const twigGain = context.createGain()
        const twigStart = rustleStart + 0.035 + Math.random() * 0.07
        twig.buffer = noiseBuffer
        twigFilter.type = "highpass"
        twigFilter.frequency.value = 2_200 + Math.random() * 900
        twigGain.gain.setValueAtTime(0.0001, twigStart)
        twigGain.gain.exponentialRampToValueAtTime(0.016 * strength, twigStart + 0.002)
        twigGain.gain.exponentialRampToValueAtTime(0.0001, twigStart + 0.028)
        twig.connect(twigFilter).connect(twigGain).connect(panner)
        twig.start(twigStart, Math.random() * 5, 0.035)
      }
    },
    stop() {
      stopHorn()
      window.clearTimeout(birdTimer)
      window.clearInterval(insectTimer)
      const stopAt = context.currentTime + 0.45
      master.gain.cancelScheduledValues(context.currentTime)
      master.gain.setValueAtTime(Math.max(0.0001, master.gain.value), context.currentTime)
      master.gain.exponentialRampToValueAtTime(0.0001, stopAt)
      ocean.stop(stopAt)
      surf.stop(stopAt)
      waveLfo.stop(stopAt)
      slowWaveLfo.stop(stopAt)
      engine.stop(stopAt)
      grassDrive.stop(stopAt)
    },
  }
}

function addBox(
  parent: THREE.Object3D,
  size: [number, number, number],
  position: [number, number, number],
  color: number,
  rotationY = 0
) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(...size),
    new THREE.MeshStandardMaterial({ color, roughness: 0.78 })
  )
  mesh.position.set(...position)
  mesh.rotation.y = rotationY
  mesh.castShadow = true
  mesh.receiveShadow = true
  parent.add(mesh)
  return mesh
}

const BLOCK_LETTERS: Record<string, string[]> = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  N: ["10001", "11001", "11001", "10101", "10011", "10011", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  W: ["10001", "10001", "10001", "10101", "10101", "10101", "01010"],
}

function create3DLabel(
  text: string,
  color: number,
  pixelSize = 0.118,
  depth = 0.38,
  metalness = 0.12
) {
  const letterStep = 6
  const spaceStep = 4
  const pixels: Array<{ x: number; y: number }> = []
  let cursor = 0

  for (const character of text.toUpperCase()) {
    if (character === " ") {
      cursor += spaceStep
      continue
    }
    const glyph = BLOCK_LETTERS[character]
    if (!glyph) continue
    glyph.forEach((row, rowIndex) => {
      for (let column = 0; column < row.length; column += 1) {
        if (row[column] === "1") pixels.push({ x: cursor + column, y: 6 - rowIndex })
      }
    })
    cursor += letterStep
  }

  const width = Math.max(1, cursor - 1)
  const geometry = new THREE.BoxGeometry(pixelSize * 0.86, pixelSize * 0.86, depth)
  const material = new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.12,
    metalness,
    roughness: metalness > 0.5 ? 0.26 : 0.55,
  })
  const letters = new THREE.InstancedMesh(geometry, material, pixels.length)
  const matrix = new THREE.Matrix4()
  pixels.forEach((pixel, index) => {
    matrix.makeTranslation(
      (pixel.x - width / 2) * pixelSize,
      (pixel.y - 3) * pixelSize,
      0
    )
    letters.setMatrixAt(index, matrix)
  })
  letters.instanceMatrix.needsUpdate = true
  letters.castShadow = true
  letters.receiveShadow = true

  const label = new THREE.Group()
  label.add(letters)
  label.userData.glowMaterial = material
  return label
}

function createStation3DIcon(id: StationId, color: number) {
  const icon = new THREE.Group()
  const mainMaterial = new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.12,
    metalness: 0.22,
    roughness: 0.48,
    flatShading: true,
  })
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: 0xfff7e8,
    emissive: color,
    emissiveIntensity: 0.08,
    metalness: 0.08,
    roughness: 0.62,
  })
  const addMesh = (
    geometry: THREE.BufferGeometry,
    material = mainMaterial,
    position: [number, number, number] = [0, 0, 0]
  ) => {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(...position)
    mesh.castShadow = true
    mesh.receiveShadow = true
    icon.add(mesh)
    return mesh
  }

  if (id === "hello") {
    const star = addMesh(new THREE.OctahedronGeometry(0.78, 0))
    star.scale.set(0.72, 1.28, 0.46)
    addMesh(new THREE.TorusGeometry(0.91, 0.075, 8, 32), accentMaterial)
    addMesh(new THREE.SphereGeometry(0.22, 12, 8), accentMaterial, [0, 0, 0.48])
  } else if (id === "work") {
    addMesh(new THREE.BoxGeometry(1.72, 1.02, 0.5))
    addMesh(new THREE.BoxGeometry(1.76, 0.12, 0.56), accentMaterial, [0, 0.12, 0])
    addMesh(new THREE.BoxGeometry(0.72, 0.15, 0.28), mainMaterial, [0, 0.7, 0])
    addMesh(new THREE.BoxGeometry(0.14, 0.45, 0.28), mainMaterial, [-0.3, 0.55, 0])
    addMesh(new THREE.BoxGeometry(0.14, 0.45, 0.28), mainMaterial, [0.3, 0.55, 0])
  } else if (id === "stack") {
    const bracketParts = [
      { x: -0.58, y: 0.28, rotation: -0.62 },
      { x: -0.58, y: -0.28, rotation: 0.62 },
      { x: 0.58, y: 0.28, rotation: 0.62 },
      { x: 0.58, y: -0.28, rotation: -0.62 },
    ]
    bracketParts.forEach(({ x, y, rotation }) => {
      const bar = addMesh(new THREE.BoxGeometry(0.18, 0.92, 0.38), mainMaterial, [x, y, 0])
      bar.rotation.z = rotation
    })
    const slash = addMesh(new THREE.BoxGeometry(0.16, 1.72, 0.42), accentMaterial)
    slash.rotation.z = -0.34
  } else {
    addMesh(new THREE.CylinderGeometry(0.34, 0.46, 1.32, 10))
    addMesh(new THREE.ConeGeometry(0.35, 0.62, 10), mainMaterial, [0, 0.96, 0])
    addMesh(new THREE.SphereGeometry(0.2, 12, 8), accentMaterial, [0, 0.2, 0.38])
    const leftFin = addMesh(new THREE.BoxGeometry(0.22, 0.62, 0.35), mainMaterial, [-0.47, -0.47, 0])
    const rightFin = addMesh(new THREE.BoxGeometry(0.22, 0.62, 0.35), mainMaterial, [0.47, -0.47, 0])
    leftFin.rotation.z = -0.32
    rightFin.rotation.z = 0.32
    addMesh(new THREE.ConeGeometry(0.24, 0.55, 8), accentMaterial, [0, -0.92, 0]).rotation.z = Math.PI
  }

  icon.userData.glowMaterials = [mainMaterial, accentMaterial]
  return icon
}

function createTree(scene: THREE.Scene, x: number, z: number, scale = 1) {
  const tree = new THREE.Group()
  addBox(tree, [0.7, 2.7, 0.7], [0, 1.35, 0], 0x744d32)
  const crown = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.8, 0),
    new THREE.MeshStandardMaterial({ color: 0x357a50, roughness: 1 })
  )
  crown.position.y = 3.4
  crown.scale.set(1, 1.2, 1)
  crown.castShadow = true
  tree.add(crown)
  tree.position.set(x, 0, z)
  tree.scale.setScalar(scale)
  scene.add(tree)
}

function createStation(scene: THREE.Scene, station: Station) {
  const group = new THREE.Group()
  const materialColor = station.color
  addBox(group, [9, 0.6, 7], [0, 0.3, 0], 0xede9df)
  addBox(group, [7.6, 0.35, 5.8], [0, 0.78, 0], materialColor)
  addBox(group, [0.32, 4.8, 0.32], [-3.5, 3.15, -2.5], 0x1a1a1a)
  addBox(group, [0.32, 4.8, 0.32], [3.5, 3.15, -2.5], 0x1a1a1a)
  addBox(group, [7.4, 0.3, 0.3], [0, 5.45, -2.5], 0x1a1a1a)
  const rotatingLabel = create3DLabel(station.label, materialColor)
  rotatingLabel.position.set(0, 6.35, -2.5)
  const floatingIcon = createStation3DIcon(station.id, materialColor)
  floatingIcon.position.set(0, 1.72, 0)
  rotatingLabel.add(floatingIcon)
  group.add(rotatingLabel)

  const glowCanvas = document.createElement("canvas")
  glowCanvas.width = 96
  glowCanvas.height = 96
  const glowContext = glowCanvas.getContext("2d")!
  const glowGradient = glowContext.createRadialGradient(48, 48, 4, 48, 48, 46)
  glowGradient.addColorStop(0, "rgba(255,255,255,0.9)")
  glowGradient.addColorStop(0.28, "rgba(255,255,255,0.46)")
  glowGradient.addColorStop(1, "rgba(255,255,255,0)")
  glowContext.fillStyle = glowGradient
  glowContext.fillRect(0, 0, 96, 96)
  const glowTexture = new THREE.CanvasTexture(glowCanvas)
  glowTexture.colorSpace = THREE.SRGBColorSpace

  const floatingBalls = Array.from({ length: 3 }, (_, index) => {
    const material = new THREE.MeshStandardMaterial({
      color: 0xf8f5ed,
      emissive: materialColor,
      emissiveIntensity: 0.06,
      metalness: 0.04,
      roughness: 0.72,
      flatShading: true,
    })
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.8, 1),
      material
    )
    const baseX = -2.2 + index * 2.2
    const baseY = 1.75 + index * 0.2
    const baseZ = 0.2
    mesh.position.set(baseX, baseY, baseZ)
    mesh.castShadow = true
    mesh.receiveShadow = true
    const haloMaterial = new THREE.SpriteMaterial({
      map: glowTexture,
      color: materialColor,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const halo = new THREE.Sprite(haloMaterial)
    halo.scale.setScalar(3.65)
    mesh.add(halo)
    group.add(mesh)
    return { mesh, material, haloMaterial, baseX, baseY, baseZ, phase: index * 2.1 }
  })

  const beacon = new THREE.Mesh(
    new THREE.TorusGeometry(1.1, 0.1, 10, 32),
    new THREE.MeshBasicMaterial({ color: materialColor })
  )
  beacon.rotation.x = Math.PI / 2
  beacon.position.set(0, 1.15, 2.4)
  group.add(beacon)
  group.position.set(station.x, 0, station.z)
  group.rotation.y = Math.atan2(station.x, station.z) + Math.PI
  scene.add(group)

  const light = new THREE.PointLight(materialColor, 0, 16, 1.6)
  light.position.set(station.x, 6, station.z)
  scene.add(light)
  return { light, rotatingLabel, floatingIcon, floatingBalls }
}

function createCar() {
  const car = new THREE.Group()
  addBox(car, [2.7, 0.7, 4.4], [0, 0.95, 0], 0xff5b35)
  addBox(car, [2.3, 0.8, 2], [0, 1.65, 0.15], 0xf7efe2)
  addBox(car, [2.34, 0.45, 0.08], [0, 1.8, 1.18], 0x8ac7d6)
  addBox(car, [2.34, 0.45, 0.08], [0, 1.8, -0.9], 0x8ac7d6)
  addBox(car, [0.45, 0.22, 0.1], [-0.78, 1.02, 2.23], 0xfff4b8)
  addBox(car, [0.45, 0.22, 0.1], [0.78, 1.02, 2.23], 0xfff4b8)

  const wheelGeometry = new THREE.CylinderGeometry(0.52, 0.52, 0.36, 12)
  const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.9 })
  const wheels: THREE.Mesh[] = []
  ;[-1, 1].forEach((side) => {
    ;[-1.35, 1.35].forEach((front) => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial)
      wheel.rotation.z = Math.PI / 2
      wheel.position.set(side * 1.42, 0.66, front)
      wheel.castShadow = true
      wheels.push(wheel)
      car.add(wheel)
    })
  })
  car.userData.wheels = wheels
  return car
}

function StationPanel({ station, onClose }: { station: Station; onClose: () => void }) {
  return (
    <section className="explore-panel" aria-modal="true" role="dialog" aria-labelledby="station-title">
      <button className="explore-panel-close" type="button" onClick={onClose} aria-label="Close panel">
        <IconX />
      </button>
      <p className="explore-panel-eyebrow">{station.eyebrow}</p>

      {station.id === "hello" ? (
        <>
          <IconSparkles className="explore-panel-icon" />
          <h2 id="station-title">Built to be used, tuned to be fast.</h2>
          <p>
            I&apos;m Dihan. I build frontend systems for products with real operational
            weight—and I stay around to make them faster, clearer, and easier to evolve.
          </p>
          <img className="explore-panel-portrait" src={portrait} alt="Nahid Abdulmalik" />
          <div className="explore-stats">
            <span><strong>10+</strong> years building</span>
            <span><strong>5</strong> product domains</span>
            <span><strong>GMT+8</strong> Philippines</span>
          </div>

          <div className="explore-panel-section">
            <p className="explore-panel-kicker">Frontend optimization</p>
            <h3>Performance is not a final polish.</h3>
            <p>
              It shapes architecture, interaction, and whether a product feels
              trustworthy. I optimize with evidence, then protect the improvement
              with repeatable engineering habits.
            </p>
            <div className="explore-principle-list">
              {optimizationNotes.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <div><strong>{item.title}</strong><p>{item.copy}</p></div>
                </article>
              ))}
            </div>
            <div className="explore-method-grid">
              <span><strong>Measure</strong>Runtime behavior · bundles · network · user flows</span>
              <span><strong>Prioritize</strong>User impact · frequency · engineering cost</span>
              <span><strong>Verify</strong>Before/after evidence · regression coverage</span>
            </div>
          </div>
        </>
      ) : null}

      {station.id === "work" ? (
        <>
          <IconBriefcase className="explore-panel-icon" />
          <h2 id="station-title">Work with operational weight.</h2>
          <p>Five teams across fintech, aerospace, ticketing, travel, and product foundations.</p>
          <div className="explore-experience-list">
            {workEntries.map((entry, index) => (
              <article key={entry.company}>
                <div className="explore-entry-heading">
                  <span>0{index + 1} / {entry.period}</span>
                  <a href={entry.href} target="_blank" rel="noreferrer" aria-label={`Visit ${entry.company}`}><IconArrowUpRight /></a>
                </div>
                <h3>{entry.company}</h3>
                <strong>{entry.role}</strong>
                <p>{entry.note}</p>
                <div className="explore-entry-tags">
                  {entry.focus.map((item) => <span key={item}>/ {item}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="explore-panel-section">
            <p className="explore-panel-kicker">Education background</p>
            <h3>Study, build, repeat.</h3>
            <div className="explore-education-list">
              {educationEntries.map((entry) => (
                <article key={entry.title}>
                  <span>{entry.period}</span>
                  <div className="explore-entry-heading">
                    <h4>{entry.title}</h4>
                    {entry.href ? <a href={entry.href} target="_blank" rel="noreferrer" aria-label={`Visit ${entry.title}`}><IconArrowUpRight /></a> : null}
                  </div>
                  <p>{entry.description}</p>
                  <div className="explore-entry-tags">
                    {entry.highlights.map((item) => <span key={item}>/ {item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </>
      ) : null}

      {station.id === "stack" ? (
        <>
          <IconCode className="explore-panel-icon" />
          <h2 id="station-title">Tools change. Good judgment compounds.</h2>
          <p>I work across frontend architecture, real-time interfaces, mapping, data flows, performance, and the backend edges that support them.</p>
          <div className="explore-tech-list">
            {TECH.map((tech) => (
              <a key={tech.title} href={tech.href} target="_blank" rel="noreferrer">
                {tech.node}
                <span>{tech.title}</span>
              </a>
            ))}
          </div>

          <div className="explore-panel-section">
            <p className="explore-panel-kicker">Extending the stack</p>
            <h3>Frontend specialist. Full-stack capable with the right companion.</h3>
            <p>
              I use <strong>Claude Code</strong> as a context-aware engineering
              companion to work confidently across the stack. I understand how to
              structure the context around the work—not just how to ask for code.
            </p>
            <div className="explore-ai-topics">
              <span>Agents</span><span>Plugins</span><span>Skills</span>
              <span>Hooks</span><span>Rules</span><span>MCP integrations</span>
              <span>Repo context</span>
            </div>
            <div className="explore-principle-list">
              <article><span>01</span><div><strong>Structure</strong><p>Give the companion durable project knowledge, clear boundaries, and the right instructions.</p></div></article>
              <article><span>02</span><div><strong>Integrate</strong><p>Connect tools and services through MCP instead of reducing every workflow to copied text.</p></div></article>
              <article><span>03</span><div><strong>Verify</strong><p>Keep architectural judgment, testing, review, and ownership firmly human.</p></div></article>
            </div>
          </div>
        </>
      ) : null}

      {station.id === "contact" ? (
        <>
          <IconRocket className="explore-panel-icon" />
          <h2 id="station-title">A good opportunity deserves a conversation.</h2>
          <p>
            I&apos;m quietly open to a strong team, a useful problem, senior frontend
            opportunities, and thoughtful product work.
          </p>
          <div className="explore-availability">
            <strong>Currently open for new opportunities</strong>
            <span>Frontend engineer · Philippines / GMT+8</span>
          </div>
          <div className="explore-contact-links">
            <a href="mailto:abdulmaliknahid@gmail.com"><IconMail /> Email me</a>
            <a href="https://github.com/dihanmalik" target="_blank" rel="noreferrer"><IconBrandGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/abdulmaliknahid/" target="_blank" rel="noreferrer"><IconBrandLinkedin /> LinkedIn</a>
            <a href={resume} target="_blank" rel="noreferrer">Résumé <IconArrowUpRight /></a>
          </div>
          <p className="explore-panel-signoff">Nahid Abdulmalik · Built with intent. Optimized with evidence.</p>
        </>
      ) : null}
    </section>
  )
}

export default function ExplorePortfolio() {
  const shellRef = useRef<HTMLElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<AudioContext | null>(null)
  const soundscapeRef = useRef<ReturnType<typeof createExploreSoundscape> | null>(null)
  const lightingRequestRef = useRef<{ mode: LightMode; version: number }>({
    mode: "Daylight",
    version: 0,
  })
  const controlsRef = useRef({ forward: false, back: false, left: false, right: false, boost: false })
  const joystickRef = useRef({ x: 0, y: 0 })
  const joystickKnobRef = useRef<HTMLSpanElement>(null)
  const cameraOrbitRef = useRef(0)
  const cameraOrbitTargetRef = useRef(0)
  const cameraDragRef = useRef<{ pointerId: number; lastX: number } | null>(null)
  const nearestRef = useRef<Station | null>(null)
  const activeStationRef = useRef<Station | null>(null)
  const [started, setStarted] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [nearest, setNearest] = useState<Station | null>(null)
  const [activeStation, setActiveStation] = useState<Station | null>(null)
  const [visited, setVisited] = useState<StationId[]>([])
  const [speed, setSpeed] = useState(0)
  const [carPosition, setCarPosition] = useState({ x: 0, z: 12 })
  const [lighting, setLighting] = useState<{ mode: LightMode; remaining: number }>({
    mode: "Daylight",
    remaining: LIGHT_PHASE_MS / 1000,
  })
  const [isFullscreen, setIsFullscreen] = useState(false)
  const canFullscreen = typeof document !== "undefined" && Boolean(document.fullscreenEnabled)

  const resetJoystick = useCallback(() => {
    joystickRef.current = { x: 0, y: 0 }
    if (joystickKnobRef.current) {
      joystickKnobRef.current.style.transform = "translate3d(0, 0, 0)"
    }
  }, [])

  const startExploring = useCallback(() => {
    const audioContext = audioRef.current ?? new AudioContext()
    audioRef.current = audioContext
    if (audioContext.state === "suspended") void audioContext.resume()
    setStarted(true)
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const openNearest = useCallback(() => {
    const station = nearestRef.current
    if (!station) return
    soundscapeRef.current?.playInteraction(true)
    activeStationRef.current = station
    setActiveStation(station)
    setVisited((current) => current.includes(station.id) ? current : [...current, station.id])
  }, [])

  const closeStation = useCallback(() => {
    if (!activeStationRef.current) return
    soundscapeRef.current?.playInteraction(false)
    activeStationRef.current = null
    setActiveStation(null)
  }, [])

  const startHonk = useCallback(() => {
    const audioContext = audioRef.current
    if (audioContext?.state === "suspended") {
      void audioContext.resume().then(() => soundscapeRef.current?.startHorn())
      return
    }
    soundscapeRef.current?.startHorn()
  }, [])

  const stopHonk = useCallback(() => {
    soundscapeRef.current?.stopHorn()
  }, [])

  const toggleLighting = useCallback(() => {
    const nextMode: LightMode = lighting.mode === "Daylight" ? "Night" : "Daylight"
    lightingRequestRef.current = {
      mode: nextMode,
      version: lightingRequestRef.current.version + 1,
    }
    setLighting({ mode: nextMode, remaining: LIGHT_PHASE_MS / 1000 })
  }, [lighting.mode])

  useEffect(() => {
    if (!started || !mountRef.current) return

    const mount = mountRef.current
    const scene = new THREE.Scene()
    const daySky = new THREE.Color(0x8ecbd2)
    const nightSky = new THREE.Color(0x07111f)
    const skyColor = daySky.clone()
    const fog = new THREE.Fog(daySky, 48, 95)
    scene.background = skyColor
    scene.fog = fog

    const getCameraViewHeight = () => mount.clientWidth < 700 ? 27 : 23
    const initialAspect = mount.clientWidth / mount.clientHeight
    const initialViewHeight = getCameraViewHeight()
    const camera = new THREE.OrthographicCamera(
      -(initialViewHeight * initialAspect) / 2,
      (initialViewHeight * initialAspect) / 2,
      initialViewHeight / 2,
      -initialViewHeight / 2,
      0.1,
      220
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    mount.appendChild(renderer.domElement)

    const hemisphere = new THREE.HemisphereLight(0xfff4d7, 0x315544, 2.2)
    scene.add(hemisphere)
    const sun = new THREE.DirectionalLight(0xfff1cb, 4.2)
    sun.position.set(-22, 35, 18)
    sun.castShadow = true
    sun.shadow.mapSize.set(1536, 1536)
    sun.shadow.camera.left = -55
    sun.shadow.camera.right = 55
    sun.shadow.camera.top = 55
    sun.shadow.camera.bottom = -55
    scene.add(sun)

    const moon = new THREE.DirectionalLight(0x9dbdff, 0)
    moon.position.set(22, 28, -18)
    scene.add(moon)

    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(240 * 3)
    for (let index = 0; index < 240; index += 1) {
      const angle = index * 2.39996
      const radius = 68 + (index % 7) * 2.5
      starPositions[index * 3] = Math.cos(angle) * radius
      starPositions[index * 3 + 1] = 24 + (index % 19) * 2.3
      starPositions[index * 3 + 2] = Math.sin(angle) * radius
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3))
    const starMaterial = new THREE.PointsMaterial({ color: 0xe8efff, size: 0.42, transparent: true, opacity: 0 })
    scene.add(new THREE.Points(starGeometry, starMaterial))

    const oceanGeometry = new THREE.PlaneGeometry(240, 240, 36, 36)
    const oceanMaterial = new THREE.MeshStandardMaterial({
      color: 0x247f9f,
      emissive: 0x061b2a,
      emissiveIntensity: 0.12,
      metalness: 0.08,
      roughness: 0.32,
    })
    const ocean = new THREE.Mesh(oceanGeometry, oceanMaterial)
    ocean.rotation.x = -Math.PI / 2
    ocean.position.y = -1.45
    ocean.receiveShadow = true
    scene.add(ocean)

    const wetShoreline = new THREE.Mesh(
      new THREE.RingGeometry(58.8, 60.35, 192),
      new THREE.MeshBasicMaterial({
        color: 0x82c9c5,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    )
    wetShoreline.rotation.x = -Math.PI / 2
    wetShoreline.position.y = 0.025
    scene.add(wetShoreline)

    const shoreWaveGeometry = new THREE.RingGeometry(57.7, 58.65, 192, 1)
    const shoreWaves = Array.from({ length: 3 }, (_, index) => {
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uColor: { value: new THREE.Color(0xdffafa) },
          uOpacity: { value: 0 },
          uTime: { value: 0 },
          uOffset: { value: index * 2.7 },
        },
        vertexShader: `
          varying float vBand;
          varying float vAngle;

          void main() {
            float radius = length(position.xy);
            vBand = (radius - 57.7) / 0.95;
            vAngle = atan(position.y, position.x);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uOpacity;
          uniform float uTime;
          uniform float uOffset;
          varying float vBand;
          varying float vAngle;

          void main() {
            float brokenEdge = sin(vAngle * 13.0 + uTime * 1.4 + uOffset)
              + sin(vAngle * 29.0 - uTime * 0.75) * 0.55
              + sin(vAngle * 53.0 + uOffset * 1.8) * 0.24;
            float foamPatches = 0.38 + smoothstep(-0.62, 0.42, brokenEdge) * 0.62;
            float softBand = smoothstep(0.0, 0.28, vBand)
              * (1.0 - smoothstep(0.62, 1.0, vBand));
            gl_FragColor = vec4(uColor, uOpacity * foamPatches * softBand);
          }
        `,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.Mesh(shoreWaveGeometry, material)
      mesh.rotation.x = -Math.PI / 2
      mesh.renderOrder = 2
      scene.add(mesh)
      return { mesh, material, offset: index / 3 }
    })

    const ground = createIslandTerrain()
    scene.add(ground)

    const maxLeafParticles = 180
    const leafGeometry = new THREE.BufferGeometry()
    const leafPositions = new Float32Array(maxLeafParticles * 3)
    const leafColors = new Float32Array(maxLeafParticles * 3)
    const leafAlphas = new Float32Array(maxLeafParticles)
    const leafSizes = new Float32Array(maxLeafParticles)
    const leafShapes = new Float32Array(maxLeafParticles)
    leafPositions.fill(-100)
    const leafPositionAttribute = new THREE.BufferAttribute(leafPositions, 3)
    const leafColorAttribute = new THREE.BufferAttribute(leafColors, 3)
    const leafAlphaAttribute = new THREE.BufferAttribute(leafAlphas, 1)
    const leafSizeAttribute = new THREE.BufferAttribute(leafSizes, 1)
    const leafShapeAttribute = new THREE.BufferAttribute(leafShapes, 1)
    leafGeometry.setAttribute("position", leafPositionAttribute)
    leafGeometry.setAttribute("color", leafColorAttribute)
    leafGeometry.setAttribute("aAlpha", leafAlphaAttribute)
    leafGeometry.setAttribute("aSize", leafSizeAttribute)
    leafGeometry.setAttribute("aShape", leafShapeAttribute)
    const leafMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float aAlpha;
        attribute float aSize;
        attribute float aShape;
        varying vec3 vColor;
        varying float vAlpha;
        varying float vShape;

        void main() {
          vColor = color;
          vAlpha = aAlpha;
          vShape = aShape;
          gl_PointSize = aSize;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        varying float vShape;

        void main() {
          vec2 leaf = gl_PointCoord - vec2(0.5);
          float leafShape = 1.0 - smoothstep(0.31, 0.5, length(vec2(leaf.x * 1.65, leaf.y)));
          float chipShape = 1.0 - smoothstep(0.34, 0.48, max(abs(leaf.x), abs(leaf.y)));
          float shape = mix(leafShape, chipShape, step(0.5, vShape));
          if (shape < 0.02) discard;
          gl_FragColor = vec4(vColor, vAlpha * shape);
        }
      `,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
    })
    const leafPoints = new THREE.Points(leafGeometry, leafMaterial)
    leafPoints.frustumCulled = false
    leafPoints.renderOrder = 3
    scene.add(leafPoints)
    const leafParticleState = Array.from({ length: maxLeafParticles }, () => ({
      velocity: new THREE.Vector3(),
      life: 0,
      maxLife: 1,
      baseSize: 4,
    }))
    const leafPalette = {
      grass: [0x3f7f35, 0x5e9d3f, 0x83ad48, 0xa2b853],
      bush: [0x3d7d32, 0x65a844, 0x91b84b, 0xb6a348],
      bamboo: [0x477c36, 0x719d3c, 0xa5b84c, 0xc7b956],
      tree: [0x2f7136, 0x4d913f, 0x78a846, 0xa18f3b],
      rock: [0x766c59, 0x958976, 0xb2a58c, 0x675f52],
    } as const
    let leafCursor = 0
    const natureInteractions: NatureInteraction[] = []

    for (let index = 0; index < 56; index += 1) {
      const angle = (index / 56) * Math.PI * 2 + 0.11 + Math.sin(index * 1.7) * 0.025
      const radius = 52.5 + (index % 5) * 1.25
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.55 + (index % 6) * 0.14, 0),
        new THREE.MeshStandardMaterial({ color: index % 2 ? 0x766c59 : 0x8b806a, roughness: 1, flatShading: true })
      )
      rock.position.set(x, terrainHeightAt(x, z) + 0.35, z)
      rock.rotation.set(index * 0.31, angle, index * 0.17)
      rock.scale.y = 0.65 + (index % 3) * 0.12
      rock.castShadow = true
      rock.receiveShadow = true
      scene.add(rock)
      natureInteractions.push({
        x,
        z,
        radius: 1.15,
        kind: "rock",
        visual: rock,
        restScale: rock.scale.clone(),
        restRotationX: rock.rotation.x,
        restRotationZ: rock.rotation.z,
        impact: 0,
        impactDirection: 0,
      })
    }

    const clusterRockTransforms: THREE.Matrix4[] = []
    const clusterRockColors: THREE.Color[] = []
    for (let cluster = 0; cluster < 12; cluster += 1) {
      const centerAngle = (cluster / 12) * Math.PI * 2 + 0.24
      const rockCount = 3 + (cluster % 4)
      for (let rockIndex = 0; rockIndex < rockCount; rockIndex += 1) {
        const angle = centerAngle + (rockIndex - (rockCount - 1) / 2) * 0.032
        const radius = 53 + ((cluster * 3 + rockIndex * 2) % 5) * 1.05
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const size = 0.38 + ((cluster + rockIndex) % 5) * 0.13
        const rotation = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(cluster * 0.21, angle * 1.4, rockIndex * 0.27)
        )
        clusterRockTransforms.push(
          new THREE.Matrix4().compose(
            new THREE.Vector3(x, terrainHeightAt(x, z) + size * 0.42, z),
            rotation,
            new THREE.Vector3(size, size * (0.58 + (rockIndex % 3) * 0.1), size)
          )
        )
        clusterRockColors.push(new THREE.Color((cluster + rockIndex) % 2 ? 0x766c59 : 0x958976))
        natureInteractions.push({
          x,
          z,
          radius: size + 0.72,
          kind: "rock",
          impact: 0,
          impactDirection: 0,
        })
      }
    }
    const clusterRocks = new THREE.InstancedMesh(
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true }),
      clusterRockTransforms.length
    )
    clusterRockTransforms.forEach((transform, index) => {
      clusterRocks.setMatrixAt(index, transform)
      clusterRocks.setColorAt(index, clusterRockColors[index])
    })
    clusterRocks.instanceMatrix.needsUpdate = true
    if (clusterRocks.instanceColor) clusterRocks.instanceColor.needsUpdate = true
    clusterRocks.castShadow = true
    clusterRocks.receiveShadow = true
    scene.add(clusterRocks)

    const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x393c3d, roughness: 0.96 })
    const road = new THREE.Mesh(new THREE.RingGeometry(22, 34, 64), roadMaterial)
    road.rotation.x = -Math.PI / 2
    road.position.y = 0.03
    road.receiveShadow = true
    scene.add(road)
    const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(10, 72), roadMaterial)
    crossRoad.rotation.x = -Math.PI / 2
    crossRoad.position.y = 0.04
    crossRoad.receiveShadow = true
    scene.add(crossRoad)
    const crossRoadB = crossRoad.clone()
    crossRoadB.rotation.z = Math.PI / 2
    crossRoadB.receiveShadow = true
    scene.add(crossRoadB)

    const stationObjects = STATIONS.map((station) => createStation(scene, station))
    const stationLights = stationObjects.map(({ light }) => light)
    const rotatingStationLabels = stationObjects.map(({ rotatingLabel }) => rotatingLabel)
    const stationFloatingIcons = stationObjects.map(({ floatingIcon }) => floatingIcon)
    const stationFloatingBalls = stationObjects.flatMap(({ floatingBalls }, stationIndex) =>
      floatingBalls.map((ball) => ({ ...ball, stationIndex }))
    )
    const stationLabelMaterials = stationObjects.flatMap(({ rotatingLabel, floatingIcon }) => [
      rotatingLabel.userData.glowMaterial as THREE.MeshStandardMaterial,
      ...(floatingIcon.userData.glowMaterials as THREE.MeshStandardMaterial[]),
    ])

    const center = new THREE.Group()
    addBox(center, [12, 0.7, 12], [0, 0.35, 0], 0xeee8dc)
    addBox(center, [4.5, 1.3, 4.5], [0, 1.35, 0], 0xff5b35, Math.PI / 4)
    const centerLabel = new THREE.Group()
    const centerNameLabel = create3DLabel("DIHAN", 0xd8ad35, 0.29, 0.72, 0.78)
    const centerPortfolioLabel = create3DLabel("PORTFOLIO", 0xf0c958, 0.158, 0.5, 0.72)
    centerNameLabel.position.y = 1.02
    centerPortfolioLabel.position.y = -0.72
    const avatarTexture = new THREE.TextureLoader().load(portrait)
    avatarTexture.colorSpace = THREE.SRGBColorSpace
    const centerAvatar = new THREE.Group()
    const avatarFrameMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8ad35,
      emissive: 0xd8ad35,
      emissiveIntensity: 0.12,
      metalness: 0.72,
      roughness: 0.28,
    })
    const avatarFrame = new THREE.Mesh(
      new THREE.BoxGeometry(3.4, 3.4, 0.22),
      avatarFrameMaterial
    )
    avatarFrame.castShadow = true
    avatarFrame.receiveShadow = true
    const avatarPhoto = new THREE.Mesh(
      new THREE.PlaneGeometry(3.1, 3.1),
      new THREE.MeshBasicMaterial({ map: avatarTexture, toneMapped: false })
    )
    avatarPhoto.position.z = 0.125
    centerAvatar.add(avatarFrame, avatarPhoto)
    centerAvatar.position.set(-6.15, 0.38, 0)
    centerLabel.add(centerNameLabel, centerPortfolioLabel, centerAvatar)
    centerLabel.position.set(0, 5.05, 0)
    center.add(centerLabel)
    scene.add(center)
    const centerLabelMaterials = [centerNameLabel, centerPortfolioLabel].map(
      (label) => label.userData.glowMaterial as THREE.MeshStandardMaterial
    )
    centerLabelMaterials.push(avatarFrameMaterial)
    const centerLabelLight = new THREE.PointLight(0xe5b849, 0, 22, 1.65)
    centerLabelLight.position.set(0, 6.1, 0)
    scene.add(centerLabelLight)

    const car = new THREE.Group()
    const fallbackCar = createCar()
    car.add(fallbackCar)
    car.userData.wheels = fallbackCar.userData.wheels
    car.position.set(0, 0, 12)
    scene.add(car)

    const scatterLeaves = (interaction: NatureInteraction, speed: number, heading: number) => {
      if (
        interaction.kind === "mushroom" ||
        interaction.kind === "cactus" ||
        interaction.kind === "rock"
      ) return
      const palette = leafPalette[interaction.kind]
      const particleCount = interaction.kind === "grass"
        ? 6 + Math.floor(Math.random() * 5)
        : 11 + Math.floor(Math.random() * 9)
      const movementScale = Math.min(1, speed / 14)
      for (let index = 0; index < particleCount; index += 1) {
        const particleIndex = leafCursor % maxLeafParticles
        leafCursor += 1
        const state = leafParticleState[particleIndex]
        const angle = Math.random() * Math.PI * 2
        const spread = interaction.kind === "grass"
          ? 0.18 + Math.random() * 0.65
          : 0.25 + Math.random() * 1.25
        const sourceHeight = interaction.kind === "bush"
          ? 0.65 + Math.random() * 1.25
          : interaction.kind === "grass"
            ? 0.12 + Math.random() * 0.32
            : 1.5 + Math.random() * 2.8
        leafPositionAttribute.setXYZ(
          particleIndex,
          interaction.x + Math.cos(angle) * Math.random() * 0.8,
          sourceHeight,
          interaction.z + Math.sin(angle) * Math.random() * 0.8
        )
        state.velocity.set(
          Math.cos(angle) * spread + Math.sin(heading) * movementScale * 1.2,
          (interaction.kind === "grass" ? 0.65 : 1.4) + Math.random() * 2.5 + movementScale,
          Math.sin(angle) * spread + Math.cos(heading) * movementScale * 1.2
        )
        state.life = interaction.kind === "grass"
          ? 0.55 + Math.random() * 0.45
          : 1.15 + Math.random() * 0.9
        state.maxLife = state.life
        const color = new THREE.Color(palette[Math.floor(Math.random() * palette.length)])
        leafColorAttribute.setXYZ(particleIndex, color.r, color.g, color.b)
        state.baseSize = interaction.kind === "grass"
          ? 2.2 + Math.random() * 2.4
          : 3.2 + Math.random() * 3.4
        leafSizeAttribute.setX(particleIndex, state.baseSize)
        leafShapeAttribute.setX(particleIndex, 0)
        leafAlphaAttribute.setX(particleIndex, 0.95)
      }
      leafPositionAttribute.needsUpdate = true
      leafColorAttribute.needsUpdate = true
      leafSizeAttribute.needsUpdate = true
      leafShapeAttribute.needsUpdate = true
      leafAlphaAttribute.needsUpdate = true
    }

    const headlights = [-0.78, 0.78].map((x) => {
      const light = new THREE.SpotLight(0xe7f2ff, 0, 24, Math.PI / 7, 0.45, 1.25)
      light.position.set(x, 1.15, 2)
      light.target.position.set(x, 0.15, 10)
      car.add(light, light.target)
      return light
    })

    let cancelled = false
    let activeNatureInteractions = new Set<number>()
    const loadWorldAssets = async () => {
      const results = await Promise.allSettled([
        new GLTFLoader().loadAsync(carModelUrl).then((result) => result.scene),
        loadNatureAsset(NATURE_ASSETS.palm),
        loadNatureAsset(NATURE_ASSETS.palmAlt),
        loadNatureAsset(NATURE_ASSETS.bamboo),
        loadNatureAsset(NATURE_ASSETS.cactus),
        loadNatureAsset(NATURE_ASSETS.bush),
        loadNatureAsset(NATURE_ASSETS.grass),
        loadNatureAsset(NATURE_ASSETS.flower),
        loadNatureAsset(NATURE_ASSETS.mushroom),
      ])
      if (cancelled) return

      const [carResult, ...natureResults] = results
      if (carResult.status === "fulfilled") {
        const model = carResult.value
        const displayBase = model.getObjectByName("group478977601")
        if (displayBase) model.remove(displayBase)
        normalizeModel(model, 4.7)
        model.rotation.y = Math.PI
        model.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return
          object.castShadow = true
          object.receiveShadow = true
        })
        car.remove(fallbackCar)
        car.userData.wheels = []
        car.add(model)
      }

      const nature = natureResults
        .filter((result): result is PromiseFulfilledResult<THREE.Group> => result.status === "fulfilled")
        .map((result) => result.value)
      if (nature.length === 8) {
        normalizeModel(nature[0], 7.5, "height")
        normalizeModel(nature[1], 6.8, "height")
        normalizeModel(nature[2], 6.5, "height")
        normalizeModel(nature[3], 2.5, "height")
        normalizeModel(nature[4], 2.2)
        normalizeModel(nature[5], 0.75, "height")
        normalizeModel(nature[6], 0.9, "height")
        normalizeModel(nature[7], 0.7, "height")
        natureInteractions.push(...placeNature(scene, nature))
      } else {
        for (let index = 0; index < 32; index += 1) {
          const angle = (index / 32) * Math.PI * 2
          const radius = index % 2 ? 45 : 50
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          if (STATIONS.some((station) => Math.hypot(x - station.x, z - station.z) < 9)) continue
          createTree(scene, x, z, 0.8 + (index % 4) * 0.12)
        }
      }
      setLoaded(true)
    }
    void loadWorldAssets()

    let heading = Math.PI
    let velocity = 0
    let previous = performance.now()
    let frame = 0
    let lastUiUpdate = 0
    let lastLightingSecond = -1
    let lightingStartedAt = performance.now()
    let lightingPhaseOffset = lightingRequestRef.current.mode === "Daylight" ? 0 : 1
    let appliedLightingVersion = lightingRequestRef.current.version
    let renderedDayFactor = lightingRequestRef.current.mode === "Daylight" ? 1 : 0
    const soundscape = audioRef.current
      ? createExploreSoundscape(audioRef.current)
      : null
    soundscapeRef.current = soundscape
    const cameraDistance = Math.hypot(13, 13)
    const cameraHeight = 18
    const lightColor = new THREE.Color()
    const dayHemisphereColor = new THREE.Color(0xfff4d7)
    const nightHemisphereColor = new THREE.Color(0x8ca8d8)
    const dayOceanColor = new THREE.Color(0x247f9f)
    const nightOceanColor = new THREE.Color(0x0b314b)
    const dayFoamColor = new THREE.Color(0xdffafa)
    const nightFoamColor = new THREE.Color(0x78aebe)

    const handleKey = (event: KeyboardEvent, down: boolean) => {
      const key = event.key.toLowerCase()
      if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d", "h", "shift", "e", "enter"].includes(key)) {
        event.preventDefault()
      }
      if (key === "w" || key === "arrowup") controlsRef.current.forward = down
      if (key === "s" || key === "arrowdown") controlsRef.current.back = down
      if (key === "a" || key === "arrowleft") controlsRef.current.left = down
      if (key === "d" || key === "arrowright") controlsRef.current.right = down
      if (key === "shift") controlsRef.current.boost = down
      if (key === "h") {
        if (down && !event.repeat) soundscape?.startHorn()
        if (!down) soundscape?.stopHorn()
      }
      if (down && (key === "e" || key === "enter")) openNearest()
      if (down && key === "escape") closeStation()
    }
    const keyDown = (event: KeyboardEvent) => handleKey(event, true)
    const keyUp = (event: KeyboardEvent) => handleKey(event, false)
    const clearControls = () => {
      controlsRef.current = { forward: false, back: false, left: false, right: false, boost: false }
      resetJoystick()
      soundscape?.stopHorn()
    }
    window.addEventListener("keydown", keyDown)
    window.addEventListener("keyup", keyUp)
    window.addEventListener("blur", clearControls)

    const resize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return
      const aspect = mount.clientWidth / mount.clientHeight
      const viewHeight = getCameraViewHeight()
      camera.left = -(viewHeight * aspect) / 2
      camera.right = (viewHeight * aspect) / 2
      camera.top = viewHeight / 2
      camera.bottom = -viewHeight / 2
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener("resize", resize)

    const animate = (now: number) => {
      frame = requestAnimationFrame(animate)
      const delta = Math.min((now - previous) / 1000, 0.04)
      previous = now
      const controls = controlsRef.current
      const joystick = joystickRef.current
      const joystickMagnitude = Math.min(1, Math.hypot(joystick.x, joystick.y))
      const keyboardThrottle = controls.forward ? 1 : controls.back ? -1 : 0
      const throttle = keyboardThrottle || joystickMagnitude
      const boosting = controls.boost || (!keyboardThrottle && joystickMagnitude > 0.96)
      const surfaceSpeedFactor = isGreenLandAt(car.position.x, car.position.z) ? 0.85 : 1
      const maxSpeed = (boosting ? 20 : 13) * surfaceSpeedFactor
      const maxReverseSpeed = 7 * surfaceSpeedFactor
      const acceleration = throttle >= 0 ? throttle * 18 : throttle * 12
      velocity += acceleration * delta
      if (Math.abs(throttle) < 0.01) velocity *= Math.pow(0.35, delta)
      velocity = THREE.MathUtils.clamp(velocity, -maxReverseSpeed, maxSpeed)

      const keyboardSteering = (controls.left ? 1 : 0) - (controls.right ? 1 : 0)
      let steering = keyboardSteering
      if (!keyboardThrottle && joystickMagnitude > 0.01) {
        const screenForward = -joystick.y
        const cameraAngle = Math.PI / 4 + cameraOrbitRef.current
        const worldX =
          joystick.x * Math.sin(cameraAngle) - screenForward * Math.cos(cameraAngle)
        const worldZ =
          -joystick.x * Math.cos(cameraAngle) - screenForward * Math.sin(cameraAngle)
        const desiredHeading = Math.atan2(worldX, worldZ)
        const headingDifference = Math.atan2(
          Math.sin(desiredHeading - heading),
          Math.cos(desiredHeading - heading)
        )
        heading += headingDifference * Math.min(1, delta * 6.5)
        steering = THREE.MathUtils.clamp(headingDifference, -1, 1)
      } else if (Math.abs(velocity) > 0.15) {
        heading += steering * delta * 1.7 * (velocity >= 0 ? 1 : -1)
      }
      car.rotation.y = heading
      car.position.x += Math.sin(heading) * velocity * delta
      car.position.z += Math.cos(heading) * velocity * delta
      let collisionSpeed = 0
      const centerApproachSpeed = velocity
      velocity = resolveCircularCollision(
        car.position,
        0,
        0,
        CENTER_STAGE_COLLISION_RADIUS,
        heading,
        velocity
      )
      if (velocity !== centerApproachSpeed) collisionSpeed = Math.abs(centerApproachSpeed)
      for (const station of STATIONS) {
        const stationApproachSpeed = velocity
        velocity = resolveCircularCollision(
          car.position,
          station.x,
          station.z,
          STATION_COLLISION_RADIUS,
          heading,
          velocity
        )
        if (velocity !== stationApproachSpeed) {
          collisionSpeed = Math.max(collisionSpeed, Math.abs(stationApproachSpeed))
        }
      }
      const radius = Math.hypot(car.position.x, car.position.z)
      if (radius > DRIVABLE_RADIUS) {
        collisionSpeed = Math.max(collisionSpeed, Math.abs(velocity))
        const boundaryScale = DRIVABLE_RADIUS / radius
        car.position.x *= boundaryScale
        car.position.z *= boundaryScale
        velocity *= -0.25
      }
      if (collisionSpeed > 0.8) soundscape?.playCollision(collisionSpeed)

      const nextNatureInteractions = new Set<number>()
      natureInteractions.forEach((interaction, index) => {
        const touching = Math.hypot(
          car.position.x - interaction.x,
          car.position.z - interaction.z
        ) < interaction.radius + 1.15
        if (!touching) return
        nextNatureInteractions.add(index)
        if (!activeNatureInteractions.has(index) && Math.abs(velocity) > 0.8) {
          if (interaction.kind === "rock") {
            soundscape?.playCollision(Math.max(1.5, Math.abs(velocity) * 0.72))
          } else {
            soundscape?.playVegetation(interaction.kind, Math.abs(velocity))
          }
          interaction.impact = 1
          interaction.impactDirection = heading
          scatterLeaves(interaction, Math.abs(velocity), heading)
        }
      })
      activeNatureInteractions = nextNatureInteractions

      natureInteractions.forEach((interaction) => {
        const visual = interaction.visual
        const restScale = interaction.restScale
        if (!visual || !restScale || !interaction.impact) return
        const recoverySpeed = interaction.kind === "mushroom"
          ? 3.2
          : interaction.kind === "rock"
            ? 4.2
          : interaction.kind === "cactus"
            ? 2.8
            : 2
        interaction.impact = Math.max(0, interaction.impact - delta * recoverySpeed)
        const wave = Math.sin((1 - interaction.impact) * Math.PI * 5.5) * interaction.impact
        const swayAmount = interaction.kind === "mushroom"
          ? 0.24
          : interaction.kind === "bush"
            ? 0.19
            : interaction.kind === "bamboo"
              ? 0.15
              : interaction.kind === "rock"
                ? 0.055
              : interaction.kind === "cactus"
                ? 0.085
                : 0.11
        const direction = interaction.impactDirection ?? 0
        visual.rotation.x = (interaction.restRotationX ?? 0) + Math.cos(direction) * wave * swayAmount
        visual.rotation.z = (interaction.restRotationZ ?? 0) - Math.sin(direction) * wave * swayAmount
        const squash = Math.abs(wave) * (interaction.kind === "mushroom" ? 0.28 : 0.055)
        visual.scale.set(
          restScale.x * (1 + squash * 0.45),
          restScale.y * (1 - squash),
          restScale.z * (1 + squash * 0.45)
        )
        if (interaction.impact === 0) {
          visual.rotation.x = interaction.restRotationX ?? 0
          visual.rotation.z = interaction.restRotationZ ?? 0
          visual.scale.copy(restScale)
        }
      })

      leafParticleState.forEach((state, index) => {
        if (state.life <= 0) return
        state.life -= delta
        if (state.life <= 0) {
          leafAlphaAttribute.setX(index, 0)
          leafPositionAttribute.setY(index, -100)
          return
        }

        const positionX = leafPositionAttribute.getX(index) + state.velocity.x * delta
        let positionY = leafPositionAttribute.getY(index) + state.velocity.y * delta
        const positionZ = leafPositionAttribute.getZ(index) + state.velocity.z * delta
        state.velocity.y -= 3.5 * delta
        const airDrag = Math.pow(0.48, delta)
        state.velocity.x *= airDrag
        state.velocity.z *= airDrag
        if (positionY < 0.08) {
          positionY = 0.08
          state.velocity.y *= -0.12
          state.velocity.x *= 0.72
          state.velocity.z *= 0.72
        }
        leafPositionAttribute.setXYZ(index, positionX, positionY, positionZ)
        leafAlphaAttribute.setX(index, Math.min(0.95, state.life / 0.42))
        leafSizeAttribute.setX(
          index,
          state.baseSize * (0.58 + Math.abs(Math.sin(now * 0.012 + index * 1.7)) * 0.42)
        )
      })
      leafPositionAttribute.needsUpdate = true
      leafAlphaAttribute.needsUpdate = true
      leafSizeAttribute.needsUpdate = true

      car.position.y = THREE.MathUtils.lerp(
        car.position.y,
        terrainHeightAt(car.position.x, car.position.z),
        Math.min(1, delta * 9)
      )
      const wheels = car.userData.wheels as THREE.Mesh[]
      wheels.forEach((wheel) => { wheel.rotation.x += velocity * delta * 1.8 })
      car.rotation.z = THREE.MathUtils.lerp(car.rotation.z, -steering * Math.min(Math.abs(velocity) / 22, 0.08), 0.12)

      cameraOrbitRef.current +=
        (cameraOrbitTargetRef.current - cameraOrbitRef.current) * Math.min(1, delta * 9)
      const cameraAngle = Math.PI / 4 + cameraOrbitRef.current
      camera.position.set(
        car.position.x + Math.cos(cameraAngle) * cameraDistance,
        cameraHeight,
        car.position.z + Math.sin(cameraAngle) * cameraDistance
      )
      camera.lookAt(car.position.x, 0.6, car.position.z)

      rotatingStationLabels.forEach((label, index) => {
        label.position.y = 6.35 + Math.sin(now * 0.0011 + index * 1.4) * 0.08
        label.lookAt(camera.position)
      })
      stationFloatingIcons.forEach((icon, index) => {
        const iconPhase = now * 0.00135 + index * 1.25
        icon.position.y = 1.72 + Math.sin(iconPhase) * 0.14
        icon.rotation.y = Math.sin(iconPhase * 0.72) * 0.28
        icon.rotation.z = Math.sin(iconPhase * 0.48) * 0.045
      })
      stationFloatingBalls.forEach((ball, index) => {
        const phase = now * 0.00125 + ball.phase + ball.stationIndex * 0.7
        ball.mesh.position.set(
          ball.baseX + Math.cos(phase * 0.72) * 0.2,
          ball.baseY + Math.sin(phase) * 0.42,
          ball.baseZ + Math.sin(phase * 0.68) * 0.18
        )
        ball.mesh.rotation.x = phase * 0.62
        ball.mesh.rotation.y = phase * 0.86 + index * 0.2
        const pulse = 1 + Math.sin(now * 0.0021) * 0.045
        ball.mesh.scale.setScalar(pulse)
      })
      centerLabel.position.y = 5.05 + Math.sin(now * 0.00085) * 0.1
      centerLabel.lookAt(camera.position)
      centerAvatar.position.y = 0.38 + Math.sin(now * 0.0013 + 0.8) * 0.07
      centerAvatar.rotation.z = Math.sin(now * 0.0009) * 0.025

      const oceanPositions = oceanGeometry.getAttribute("position") as THREE.BufferAttribute
      const waveTime = now * 0.00055
      for (let index = 0; index < oceanPositions.count; index += 1) {
        const x = oceanPositions.getX(index)
        const y = oceanPositions.getY(index)
        oceanPositions.setZ(
          index,
          Math.sin(x * 0.12 + waveTime) * 0.1 + Math.cos(y * 0.15 - waveTime * 1.2) * 0.07
        )
      }
      oceanPositions.needsUpdate = true

      shoreWaves.forEach(({ mesh, material, offset }) => {
        const phase = (now * 0.00012 + offset) % 1
        const wash = THREE.MathUtils.smoothstep(phase, 0, 1)
        const shoreScale = THREE.MathUtils.lerp(1.075, 0.965, wash)
        const rise = THREE.MathUtils.smoothstep(phase, 0.04, 0.34)
        mesh.scale.setScalar(shoreScale)
        mesh.position.y = THREE.MathUtils.lerp(-0.72, 0.055, rise)
          + Math.sin(phase * Math.PI) * 0.018
        material.uniforms.uTime.value = now * 0.001
        material.uniforms.uOpacity.value = Math.pow(Math.sin(phase * Math.PI), 0.85) * 0.72
      })

      const lightingRequest = lightingRequestRef.current
      if (lightingRequest.version !== appliedLightingVersion) {
        appliedLightingVersion = lightingRequest.version
        lightingStartedAt = now
        lightingPhaseOffset = lightingRequest.mode === "Daylight" ? 0 : 1
        lastLightingSecond = -1
      }
      const lightingElapsed = now - lightingStartedAt
      const phaseIndex = Math.floor(lightingElapsed / LIGHT_PHASE_MS) + lightingPhaseOffset
      const phaseElapsed = lightingElapsed % LIGHT_PHASE_MS
      const isDayPhase = phaseIndex % 2 === 0
      const transitionStart = LIGHT_PHASE_MS - LIGHT_TRANSITION_MS
      const transitionProgress = THREE.MathUtils.smoothstep(
        Math.max(0, phaseElapsed - transitionStart),
        0,
        LIGHT_TRANSITION_MS
      )
      const targetDayFactor = phaseElapsed < transitionStart
        ? (isDayPhase ? 1 : 0)
        : (isDayPhase ? 1 - transitionProgress : transitionProgress)
      renderedDayFactor = THREE.MathUtils.damp(renderedDayFactor, targetDayFactor, 2.15, delta)
      const dayFactor = renderedDayFactor

      skyColor.copy(nightSky).lerp(daySky, dayFactor)
      fog.color.copy(skyColor)
      renderer.toneMappingExposure = THREE.MathUtils.lerp(0.72, 1.15, dayFactor)
      hemisphere.intensity = THREE.MathUtils.lerp(0.48, 2.2, dayFactor)
      hemisphere.color.copy(lightColor.copy(nightHemisphereColor).lerp(dayHemisphereColor, dayFactor))
      oceanMaterial.color.copy(lightColor.copy(nightOceanColor).lerp(dayOceanColor, dayFactor))
      oceanMaterial.emissiveIntensity = THREE.MathUtils.lerp(0.3, 0.12, dayFactor)
      shoreWaves.forEach(({ material }) => {
        material.uniforms.uColor.value.copy(
          lightColor.copy(nightFoamColor).lerp(dayFoamColor, dayFactor)
        )
      })
      sun.intensity = THREE.MathUtils.lerp(0.04, 4.2, dayFactor)
      moon.intensity = THREE.MathUtils.lerp(1.35, 0, dayFactor)
      starMaterial.opacity = 1 - dayFactor
      stationLights.forEach((light) => { light.intensity = (1 - dayFactor) * 8 })
      stationLabelMaterials.forEach((material) => {
        material.emissiveIntensity = THREE.MathUtils.lerp(1.45, 0.12, dayFactor)
      })
      stationFloatingBalls.forEach(({ material, haloMaterial }) => {
        material.emissiveIntensity = THREE.MathUtils.lerp(1.7, 0.06, dayFactor)
        haloMaterial.opacity = THREE.MathUtils.lerp(0.48, 0, dayFactor)
      })
      centerLabelMaterials.forEach((material) => {
        material.emissiveIntensity = THREE.MathUtils.lerp(1.85, 0.12, dayFactor)
      })
      centerLabelLight.intensity = (1 - dayFactor) * 13
      headlights.forEach((light) => { light.intensity = (1 - dayFactor) * 32 })
      soundscape?.update(
        dayFactor,
        Math.min(1, Math.abs(velocity) / 20),
        isGreenLandAt(car.position.x, car.position.z)
      )

      if (now - lastUiUpdate > 120) {
        lastUiUpdate = now
        setSpeed(Math.round(Math.abs(velocity) * 7))
        setCarPosition({ x: car.position.x, z: car.position.z })
        let closest: Station | null = null
        let closestDistance = 8.4
        for (const station of STATIONS) {
          const distance = Math.hypot(car.position.x - station.x, car.position.z - station.z)
          if (distance < closestDistance) {
            closest = station
            closestDistance = distance
          }
        }
        if (nearestRef.current?.id !== closest?.id) {
          nearestRef.current = closest
          setNearest(closest)
        }
        const lightSecond = Math.floor(lightingElapsed / 1000)
        if (lightSecond !== lastLightingSecond) {
          lastLightingSecond = lightSecond
          setLighting({
            mode: isDayPhase ? "Daylight" : "Night",
            remaining: Math.ceil((LIGHT_PHASE_MS - phaseElapsed) / 1000),
          })
        }
      }

      renderer.render(scene, camera)
    }
    const initialCameraAngle = Math.PI / 4 + cameraOrbitRef.current
    camera.position.set(
      car.position.x + Math.cos(initialCameraAngle) * cameraDistance,
      cameraHeight,
      car.position.z + Math.sin(initialCameraAngle) * cameraDistance
    )
    camera.lookAt(car.position.x, 0.6, car.position.z)
    frame = requestAnimationFrame(animate)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      window.removeEventListener("keydown", keyDown)
      window.removeEventListener("keyup", keyUp)
      window.removeEventListener("blur", clearControls)
      window.removeEventListener("resize", resize)
      soundscape?.stop()
      if (soundscapeRef.current === soundscape) soundscapeRef.current = null
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
        if (object instanceof THREE.Sprite) {
          object.material.map?.dispose()
          object.material.dispose()
        }
        if (object instanceof THREE.Points) {
          object.geometry.dispose()
          object.material.dispose()
        }
      })
      avatarTexture.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [started, closeStation, openNearest, resetJoystick])

  const updateJoystick = (event: ReactPointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const maxTravel = bounds.width * 0.3
    const offsetX = event.clientX - (bounds.left + bounds.width / 2)
    const offsetY = event.clientY - (bounds.top + bounds.height / 2)
    const distance = Math.hypot(offsetX, offsetY)
    const scale = distance > maxTravel ? maxTravel / distance : 1
    const knobX = offsetX * scale
    const knobY = offsetY * scale
    const rawX = knobX / maxTravel
    const rawY = knobY / maxTravel
    const magnitude = Math.hypot(rawX, rawY)
    const deadZone = 0.12

    if (magnitude <= deadZone) {
      joystickRef.current = { x: 0, y: 0 }
    } else {
      const strength = (magnitude - deadZone) / (1 - deadZone)
      joystickRef.current = {
        x: (rawX / magnitude) * strength,
        y: (rawY / magnitude) * strength,
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

  const beginCameraDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    event.currentTarget.classList.add("is-dragging")
    cameraDragRef.current = { pointerId: event.pointerId, lastX: event.clientX }
  }

  const dragCamera = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = cameraDragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    const deltaX = event.clientX - drag.lastX
    drag.lastX = event.clientX
    cameraOrbitTargetRef.current -= deltaX * 0.007
  }

  const endCameraDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (cameraDragRef.current?.pointerId !== event.pointerId) return
    cameraDragRef.current = null
    event.currentTarget.classList.remove("is-dragging")
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenEnabled) return
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      await shellRef.current?.requestFullscreen({ navigationUI: "hide" })
    }
  }, [])

  return (
    <main ref={shellRef} className="explore-shell">
      {!started ? (
        <section className="explore-intro">
          <div className="explore-intro-grid" aria-hidden="true" />
          <p className="explore-intro-kicker">Dihan&apos;s interactive world / v1.0</p>
          <h1>Drive through<br /><em>the work.</em></h1>
          <p className="explore-intro-copy">
            An alternate way into my portfolio. Take the car, follow the roads, and stop at each glowing station to uncover the story.
          </p>
          <div className="explore-intro-actions">
            <button type="button" onClick={startExploring}>
              <IconPlayerPlayFilled /> Start exploring
            </button>
            <a href="./"><IconArrowLeft /> Standard portfolio</a>
          </div>
          <div className="explore-keyboard-hint">
            <span><kbd>WASD</kbd> or <kbd>ARROWS</kbd> to drive</span>
            <span><kbd>SHIFT</kbd> to boost</span>
            <span><kbd>H</kbd> to honk</span>
            <span><kbd>E</kbd> to explore</span>
          </div>
        </section>
      ) : (
        <>
          <div
            ref={mountRef}
            className="explore-canvas"
            role="application"
            aria-label="3D portfolio world. Drag horizontally to rotate the camera."
            onPointerDown={beginCameraDrag}
            onPointerMove={dragCamera}
            onPointerUp={endCameraDrag}
            onPointerCancel={endCameraDrag}
            onLostPointerCapture={(event) => {
              if (cameraDragRef.current?.pointerId === event.pointerId) {
                cameraDragRef.current = null
                event.currentTarget.classList.remove("is-dragging")
              }
            }}
          />
          <header className="explore-hud-top">
            <div className="explore-hud-actions">
              <a href="./" className="explore-back"><IconArrowLeft /> Exit world</a>
              {canFullscreen ? (
                <button className="explore-fullscreen" type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}>
                  {isFullscreen ? <IconMinimize /> : <IconMaximize />}
                  <span>{isFullscreen ? "Exit full screen" : "Full screen"}</span>
                </button>
              ) : null}
            </div>
            <div className="explore-progress">
              <span>{visited.length} / {STATIONS.length} discovered</span>
              <div>{STATIONS.map((station) => <i key={station.id} className={visited.includes(station.id) ? "is-visited" : ""} />)}</div>
            </div>
          </header>

          {!loaded ? <div className="explore-loader">Building world…</div> : null}

          <button
            className="explore-light-cycle"
            type="button"
            onClick={toggleLighting}
            aria-label={`${lighting.mode}, ${formatClock(lighting.remaining)} remaining. Switch to ${lighting.mode === "Daylight" ? "night" : "daylight"}.`}
          >
            {lighting.mode === "Daylight" ? <IconSun /> : <IconMoonStars />}
            <span>
              <strong>{lighting.mode}</strong>
              <small>{formatClock(lighting.remaining)} until {lighting.mode === "Daylight" ? "night" : "day"}</small>
            </span>
          </button>

          <aside className="explore-map" aria-label="World map">
            <span className="explore-map-title"><IconMapPin /> World map</span>
            <div className="explore-map-field">
              {STATIONS.map((station) => (
                <i
                  key={station.id}
                  className={visited.includes(station.id) ? "is-visited" : ""}
                  style={{ left: `${50 + station.x * 1.15}%`, top: `${50 + station.z * 1.15}%` }}
                  title={station.label}
                />
              ))}
              <b style={{ left: `${50 + carPosition.x * 1.15}%`, top: `${50 + carPosition.z * 1.15}%` }} />
            </div>
          </aside>

          <div className="explore-speed"><strong>{speed}</strong><span>KM/H</span></div>

          {nearest && !activeStation ? (
            <button className="explore-interact" type="button" onClick={openNearest}>
              <kbd><span>E</span><IconHandClick /></kbd><span>Explore<br /><strong>{nearest.label}</strong></span>
            </button>
          ) : null}

          <div className="explore-mobile-controls" aria-label="Driving controls">
            <div
              className="explore-mobile-joystick"
              role="application"
              aria-label="Analog driving joystick. Push up to accelerate, down to reverse, and sideways to steer."
              onPointerDown={engageJoystick}
              onPointerMove={(event) => {
                if (event.currentTarget.hasPointerCapture(event.pointerId)) updateJoystick(event)
              }}
              onPointerUp={releaseJoystick}
              onPointerCancel={releaseJoystick}
              onLostPointerCapture={resetJoystick}
            >
              <span className="explore-mobile-joystick-ring" aria-hidden="true" />
              <span ref={joystickKnobRef} className="explore-mobile-joystick-knob" aria-hidden="true" />
            </div>
            <button
              className="explore-mobile-horn"
              type="button"
              onPointerDown={(event) => {
                event.preventDefault()
                event.currentTarget.setPointerCapture(event.pointerId)
                startHonk()
              }}
              onPointerUp={(event) => {
                stopHonk()
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId)
                }
              }}
              onPointerCancel={stopHonk}
              onLostPointerCapture={stopHonk}
              aria-label="Honk the golf cart horn"
            >
              <IconVolume aria-hidden="true" />
              <span>Honk</span>
            </button>
          </div>

          {activeStation ? <StationPanel station={activeStation} onClose={closeStation} /> : null}
        </>
      )}
    </main>
  )
}
