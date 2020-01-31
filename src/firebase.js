import firebase from "firebase";


const config = {
    apiKey: "AIzaSyBG1qYgl8cFGmqUubIZVy2kRtaC1o_lWNU",
    authDomain: "home-money-db.firebaseapp.com",
    databaseURL: "https://home-money-db.firebaseio.com",
    projectId: "home-money-db",
    storageBucket: "home-money-db.appspot.com",
    messagingSenderId: "1009188045435",
    appId: "1:1009188045435:web:897ac080c4a98d6aec58de",
    measurementId: "G-EK272HFRNG"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();



export default firebase;