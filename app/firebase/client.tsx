// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO-8o5fcEMd8ni9EdN5mXLL_dOpV4I71Q",
  authDomain: "prepwise-ad7f4.firebaseapp.com",
  projectId: "prepwise-ad7f4",
  storageBucket: "prepwise-ad7f4.firebasestorage.app",
  messagingSenderId: "1087833818941",
  appId: "1:1087833818941:web:b2204817bafa3b20a32754",
  measurementId: "G-S3008HVWTX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)