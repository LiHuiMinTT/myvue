import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false
//注册全局组件
Vue.component('bascomp',{
  template:`
  <div>我是全局组件
    <div>
    hello
    </div>
  </div>
  `
});
const vm = new Vue({
  render: h => h(App),
});
vm.$mount('#app');
