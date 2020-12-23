import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
const config = {
  apiKey: "AIzaSyD1GI9ZNqA64wctkUZXq8EQ_A32Kzds2Bk",
  authDomain: "car-rental-auth-4ab08.firebaseapp.com",
  databaseURL: "https://car-rental-auth-4ab08-default-rtdb.firebaseio.com",
  projectId: "car-rental-auth-4ab08",
  storageBucket: "car-rental-auth-4ab08.appspot.com",
  messagingSenderId: "328481017853",
  appId: "1:328481017853:web:5f372898d8c06de2d69394",
};
const fb = app.initializeApp(config);
export const db = fb.firestore();
export default fb;
