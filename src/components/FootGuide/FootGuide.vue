<template>
  <div id="footerContainer">
    <div @click="goPath('/miste')" class="footItem" :class="{color: $route.path ==='/miste'}">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
    </div>
    <div @click="goPath('/classify')" class="footItem" :class="{color: $route.path ==='/classify'}">
        <i class="iconfont icon-fenlei"></i>
        <p>分类</p>
    </div>
    <div @click="goPath('/deservebuy')" class="footItem" :class="{color: $route.path ==='/deservebuy'}">
        <i class="iconfont icon-goumai"></i>
        <p>值得买</p>
    </div>
    <div @click="goPath('/mishoppingcartste')" class="footItem" :class="{color: $route.path ==='/mishoppingcartste'}">
        <i class="iconfont icon-goumai1"></i>
        <p>购物车</p>
    </div>
    <div @click="goPath('/profile')" class="footItem" :class="{color: $route.path ==='/profile'}">
        <i class="iconfont icon-icon-test"></i>
        <p>个人</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          goPath(path){
              path!==this.$route.path && this.$router.push(path)
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #footerContainer
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    z-index 99
    background #fff
    border-top 1px solid #eee
    .footItem
        width 20%
        height 98px
        line-height 40px
        text-align center
        display flex
        flex-direction column
        font-size 24px
        &.color
            color red
        .iconfont
            padding-top 10px
            font-size 40px
        p
            text-align center
</style>
