import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css";
import { initializeApp } from "firebase/app";

{/* Configuracion para conectar el proyecto con FireBase */ }
const firebaseConfig = {
  apiKey: "AIzaSyDLHYJsFWOrfzAtpdbcbVx2ERL4IAGZvw8",
  authDomain: "computer-technology-879ae.firebaseapp.com",
  projectId: "computer-technology-879ae",
  storageBucket: "computer-technology-879ae.appspot.com",
  messagingSenderId: "681421950290",
  appId: "1:681421950290:web:9fb718ee4c3f583e347e8b"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
