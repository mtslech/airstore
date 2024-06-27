// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh43MjVOPd4lxN9n4Gi_e6Xx1WwQuyM3Y",
  authDomain: "airstore-6edc6.firebaseapp.com",
  projectId: "airstore-6edc6",
  storageBucket: "airstore-6edc6.appspot.com",
  messagingSenderId: "935883371877",
  appId: "1:935883371877:web:90823e3589833760681d8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }