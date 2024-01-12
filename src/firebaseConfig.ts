import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    // apiKey: process.env.VUE_APP_APIKEY,
    // authDomain: process.env.VUE_APP_AUTHDOMAIN,
    // projectId: process.env.VUE_APP_PROJECTID,
    // storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
    // appId: process.env.VUE_APP_APPID
    apiKey: "AIzaSyCnF3nTnRPD8ntiqEHuPfU-xMsz1ETa3CM",
    authDomain: "video-viewing.firebaseapp.com",
    projectId: "video-viewing",
    storageBucket: "video-viewing.appspot.com",
    messagingSenderId: "611828064172",
    appId: "1:611828064172:web:a3dc593ae8451a96cfa409"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export { auth, GoogleProvider }