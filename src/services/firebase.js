import { getAnalytics, isSupported } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const firebaseProjectId = firebaseConfig.projectId;

const hasFirebaseConfig =
  Boolean(firebaseConfig.apiKey) &&
  Boolean(firebaseConfig.projectId) &&
  Boolean(firebaseConfig.appId);

const app = hasFirebaseConfig
  ? getApps().length
    ? getApp()
    : initializeApp(firebaseConfig)
  : null;

function getOptionalAuth() {
  if (!app) return null;

  try {
    return getAuth(app);
  } catch (error) {
    console.error("Firebase Auth is not available:", error);
    return null;
  }
}

export const auth = getOptionalAuth();
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;

export const coozterProjectRef = db ? doc(db, "projects", "coozter") : null;
export const coozterDealsRef = db
  ? collection(db, "projects", "coozter", "deals")
  : null;
export const coozterCategoriesRef = db
  ? collection(db, "projects", "coozter", "categories")
  : null;

export async function getFirebaseAnalytics() {
  if (!app || typeof window === "undefined" || !(await isSupported())) {
    return null;
  }

  return getAnalytics(app);
}

export { app };
