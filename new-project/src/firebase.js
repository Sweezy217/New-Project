import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy6coZspj5Jp-vSBFooD83OWqpTK3k-Eg",
  authDomain: "auth-pp-89e25.firebaseapp.com",
  projectId: "auth-pp-89e25",
  storageBucket: "auth-pp-89e25.appspot.com",
  messagingSenderId: "6447001239",
  appId: "1:6447001239:web:1137c7a17e350f045e83d2",
  measurementId: "G-8ZNPBKW7Y2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
