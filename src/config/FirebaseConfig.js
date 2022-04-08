import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Configure these values and rename this file to FirebaseConfig.js
//Add own firebase file's values below
const firebaseConfig = {
  apiKey: "AIzaSyCED3GM7R-yv945HLY9qpZoW4Na95sZXcg",
  authDomain: "keyvault-b4132.firebaseapp.com",
  projectId: "keyvault-b4132",
  storageBucket: "keyvault-b4132.appspot.com",
  messagingSenderId: "181079676973",
  appId: "1:181079676973:web:6650c12a9e24e69e34c0a4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
