<template>
  <section class="search">
    <Navbar title="搜索中心"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" >
      <input type="submit" class="search_submit">
    </form>
    <section class="list">

    </section>

    <div class="search_none" >很抱歉！无搜索结果</div>
  </section>
</template>

<script>
  import Navbar from "../../components/Navbar/Navbar";
  export default {
    components: {Navbar},
    data () {
      return {
        keyword: '',
        imgBaseUrl: 'http://cangdu.org:8001/img/',
        noSearchShops: false
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    width 100%
    height 100%
    overflow hidden;
    background-color: #fff
    .search_form
      clearFix()
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #fff
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774

    .list
      .list_container
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      text-align: center
      margin-top: 0.125rem
</style>
