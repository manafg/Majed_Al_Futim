import Vue from 'vue'
import App from './App.vue'
import {Tab, Button} from "@/components";

import './registerServiceWorker'
Vue.config.productionTip = false

Vue.component('Tab', Tab);
Vue.component('Button', Button);

new Vue({
  render: h => h(App),
}).$mount('#app')
