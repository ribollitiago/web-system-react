// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE07ffwJzIbESwoia6CC7Bc_JozcoVkaw",
  authDomain: "teste-c1e51.firebaseapp.com",
  projectId: "teste-c1e51",
  storageBucket: "teste-c1e51.appspot.com",
  messagingSenderId: "431355142707",
  appId: "1:431355142707:web:fb7420606f54e015913946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;