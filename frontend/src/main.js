import Vue from 'vue'
import router from './router'
import App from './App.vue'
import wysiwyg from "vue-wysiwyg";

Vue.use(wysiwyg, {});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
