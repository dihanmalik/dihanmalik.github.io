import { createServer } from "node:http"
import { MongoClient } from "mongodb"

const requiredEnvironment = ["MONGODB_URI", "MONGODB_DB"]
const missingEnvironment = requiredEnvironment.filter(
  (name) => !process.env[name]
)

if (missingEnvironment.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingEnvironment.join(", ")}`
  )
}

const port = Number(process.env.PORT || 8787)
const collectionName = process.env.MONGODB_COLLECTION || "game_visitors"
const allowedOrigins = new Set(
  (
    process.env.ALLOWED_ORIGINS ||
    "http://localhost:5173,https://dihanmalik.github.io"
  )
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)
)

const client = new MongoClient(process.env.MONGODB_URI, {
  appName: "my-portfolio",
  maxPoolSize: 5,
  serverSelectionTimeoutMS: 5000,
})

await client.connect()

const collection = client.db(process.env.MONGODB_DB).collection(collectionName)

await collection.createIndex({ createdAt: -1 })

const attemptsByAddress = new Map()
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT = 5

function applyCors(request, response) {
  const origin = request.headers.origin
  if (!origin || !allowedOrigins.has(origin)) {
    return false
  }

  response.setHeader("Access-Control-Allow-Origin", origin)
  response.setHeader("Vary", "Origin")
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  response.setHeader("Access-Control-Allow-Headers", "Content-Type")
  return true
}

function sendJson(response, status, value) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  })
  response.end(JSON.stringify(value))
}

function isRateLimited(address) {
  const now = Date.now()
  const recentAttempts = (attemptsByAddress.get(address) || []).filter(
    (timestamp) => now - timestamp < RATE_WINDOW_MS
  )
  recentAttempts.push(now)
  attemptsByAddress.set(address, recentAttempts)
  return recentAttempts.length > RATE_LIMIT
}

async function readJsonBody(request) {
  let body = ""

  for await (const chunk of request) {
    body += chunk
    if (Buffer.byteLength(body) > 4096) {
      throw new Error("PAYLOAD_TOO_LARGE")
    }
  }

  return JSON.parse(body)
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", "http://localhost")

  if (requestUrl.pathname.includes("/health") && request.method === "GET") {
    sendJson(response, 200, { ok: true })
    return
  }

  if (requestUrl.pathname !== "/api/visitors") {
    sendJson(response, 404, { error: "Not found." })
    return
  }

  if (!applyCors(request, response)) {
    sendJson(response, 403, { error: "Origin is not allowed." })
    return
  }

  if (request.method === "OPTIONS") {
    response.writeHead(204)
    response.end()
    return
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." })
    return
  }

  if (!request.headers["content-type"]?.startsWith("application/json")) {
    sendJson(response, 415, { error: "Content-Type must be application/json." })
    return
  }

  const address = request.socket.remoteAddress || "unknown"
  if (isRateLimited(address)) {
    sendJson(response, 429, {
      error: "Too many player registrations. Try again later.",
    })
    return
  }

  try {
    const body = await readJsonBody(request)
    const characterName =
      typeof body.characterName === "string"
        ? body.characterName.normalize("NFKC").trim()
        : ""
    const role = body.role

    if (
      characterName.length < 2 ||
      characterName.length > 24 ||
      !/^[\p{L}\p{N} _.'-]+$/u.test(characterName)
    ) {
      sendJson(response, 400, {
        error: "Character name must be 2–24 valid characters.",
      })
      return
    }

    if (role !== "visitor" && role !== "recruiter") {
      sendJson(response, 400, {
        error: "Role must be visitor or recruiter.",
      })
      return
    }

    const result = await collection.insertOne({
      characterName,
      role,
      createdAt: new Date(),
      source: "pixel-zombie-game",
    })

    sendJson(response, 201, {
      ok: true,
      playerId: result.insertedId.toString(),
    })
  } catch (error) {
    if (error instanceof Error && error.message === "PAYLOAD_TOO_LARGE") {
      sendJson(response, 413, { error: "Payload is too large." })
      return
    }

    if (error instanceof SyntaxError) {
      sendJson(response, 400, { error: "Request body must be valid JSON." })
      return
    }

    console.error("Visitor registration failed", error)
    sendJson(response, 500, {
      error: "Could not save this player. Please try again.",
    })
  }
})

server.listen(port, "0.0.0.0", () => {
  console.log(`Visitor API listening on http://localhost:${port}`)
})

async function shutdown() {
  server.close()
  await client.close()
  process.exit(0)
}

process.on("SIGINT", shutdown)
process.on("SIGTERM", shutdown)
