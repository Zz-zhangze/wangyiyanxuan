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
        <div class="swiper-slide" v-for="(item, index) in IndexList.focusList" :key="index">
          <img :src=item.picUrl alt="">
        </div>
      </div>
    </div>
    <div class="safe-guard">
      <ul class="safe-guard-list">
        <li class="safeguard-item" v-for="(item, index) in this.IndexList.policyDescList" :key="index">
          <img class="iconfont" :src=item.icon alt="">
          <p>{{item.desc}}</p>
        </li>
      </ul>
    </div>
    <div class="random-show">
      <div v-if="IndexList.kingKongModule" class="shopList-container">
        <ul class="shopList-lists">
          <li class="shopList-item" v-for="(kongList, index) in IndexList.kingKongModule.kingKongList" :key="index">
            <img :src=kongList.picUrl alt="">
            <p>{{kongList.text}}</p>
          </li>
        </ul>
      </div>
      <div class="random-show-top" v-if="IndexList.bigPromotionModule">
        <img :src=IndexList.bigPromotionModule.floorList[0].cells[0].picUrl alt="">
        <div class="change-category">
          <img :src=IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].picUrl alt="">
          <div class="yellow-price">
            <span>${{IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].counterPrice}}</span>
            <span v-show="IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].retailPrice">${{this.IndexList.bigPromotionModule.floorList[0].cells[0].itemList[0].retailPrice}}</span>
          </div>
        </div>
      </div>
      <div class="random-show-bottom" v-if="IndexList.bigPromotionModule">
        <img :src=IndexList.bigPromotionModule.floorList[1].cells[0].picUrl alt="">
      </div>
      <div class="random-show-list" v-if="IndexList.bigPromotionModule">
        <img v-for="(item, index) in IndexList.bigPromotionModule.floorList[2].cells" :key="'1'+index" :src=item.picUrl alt="">
        <img v-for="(item, index) in IndexList.bigPromotionModule.floorList[3].cells" :key="'2'+index" :src=item.picUrl alt="">
      </div>
      <div class="getiao"></div>
      <div class="newperson-price">
        <div class="newperson-price-top">
          <span>新人专享礼</span>
        </div>
        <div class="newperson-price-botttom">
          <div class="get-money">
            <span>新人专享礼包</span>
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
          <div class="newperson-team">
            <div class="newperson-team-top">
              <div class="fuli">福利社</div>
              <div>今日特价</div>
              <img src="https://yanxuan-item.nosdn.127.net/71e5ab494b1d7f87901e263578dcacfa.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="newperson-team-bottom">
              <div class="newproson-pin">新人拼团</div>
              <div>一元起包邮</div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="getiao"></div>
      <div class="hot-sell">
        <div class="hotsell-top">
          类目热销榜
        </div>
        <div class="hotsell-lists">
          <div class="selllists-top">
            <div class="hotseel-left">
              <span>热销榜</span>
              <img src="" alt="">
            </div>
            <div class="hotseel-right"></div>
          </div>
          <div class="selllists-bottom"></div>
        </div>
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
        priceIndex:0
      }
    },
    async mounted(){
      new BScroll('.header-scroll',{
        scrollX:true
      }),
      new Swiper('.swiper-container'),
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
    .getiao
      height 20px
      width 100%
      background #eee
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
      height 370px
      display flex
      .swiper-wrapper
        display flex
        justify-content space-around
        .swiper-slide
          white-space nowrap
          width 750px
          img 
            width 100%
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
            margin-top 18px
            height 32px
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
        position relative
        img 
          width 100%
        .change-category
          width 168px
          height 168px
          position absolute
          left 75px
          top 30px
          img 
            width 100%
          .yellow-price
            width 152px
            height 32px
            border-radius 15px
            background orange
            position absolute
            bottom 5px
            left 5px
            text-align center
            color white
      .random-show-bottom
        height 160px
        background #1377E5
        text-align center
        img 
          width 95%
      .random-show-list
        height 390px
        width 710px
        background #1377E5
        padding 10px 20px
        img 
          float left
          width 351px
          height 186px
          margin-bottom 10px
          &:nth-child(2n+1)
            margin-right 5px 
      .newperson-price
        width 100%
        height 547px
        margin-top 10px
        // background red
        .newperson-price-top
          height 90px
          width 100%
          text-align center
          line-height 90px
          position relative
          span 
            font-size 36px
            &:before
              content: ""
              display:block
              height 3px
              width 24px
              background #333
              position absolute
              left 230px
              top 44px
            &:after
              content: ""
              display:block
              height 3px
              width 24px
              background #333
              position absolute
              right 230px
              top 44px
        .newperson-price-botttom
          display flex
          height 438px
          justify-content center
          .get-money
            width 45%
            background #F9E9CF 
            position relative
            text-align center
            margin-right 5px
            span
              font-size 34px
              position absolute
              top 40px
              left 25px
            img 
              margin-top 110px
          .newperson-team
            width 45%
            .newperson-team-top
              width 100%
              height 215px
              margin-bottom 8px
              background #FBE2D3
              position relative
              .fuli
                font-size 32px
                top 30px
              div
                position absolute
                left 30px
                top 70px
              img
                position absolute
                right 15px

            .newperson-team-bottom
              width 100%
              height 215px
              background #FFECC2
      .hot-sell
        width 100%
        height 710px
        .hotsell-top
          font-size 34px
          width 690px
          height 100px
          line-height 100px
          padding 0 30px
        .hotsell-lists
          width 90%
          padding 0px 37px
          height 610px
          .selllists-top
            width 100%
            height 200px
            margin-bottom 10px
            display flex
            justify-content center
            .hotseel-left
              width 332px
              background pink
              margin-right 10px
              position relative
              span
                font-size 30px
                position absolute
                left 15px
                top 60px
                &:before
                  content ""
                  width 48px
                  height 4px
                  background #333
                  position absolute
                  top 50px
              img 
                width 200px
                height 100%
                position absolute
                right 0px
            .hotseel-right
              width 332px
              background #eee
          .selllists-bottom
            width 100%
            height 400px
            background yellow
</style>
