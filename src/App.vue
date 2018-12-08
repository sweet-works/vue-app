<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show=$route.meta.showFoot />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import Home from "./pages/Home/Home";
import './api/ajax'
export default {
  name: 'app',
  components: { Home, FooterGuide}
}
</script>


<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  background:#f5f5f5;
}
</style>
