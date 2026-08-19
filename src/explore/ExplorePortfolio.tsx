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
  IconBolt,
  IconMoonStars,
  IconRocket,
  IconSparkles,
  IconSun,
  IconX,
} from "@tabler/icons-react"
import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

import resume from "@/assets/CV_2026.pdf"
import { workEntries } from "@/field-manual-portfolio/data"

import { carModelUrl, loadNatureAsset, NATURE_ASSETS } from "./exploreAssets"

import "./explore-portfolio.css"

type StationId = "hello" | "work" | "stack" | "contact"
type ControlKey = "forward" | "back" | "left" | "right" | "boost"
type LightMode = "Daylight" | "Night"

type Station = {
  id: StationId
  label: string
  eyebrow: string
  x: number
  z: number
  color: number
}

const STATIONS: Station[] = [
  { id: "hello", label: "Start here", eyebrow: "01 / Hello", x: -20, z: 21, color: 0xff5b35 },
  { id: "work", label: "Selected work", eyebrow: "02 / Career", x: -27, z: -19, color: 0x5eead4 },
  { id: "stack", label: "The lab", eyebrow: "03 / Toolkit", x: 28, z: -25, color: 0xffd166 },
  { id: "contact", label: "Open channel", eyebrow: "04 / Contact", x: 21, z: 24, color: 0xc4b5fd },
]

const TECH = [
  "React",
  "TypeScript",
  "Next.js",
  "MobX",
  "Mapbox",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Claude Code",
]

const LIGHT_PHASE_MS = 3 * 60 * 1000
const LIGHT_TRANSITION_MS = 15 * 1000
const ISLAND_RADIUS = 60
const DRIVABLE_RADIUS = ISLAND_RADIUS - 1

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
  const radius = Math.hypot(x, z)
  if (radius <= 50) return 0
  const progress = THREE.MathUtils.clamp((radius - 50) / 10, 0, 1)
  const angle = Math.atan2(z, x)
  const contour = Math.sin(angle * 5) * 0.18 + Math.cos(angle * 9) * 0.1
  return Math.sin(progress * Math.PI) * (1.1 - progress * 0.35) + contour * progress - progress * 1.2
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

  for (let index = 0; index < 36; index += 1) {
    const angle = (index / 36) * Math.PI * 2
    const source = trees[index % trees.length]
    const tree = source.clone()
    const treeRadius = index % 3 ? 46 : 51
    const treeX = Math.cos(angle) * treeRadius
    const treeZ = Math.sin(angle) * treeRadius
    tree.position.set(treeX, terrainHeightAt(treeX, treeZ), treeZ)
    tree.rotation.y = angle * 2.3
    tree.scale.multiplyScalar(0.82 + (index % 5) * 0.06)
    scene.add(tree)
  }

  for (let index = 0; index < 12; index += 1) {
    const angle = (index / 12) * Math.PI * 2 + 0.3
    const radius = 43 + (index % 2) * 2.2
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    const plant = cactus.clone()
    plant.position.set(x, terrainHeightAt(x, z), z)
    plant.rotation.y = angle * 1.7
    plant.scale.multiplyScalar(0.75 + (index % 3) * 0.12)
    scene.add(plant)
  }

  for (let index = 0; index < 24; index += 1) {
    const angle = (index / 24) * Math.PI * 2 + 0.18
    const shrub = bush.clone()
    shrub.position.set(Math.cos(angle) * (38 + (index % 3) * 2.2), 0, Math.sin(angle) * (38 + (index % 3) * 2.2))
    shrub.rotation.y = angle
    shrub.scale.multiplyScalar(0.75 + (index % 4) * 0.12)
    scene.add(shrub)
  }

  for (let index = 0; index < 30; index += 1) {
    const angle = index * 2.399
    const radius = 35 + (index % 4) * 3.4
    const patch = (index % 5 === 0 ? mushroom : index % 3 ? grass : flower).clone()
    patch.position.set(Math.cos(angle) * radius, 0.02, Math.sin(angle) * radius)
    patch.rotation.y = angle
    patch.scale.multiplyScalar(0.75 + (index % 5) * 0.08)
    scene.add(patch)
  }

  let seed = 4817
  const random = () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
  let clustersPlaced = 0
  let attempts = 0
  while (clustersPlaced < 18 && attempts < 180) {
    attempts += 1
    const x = (random() - 0.5) * 90
    const z = (random() - 0.5) * 90
    const radius = Math.hypot(x, z)
    const isRoad = (radius > 19 && radius < 36) || Math.abs(x) < 6 || Math.abs(z) < 6
    const isStation = STATIONS.some((station) => Math.hypot(x - station.x, z - station.z) < 7)
    if (radius > 47 || radius < 10 || isRoad || isStation) continue

    const bladeCount = 5 + Math.floor(random() * 4)
    for (let blade = 0; blade < bladeCount; blade += 1) {
      const angle = random() * Math.PI * 2
      const distance = Math.sqrt(random()) * 2.4
      const bladeX = x + Math.cos(angle) * distance
      const bladeZ = z + Math.sin(angle) * distance
      const grassBlade = grass.clone()
      grassBlade.position.set(bladeX, 0.025, bladeZ)
      grassBlade.rotation.y = random() * Math.PI * 2
      grassBlade.scale.multiplyScalar(0.55 + random() * 0.65)
      scene.add(grassBlade)
    }
    clustersPlaced += 1
  }
}

function formatClock(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`
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

function addLabel(
  parent: THREE.Object3D,
  text: string,
  position: [number, number, number],
  color = "#161616"
) {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 128
  const context = canvas.getContext("2d")!
  context.fillStyle = "rgba(255,255,255,0.92)"
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = color
  context.font = "700 45px Arial"
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.fillText(text.toUpperCase(), 256, 66)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)
  sprite.position.set(...position)
  sprite.scale.set(8, 2, 1)
  parent.add(sprite)
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
  addLabel(group, station.label, [0, 4.35, -2.55])

  for (let index = 0; index < 3; index += 1) {
    addBox(group, [1.35, 1.35 + index * 0.35, 1.35], [-2.2 + index * 2.2, 1.5, 0.2], 0xf8f5ed)
  }

  const beacon = new THREE.Mesh(
    new THREE.TorusGeometry(1.1, 0.1, 10, 32),
    new THREE.MeshBasicMaterial({ color: materialColor })
  )
  beacon.rotation.x = Math.PI / 2
  beacon.position.set(0, 1.15, 2.4)
  group.add(beacon)
  group.position.set(station.x, 0, station.z)
  scene.add(group)

  const light = new THREE.PointLight(materialColor, 0, 16, 1.6)
  light.position.set(station.x, 6, station.z)
  scene.add(light)
  return light
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
          <h2 id="station-title">I build interfaces for real-world systems.</h2>
          <p>
            I&apos;m Dihan, a senior frontend developer in the Philippines. For ten years I&apos;ve helped turn complex products into fast, dependable experiences.
          </p>
          <div className="explore-stats">
            <span><strong>10+</strong> years building</span>
            <span><strong>5</strong> product domains</span>
            <span><strong>∞</strong> things to tune</span>
          </div>
        </>
      ) : null}

      {station.id === "work" ? (
        <>
          <IconBriefcase className="explore-panel-icon" />
          <h2 id="station-title">Work with operational weight.</h2>
          <div className="explore-work-list">
            {workEntries.slice(0, 3).map((entry) => (
              <a key={entry.company} href={entry.href} target="_blank" rel="noreferrer">
                <span>{entry.period}</span>
                <strong>{entry.company}</strong>
                <small>{entry.role}</small>
                <IconArrowUpRight />
              </a>
            ))}
          </div>
        </>
      ) : null}

      {station.id === "stack" ? (
        <>
          <IconCode className="explore-panel-icon" />
          <h2 id="station-title">Tools change. Good judgment compounds.</h2>
          <p>I work across frontend architecture, real-time interfaces, mapping, data flows, performance, and the backend edges that support them.</p>
          <div className="explore-tech-list">
            {TECH.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </>
      ) : null}

      {station.id === "contact" ? (
        <>
          <IconRocket className="explore-panel-icon" />
          <h2 id="station-title">Let&apos;s make something useful.</h2>
          <p>I&apos;m open to senior frontend opportunities and thoughtful product work.</p>
          <div className="explore-contact-links">
            <a href="mailto:abdulmaliknahid@gmail.com"><IconMail /> Email me</a>
            <a href="https://github.com/dihanmalik" target="_blank" rel="noreferrer"><IconBrandGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/abdulmaliknahid/" target="_blank" rel="noreferrer"><IconBrandLinkedin /> LinkedIn</a>
            <a href={resume} target="_blank" rel="noreferrer">Résumé <IconArrowUpRight /></a>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default function ExplorePortfolio() {
  const shellRef = useRef<HTMLElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)
  const controlsRef = useRef({ forward: false, back: false, left: false, right: false, boost: false })
  const nearestRef = useRef<Station | null>(null)
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

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const openNearest = useCallback(() => {
    const station = nearestRef.current
    if (!station) return
    setActiveStation(station)
    setVisited((current) => current.includes(station.id) ? current : [...current, station.id])
  }, [])

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

    const shoreline = new THREE.Mesh(
      new THREE.RingGeometry(58.5, 64, 96),
      new THREE.MeshBasicMaterial({ color: 0xa9e1df, transparent: true, opacity: 0.52, side: THREE.DoubleSide })
    )
    shoreline.rotation.x = -Math.PI / 2
    shoreline.position.y = -1.04
    scene.add(shoreline)

    const ground = createIslandTerrain()
    scene.add(ground)

    for (let index = 0; index < 20; index += 1) {
      const angle = (index / 20) * Math.PI * 2 + 0.11
      const radius = 54 + (index % 3) * 1.4
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.75 + (index % 4) * 0.15, 0),
        new THREE.MeshStandardMaterial({ color: index % 2 ? 0x766c59 : 0x8b806a, roughness: 1, flatShading: true })
      )
      rock.position.set(x, terrainHeightAt(x, z) + 0.35, z)
      rock.rotation.set(index * 0.31, angle, index * 0.17)
      rock.scale.y = 0.65 + (index % 3) * 0.12
      rock.castShadow = true
      rock.receiveShadow = true
      scene.add(rock)
    }

    const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x393c3d, roughness: 0.96 })
    const road = new THREE.Mesh(new THREE.RingGeometry(22, 34, 64), roadMaterial)
    road.rotation.x = -Math.PI / 2
    road.position.y = 0.03
    road.receiveShadow = true
    scene.add(road)
    const crossRoad = new THREE.Mesh(new THREE.PlaneGeometry(10, 72), roadMaterial)
    crossRoad.rotation.x = -Math.PI / 2
    crossRoad.position.y = 0.04
    scene.add(crossRoad)
    const crossRoadB = crossRoad.clone()
    crossRoadB.rotation.z = Math.PI / 2
    scene.add(crossRoadB)

    const stationLights = STATIONS.map((station) => createStation(scene, station))

    const center = new THREE.Group()
    addBox(center, [12, 0.7, 12], [0, 0.35, 0], 0xeee8dc)
    addBox(center, [4.5, 1.3, 4.5], [0, 1.35, 0], 0xff5b35, Math.PI / 4)
    addLabel(center, "DIHAN / PORTFOLIO", [0, 4.2, 0])
    scene.add(center)

    const car = new THREE.Group()
    const fallbackCar = createCar()
    car.add(fallbackCar)
    car.userData.wheels = fallbackCar.userData.wheels
    car.position.set(0, 0, 12)
    scene.add(car)

    const headlights = [-0.78, 0.78].map((x) => {
      const light = new THREE.SpotLight(0xe7f2ff, 0, 24, Math.PI / 7, 0.45, 1.25)
      light.position.set(x, 1.15, 2)
      light.target.position.set(x, 0.15, 10)
      car.add(light, light.target)
      return light
    })

    let cancelled = false
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
        placeNature(scene, nature)
      } else {
        for (let index = 0; index < 32; index += 1) {
          const angle = (index / 32) * Math.PI * 2
          const radius = index % 2 ? 45 : 50
          createTree(scene, Math.cos(angle) * radius, Math.sin(angle) * radius, 0.8 + (index % 4) * 0.12)
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
    const lightingStartedAt = performance.now()
    const isometricOffset = new THREE.Vector3(13, 18, 13)
    const lightColor = new THREE.Color()
    const dayHemisphereColor = new THREE.Color(0xfff4d7)
    const nightHemisphereColor = new THREE.Color(0x8ca8d8)
    const dayOceanColor = new THREE.Color(0x247f9f)
    const nightOceanColor = new THREE.Color(0x0b314b)

    const handleKey = (event: KeyboardEvent, down: boolean) => {
      const key = event.key.toLowerCase()
      if (["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d", "shift", "e", "enter"].includes(key)) {
        event.preventDefault()
      }
      if (key === "w" || key === "arrowup") controlsRef.current.forward = down
      if (key === "s" || key === "arrowdown") controlsRef.current.back = down
      if (key === "a" || key === "arrowleft") controlsRef.current.left = down
      if (key === "d" || key === "arrowright") controlsRef.current.right = down
      if (key === "shift") controlsRef.current.boost = down
      if (down && (key === "e" || key === "enter")) openNearest()
      if (down && key === "escape") setActiveStation(null)
    }
    const keyDown = (event: KeyboardEvent) => handleKey(event, true)
    const keyUp = (event: KeyboardEvent) => handleKey(event, false)
    window.addEventListener("keydown", keyDown)
    window.addEventListener("keyup", keyUp)

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
      const maxSpeed = controls.boost ? 20 : 13
      const acceleration = controls.forward ? 18 : controls.back ? -12 : 0
      velocity += acceleration * delta
      if (!controls.forward && !controls.back) velocity *= Math.pow(0.35, delta)
      velocity = THREE.MathUtils.clamp(velocity, -7, maxSpeed)

      const steering = (controls.left ? 1 : 0) - (controls.right ? 1 : 0)
      if (Math.abs(velocity) > 0.15) heading += steering * delta * 1.7 * (velocity >= 0 ? 1 : -1)
      car.rotation.y = heading
      car.position.x += Math.sin(heading) * velocity * delta
      car.position.z += Math.cos(heading) * velocity * delta
      const radius = Math.hypot(car.position.x, car.position.z)
      if (radius > DRIVABLE_RADIUS) {
        const boundaryScale = DRIVABLE_RADIUS / radius
        car.position.x *= boundaryScale
        car.position.z *= boundaryScale
        velocity *= -0.25
      }
      car.position.y = THREE.MathUtils.lerp(
        car.position.y,
        terrainHeightAt(car.position.x, car.position.z),
        Math.min(1, delta * 9)
      )
      const wheels = car.userData.wheels as THREE.Mesh[]
      wheels.forEach((wheel) => { wheel.rotation.x += velocity * delta * 1.8 })
      car.rotation.z = THREE.MathUtils.lerp(car.rotation.z, -steering * Math.min(Math.abs(velocity) / 22, 0.08), 0.12)

      camera.position.set(
        car.position.x + isometricOffset.x,
        isometricOffset.y,
        car.position.z + isometricOffset.z
      )

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

      const lightingElapsed = now - lightingStartedAt
      const phaseIndex = Math.floor(lightingElapsed / LIGHT_PHASE_MS)
      const phaseElapsed = lightingElapsed % LIGHT_PHASE_MS
      const isDayPhase = phaseIndex % 2 === 0
      const transitionStart = LIGHT_PHASE_MS - LIGHT_TRANSITION_MS
      const transitionProgress = THREE.MathUtils.smoothstep(
        Math.max(0, phaseElapsed - transitionStart),
        0,
        LIGHT_TRANSITION_MS
      )
      const dayFactor = phaseElapsed < transitionStart
        ? (isDayPhase ? 1 : 0)
        : (isDayPhase ? 1 - transitionProgress : transitionProgress)

      skyColor.copy(nightSky).lerp(daySky, dayFactor)
      fog.color.copy(skyColor)
      renderer.toneMappingExposure = THREE.MathUtils.lerp(0.72, 1.15, dayFactor)
      hemisphere.intensity = THREE.MathUtils.lerp(0.48, 2.2, dayFactor)
      hemisphere.color.copy(lightColor.copy(nightHemisphereColor).lerp(dayHemisphereColor, dayFactor))
      oceanMaterial.color.copy(lightColor.copy(nightOceanColor).lerp(dayOceanColor, dayFactor))
      oceanMaterial.emissiveIntensity = THREE.MathUtils.lerp(0.3, 0.12, dayFactor)
      sun.intensity = THREE.MathUtils.lerp(0.04, 4.2, dayFactor)
      moon.intensity = THREE.MathUtils.lerp(1.35, 0, dayFactor)
      starMaterial.opacity = 1 - dayFactor
      stationLights.forEach((light) => { light.intensity = (1 - dayFactor) * 8 })
      headlights.forEach((light) => { light.intensity = (1 - dayFactor) * 32 })

      if (now - lastUiUpdate > 120) {
        lastUiUpdate = now
        setSpeed(Math.round(Math.abs(velocity) * 7))
        setCarPosition({ x: car.position.x, z: car.position.z })
        let closest: Station | null = null
        let closestDistance = 7.2
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
    camera.position.copy(car.position).add(isometricOffset)
    camera.lookAt(car.position.x, 0.6, car.position.z)
    frame = requestAnimationFrame(animate)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      window.removeEventListener("keydown", keyDown)
      window.removeEventListener("keyup", keyUp)
      window.removeEventListener("resize", resize)
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
      })
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [started, openNearest])

  const startControl = useCallback((key: ControlKey, event: ReactPointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    controlsRef.current[key] = true
  }, [])

  const stopControl = useCallback((key: ControlKey, event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    controlsRef.current[key] = false
  }, [])

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
            <button type="button" onClick={() => setStarted(true)}>
              <IconPlayerPlayFilled /> Start exploring
            </button>
            <a href="./"><IconArrowLeft /> Standard portfolio</a>
          </div>
          <div className="explore-keyboard-hint">
            <span><kbd>WASD</kbd> or <kbd>ARROWS</kbd> to drive</span>
            <span><kbd>SHIFT</kbd> to boost</span>
            <span><kbd>E</kbd> to explore</span>
          </div>
        </section>
      ) : (
        <>
          <div ref={mountRef} className="explore-canvas" />
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

          <div className="explore-light-cycle" aria-label={`${lighting.mode}, ${formatClock(lighting.remaining)} remaining`}>
            {lighting.mode === "Daylight" ? <IconSun /> : <IconMoonStars />}
            <span>
              <strong>{lighting.mode}</strong>
              <small>{formatClock(lighting.remaining)} until {lighting.mode === "Daylight" ? "night" : "day"}</small>
            </span>
          </div>

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
            <div>
              <button type="button" aria-label="Turn left" onPointerDown={(event) => startControl("left", event)} onPointerUp={(event) => stopControl("left", event)} onPointerCancel={(event) => stopControl("left", event)}>←</button>
              <button type="button" aria-label="Turn right" onPointerDown={(event) => startControl("right", event)} onPointerUp={(event) => stopControl("right", event)} onPointerCancel={(event) => stopControl("right", event)}>→</button>
            </div>
            <div className="explore-mobile-pedals">
              <button className="explore-mobile-boost" type="button" aria-label="Boost" onPointerDown={(event) => startControl("boost", event)} onPointerUp={(event) => stopControl("boost", event)} onPointerCancel={(event) => stopControl("boost", event)}><IconBolt /></button>
              <button type="button" aria-label="Reverse" onPointerDown={(event) => startControl("back", event)} onPointerUp={(event) => stopControl("back", event)} onPointerCancel={(event) => stopControl("back", event)}>↓</button>
              <button type="button" aria-label="Accelerate" onPointerDown={(event) => startControl("forward", event)} onPointerUp={(event) => stopControl("forward", event)} onPointerCancel={(event) => stopControl("forward", event)}>↑</button>
            </div>
          </div>

          {activeStation ? <StationPanel station={activeStation} onClose={() => setActiveStation(null)} /> : null}
        </>
      )}
    </main>
  )
}
