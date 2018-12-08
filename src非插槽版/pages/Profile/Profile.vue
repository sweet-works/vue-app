<!--个人组件-->
<template>
  <section class="profile">
    <Navbar title="个人中心"/>
    <div class="profile-number">
        <div class="tot">
          <img src="http://img5.imgtn.bdimg.com/it/u=3969814012,482639741&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="tot_right">
          <span class="login">登录 / 注册</span>
          <p><i class="iconfont icon-shouji"></i>暂无绑定手机号</p>
        </div>
      <div class="jiantou"><i class="iconfont icon-youjiantou"></i></div>
    </div>
    <section class="profile_info_data ">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-dingdan"></i>
            </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
        </div>
      </a>
      <!-- 糖小豆外卖会员卡 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-membership-card_icon"></i>
            </span>
        <div class="my_order_div">
          <span>糖小豆外卖会员卡</span>
          <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwushouli"></i>
            </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
                <i class="iconfont icon-youjiantou"></i>
              </span>
        </div>
      </a>
    </section>

    <div class="zhuxiao">
      <input type="button" value="退出登陆"/>
    </div>
  </section>
</template>

<script>
  import Navbar from "../../components/Navbar/Navbar";
  export default {
    components: {Navbar}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .profile //我的
    width 100%
    overflow hidden
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .profile-number
      height .6rem;
      padding .2rem;
      background #02a774
      display flex
      .tot_right
        width: 1rem
        height 100%
        flex 1
        padding-left .2rem
        span
          display inline-block
        p
          color #d6d6d7
        .login
          height: .3rem
          font-size .2rem
          color #fff
      .jiantou
          width: .2rem
          float right
          line-height .6rem
          color #d6d6d7
          .iconfont
            font-size .25rem;
      .tot
        width .6rem
        height: .6rem
        img
          width 100%
          height 100%
          border-radius 50%;
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      width 100%
      background #fff
      overflow hidden
      .info_data_list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          .info_data_top
            display block
            width 100%
            font-size 14px
            color #333
            padding 15px 5px 10px
            span
              display inline-block
              font-size 30px
              color #f90
              font-weight 700
              line-height 30px
          .info_data_bottom
            display inline-block
            font-size 14px
            color #666
            font-weight 400
            padding-bottom 10px
        .info_data_link:nth-of-type(2)
          .info_data_top
            span
              color #ff5f3e
        .info_data_link:nth-of-type(3)
          border 0
          .info_data_top
            span
              color #6ac20b
    .profile_my_order
      margin-top .1rem
      background #fff
      .my_order
        display flex
        align-items center
        padding-left .15rem
        >span
          display flex
          align-items center
          width .2rem
          height .2rem
          >.iconfont
            margin-left -.1rem
            margin-right .1rem
            font-size .2rem
          .icon-dingdan
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-membership-card_icon
            color #f90
          .icon-fuwushouli
            color #02a774
        .my_order_div
          width 100%
          border-bottom 1px solid #f1f1f1
          padding 18px 10px 18px 0
          font-size 16px
          color #333
          display flex
          justify-content space-between
          span
            display block
          .my_order_icon
            width 10px
            height 10px
            .icon-jiantou1
              color #bbb
              font-size 10px
  .zhuxiao
    height .4rem
    width: 100%
    text-align center
    margin-top .25rem
    input
      display inline-block
      padding:.15rem
      line-height 100%
      text-align center
</style>
