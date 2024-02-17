// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPKFnHZeyG0rJdAhAL25m2j2fg7xVJnVA",
  authDomain: "twitter-clone-95890.firebaseapp.com",
  projectId: "twitter-clone-95890",
  storageBucket: "twitter-clone-95890.appspot.com",
  messagingSenderId: "446205558093",
  appId: "1:446205558093:web:6f3101f6a5d164f47dcb04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)