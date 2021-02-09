import Vue from 'vue'
import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCANzVwrZIak01UJWuOf7JKyVdL9eKWsGI",
    authDomain: "vue-chat-4681a.firebaseapp.com",
    projectId: "vue-chat-4681a",
    storageBucket: "vue-chat-4681a.appspot.com",
    messagingSenderId: "95660354568",
    appId: "1:95660354568:web:7a55829af3630a2d6035bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({
      timeStampsInSnapshots: true
  })

  Vue.prototype.$firebase = firebase;
  Vue.prototype.$db = db;