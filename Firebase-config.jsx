// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMYD-8nYNVZSCpO0H-FtBvCQCCGYM_WXs",
  authDomain: "e-commerceadmin-9f282.firebaseapp.com",
  projectId: "e-commerceadmin-9f282",
  storageBucket: "e-commerceadmin-9f282.appspot.com",
  messagingSenderId: "214151694612",
  appId: "1:214151694612:web:682a9c3a7935592702da01",
  measurementId: "G-H222KL2PWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
