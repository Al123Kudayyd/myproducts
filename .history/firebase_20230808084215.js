// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { storage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCiMMVavWRwcD0UBq0nkCaylt2vRYMy-4",
  authDomain: "next-app-d4ede.firebaseapp.com",
  projectId: "next-app-d4ede",
  storageBucket: "next-app-d4ede.appspot.com",
  messagingSenderId: "345947262408",
  appId: "1:345947262408:web:1c920934d115be3ff904fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const s