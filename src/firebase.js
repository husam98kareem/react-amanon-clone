import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyASTENRXTpemWGdHHcwqu8IhBYl_eSenqk",
    authDomain: "clone-375bb.firebaseapp.com",
    projectId: "clone-375bb",
    storageBucket: "clone-375bb.appspot.com",
    messagingSenderId: "476332200939",
    appId: "1:476332200939:web:19e1eba2f08755a9993fae",
    measurementId: "G-BS3GK5WQJ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;