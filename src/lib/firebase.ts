// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAe3Ej_E4dxsX2Ho3wtWUbRWHYAFc5YSw8',
  authDomain: 'develuperscontact.firebaseapp.com',
  projectId: 'develuperscontact',
  storageBucket: 'develuperscontact.firebasestorage.app',
  messagingSenderId: '259622427308',
  appId: '1:259622427308:web:c50a9df5d8950b81919d09',
  measurementId: 'G-VZ8LQKFP7V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, keep if you want analytics)
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export { db };