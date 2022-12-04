// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3WmTyw5wD3ND9FDhWp0pJKP47LP1cHE8",
  authDomain: "teacher-information-ee9a5.firebaseapp.com",
  projectId: "teacher-information-ee9a5",
  storageBucket: "teacher-information-ee9a5.appspot.com",
  messagingSenderId: "420985440995",
  appId: "1:420985440995:web:c54e3d4fbe1e95ac6293d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
    expoerimentalForceLongPolling: true,
});

export {db}
