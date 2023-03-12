// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiCQo3YMGcr0flKd1MiPWobVmqMz_Sw54",
  authDomain: "roft-fafdd.firebaseapp.com",
  projectId: "roft-fafdd",
  storageBucket: "roft-fafdd.appspot.com",
  messagingSenderId: "881702959373",
  appId: "1:881702959373:web:1f46ce59653f434ac09844",
  measurementId: "G-ZH0WQ861HE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig 
