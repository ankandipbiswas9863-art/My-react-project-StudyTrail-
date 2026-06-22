// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9afFRaFWq24rlCtqdqA6qS6z6MFN3yOA",
  authDomain: "login-auth-ea2a5.firebaseapp.com",
  projectId: "login-auth-ea2a5",
  storageBucket: "login-auth-ea2a5.firebasestorage.app",
  messagingSenderId: "811560986401",
  appId: "1:811560986401:web:7091197bfb1f42127d4060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;