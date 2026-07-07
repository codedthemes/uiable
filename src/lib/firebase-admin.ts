import { cert, getApp, getApps, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"

function getPrivateKey(): string | undefined {
  // Prefer base64-encoded key (avoids all newline issues across hosting platforms)
  if (process.env.FIREBASE_ADMIN_PRIVATE_KEY_BASE64) {
    return Buffer.from(
      process.env.FIREBASE_ADMIN_PRIVATE_KEY_BASE64,
      "base64"
    ).toString("utf8")
  }
  // Fallback: raw key with escaped newlines
  const raw = process.env.FIREBASE_ADMIN_PRIVATE_KEY
  if (!raw) return undefined
  return raw.replace(/\\n/g, "\n").replace(/^["']|["']$/g, "")
}

function getAdminApp() {
  if (getApps().length > 0) return getApp()

  return initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: getPrivateKey(),
    }),
  })
}

export function getAdminAuth() {
  return getAuth(getAdminApp())
}
