import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgyieYQPJKuw5TyywicAS45eC6NCIFT1U",
  authDomain: "task-management-a7e4c.firebaseapp.com",
  projectId: "task-management-a7e4c",
  storageBucket: "task-management-a7e4c.appspot.com",
  messagingSenderId: "297482028289",
  appId: "1:297482028289:web:4113b4a39ef4a251260700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;