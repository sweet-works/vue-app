<!--个人组件-->
<template>
  <section class="profile top">
    <Navbar title="个人中心"/>
    <div class="profile-number">
        <div class="tot">
          <img src="http://img5.imgtn.bdimg.com/it/u=3969814012,482639741&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="tot_right">
          <router-link class="login" tag="span" to="/login">登录 / 注册</router-link>
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

    <div class="zhuxiao" v-show=isShow>
      <input type="button" value="退出登陆"/>
    </div>
  </section>
</template>

<script>
  import Navbar from "../../components/Navbar/Navbar";
  export default {
    components: {Navbar},
    data(){
      return{
        isShow:true
      }
    }
  }
</script>

<style scoped>
  .profile {
    width: 100%;
  }
  .icon-shouji{font-size: .15rem}
  .profile .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.5rem;
  }
  .profile .header .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
  }
  .profile .header .header_search .icon-sousuo {
    font-size: 25px;
    color: #fff;
  }
  .profile .header .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }
  .profile .header .header_title .header_title_text {
    font-size: 20px;
    color: #fff;
    display: block;
  }
  .profile .header .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .profile .header .header_login .header_login_text {
    color: #fff;
  }
  .profile .profile-number {
    height: 0.6rem;
    padding: 0.2rem;
    background: #02a774;
    display: flex;
  }
  .profile .profile-number .tot_right {
    width: 1rem;
    height: 100%;
    flex: 1;
    padding-left: 0.2rem;
  }
  .profile .profile-number .tot_right span {
    display: inline-block;
  }
  .profile .profile-number .tot_right p {
    color: #d6d6d7;
  }
  .profile .profile-number .tot_right .login {
    height: 0.3rem;
    font-size: 0.2rem;
    color: #fff;
  }
  .profile .profile-number .jiantou {
    width: 0.2rem;
    float: right;
    line-height: 0.6rem;
    color: #d6d6d7;
  }
  .profile .profile-number .jiantou .iconfont {
    font-size: 0.25rem;
  }
  .profile .profile-number .tot {
    width: 0.6rem;
    height: 0.6rem;
  }
  .profile .profile-number .tot img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .profile .profile_info_data {
    width: 100%;
    background: #fff;
    overflow: hidden;
    font-size: .25rem;
  }
  .profile .profile_info_data .info_data_list .info_data_link {
    float: left;
    width: 33%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
  }
  .profile .profile_info_data .info_data_list .info_data_link .info_data_top {
    display: block;
    width: 100%;
    font-size: 14px;
    color: #333;
    padding: 15px 5px 10px;
  }
  .profile .profile_info_data .info_data_list .info_data_link .info_data_top span {
    display: inline-block;
    font-size: .25rem;
    color: #f90;
    font-weight: 700;
    line-height: .2rem;
  }
  .profile .profile_info_data .info_data_list .info_data_link .info_data_bottom {
    display: inline-block;
    font-size: .15rem;
    color: #666;
    font-weight: 400;
    padding-bottom: 10px;
  }
  .profile .profile_info_data .info_data_list .info_data_link:nth-of-type(2) .info_data_top span {
    color: #ff5f3e;
  }
  .profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) {
    border: 0;
  }
  .profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) .info_data_top span {
    color: #6ac20b;
  }
  .profile .profile_my_order {
    margin-top: 0.1rem;
    background: #fff;
  }
  .profile .profile_my_order .my_order {
    display: flex;
    align-items: center;
    padding-left: 0.15rem;
  }
  .profile .profile_my_order .my_order >span {
    display: flex;
    align-items: center;
    width: 0.2rem;
    height: 0.2rem;
  }
  .profile .profile_my_order .my_order >span >.iconfont {
    margin-left: -0.1rem;
    margin-right: 0.1rem;
    font-size: 0.2rem;
  }
  .profile .profile_my_order .my_order >span .icon-dingdan {
    color: #02a774;
  }
  .profile .profile_my_order .my_order >span .icon-jifen {
    color: #ff5f3e;
  }
  .profile .profile_my_order .my_order >span .icon-membership-card_icon {
    color: #f90;
  }
  .profile .profile_my_order .my_order >span .icon-fuwushouli {
    color: #02a774;
  }
  .profile .profile_my_order .my_order .my_order_div {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding: 18px 10px 18px 0;
    font-size: 16px;
    color: #333;
    display: flex;
    justify-content: space-between;
  }
  .profile .profile_my_order .my_order .my_order_div span {
    display: block;
  }
  .profile .profile_my_order .my_order .my_order_div .my_order_icon {
    width: 10px;
    height: 10px;
  }
  .profile .profile_my_order .my_order .my_order_div .my_order_icon .icon-jiantou1 {
    color: #bbb;
    font-size: 10px;
  }
  .zhuxiao {
    height: 0.4rem;
    width: 100%;
    text-align: center;
    margin-top: 0.25rem;
  }
  .zhuxiao input {
    display: inline-block;
    padding: 0.15rem;
    line-height: 100%;
    text-align: center;
    border-radius: .1rem;
    outline:none;
  }

</style>
