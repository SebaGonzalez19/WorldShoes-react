import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUcKmz39YUREp3WGHpzSLkRoCUOpzwt0Q",
  authDomain: "worldshoes-61f99.firebaseapp.com",
  projectId: "worldshoes-61f99",
  storageBucket: "worldshoes-61f99.appspot.com",
  messagingSenderId: "306829810266",
  appId: "1:306829810266:web:ffc5d1cca45ad55eee9663",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
