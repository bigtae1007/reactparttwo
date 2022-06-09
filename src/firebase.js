// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzwGgs",
  authDomain: "bta.com",
  projectId: "btae",
  storageBucket: "com",
  messagingSenderId: "25629",
  appId: "72fd28a4f6d44",
  measurementId: "GGJ",
};

// initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//사용 안할 예정
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
