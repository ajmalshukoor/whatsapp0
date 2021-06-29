import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgYLyYHL-sUMphfllNZNwNYzsG_Lr-RR0",
    authDomain: "whatsapp0-498d9.firebaseapp.com",
    projectId: "whatsapp0-498d9",
    storageBucket: "whatsapp0-498d9.appspot.com",
    messagingSenderId: "733992303829",
    appId: "1:733992303829:web:d7a999a95b5eb387d5365c",
    measurementId: "G-YZ7ZHSTT8C"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):  firebase.app();

  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {db, auth, provider};