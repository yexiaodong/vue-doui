import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import doUI from './ui'// 引入插件
Vue.use(doUI);// 使用插件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
