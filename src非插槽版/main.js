//入口js
import Vue from 'vue'
import App from './App'
//引入rem
import './method/rem'
//引入全局样式
import  './common/stylesheets/main.scss'
//引入路由
import router from './router/router.js'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})
