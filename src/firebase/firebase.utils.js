import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyA28sZK5EKBvOIPHgtGFYcLiwrqtVt6lZA",
    authDomain: "mcv-db.firebaseapp.com",
    databaseURL: "https://mcv-db.firebaseio.com",
    projectId: "mcv-db",
    storageBucket: "mcv-db.appspot.com",
    messagingSenderId: "264811683393",
    appId: "1:264811683393:web:a3a224fbd13b71576770c0",
    measurementId: "G-887DS845WW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;