import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "erics-audio-shop.firebaseapp.com",
  projectId: "erics-audio-shop",
  storageBucket: "erics-audio-shop.appspot.com",
  messagingSenderId: "63498699992",
  appId: "1:63498699992:web:aa89dc2da0074089be83ad",
  measurementId: "G-JFXRQGFVBP"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export { auth,}
