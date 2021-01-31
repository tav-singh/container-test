import Vue from 'vue'
import router from './router'
import App from './App.vue'
import wysiwyg from "vue-wysiwyg";
import axios from 'axios'

// const devUrl = 'http://35.187.123.194:5000/api/v1'
const prodUrl = 'https://api.gammaandhika.com/api/v1'

Vue.prototype.$http = axios
Vue.prototype.$baseurl = prodUrl
Vue.use(wysiwyg, {});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
