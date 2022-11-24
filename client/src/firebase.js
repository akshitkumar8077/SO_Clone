import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyACTANVfcBXEB-JaGD-b_lYRs4vAxQSv9I",
  authDomain: "stack-overflow-clone-883ce.firebaseapp.com",
  projectId: "stack-overflow-clone-883ce",
  storageBucket: "stack-overflow-clone-883ce.appspot.com",
  messagingSenderId: "521848626668",
  appId: "1:521848626668:web:a77c14181a32d66bb974c9",
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
