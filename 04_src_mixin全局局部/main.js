import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import mixin from './mixin'
//全局混入
Vue.mixin(mixin);
new Vue({
  render: h => h(App),
}).$mount('#app')
