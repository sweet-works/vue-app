<!--订单-->
<template>
  <div class="order">
    <Navbar title="订单"/>
    <div class="order-bf">
      <div class="imgs">
        <img src="./images/person.png" alt="">
      </div>

      <p>登陆后查看外卖订单</p>
      <input type="button" value="立即登录">
    </div>
  </div>
</template>

<script>
    import Navbar from "../../components/Navbar/Navbar";
    export default {
        name: "Order",
      components: {Navbar}
    }
</script>

<style scoped lang="scss">
.order{
  .order-bf{text-align: center;
    .imgs{
      height: 300px;
      img{display: inline-block;margin-top:.3rem;}
    }

    input{padding:.1rem;border-radius: .1rem;background:#02a774;margin-top:.2rem;color: #fff;}
  }
}
</style>
