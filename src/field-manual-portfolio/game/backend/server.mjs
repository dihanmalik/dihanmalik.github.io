import cors from "@fastify/cors"
import rateLimit from "@fastify/rate-limit"
import Fastify from "fastify"
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

const app = Fastify({
  logger: true,
  trustProxy: true,
  bodyLimit: 4096,
  requestTimeout: 15_000,
})

function corsOriginHandler(origin, callback) {
  callback(null, Boolean(origin && allowedOrigins.has(origin)))
}

await app.register(cors, {
  origin: corsOriginHandler,
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  preflight: false,
})

await app.register(rateLimit, {
  global: false,
  keyGenerator(request) {
    return request.ip
  },
})

app.addHook("onRequest", async (_request, reply) => {
  reply.header("Cache-Control", "no-store")
  reply.header("X-Content-Type-Options", "nosniff")
})

async function requireAllowedOrigin(request, reply) {
  const origin = request.headers.origin

  if (!origin || !allowedOrigins.has(origin)) {
    return reply.code(403).send({ error: "Origin is not allowed." })
  }
}

app.get("/health", async () => ({ ok: true }))

app.options(
  "/api/visitors",
  {
    preHandler: requireAllowedOrigin,
  },
  async (_request, reply) => reply.code(204).send()
)

app.post(
  "/api/visitors",
  {
    preHandler: requireAllowedOrigin,
    config: {
      rateLimit: {
        max: 5,
        timeWindow: "10 minutes",
      },
    },
  },
  async (request, reply) => {
    const body =
      request.body && typeof request.body === "object" ? request.body : {}
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
      return reply.code(400).send({
        error: "Character name must be 2–24 valid characters.",
      })
    }

    if (role !== "visitor" && role !== "recruiter") {
      return reply.code(400).send({
        error: "Role must be visitor or recruiter.",
      })
    }

    try {
      const result = await collection.insertOne({
        characterName,
        role,
        createdAt: new Date(),
        source: "pixel-zombie-game",
      })

      return reply.code(201).send({
        ok: true,
        playerId: result.insertedId.toString(),
      })
    } catch (error) {
      request.log.error({ err: error }, "Visitor registration failed")
      return reply.code(500).send({
        error: "Could not save this player. Please try again.",
      })
    }
  }
)

app.setNotFoundHandler(async (_request, reply) => {
  return reply.code(404).send({ error: "Not found." })
})

app.setErrorHandler(async (error, request, reply) => {
  if (error.code === "FST_ERR_CTP_BODY_TOO_LARGE") {
    return reply.code(413).send({ error: "Payload is too large." })
  }

  if (error.code === "FST_ERR_CTP_INVALID_MEDIA_TYPE") {
    return reply
      .code(415)
      .send({ error: "Content-Type must be application/json." })
  }

  if (error.statusCode === 400) {
    return reply.code(400).send({ error: "Request body must be valid JSON." })
  }

  if (error.statusCode === 429) {
    return reply.code(429).send({
      error: "Too many player registrations. Try again later.",
    })
  }

  request.log.error({ err: error }, "Unhandled request error")
  return reply.code(500).send({ error: "Internal server error." })
})

app.addHook("onClose", async () => {
  await client.close()
})

await app.listen({ port, host: "0.0.0.0" })

let shuttingDown = false

async function shutdown(signal) {
  if (shuttingDown) {
    return
  }

  shuttingDown = true
  app.log.info({ signal }, "Shutting down")

  try {
    await app.close()
    process.exit(0)
  } catch (error) {
    app.log.error({ err: error }, "Graceful shutdown failed")
    process.exit(1)
  }
}

process.on("SIGINT", () => shutdown("SIGINT"))
process.on("SIGTERM", () => shutdown("SIGTERM"))
