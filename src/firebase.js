import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDl3mCmhFNdMH9DuEjuqnZSyvEXxT3prKo",
    authDomain: "facebookreactclone-2bdb6.firebaseapp.com",
    projectId: "facebookreactclone-2bdb6",
    storageBucket: "facebookreactclone-2bdb6.appspot.com",
    messagingSenderId: "384352233361",
    appId: "1:384352233361:web:0866b6d36be22dd1df9c30",
    measurementId: "G-GRBL6XQ9HW"
});

const db = firebaseApp.firestore();

export default db;