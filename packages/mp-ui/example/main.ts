import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mpui from '../packages'

Vue.config.productionTip = false

Vue.use(mpui)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
