// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwNdfl8aWzWVIhAnci4pwlwB2klz82Xg4",
  authDomain: "uber-next-clone-7309f.firebaseapp.com",
  projectId: "uber-next-clone-7309f",
  storageBucket: "uber-next-clone-7309f.appspot.com",
  messagingSenderId: "468107625235",
  appId: "1:468107625235:web:38d98a2818218ccd7790e6",
  measurementId: "G-VTQJ7CY5Q7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }