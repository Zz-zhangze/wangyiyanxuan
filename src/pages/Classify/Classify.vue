<template>
  <div id="classifyContainer">
      <div class="search">
        <div class="search-list"></div>
      </div>
      <div class="categoryContainer">
        <div class="categoryContainer-left">
          <ul class="left-container">
            <li class="active" v-for="(item, index) in CategoryLists.categoryL1List" :key="index">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="categoryContainer-right">
          <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    mounted() {
      this.$store.dispatch('getCategoryList')
    },
    computed: {
      ...mapState({
        CategoryLists : state => state.CategoryLists
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #classifyContainer
    height 100%
    overflow hidden
    .search
      height 58px
      width 700px
      padding 15px 25px
      border-bottom 1px solid #eee
      .search-list
        height 100%
        width 100%
        background #eee
        border-radius 10px
    .categoryContainer
      width 100%
      height 1246px
      display flex
      justify-content space-between
      .categoryContainer-left
        width 162px
        height 100%
        border-right 1px solid #eee
        .left-container
          width 100%
          li
            height 50px
            width 162px
            margin-top 50px
            text-align center
            line-height 50px
            &.active 
              color #ab2b2b
              border-left 5px solid #ab2b2b
              box-sizing border-box
            span 
              font-size 28px
      .categoryContainer-right
        width 588px
        height 100%
        // background yellow
</style>
