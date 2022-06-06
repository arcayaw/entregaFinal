import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcPs8Jmk1SMukegzy8qkyOPpwjJWfi-6k",
  authDomain: "nunchibox-d1f01.firebaseapp.com",
  projectId: "nunchibox-d1f01",
  storageBucket: "nunchibox-d1f01.appspot.com",
  messagingSenderId: "703531710967",
  appId: "1:703531710967:web:3f8a8e6ccc5a12ea6cd6f2",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
