<template>
  <div class="header">
      <slot name="left"/>
      <span class="mint ellipsis">
              {{title}}
      </span>
      <slot name="right"/>
  </div>
</template>

<script>
    export default {
        name: "Navbar",
      props:['title']
    }
</script>

<style lang="scss" scoped>
  $header-color:#02a774;
  $header-right:#e4e4e4;
  .header{
    box-sizing: border-box;
    position: fixed;top:0;z-index: 100;
    display: flex;
    height: .5rem;
    width: 100%;
    padding: 0 .1rem;
    background-color:$header-color;
    .left {flex: 1;}
    .mint{flex: 3;color:$header-right;padding:0 .4rem; font-size: .2rem}
    .right{flex: 2;position: relative;display: flex;
      a{flex: 1;font-size: .2rem;}
      .reg:before {
        content: "";width: 1px;height: .2rem;top:.15rem;display: block; position: absolute;background:$header-right;
        margin-right: .05rem;
      }}
    span{
      height: .5rem;line-height: .5rem;text-align: center;
    }
  }
</style>
