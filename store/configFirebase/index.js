import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0cgmcxr4hrSEy-8uOcLcaJYSLz8_qhRM",
    authDomain: "ompadma-d3c3a.firebaseapp.com",
    databaseURL: "https://ompadma-d3c3a.firebaseio.com",
    projectId: "ompadma-d3c3a",
    storageBucket: "ompadma-d3c3a.appspot.com",
    messagingSenderId: "741216683906",
    appId: "1:741216683906:web:709d1293125840a998f19b",
    measurementId: "G-9GHH93QQ31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;