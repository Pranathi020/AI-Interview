
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-ce214.firebaseapp.com",
  projectId: "interviewiq-ce214",
  storageBucket: "interviewiq-ce214.firebasestorage.app",
  messagingSenderId: "525769207410",
  appId: "1:525769207410:web:1fc98f561fafead9665ceb",
  measurementId: "G-LLS277PK2B"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider }