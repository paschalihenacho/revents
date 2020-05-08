import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCCSyBjpzoAmEQz-O-DpvCst_xlYv-J1yE",
    authDomain: "revents-fb647.firebaseapp.com",
    databaseURL: "https://revents-fb647.firebaseio.com",
    projectId: "revents-fb647",
    storageBucket: "revents-fb647.appspot.com",
    messagingSenderId: "694723471411",
    appId: "1:694723471411:web:45ccb4592ddd29d5131b46",
    measurementId: "G-28W8W4HSEK"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();