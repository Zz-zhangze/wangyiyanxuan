<template>
  <div class="classifyContainer">
      <div class="search">

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
  .classifyContainer
    .search
      height 

 
</style>
