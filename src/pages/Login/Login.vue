<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">糖小豆外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button  class="get_verification"
                       @click.prevent="getCode">
                {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册糖小豆外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="./images/captcha.svg" alt="captcha"
                      ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" onclick='window.history.go(-1)'>
        <i class="iconfont icon-leftarrow"></i>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        loginWay: false, // true代表短信登陆, false代表密码
        computeTime: 0, // 计时的时间
        showPwd: false, // 是否显示密码
        phone: '', // 手机号
        code: '', // 短信验证码
        name: '', // 用户名
        pwd: '', // 密码
        captcha: '', // 图形验证码
        alertText: '', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top .60rem
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size .40rem
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top .40rem
          text-align center
          >a
            color #333
            font-size .14rem
            padding-bottom .04rem
            &:first-child
              margin-right .40rem
            &.on
              color #02a774
              font-weight 700
              border-bottom .02rem solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left .10rem
              box-sizing border-box
              border .01rem solid #ddd
              border-radius .04rem
              outline 0
              font 400 .14rem Arial
              &:focus
                border .01rem solid #02a774
            .login_message
              position relative
              margin-top .16rem
              height .48rem
              font-size .14rem
              background #fff
              .get_verification
                position absolute
                top 50%
                right .10rem
                transform translateY(-50%)
                border 0
                color #ccc
                font-size .14rem
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top .16rem
              height .48rem
              font-size .14rem
              background #fff
              .switch_button
                font-size .12rem
                border .01rem solid #ddd
                border-radius .08rem
                transition background-color .3s,border-color .3s
                padding 0 .06rem
                width .30rem
                height .16rem
                line-height .16rem
                color #fff
                position absolute
                top 50%
                right .1rem
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  position absolute
                  top -.01rem
                  left -.01rem
                  width .16rem
                  height .16rem
                  border .01rem solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 .02rem .04rem 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(.3rem)
            .login_hint
              margin-top .12rem
              color #999
              font-size .14rem
              line-height .20rem
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height .42rem
            margin-top .30rem
            border-radius .04rem
            background #4cd96f
            color #fff
            text-align center
            font-size .16rem
            line-height .42rem
            border 0
        .about_us
          display block
          font-size .12rem
          margin-top .2rem
          text-align center
          color #999
      .go_back
        position absolute
        top .1rem
        left .1rem
        width .3rem
        height .3rem
        >.iconfont
          font-size .3rem
          color #999
</style>
