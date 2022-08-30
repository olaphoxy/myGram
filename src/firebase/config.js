import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyR63IXWuqDo9kedJS3tQGFnNxcSIqgcY",
  authDomain: "ninja--firegram-ec0b7.firebaseapp.com",
  projectId: "ninja--firegram-ec0b7",
  storageBucket: "ninja--firegram-ec0b7.appspot.com",
  messagingSenderId: "236402879312",
  appId: "1:236402879312:web:14a669cb1f418426cd9a55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
export const timestamp = serverTimestamp();
