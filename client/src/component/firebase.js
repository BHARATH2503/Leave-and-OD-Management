import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBVtk-HcKH11nfa_QH1mw6Ezm7ITNt98lA",
  authDomain: "auth-2-38998.firebaseapp.com",
  projectId: "auth-2-38998",
  storageBucket: "auth-2-38998.appspot.com",
  messagingSenderId: "679342961005",
  appId: "1:679342961005:web:8e82abbe6eb886feb0ea64",
  measurementId: "G-C1415XELZV"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;