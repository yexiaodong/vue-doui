import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入插件
import doUI from './ui'
// 使用插件
Vue.use(doUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
