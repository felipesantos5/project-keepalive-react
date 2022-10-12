import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjSmmTHu8wCITtpJmh8Ubt6qrMZex2QvU",
  authDomain: "project-keepalive-react.firebaseapp.com",
  projectId: "project-keepalive-react",
  storageBucket: "project-keepalive-react.appspot.com",
  messagingSenderId: "714091034373",
  appId: "1:714091034373:web:0ea6e629080b2b52ec296c",
  measurementId: "G-44REP1F16G"
};

export const app = initializeApp(firebaseConfig);