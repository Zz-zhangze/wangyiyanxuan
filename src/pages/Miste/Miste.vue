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
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
          <!-- <li v-for="(item, index) in CateLists.kingKongModule.kingKongList" :key="index">{{item.text}}</li> -->
        </ul>
      </div>
      <div class="header-icon">
        <div class="put-down">
          <div class="linear"></div>
          <i class="iconfont icon-xiangxia"></i>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slider1</div>
        <div class="swiper-slide">slider2</div>
        <div class="swiper-slide">slider3</div>
        <div class="swiper-slide">slider3</div>
        <div class="swiper-slide">slider3</div>
        <div class="swiper-slide">slider3</div>
        <div class="swiper-slide">slider3</div>
        <div class="swiper-slide">slider3</div>
      </div>
    </div>
    <div class="safe-guard">
      <ul class="safe-guard-list">
        <li class="safeguard-item">
          <i class="iconfont icon-wangguan"></i>
          <p>网易自营品牌</p>
        </li>
        <li class="safeguard-item">
          <i class="iconfont icon-jiaoyi"></i>
          <p>30天无忧退货</p>
        </li>
        <li class="safeguard-item">
          <i class="iconfont icon-dunpai"></i>
          <p>48小时自动退款</p>
        </li>
      </ul>
    </div>
    <div class="random-show">
      <div class="shopList-container">
        <ul class="shopList-lists">
          <li class="shopList-item" v-for="(item, index) in IndexList.kingKongModule.kingKongList" :key="index">
            <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            <p>{{item.item}}</p>
          </li>
          <!-- <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li>
          <li class="shopList-item">
            <img src="/public/img/indexLogo-a90bdaae6b.webp" alt="">
            <p>新品首发</p>
          </li> -->
          
        </ul>
      </div>
      <div class="random-show-top">

      </div>
      <div class="random-show-bottom">

      </div>
      <div class="random-show-list">

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        // IndexList:{}
      }
    },
    async mounted(){
      new BScroll('.header-scroll',{
        scrollX:true
      }),
      new Swiper('.swiper-container',{
      }),
      this.$store.dispatch('getIndexLists')
    },
    computed: {
      ...mapState({
        IndexList: state => state.IndexList
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #misteContainer
    position relative
    .header
      height 148px
      position relative
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
          border-radius 10px
          color #DD1A21
          font-size 21px
          border 1px solid #DD1A21
      .header-scroll
        width 80%
        height 60px
        overflow hidden
        display flex
        .scrollContainer
          display flex
          justify-content space-around
          font-size 30px
          li
            white-space nowrap
            margin 0 26px
            // height 58px
            // line-height 58px
            // float left
            // margin-right 15px
            // font-size 26px
            // text-align center
            &.active
              border-bottom 6px solid #DD1A21
              color #DD1A21
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
    .swiper-container
      width 750px
      overflow hidden
      // height 370px
      .swiper-wrapper
        width 6000px
        height 370px
        .swiper-slide
          width 100%
          float left
          height 370px
          background pink
    .safe-guard
      height 72px
      width 100%
      .safe-guard-list
        height 72px
        margin 0px 25px
        .safeguard-item
          float left
          width 30%
          text-align center
          line-height 72px
          margin-right 20px
          .iconfont
            font-size 28px
            float left
            color pink 
    .random-show
      .shopList-container
        height 372px
        .shopList-lists
          height 372px
          .shopList-item
            float left
            width 110px
            height 156px
            margin 10px 20px
            text-align center
            img 
              width 110px
              height 110px
              margin-bottom 5px
      .random-show-top
        height 240px
        background red
      .random-show-bottom
        height 160px
        background green
      .random-show-list
        height 372px
        background #eee

</style>
