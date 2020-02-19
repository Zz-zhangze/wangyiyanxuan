import Vue from 'vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'

import App from './App.vue'

Vue.config.productionTip = false

Vue.component(Button.name, Button)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
