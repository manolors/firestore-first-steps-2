// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore/lite';

import "dotenv/config"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// 1. Duplicar fichero `.env.example` con nombre `.env`
// 2. Copiar las credenciales obtenidas de la consola de Firebase en cada variable
const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const myCollection = collection(db, "movies")
const querySnapshot = await getDocs(myCollection);
querySnapshot.forEach((doc) => {
  console.log(doc.id);
  console.table(doc.data());
});
