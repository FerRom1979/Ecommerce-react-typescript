// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCZpGdVVrcpftIk6EmAk-xG3dA8HuZLwIs",

  authDomain: "react-fb-auth-9192e.firebaseapp.com",

  projectId: "react-fb-auth-9192e",

  storageBucket: "react-fb-auth-9192e.appspot.com",

  messagingSenderId: "270006359092",

  appId: "1:270006359092:web:e700f43857a1f4f9196661",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
