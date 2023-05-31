import { initializeApp } from 'firebase/app';
import { getFirestore, query } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAqb-fVEhDyWPEJdMmFq-fCmQ6LuxpG994",
  authDomain: "miau-database.firebaseapp.com",
  projectId: "miau-database",
  storageBucket: "miau-database.appspot.com",
  messagingSenderId: "241980715406",
  appId: "1:241980715406:web:a771069d73e8188235b4df",
  measurementId: "G-KBTQK3YJWL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);