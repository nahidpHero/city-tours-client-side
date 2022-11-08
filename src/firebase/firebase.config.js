// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWYF-7uZCHCvk-R-Pbtq73h9lcp0MLx8A",
  authDomain: "city-tours-f961f.firebaseapp.com",
  projectId: "city-tours-f961f",
  storageBucket: "city-tours-f961f.appspot.com",
  messagingSenderId: "732793732671",
  appId: "1:732793732671:web:d6c4f6329865612e35428a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;