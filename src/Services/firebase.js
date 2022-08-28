import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxlLzpS1iVSptLy-loStstwl8HS0s4LCM",
  authDomain: "mybooks-7b6fd.firebaseapp.com",
  projectId: "mybooks-7b6fd",
  storageBucket: "mybooks-7b6fd.appspot.com",
  messagingSenderId: "483023746526",
  appId: "1:483023746526:web:a9aaf9a20d630974b2994f"
};

export const app = initializeApp(firebaseConfig)