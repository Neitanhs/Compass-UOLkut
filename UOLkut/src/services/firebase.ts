
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAODWDTcBhU-ggoatzCUJYL95qqQWJkEkc",
  authDomain: "uolkut-f2f9c.firebaseapp.com",
  projectId: "uolkut-f2f9c",
  storageBucket: "uolkut-f2f9c.appspot.com",
  messagingSenderId: "201884024174",
  appId: "1:201884024174:web:44f2906270eb6239d5157f",
  measurementId: "G-V3RS03X1KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
