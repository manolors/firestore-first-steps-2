// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';

import "dotenv/config"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

getDoc(doc(db, 'movies/Die Hard')).then((snap) => {
  if(snap.exists()) { // Exists se usa para saber si ese documento existe
    console.table(snap.data()); // En data() se almacenan las propiedades del objeto
  } else {
    console.log("Ups! Ese documento no existe");
  }
});
