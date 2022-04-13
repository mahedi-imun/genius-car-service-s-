// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3d5C5NZCq02PurfaZDQdOH7sCFzR0MHI",
  authDomain: "genius-car-services-f5131.firebaseapp.com",
  projectId: "genius-car-services-f5131",
  storageBucket: "genius-car-services-f5131.appspot.com",
  messagingSenderId: "645460949889",
  appId: "1:645460949889:web:43f320a6982eb322458680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;