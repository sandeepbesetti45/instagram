import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2J9RcZtzqPJQKTUv-GQkexhYSsKMRhWQ",
  authDomain: "instagram-clone-713ba.firebaseapp.com",
  projectId: "instagram-clone-713ba",
  storageBucket: "instagram-clone-713ba.firebasestorage.app",
  messagingSenderId: "586098824224",
  appId: "1:586098824224:web:c9273830cd606cd9bf1845",
  measurementId: "G-8GDXX8SH19"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
