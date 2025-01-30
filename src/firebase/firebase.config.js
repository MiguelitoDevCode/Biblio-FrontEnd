// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA",
  authDomain: "book-store-mern-app.firebaseapp.com",
  projectId: "book-store-mern-app",
  storageBucket: "book-store-mern-app.appspot.com",
  messagingSenderId: "205632822247",
  appId: "1:205632822247:web:b0db0ec66bf6de0bbb3b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);