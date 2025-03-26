// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtQYC3T7fn1oVpPBPv0ZaCmeA202DmUWY",
  authDomain: "netflix-gpt-55c76.firebaseapp.com",
  projectId: "netflix-gpt-55c76",
  storageBucket: "netflix-gpt-55c76.firebasestorage.app",
  messagingSenderId: "249018991812",
  appId: "1:249018991812:web:03245c5910a5629a067591",
  measurementId: "G-7HLVMG1MHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();