// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ1w4-RwRoqYlDfq8ZJio_9TBLK8c8A_E",
  authDomain: "app-pinka.firebaseapp.com",
  projectId: "app-pinka",
  storageBucket: "app-pinka.appspot.com",
  messagingSenderId: "817537008803",
  appId: "1:817537008803:web:4a692c023249be64926b16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)