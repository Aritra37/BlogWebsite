import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7mTmwNxYYHTKymqyWRiaV8gXH9FE6C9g",
    authDomain: "react-blogs-app-404f5.firebaseapp.com",
    projectId: "react-blogs-app-404f5",
    storageBucket: "react-blogs-app-404f5.appspot.com",
    messagingSenderId: "379545799707",
    appId: "1:379545799707:web:f1f3b41b5d16c63d2ffcbe"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const storage=getStorage(app);
const db=getFirestore(app);

export {auth,db,storage};