<template>
  <div id="misteContainer">
    <div style="height:148px"></div>
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
        <div class="header-icon">
          <div class="linear"></div>
          <i class="iconfont icon-jiantouxia"></i>
      </div>
    </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in IndexList.focusList" :key="index">
          <img :src=item.picUrl alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
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
          <div class="selllists-top" v-if="IndexList.categoryHotSellModule">
            <div class="hotseel-left" v-for="(item, index) in newCategoryList" :key="index">
              <span>{{item.categoryName}}</span>
              <img :src=item.picUrl alt="">
            </div>
          </div>
          <div class="selllists-bottom">
            <ul class="selllists-bottom-container" v-if="IndexList.categoryHotSellModule">
              <li class="selllists-bottom-item" v-for="(item, index) in newHotSellCategoryList" :key="'5'+index">
                <p>{{item.categoryName}}</p>
                <img :src=item.picUrl alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="getiao"></div>
      <div class="timedown-buy">
        <div class="timedown-buy-header">
          <span>限时购</span>
          <div class="more-shop">
            <span>更多</span>
            <i class="iconfont icon-dibudaohanglan-"></i>
          </div>
        </div>
        <div v-if="IndexList.flashSaleModule" class="timedown-buy-lists">
          <li class="timedown-buy-item" v-for="(item, index) in IndexList.flashSaleModule.itemList" :key="index">
            <img :src=item.picUrl alt="">
            <span class="heightPrice">￥{{item.originPrice}}</span>
            <span class="downPrice">￥{{item.activityPrice}}</span>
          </li>
        </div>
      </div>
      <div class="getiao"></div>
      <div class="newfood-buy">
        <div class="timedown-buy-header">
          <span>新品首发</span>
          <div class="more-shop">
            <span>更多</span>
            <i class="iconfont icon-dibudaohanglan-"></i>
          </div>
        </div>
        <div v-if="IndexList" class="timedown-buy-lists">
          <li class="timedown-buy-item" v-for="(item, index) in newItemLists" :key="index">
            <img :src=item.listPicUrl alt="">
            <span class="downPrice">{{item.name}}</span>
            <p class="heightPrice">￥{{item.counterPrice}}</p>
            <span class="spacel-show">
              <span>{{item.itemTagList[0].name}}</span>
            </span>
          </li>
        </div>
      </div>
      <div class="getiao"></div>
      <div class="other-show">
        <li v-for="(item, index) in IndexList.sceneLightShoppingGuideModule" :key="index">
          <p class="bigSize">{{item.styleItem.title}}</p>
          <p>{{item.styleItem.desc}}</p>
          <img v-for="(url, index) in item.styleItem.picUrlList" :key="'5'+index" :src=url alt="">
        </li>
      </div>
      <div class="getiao"></div>
      <div class="dowload">
        <div class="footerTop">
          <div class="downLoadApp">下载APP</div>
          <div class="PCEdition">电脑版</div>
        </div>
        <div class="footerBottom">
          <div class="copyright">
            <span>网易公司版权所有 © 1997-</span>
            <span>2020</span>
          </div>
          <div class="licenses">
              食品经营许可证：JY13301080111719
          </div>

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
    mounted(){
      new BScroll('.header-scroll',{
        scrollX:true
      }),
      new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
          el: '.swiper-pagination',
        },
      }),
      this.$store.dispatch('getIndexLists')
    },
    computed: {
      ...mapState({
        IndexList: state => state.IndexList
      }),
      newCategoryList(){
        return this.IndexList.categoryHotSellModule.categoryList.filter((item,index)=>{
            return index < 2
        })
      },
      newHotSellCategoryList(){
        return this.IndexList.categoryHotSellModule.categoryList.filter((item,index)=>{
            return index > 1
        })
      },
      newItemLists(){
        if (this.IndexList.newItemList) {
          return this.IndexList.newItemList.filter((item,index)=>{
            return index > 1
          })
        }
      }
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
      width 750px
      position fixed
      top 0
      left 0
      background white
      z-index 99
      .header-search
        width 690px
        height 88px
        padding 0px 30px
        display flex
        justify-content space-between
        .logo
          height 40px
          margin-top 20px
        .search
          width 390px
          height 46px
          border-radius 15px
          background #eee
          padding 10px 25px 0px 25px
          margin-top 15px
          line-height 46px
          font-size 25px
          &::-webkit-input-placeholder
            position relative
            top -2px
        .land
          width 74px
          height 40px
          border-radius 10px
          color #DD1A21
          font-size 25px
          border 1px solid #DD1A21
          margin-top 25px
          background white
      .header-scroll
        width 600px
        height 60px
        overflow hidden
        display flex
        justify-content space-between
        flex-wrap nowrap
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
          width 150px
          position fixed
          right 0
          top 75px
          height 60px
          line-height 60px
          .linear
            width 30%
            height 60px
            float left
          i 
            width 70%
            height 60px
            text-align center
            line-height 60px
            font-size 45px
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
            justify-content space-between
            .hotseel-left
              width 332px
              background pink
              position relative
              &:nth-child(2n-1)
                background #F9F3E4
              &:nth-child(2n)
                background #EBEFF6
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
            .selllists-bottom-container
              width 100%
              height 100%
              display flex
              justify-content space-between
              flex-wrap wrap
              .selllists-bottom-item
                width 157px
                height 180px
                text-align center
                background #F5F5F5
                p
                  line-height 50px
                img 
                  width 120px
                  height 120px
      .timedown-buy
        height 700px
        width 690px
        padding 0px 30px
        .timedown-buy-header
          width 100%
          height 100px
          line-height 100px
          span
            font-size 34px
          .more-shop
            float right
            span 
              font-size 28px
            .iconfont
              font-size 40px
        .timedown-buy-lists
          width 100%
          height 600px
          display flex
          justify-content space-between
          flex-wrap wrap
          .timedown-buy-item
            width 216px
            height 300px 
            img 
              width 216px
              height 216px
            .heightPrice
              font-size 25px
              color #DD1A21
              margin-right 10px
            .downPrice
              font-size 20px
              color #7F7F7F
              text-decoration line-through
      .newfood-buy
        height 922px
        width 690px
        padding 0px 30px
        .timedown-buy-header
          width 100%
          height 100px
          line-height 100px
          span
            font-size 34px
          .more-shop
            float right
            span 
              font-size 28px
            .iconfont
              font-size 40px
        .timedown-buy-lists
          width 100%
          height 600px
          display flex
          justify-content space-between
          flex-wrap wrap
          .timedown-buy-item
            width 216px
            height 381px 
            img 
              width 216px
              height 216px
            .heightPrice
              font-size 25px
              color #DD1A21
              margin-right 10px
              line-height 40px
            .downPrice
              line-height 35px
              font-size 25px
              overflow hidden
              display -webkit-box
              -webkit-line-clamp 2
              -webkit-box-orient vertical
            .spacel-show
              border 1px solid #DD1A21
              color #DD1A21
              border-radius 10px
      .other-show
        width 690px
        height 536px
        display flex
        justify-content space-between
        flex-wrap wrap
        padding 24px 30px
        li
          width 323px
          height 244px
          padding 20px 0px 0px 20px
          background #F5F5F5
          img 
            width 50%
          p
            color #7f7f7f
          .bigSize
            font-size 30px
            color black
            line-height 50px
      .dowload
        height 244px
        background #414141
        box-sizing border-box
        padding 54px 20px 28px
        margin-bottom 100px
        .footerTop
          height 62px
          display flex
          justify-content center
          margin-bottom 36px
          div
            width 172px
            height 62px
            box-sizing border-box
            border 1px solid #999
            text-align center
            line-height 62px
            color #fff
            &.downLoadApp
              margin-right 50px
        .footerBottom
          height 64px
          .copyright
            text-align center
            line-height 35px
            span
              color #999
          .licenses
            text-align center
            line-height 35px
            color #999
</style>
