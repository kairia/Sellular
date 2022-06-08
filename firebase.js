// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAORgnuvCqPndnCECHjmhtBjnYOvyigF-0",
  authDomain: "sellular-c87b8.firebaseapp.com",
  projectId: "sellular-c87b8",
  storageBucket: "sellular-c87b8.appspot.com",
  messagingSenderId: "1096785164831",
  appId: "1:1096785164831:web:d344945c0632f44fad732a",
  measurementId: "G-9TRGNWXFNK",
  databaseURL:'https://sellular-c87b8-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
let app;
if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const db = getDatabase(app);

const auth =firebase.auth();

export {db,auth};
