import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBvWQIz8oqwQlMPckUkoHxvF1pD_so51g0",
    authDomain: "tasklist-cc4de.firebaseapp.com",
    databaseURL: "https://tasklist-cc4de-default-rtdb.firebaseio.com",
    projectId: "tasklist-cc4de",
    storageBucket: "tasklist-cc4de.appspot.com",
    messagingSenderId: "1086157283635",
    appId: "1:1086157283635:web:1318ac7d0f8cb4ea635e46"
})


export {firebaseConfig as firebase};