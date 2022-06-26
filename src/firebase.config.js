// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 // addd your key and configuration details
 apiKey: "AIzaSyA5SeVCYQyU5lQDQhZsXM_yn19ejM3bc58",
 authDomain: "house-market-place-3b4b8.firebaseapp.com",
 projectId: "house-market-place-3b4b8",
 storageBucket: "house-market-place-3b4b8.appspot.com",
 messagingSenderId: "244772239202",
 appId: "1:244772239202:web:8c590e9d7695980beb5e3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
