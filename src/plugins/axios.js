import Vue from "vue";
import axios from "axios";

//axios.defaults.baseURL =
//  "https://stars-challenge-8d403-default-rtdb.firebaseio.com/";

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://stars-challenge-8d403-default-rtdb.firebaseio.com/'
    });
  },
});
