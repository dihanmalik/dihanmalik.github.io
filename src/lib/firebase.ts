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

const firebaseConfig = {
  apiKey: "AIzaSyBCl_By5lt91fYM9Ufiifs4R8hM6btOR0Q",
  authDomain: "my-portfolio-285a8.firebaseapp.com",
  projectId: "my-portfolio-285a8",
  storageBucket: "my-portfolio-285a8.firebasestorage.app",
  messagingSenderId: "752040583501",
  appId: "1:752040583501:web:303ba806d3aceccc8d9704",
  measurementId: "G-ELPLNWMW89",
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
export const firebaseAuth = getAuth(app)
export const OWNER_EMAIL = "abdulmaliknahid@gmail.com"

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
  return user?.email === OWNER_EMAIL && user.emailVerified ? user : null
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
