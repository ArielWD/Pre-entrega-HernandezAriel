
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu4zI5-bhXLY1t84KH7q4MyRQ_kkuQMHY",
  authDomain: "reactandres-8761e.firebaseapp.com",
  projectId: "reactandres-8761e",
  storageBucket: "reactandres-8761e.appspot.com",
  messagingSenderId: "888884214357",
  appId: "1:888884214357:web:4dcea42348ca9a493072dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
