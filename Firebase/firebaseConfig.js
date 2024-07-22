import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD8jCpi_Q1VYhpybXO13TsjGTeVhyp4Qc",
  authDomain: "login--authentication-3b39c.firebaseapp.com",
  projectId: "login--authentication-3b39c",
  storageBucket: "login--authentication-3b39c.appspot.com",
  messagingSenderId: "770107350015",
  appId: "1:770107350015:web:d32a9896792bf782de25ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app