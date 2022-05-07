import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局混入

new Vue({
  render: h => h(App),
  beforeCreate(){
    //在Vm对象创建之前创建全局事件总线
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
