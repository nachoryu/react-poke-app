// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEDey0l46h6EVnxTK8yxn5pVYQIyfFWTc",
  authDomain: "react-poke-app-a3e2b.firebaseapp.com",
  projectId: "react-poke-app-a3e2b",
  storageBucket: "react-poke-app-a3e2b.firebasestorage.app",
  messagingSenderId: "1069685809752",
  appId: "1:1069685809752:web:93d2ab7d8a88b59738602d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;