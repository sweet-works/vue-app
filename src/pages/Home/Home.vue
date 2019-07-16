<template>
  <div class="home top">
    <Navbar :title='getCount'>
      <span class="left" slot="left">
      <router-link to="/search"><i style="font-size: .25rem" class="iconfont icon-sousuo"></i></router-link>
      </span>
      <span class="right" slot="right">
      <router-link to="/login">登录</router-link>
      <router-link class="reg" to="/reg">注册</router-link>
      </span>
    </Navbar>
    <div class="nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">slider1</div>
          <div class="swiper-slide">slider2</div>
          <div class="swiper-slide">slider3</div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="home_list">
      <div class="list_bar">
        <i class="iconfont icon-caidan"></i>附近商家
      </div>
      <ShopList/>
    </div>
  </div>

</template>

<script>
  import Navbar from "../../components/Navbar/Navbar";
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import ShopList from "../../components/ShopList/ShopList";
  import {reqFood} from '../../api/index'
  import {mapGetters} from 'vuex'
  export default {
    name:'Home',
    components: {ShopList, Navbar},
    data () {
      return {
       title:'上海市宝山区同济之路199号12311243',
        list:[]
      }
    },mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })

    },computed:{
      ...mapGetters([
        'getCount'
      ])
    }

  }
</script>

<style lang="scss" scoped>
  $header-color:#02a774;
  $header-right:#e4e4e4;
  .home{
    .nav{
      height: 2rem;
      background:no-repeat center url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCA0OTAiPg0KICA8ZGVmcz4NCiAgICA8cGF0aCBpZD0iYiIgZD0iTTAgMGgxMDgwdjQ4OUgweiIvPg0KICAgIDxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+DQogICAgICA8ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4NCiAgICAgIDxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiDQogICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IjAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDEgMCIvPg0KICAgIDwvZmlsdGVyPg0KICA8L2RlZnM+DQogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgPGc+DQogICAgICA8dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz4NCiAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4NCiAgICA8L2c+DQogICAgPGcgZmlsbD0iI0Y2RjZGNiI+DQogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NiAzNikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ2IDM2KSI+DQogICAgICAgIDxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz4NCiAgICAgICAgPGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+DQogICAgICA8L2c+DQogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTYgMzYpIj4NCiAgICAgICAgPHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPg0KICAgICAgICA8ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz4NCiAgICAgIDwvZz4NCiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NiAzNikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgIDwvZz4NCiAgICA8ZyBmaWxsPSIjRjZGNkY2Ij4NCiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODg2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+");
      .swiper-slide{
        width: 100%;
        height: 2rem;background: aqua;
      }
    }
    }
    .home_list{
      box-sizing: border-box;
      padding:.1rem;
      background-color: #fff;
      .list_bar{
        height: .3rem;
        background-color: #fff;line-height: .3rem;font-size: .18rem;color:#999;
        i{font-size: .2rem;margin-right: .1rem}
      }
    }

</style>
