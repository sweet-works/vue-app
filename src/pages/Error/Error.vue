<template>
    <div class="error top">
      <Navbar title="网页走丢了..."/>
      <img src="./timg.jpg" alt="">
    </div>
</template>

<script>
    import Navbar from "../../components/Navbar/Navbar";
    export default {
        name: "Error",
      components: {Navbar}
    }
</script>

<style scoped lang="scss">
.error{
  text-align: center;
  img{
    display: inline-block;
    width: 100%;
  }
}
</style>
