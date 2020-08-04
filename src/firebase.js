import firebase from "firebase";
import  'firebase/firestore'
import {store} from "./store/store";

const config = {
    apiKey: "AIzaSyCoWzRvCLdYaQ5DWO_qS4wZjr6QNWsx-2U",
    authDomain: "my-awesome-65a99.firebaseapp.com",
    databaseURL: "https://my-awesome-65a99.firebaseio.com",
    projectId: "my-awesome-65a99",
    storageBucket: "my-awesome-65a99.appspot.com",
    messagingSenderId: "484420943748",
    appId: "1:484420943748:web:2da5d55a1d784d1c3167d1"
};

const  firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({  })


firebase.auth().onAuthStateChanged(user => {
     store.dispatch("fetchUser", user).then(r => {
      console.log("Success");
     }).catch(err => {
       console.warn("Fail fetchUser event");
     })
});

export default firestore