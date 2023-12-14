// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKEh3y0_4RMLWw3Vk5MyPtUvODh_ZPvFs",
  authDomain: "netflixgpt-35869.firebaseapp.com",
  projectId: "netflixgpt-35869",
  storageBucket: "netflixgpt-35869.appspot.com",
  messagingSenderId: "762543790186",
  appId: "1:762543790186:web:d1d2b009b604c4ce015213",
  measurementId: "G-8M9HBMWHSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();