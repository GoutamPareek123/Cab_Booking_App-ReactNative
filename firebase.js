// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUdUdALkkv9kRcjlWDoZUokqomkHWHUJ0",
  authDomain: "cab-booking-app-fea0b.firebaseapp.com",
  projectId: "cab-booking-app-fea0b",
  storageBucket: "cab-booking-app-fea0b.appspot.com",
  messagingSenderId: "981401701625",
  appId: "1:981401701625:web:0bdcf8148b32b731c7a628",
  measurementId: "G-W5H5WVDMSM"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)

}else{
  app = firebase.app()
}
const auth =firebase.auth()

export {auth}

const analytics = getAnalytics(app);