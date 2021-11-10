import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDMWVoo523-lXFcu8XZLdoin4eZQ41kdT4',
  authDomain: 'certificate-1cac5.firebaseapp.com',
  projectId: 'certificate-1cac5',
  storageBucket: 'certificate-1cac5.appspot.com',
  messagingSenderId: '894487497232',
  appId: '1:894487497232:web:50029edaec6347a5e8d895',
  measurementId: 'G-EHB473KQ87',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
