import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PCSidebar from "./views/PCSidebar.vue";

Vue.config.productionTip = false

new Vue({
  router,
  PCSidebar,
  render: h => h(App)
}).$mount('#app')
