// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAz83WjT3ni8PrbBzo6os2UlGw_k5zCUXE",

  authDomain: "padel-world-store.firebaseapp.com",

  projectId: "padel-world-store",

  storageBucket: "padel-world-store.appspot.com",

  messagingSenderId: "629852112945",

  appId: "1:629852112945:web:fae10616bd090ac619ad10",
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
