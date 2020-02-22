<template>
  <div id="shopContainer">
      <div class="shopContainer-top">

      </div>
      <ul class="shopList-items">
          <li>
              <img src="" alt="">
              <span>111111111111111</span>
          </li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    export default {
        mounted(){
            this.$store.dispatch('getCateLists')
        },
        computed: {
            ...mapState({
                CateLists : state => state.CateLists
            })
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #shopContainer
        width 528px
        height 1088px
        padding 30px 30px
        background pink
        .shopContainer-top
            width 100%
            height 192px
            background red
            margin-bottom 30px
        .shopList-items
            display flex
            justify-content space-between
            flex-wrap wrap
            li
                width 144px
                height 216px
                background yellow
                img 
                    width 144px
                    height 144px
 
</style>
