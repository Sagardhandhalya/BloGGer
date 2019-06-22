import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDzwy69RCvSHoKoipHpTcWounUhWVhThbo",
    authDomain: "react-redux-firebase-61d86.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-61d86.firebaseio.com",
    projectId: "react-redux-firebase-61d86",
    storageBucket: "react-redux-firebase-61d86.appspot.com",
    messagingSenderId: "566694840706",
    appId: "1:566694840706:web:d76055a7e6868694"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;