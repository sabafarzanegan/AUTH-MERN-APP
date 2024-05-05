// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d4547.firebaseapp.com",
  projectId: "mern-auth-d4547",
  storageBucket: "mern-auth-d4547.appspot.com",
  messagingSenderId: "597245753116",
  appId: "1:597245753116:web:26df5209df73770e2aacd9",
  measurementId: "G-FQ1EWWJBDT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
