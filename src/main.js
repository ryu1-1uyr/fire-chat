import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyAMoqdHG3K2icUaXNNZ7CjjQ4RY9KA00dk",
  authDomain: "vue-chat-ee7b2.firebaseapp.com",
  databaseURL: "https://vue-chat-ee7b2.firebaseio.com",
  projectId: "vue-chat-ee7b2",
  storageBucket: "vue-chat-ee7b2.appspot.com",
  messagingSenderId: "216082941162",
  appId: "1:216082941162:web:c9061e02cafc13d6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
