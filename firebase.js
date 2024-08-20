// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1QQ9k2XgYVzEftzGTs6C0GUuoZJmKas",
  authDomain: "flashcard-saas-2591b.firebaseapp.com",
  projectId: "flashcard-saas-2591b",
  storageBucket: "flashcard-saas-2591b.appspot.com",
  messagingSenderId: "920151502955",
  appId: "1:920151502955:web:c7877368f02460045ec12e",
  measurementId: "G-S67TPS89ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
