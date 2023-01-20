import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBSqTbvEtKzlhefGMOkmGx8nQGYzF4O75k",
  authDomain: "login-signup-91bc1.firebaseapp.com",
  projectId: "login-signup-91bc1",
  storageBucket: "login-signup-91bc1.appspot.com",
  messagingSenderId: "705835382507",
  appId: "1:705835382507:web:8e8a178362226763bb70ae"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore()

export {db,auth };