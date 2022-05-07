import Vue from 'vue'
import App from './App.vue'
import vuerouter from 'vue-router'
import router from './router/index.js'
Vue.use(vuerouter);
Vue.config.productionTip = false
//全局混入
new Vue({
  render: h => h(App),
  router,
  mounted(){
    console.log(this);
  }
}).$mount('#app')
