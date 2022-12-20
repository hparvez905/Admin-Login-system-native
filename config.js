import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={
  apiKey: "AIzaSyDAfPfiGoZl-rZCLuz_Fcy-1qchM1khLko",
  authDomain: "e-gd-5a804.firebaseapp.com",
  projectId: "e-gd-5a804",
  storageBucket: "e-gd-5a804.appspot.com",
  messagingSenderId: "926054275159",
  appId: "1:926054275159:web:22e21290d277856bb4eb12",
  measurementId: "G-4KG42LXS06"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};