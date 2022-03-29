import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBAM0WYqHv7KexBnIzyibWg00jKlv6xgJA",
    authDomain: "webalbert21.app.com",
    projectId: "webalbert21",
    storageBucket: "webalbert21.appspot.com",
    messagingSenderId: "541146523348",
    appId: "1:541146523348:web:69d1429364d337df013d41"
});

export  {app};