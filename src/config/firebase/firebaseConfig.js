/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkT-larnpCzgsXWe7RKJLmw0U64oV9aV0",
  authDomain: "fir-auth-50e3d.firebaseapp.com",
  projectId: "fir-auth-50e3d",
  storageBucket: "fir-auth-50e3d.appspot.com",
  messagingSenderId: "947973249960",
  appId: "1:947973249960:web:e3ad98831f543aa53e1b9d",
  measurementId: "G-PZH3T7HV34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app); */