<template>
  <div class="home">
    <!--<div class="header">
          <router-link to="/search"><i class="iconfont icon-sousuo"></i></router-link>
          <div class="home_wei ellipsis">
            <i class="iconfont icon-dingwei"></i>
            上海市宝山区同济之路199号
          </div>
          <span>
            <router-link to="/login">登录</router-link>
            <router-link to="/reg">注册</router-link>
          </span>
    </div>-->
    <div class="nav">
    </div>
    <div>附近商家</div>
  </div>

</template>

<script>
  export default {
    name:'Home',
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    }

  }
</script>

<style lang="scss" scoped>
  $header-color:#02a774;
  $header-right:#e4e4e4;
  .home{
    .header{
      height: .5rem;
      width: 100%;
      background-color:$header-color;
      a{display: block;
        width: .5rem;height: 100%;line-height: .5rem;color:$header-right;text-align: center;}
      a:nth-of-type(1){
          float: left;
      }
      span{
        display: block;float: right;
        width: 1rem;
        height: .5rem;position: relative;
        a{
          display: inline-block;

        &:nth-of-type(2):before {
            content: "";width: 1px;height: .2rem;top:.15rem;display: block;  position: absolute;background:$header-right;
          }
      }
        }
      .home_wei{
        width: 2rem;float: left;height: .5rem;line-height: .5rem;
        >i{color: red;font-size: .2rem;}
      }

      }
    .nav{
      height: 2rem;
      background: deeppink no-repeat center url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCA0OTAiPg0KICA8ZGVmcz4NCiAgICA8cGF0aCBpZD0iYiIgZD0iTTAgMGgxMDgwdjQ4OUgweiIvPg0KICAgIDxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+DQogICAgICA8ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4NCiAgICAgIDxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiDQogICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9IjAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDEgMCIvPg0KICAgIDwvZmlsdGVyPg0KICA8L2RlZnM+DQogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgPGc+DQogICAgICA8dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz4NCiAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4NCiAgICA8L2c+DQogICAgPGcgZmlsbD0iI0Y2RjZGNiI+DQogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NiAzNikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ2IDM2KSI+DQogICAgICAgIDxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz4NCiAgICAgICAgPGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+DQogICAgICA8L2c+DQogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTYgMzYpIj4NCiAgICAgICAgPHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPg0KICAgICAgICA8ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz4NCiAgICAgIDwvZz4NCiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NiAzNikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgIDwvZz4NCiAgICA8ZyBmaWxsPSIjRjZGNkY2Ij4NCiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODg2IDI1MikiPg0KICAgICAgICA8cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+DQogICAgICAgIDxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPg0KICAgICAgPC9nPg0KICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+"
      );

    }
    }

</style>
