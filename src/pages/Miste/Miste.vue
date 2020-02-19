<template>
  <div id="misteContainer">
    <div class="header">
      <div class="header-search">
        <img class="logo" src="../../../public/img/indexLogo-a90bdaae6b.webp" alt="">
        <input class="search" type="text" placeholder="搜索商品">
        <mt-button class="land">登陆</mt-button>
      </div>
      <div class="header-scroll">
        <ul class="scrollContainer">
          <li>推荐1</li>
          <li>推荐2</li>
          <li>推荐3</li>
          <li>推荐4</li>
          <li>推荐5</li>
          <li>推荐6</li>
          <li>推荐7</li>
          <li>推荐8</li>
          <li>推荐9</li>
          <li>推荐00</li>
        </ul>
      </div>
      <div class="header-icon">
        <div class="put-down">
          <div class="linear"></div>
          <i class="iconfont icon-xiangxia"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.header-scroll',{
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #misteContainer
    position relative
    .header
      height 148px
      .header-search
        height 88px
        display flex
        align-items center
        .logo
          height 40px
          margin 0px 15px 0px 25px
        .search
          width 390px
          height 56px
          border-radius 15px
          background #eee
          padding 0px 25px
        .land
          width 60px
          height 40px
          margin-left 15px
          border-radius 5px
          color #DD1A21
          font-size 21px
          border 1px solid #DD1A21
      .header-scroll
        width 80%
        height 30px
        float left
        padding 15px
        overflow hidden
        .scrollContainer
          width 1000px
          height 30px
          padding-left 30px
          li
            height 30px
            float left
            margin-right 15px
            font-size 26px
      .header-icon
        position absolute
        right 0      
        bottom 0px
        width 20%
        height 60px
        .put-down
          display flex
          .linear
            width 30%
            height 60px
            background rgba(255,255,255,.7)
          i 
            width 70%
            height 60px
            text-align center
            line-height 60px
            font-size 36px
</style>
