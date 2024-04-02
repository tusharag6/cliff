"use client";
import { getApps, initializeApp } from "firebase/app";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase";

const currentApps = getApps();

let auth: Auth | undefined = undefined;

if (currentApps.length <= 0) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} else {
  auth = getAuth(currentApps[0]);
}

export default auth as Auth;
