import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDC3pA7uHBQ7RlZGz7gS6cIo7XaZpuhZKs",
  authDomain: "ecommerce-app-1-ead6e.firebaseapp.com",
  projectId: "ecommerce-app-1-ead6e",
  storageBucket: "ecommerce-app-1-ead6e.appspot.com",
  messagingSenderId: "560547924307",
  appId: "1:560547924307:web:05b1c1546e978bd610f9a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logOut = () => signOut(auth);
export {onAuthStateChanged}

export default app;