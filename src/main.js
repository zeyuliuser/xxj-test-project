import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import vueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(axios)
Vue.use(vueAxios)
Vue.use(Element)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
