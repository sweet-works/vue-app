<template>
    <div class="navbar">
      <p>{{title}}</p>
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
  .navbar{
    height: .5rem;
    width: 100%;
    background-color:$header-color;
    top:0;text-align: center;line-height: .5rem;
    color: #d6d6d7;
    p{font-size: .25rem;}

  }
</style>
