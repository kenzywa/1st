import Vue from 'vue'
import App from './App'
import * as firebase from "firebase";
import {store} from './store/store'
import router from './components/router/index'



window.eventBus = new Vue ()

Vue.config.productionTip = false

//const configOptions = {
 // apiKey: "AIzaSyCoWzRvCLdYaQ5DWO_qS4wZjr6QNWsx-2U",
 // authDomain: "my-awesome-65a99.firebaseapp.com",
 // databaseURL: "https://my-awesome-65a99.firebaseio.com",
 // projectId: "my-awesome-65a99",
//  storageBucket: "my-awesome-65a99.appspot.com",
 // messagingSenderId: "484420943748",
//  appId: "1:484420943748:web:2da5d55a1d784d1c3167d1"
//};

//firebase.initializeApp(configOptions);

//firebase.auth().onAuthStateChanged(user => {
 // store.dispatch("fetchUser", user).then(r => {
  //  console.log("Success");
 // }).catch(err => {
 //   console.warn("Fail fetchUser event");
 // })
//});






new Vue({
  //el: '#app',
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app")