const firebase = require('firebase');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXT86-me0bN3IX2On0f0QnKfTyYEoMs4M",
    authDomain: "lawash-39e8a.firebaseapp.com",
    projectId: "lawash-39e8a",
    storageBucket: "lawash-39e8a.appspot.com",
    messagingSenderId: "518961616093",
    appId: "1:518961616093:web:d078d661aafbf19e88f734"
  };

firebase.initializeApp(firebaseConfig); //инициализировать приложение 
module.exports = {firebase}; // экспортируем приложение