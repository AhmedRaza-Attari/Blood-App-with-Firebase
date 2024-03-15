import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDltJEEjx-Yu3uyKu2PkTCwLvyUHRuBk7Q",
    authDomain: "hackathon-34cd7.firebaseapp.com",
    projectId: "hackathon-34cd7",
    storageBucket: "hackathon-34cd7.appspot.com",
    messagingSenderId: "863827700173",
    appId: "1:863827700173:web:1be3811987105b8bf1fc84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };