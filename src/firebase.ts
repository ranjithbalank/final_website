// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe3Ej_E4dxsX2Ho3wtWUbRWHYAFc5YSw8",
  authDomain: "develuperscontact.firebaseapp.com",
  projectId: "develuperscontact",
  storageBucket: "develuperscontact.firebasestorage.app",
  messagingSenderId: "259622427308",
  appId: "1:259622427308:web:c50a9df5d8950b81919d09",
  measurementId: "G-VZ8LQKFP7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);