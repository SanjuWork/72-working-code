import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl0eGAiHIG278itnDUKxkG0ThcnkJDg94",
  authDomain: "wireless-buzzer-app-abf71.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-abf71-default-rtdb.firebaseio.com",
  projectId: "wireless-buzzer-app-abf71",
  storageBucket: "wireless-buzzer-app-abf71.appspot.com",
  messagingSenderId: "943238794504",
  appId: "1:943238794504:web:25571f5daff9681b6c30bd",
  measurementId: "G-3YTCJF95G2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export default db;
