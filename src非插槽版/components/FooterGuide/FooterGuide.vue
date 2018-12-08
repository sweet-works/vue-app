<template>
  <div class="footer top-border">
    <router-link active-class="active" to="/home"><i class="iconfont icon-_waimai"></i>外卖</router-link>
    <router-link active-class="active" to="/search"><i class="iconfont icon-sousuo"></i>搜索</router-link>
    <router-link active-class="active" to="/order"><i class="iconfont icon-waimaidingdan0101"></i>订单</router-link>
    <router-link active-class="active" to="/profile"><i class="iconfont icon-wode"></i>我的</router-link>
  </div>
</template>

<script>
    export default {
        name: "FooterGuide"
    }
</script>

<style scoped lang="scss">

  .footer{
      position: fixed;
      z-index: 100;
      bottom: 0;
      width: 100%;
      height :.5rem;
      display: flex;
    a{
    display: flex;
      flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: #999999;
      i.iconfont{
        font-size: .25rem;
      }

  }
    .active{
     color:#02a774;
   }
  } //footer

</style>
