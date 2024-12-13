// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkJyIZTcqQSsqQJYNQ9Jz8ekKLxSmjKbA",
  authDomain: "sportify-d7f38.firebaseapp.com",
  projectId: "sportify-d7f38",
  storageBucket: "sportify-d7f38.firebasestorage.app",
  messagingSenderId: "1093160001421",
  appId: "1:1093160001421:web:7a498ceee08a8d394ee7c4",
  measurementId: "G-N0DNEQZRW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export{db}