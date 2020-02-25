<template>
<div id="shopContainer">
    <div class="swiper-wrap">
        <div class="shopContainer-top">
            <img :src=imgUrl alt="">
        </div>
        <ul v-if="NewCateLists && NewCateLists.categoryList" class="shopList-items">
            <li v-for="(item, index) in NewCateLists.categoryList" :key="index">
                <img :src=item.bannerUrl alt="">
                <span>{{item.name}}</span>
            </li>
        </ul>
        <ul v-if="NewCateLists && NewCateLists.subCateList" class="shopList-other">
            <li v-for="(item, index) in NewCateLists.subCateList" :key="index">
                <p>{{item.title}}</p>
                <ul>
                    <li v-for="(shop, index) in item.list" :key="index">
                        <img :src=shop.wapBannerUrl alt="">
                        <span>{{shop.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default {
        data() {
            return {
                id:11,
                imgUrl:''
            }
        },
        mounted(){
            this.$store.dispatch('getCateLists')
            new BScroll('#shopContainer',{
                scrollX:true
            })
            this.imgUrl = this.$route.query.imgUrl
        },
        computed: {
            ...mapState({
                CateLists : state => state.CateLists
            }),
            NewCateLists(){
                if(this.CateLists){
                    return this.CateLists.find((item,index) =>item.id === this.id)
                }
            }
        },
        watch: {
            $route(){
                this.id = this.$route.params.mid*1,
                this.imgUrl = this.$route.query.imgUrl
            }
        },
        methods:{
            firstShow(){
                let NewCateLists = this.CateLists.find((item,index)=>{
                    item.id === this.id
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #shopContainer
        width 528px
        height 1088px
        padding 30px 30px
        overflow hidden
        .shopContainer-top
            width 100%
            height 192px
            margin-bottom 30px
            background red
            img 
                width 100%
                height 100%
        .shopList-items
            display flex
            justify-content flex-start
            flex-wrap wrap
            li
                width 144px
                height 216px
                margin-right 45px
                text-align center
                &:nth-child(3n+3)
                    margin-right 0px
                img 
                    width 144px
                    height 144px
        .shopList-other
            li
                display flex
                justify-content space-between
                flex-wrap wrap
                ul
                    border-top 1px solid #eee
                    display flex
                    justify-content space-between
                    flex-wrap wrap
                    margin-bottom 10px
                    width 100%
                    li
                        width 144px
                        height 216px
                        text-align center
                        img
                            width 144px
                            height 144px
                p
                    font-size 30px
                    font-weight bold
                    margin-bottom 10px 

 
</style>
