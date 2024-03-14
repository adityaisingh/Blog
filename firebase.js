// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_fIREBASE_API_KEY,
  authDomain: "blog-a486f.firebaseapp.com",
  projectId: "blog-a486f",
  storageBucket: "blog-a486f.appspot.com",
  messagingSenderId: "873142311925",
  appId: "1:873142311925:web:0ecd8f320b8d3fffc7debc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
