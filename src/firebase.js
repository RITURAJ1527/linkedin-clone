import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDPkXs18q3J_mUeKb17UoKcs9wfPFn3uiY",
    authDomain: "linkedin-clone-cf2fb.firebaseapp.com",
    projectId: "linkedin-clone-cf2fb",
    storageBucket: "linkedin-clone-cf2fb.appspot.com",
    messagingSenderId: "331249968835",
    appId: "1:331249968835:web:461d63563561d444be6476",
    measurementId: "G-5VJF7T6FGZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};