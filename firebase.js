// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQKXWO7ib4VPouTN-m6es1nBc9AMKnSzA",
    authDomain: "romata-1d90c.firebaseapp.com",
    projectId: "romata-1d90c",
    storageBucket: "romata-1d90c.appspot.com",
    messagingSenderId: "917063231425",
    appId: "1:917063231425:web:d906d5ae0260f0f9d73140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}