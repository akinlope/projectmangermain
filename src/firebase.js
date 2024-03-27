// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAF4_FsKPuWNjF1-j-eVWJLGd77y9lJp4M",
authDomain: "projectmanager-8cde7.firebaseapp.com",
projectId: "projectmanager-8cde7",
storageBucket: "projectmanager-8cde7.appspot.com",
messagingSenderId: "510181640608",
appId: "1:510181640608:web:49e35818eca895bab1bcc5",
measurementId:"G-V22K4NK6TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, db, auth}

// apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//     measurementId: process.env.REACT_APP_measurementId