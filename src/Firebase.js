import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyChnhzkduwIETcrqAqMQ0AiXuHDWz86Vck",
  
    authDomain: "linkedin-clone-59524.firebaseapp.com",
  
    projectId: "linkedin-clone-59524",
  
    storageBucket: "linkedin-clone-59524.appspot.com",
  
    messagingSenderId: "472401012761",
  
    appId: "1:472401012761:web:d3da0ef526fa9e2e7ba288"
  
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };