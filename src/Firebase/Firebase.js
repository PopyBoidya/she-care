// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyChi9lCk663EMf6reFPPkp55uPOJLraQG8",
  authDomain: "shecare-45bed.firebaseapp.com",
  projectId: "shecare-45bed",
  storageBucket: "shecare-45bed.firebasestorage.app",
  messagingSenderId: "298230266460",
  appId: "1:298230266460:web:44a587e0425cbf14510499",
  measurementId: "G-P8MWB4MC0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Authentication
export { app, auth }; // Export both app and auth