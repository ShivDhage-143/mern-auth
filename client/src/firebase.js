// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d5324.firebaseapp.com",
  projectId: "mern-auth-d5324",
  storageBucket: "mern-auth-d5324.appspot.com",
  messagingSenderId: "823823352502",
  appId: "1:823823352502:web:f3e6a4023a7fbf5d6a9c17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);