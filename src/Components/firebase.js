// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//  Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8ACKL8U4ji8bqmmykq8warjqGgCuZTZg',
  authDomain: 'social-network-dev-005.firebaseapp.com',
  projectId: 'social-network-dev-005',
  storageBucket: 'social-network-dev-005.appspot.com',
  messagingSenderId: '974878862098',
  appId: '1:974878862098:web:3992591ee2ebb888c6e1cb',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
