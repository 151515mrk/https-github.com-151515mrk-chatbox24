// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLov-cHbj5eLawh9vVUSX6bFi_dQltW9M',
  authDomain: 'chatbox24.firebaseapp.com',
  databaseURL: 'https://chatbox24-default-rtdb.firebaseio.com',
  projectId: 'chatbox24',
  storageBucket: 'chatbox24.appspot.com',
  messagingSenderId: '391766551206',
  appId: '1:391766551206:web:5c8cbf01cc8f816dfb2267',
  measurementId: 'G-0K4PLZT4PV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
