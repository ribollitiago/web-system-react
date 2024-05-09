import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE07ffwJzIbESwoia6CC7Bc_JozcoVkaw",
  authDomain: "teste-c1e51.firebaseapp.com",
  projectId: "teste-c1e51",
  storageBucket: "teste-c1e51.appspot.com",
  messagingSenderId: "431355142707",
  appId: "1:431355142707:web:fb7420606f54e015913946"
};

// Verifica se o Firebase já foi inicializado para evitar erros em múltiplas inicializações
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
