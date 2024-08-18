// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI9ArApLV6kGuz89h6YXE0mB58aFaTr8g",
    authDomain: "vite-contact-457b5.firebaseapp.com",
    projectId: "vite-contact-457b5",
    storageBucket: "vite-contact-457b5.appspot.com",
    messagingSenderId: "104386264931",
    appId: "1:104386264931:web:9241a68d8250265cc8dd56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);