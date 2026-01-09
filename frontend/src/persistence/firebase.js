// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCysZnYaXqizTHew0wCxXtuuNGChvo61Ns",
  authDomain: "daaw-examen.firebaseapp.com",
  projectId: "daaw-examen",
  storageBucket: "daaw-examen.firebasestorage.app",
  messagingSenderId: "326431020752",
  appId: "1:326431020752:web:c72807065a1f21388170d5"
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(
    app,
    "https://daaw-examen-default-rtdb.europe-west1.firebasedatabase.app/"
);