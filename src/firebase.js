import firebase from "./firebase";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "@firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIcbZbKYrIotfi0S6UQanCooviB0Mj2dU",
  authDomain: "disney-plus-clone-0.firebaseapp.com",
  projectId: "disney-plus-clone-0",
  storageBucket: "disney-plus-clone-0.appspot.com",
  messagingSenderId: "546673204955",
  appId: "1:546673204955:web:fbf90b11641efc5e8c76fe",
  measurementId: "G-VH7YLV46XX"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
