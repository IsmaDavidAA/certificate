import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDMWVoo523-lXFcu8XZLdoin4eZQ41kdT4",
  authDomain: "certificate-1cac5.firebaseapp.com",
  projectId: "certificate-1cac5",
  storageBucket: "certificate-1cac5.appspot.com",
  messagingSenderId: "894487497232",
  appId: "1:894487497232:web:50029edaec6347a5e8d895",
  measurementId: "G-EHB473KQ87",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
