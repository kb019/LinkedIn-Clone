import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABO6Y8G5lyBHdQuomWH3E2HPuVgnho8H4",
  authDomain: "linkedin-clone-da2e2.firebaseapp.com",
  projectId: "linkedin-clone-da2e2",
  storageBucket: "linkedin-clone-da2e2.appspot.com",
  messagingSenderId: "770727865248",
  appId: "1:770727865248:web:5ec03f134e6a14224892c5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// // import firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABO6Y8G5lyBHdQuomWH3E2HPuVgnho8H4",
//   authDomain: "linkedin-clone-da2e2.firebaseapp.com",
//   projectId: "linkedin-clone-da2e2",
//   storageBucket: "linkedin-clone-da2e2.appspot.com",
//   messagingSenderId: "770727865248",
//   appId: "1:770727865248:web:5ec03f134e6a14224892c5",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const firestore = getFirestore(firebaseApp);
// // const auth = firebaseApp.auth();

// export { db, auth };
