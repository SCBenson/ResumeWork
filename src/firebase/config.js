import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGoisv9H1CiKUgXte0eiAD7v3owJ0Gz2E",
  authDomain: "resume-work-68782.firebaseapp.com",
  projectId: "resume-work-68782",
  storageBucket: "resume-work-68782.firebasestorage.app",
  messagingSenderId: "1007768208860",
  appId: "1:1007768208860:web:483de708933e2a5b81fb19",
  measurementId: "G-8LFFZWM3LM",
};

initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();
export { DB, AUTH };
