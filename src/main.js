//入口js
import Vue from 'vue'
import App from './App'
//引入rem
import './method/rem'
//引入全局样式
import  './common/stylesheets/main.scss'
//引入路由
import router from './router/router.js'
//引入store
import store from './store/store'
import './getZB'
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,store
})

