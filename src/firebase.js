import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQe92NW_PH55GtBOOTfue3-tQn6WAints",
  authDomain: "chat-f880c.firebaseapp.com",
  databaseURL: "https://chat-f880c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-f880c",
  storageBucket: "chat-f880c.appspot.com",
  messagingSenderId: "589013654317",
  appId: "1:589013654317:web:547ae79729e294b7ad91a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const googleProvider = new GoogleAuthProvider();
