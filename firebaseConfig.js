// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZOdUPzX5dgFH39yiM7LXQG8QWpOUPRGU",
  authDomain: "kishkinda-resort.firebaseapp.com",
  projectId: "kishkinda-resort",
  storageBucket: "kishkinda-resort.appspot.com",
  messagingSenderId: "323523677319",
  appId: "1:323523677319:web:00887a7b11bc20e7333c22",
  measurementId: "G-L6D080RBNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app)