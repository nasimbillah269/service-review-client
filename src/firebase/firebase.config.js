// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6_MwysUtNbh98wsfqXYIpQ-nHi7npKF0",
    authDomain: "special-food-service-review.firebaseapp.com",
    projectId: "special-food-service-review",
    storageBucket: "special-food-service-review.appspot.com",
    messagingSenderId: "610438703765",
    appId: "1:610438703765:web:2fc2d57959b4526fbac99c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;