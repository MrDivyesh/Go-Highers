import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbD2WV71OSPDmVrCHXhZT7yKYHCz332p0",
  authDomain: "go-higher-e3082.firebaseapp.com",
  projectId: "go-higher-e3082",
  storageBucket: "go-higher-e3082.firebasestorage.app",
  messagingSenderId: "842169459579",
  appId: "1:842169459579:web:7643b60434e8d0ceb253de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };