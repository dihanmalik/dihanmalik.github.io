import { makeAutoObservable, reaction } from "mobx"

export type PlayerRole = "visitor" | "recruiter"

export type ZombieGamePlayer = {
  id: string
  characterName: string
  role: PlayerRole
  registeredAt: string
}

const PLAYER_STORAGE_KEY = "field-manual-zombie-players-v1"

function createPlayerId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `player-${crypto.randomUUID()}`
  }

  return `player-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`
}

function isPlayerRole(value: unknown): value is PlayerRole {
  return value === "visitor" || value === "recruiter"
}

function isZombieGamePlayer(value: unknown): value is ZombieGamePlayer {
  if (!value || typeof value !== "object") {
    return false
  }

  const player = value as Record<string, unknown>
  return (
    typeof player.id === "string" &&
    player.id.length > 0 &&
    typeof player.characterName === "string" &&
    isPlayerRole(player.role) &&
    typeof player.registeredAt === "string"
  )
}

function readPlayers() {
  if (typeof window === "undefined") {
    return [] as ZombieGamePlayer[]
  }

  try {
    const storedValue: unknown = JSON.parse(
      window.localStorage.getItem(PLAYER_STORAGE_KEY) ?? "[]"
    )

    return Array.isArray(storedValue)
      ? storedValue.filter(isZombieGamePlayer)
      : []
  } catch {
    return []
  }
}

function writePlayers(players: ZombieGamePlayer[]) {
  if (typeof window === "undefined") {
    return
  }

  try {
    window.localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(players))
  } catch {
    // The game remains playable when storage is unavailable or full.
  }
}

class ZombieGameStore {
  characterName = ""
  role: PlayerRole = "visitor"
  players: ZombieGamePlayer[] = []
  currentPlayer: ZombieGamePlayer | null = null

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })

    this.players = readPlayers()
    this.currentPlayer = this.players.at(-1) ?? null

    reaction(
      () =>
        this.players.map((player) => ({
          id: player.id,
          characterName: player.characterName,
          role: player.role,
          registeredAt: player.registeredAt,
        })),
      writePlayers
    )
  }

  setCharacterName(characterName: string) {
    this.characterName = characterName
  }

  setRole(role: PlayerRole) {
    this.role = role
  }

  registerPlayer() {
    const player: ZombieGamePlayer = {
      id: createPlayerId(),
      characterName: this.characterName.trim(),
      role: this.role,
      registeredAt: new Date().toISOString(),
    }

    this.players.push(player)
    this.currentPlayer = player

    return player
  }
}

export const zombieGameStore = new ZombieGameStore()
