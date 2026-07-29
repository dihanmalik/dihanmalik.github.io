import process from "node:process"

import { loadEnv } from "vite"

const requireProductionUrl = process.argv.includes("--require-production-url")
const fileEnv = loadEnv("production", process.cwd(), "VITE_")
const apiValue =
  process.env.VITE_VISITOR_API_URL ?? fileEnv.VITE_VISITOR_API_URL

function fail(message) {
  console.error(`\nVisitor API configuration error: ${message}\n`)
  process.exit(1)
}

if (!apiValue) {
  if (requireProductionUrl) {
    fail(
      "VITE_VISITOR_API_URL is required for deployment. Set it to the Railway HTTPS URL ending in /api/visitors."
    )
  }

  console.warn(
    "Visitor API is not configured; the zombie game registration will stay disabled."
  )
  process.exit(0)
}

if (/^mongodb(?:\+srv)?:\/\//i.test(apiValue)) {
  fail(
    "VITE_VISITOR_API_URL contains a MongoDB connection string. VITE_ values are public browser data. Put MONGODB_URI only in Railway, then set VITE_VISITOR_API_URL to the Railway API URL."
  )
}

let apiUrl

try {
  apiUrl = new URL(apiValue)
} catch {
  fail("VITE_VISITOR_API_URL must be a valid URL.")
}

const isLocal =
  apiUrl.protocol === "http:" &&
  (apiUrl.hostname === "localhost" || apiUrl.hostname === "127.0.0.1")

if (apiUrl.protocol !== "https:" && !isLocal) {
  fail("VITE_VISITOR_API_URL must use HTTPS, except for localhost development.")
}

if (
  requireProductionUrl &&
  (apiUrl.protocol !== "https:" ||
    apiUrl.pathname.replace(/\/+$/, "") !== "/api/visitors")
) {
  fail(
    "production VITE_VISITOR_API_URL must be an HTTPS Railway URL ending in /api/visitors."
  )
}

console.log(
  requireProductionUrl
    ? "Visitor API production URL is safe to expose to the browser."
    : "Visitor API client URL passed validation."
)
