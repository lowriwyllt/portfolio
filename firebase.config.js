// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgcA97Z2rbu9gb_YfkuCv0VIEDeZDJirQ",
  authDomain: "lowri-roberts.firebaseapp.com",
  projectId: "lowri-roberts",
  storageBucket: "lowri-roberts.appspot.com",
  messagingSenderId: "281158234454",
  appId: "1:281158234454:web:6ac38f2778196764d1a6f7",
  measurementId: "G-XTVYZ1D9NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
