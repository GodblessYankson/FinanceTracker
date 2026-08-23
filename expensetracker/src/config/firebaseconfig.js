// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0WVenIRBJVj3dnF_C13z7-yURhtj-HX8",
  authDomain: "expensetracker-121f6.firebaseapp.com",
  projectId: "expensetracker-121f6",
  storageBucket: "expensetracker-121f6.firebasestorage.app",
  messagingSenderId: "223939407917",
  appId: "1:223939407917:web:01808914656d95de1dc8a4",
  measurementId: "G-31PHGJNVJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
