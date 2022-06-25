// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlq7M4vDXaLHbjd7c5B09tBiO0914prcA",
  authDomain: "insta-clone-a58dd.firebaseapp.com",
  projectId: "insta-clone-a58dd",
  storageBucket: "insta-clone-a58dd.appspot.com",
  messagingSenderId: "294151344251",
  appId: "1:294151344251:web:e66f319aca2fc7f01312de",
  measurementId: "G-G0B5S9E2Y7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
