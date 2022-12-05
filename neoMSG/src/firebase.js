// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgkNn5GIxyV8Ge3-K1erTNbOhaETPrYWE",
  authDomain: "neomsg-dcebe.firebaseapp.com",
  projectId: "neomsg-dcebe",
  storageBucket: "neomsg-dcebe.appspot.com",
  messagingSenderId: "830681095785",
  appId: "1:830681095785:web:429854f09cafd542e78cf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();