import Vue from 'vue'
import VueRoute from 'vue-router'
Vue.use(VueRoute);
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Error from '../pages/Error/Error'
//声明使用插件
export default new VueRoute({
  routes:[
    {path:'/home',component:Home},
    {path:'/order',component:Order},
    {path:'/profile',component:Profile},
    {path:'/search',component:Search},
    {path:'*',component:Error},
    {path:'/',redirect:"/home"},
  ]
})
/*let routes=[
  {path:'/home',component:Home},
  {path:'/order',component:Order},
  {path:'/profile',component:Profile},
  {path:'/search',component:Search},
  {path:'/',redirect:"/home"}
  ];
let vueRoute=new VueRoute({routes});
export default vueRoute*/
