import { getApp, getApps, initializeApp } from "firebase/app"
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  getAuth,
  setPersistence,
  signInAnonymously,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

function requireFirebaseEnv(name: string) {
  const value = import.meta.env[name]?.trim()

  if (!value) {
    throw new Error(`Missing required Firebase environment variable: ${name}`)
  }

  return value
}

export const FIREBASE_API_KEY = requireFirebaseEnv("VITE_FIREBASE_API_KEY")
export const FIREBASE_PROJECT_ID = requireFirebaseEnv(
  "VITE_FIREBASE_PROJECT_ID"
)

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: requireFirebaseEnv("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: requireFirebaseEnv("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: requireFirebaseEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: requireFirebaseEnv("VITE_FIREBASE_APP_ID"),
  measurementId: requireFirebaseEnv("VITE_FIREBASE_MEASUREMENT_ID"),
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
export const firebaseAuth = getAuth(app)
export const OWNER_EMAIL = requireFirebaseEnv("VITE_FIREBASE_OWNER_EMAIL")

let userPromise: Promise<User> | null = null

export function getAnonymousUser() {
  if (userPromise) return userPromise

  userPromise = (async () => {
    await setPersistence(firebaseAuth, browserLocalPersistence)
    if (firebaseAuth.currentUser) return firebaseAuth.currentUser
    return (await signInAnonymously(firebaseAuth)).user
  })().catch((error: unknown) => {
    userPromise = null
    throw error
  })

  return userPromise
}

export async function getSignedInOwner() {
  await firebaseAuth.authStateReady()
  const user = firebaseAuth.currentUser
  return user && user.email === OWNER_EMAIL && user.emailVerified ? user : null
}

export async function signInAsOwner() {
  await setPersistence(firebaseAuth, browserLocalPersistence)
  const currentOwner = await getSignedInOwner()
  if (currentOwner) return currentOwner

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: "select_account" })
  const result = await signInWithPopup(firebaseAuth, provider)

  if (result.user.email !== OWNER_EMAIL || !result.user.emailVerified) {
    await signOut(firebaseAuth)
    userPromise = null
    throw new Error("That Google account is not authorized for this view.")
  }

  userPromise = Promise.resolve(result.user)
  return result.user
}
