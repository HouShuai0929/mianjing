import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入 vant 中所有的组件
import Vant from 'vant';
import 'vant/lib/index.css';

// vant 是作为 vue 的插件来使用的
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
