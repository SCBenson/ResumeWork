// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGoisv9H1CiKUgXte0eiAD7v3owJ0Gz2E",
  authDomain: "resume-work-68782.firebaseapp.com",
  projectId: "resume-work-68782",
  storageBucket: "resume-work-68782.firebasestorage.app",
  messagingSenderId: "1007768208860",
  appId: "1:1007768208860:web:483de708933e2a5b81fb19",
  measurementId: "G-8LFFZWM3LM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
