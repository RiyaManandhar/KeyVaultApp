import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Configure these values and rename this file to FirebaseConfig.js
//Add own firebase file's values below
const firebaseConfig = {
  apiKey: "AIzaSyA0jqMvrzUCxsKh8N4fjJ84x0H-bqQiMAs",
  authDomain: "keyvault-abdf6.firebaseapp.com",
  projectId: "keyvault-abdf6",
  storageBucket: "keyvault-abdf6.appspot.com",
  messagingSenderId: "49143090678",
  appId: "1:49143090678:web:5244fe9b2ecaafda604bd7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
