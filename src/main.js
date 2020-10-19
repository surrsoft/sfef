import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

// --- bootstrap vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Oxwk } from './utils/oxwk';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Oxwk)

// ---
Vue.config.productionTip = false
Vue.use(VueToast);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
