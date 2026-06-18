import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQzmGF5iYU-3aJpFNqKYmEj4yGEwL0aDc",
  authDomain: "adit-isma-wedding.firebaseapp.com",
  projectId: "adit-isma-wedding",
  storageBucket: "adit-isma-wedding.firebasestorage.app",
  messagingSenderId: "904644812752",
  appId: "1:904644812752:web:79b1c1f1f1387029c623d5",
  measurementId: "G-1THVTEJQ0C"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };