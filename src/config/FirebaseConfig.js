import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Configure these values and rename this file to FirebaseConfig.js
//Add own firebase file's values below
const firebaseConfig = {
    apiKey: "AIzaSyBcf-LwZflx4XoMJcpL2vvcFb85ZZMR-Ho",
    authDomain: "keyvault-f17d6.firebaseapp.com",
    projectId: "keyvault-f17d6",
    storageBucket: "keyvault-f17d6.appspot.com",
    messagingSenderId: "104306584672",
    appId: "1:104306584672:web:a5e200ea2ca223c552a705"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
