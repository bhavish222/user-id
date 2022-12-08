// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhfH4v-Hd1eHYuGsYlhYu_iFh_ljPw8r4",
  authDomain: "login-signup-22.firebaseapp.com",
  projectId: "login-signup-22",
  storageBucket: "login-signup-22.appspot.com",
  messagingSenderId: "771989466238",
  appId: "1:771989466238:web:a3e951b56bdd4365f4fc2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();

export default app;
