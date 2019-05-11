import firebase from "firebase";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Your web app's Firebase configuration
let firebaseConfig = {

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
