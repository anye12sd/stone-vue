<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <Carrousel json="./static/json/productBanner.js"></Carrousel>
    <!--<swiper :options="swiperOption" ref="mySwiper" >-->
      <!--&lt;!&ndash; slides &ndash;&gt;-->
      <!--<swiper-slide v-for="item in items" :key="item.id"><img :src="item.src"></swiper-slide>-->
      <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
    <!--</swiper>-->
    <div class="product">
      <div class="product_right_title">
        最新案例<span>CASE</span>
      </div>
      <div class="product_list" v-for="(item,index) in products">
        <div class="product_box fl">
          <div class="img">
            <router-link :to="{name:'introduce',params:{ id : index }}">
              <img :src="item.src" alt="" @click="toHref()">
            </router-link>
          </div>
          <p class="product_name">{{item.name}}</p>
        </div>
      </div>
      <div class="cl"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  export default{
    name:'contact',
    data(){
      return{
//        items:[],
        products:[],
//        swiperOption: {
//          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
//          notNextTick: true,
//          pagination: {el:'.swiper-pagination',clickable:true},
//          slidesPerView: 'auto',
//          centeredSlides: true,
//          paginationClickable: true,
//          spaceBetween: 30,
//          onSlideChangeEnd: swiper => {
//            //这个位置放swiper的回调方法
//            console.log(1)
//            this.page = swiper.realIndex+1;
//            this.index = swiper.realIndex;
//          }
//        }
      }
    },
    mounted(){
//      this.bannerReady();
      this.productReady();
    },
    methods:{
//      bannerReady:function(){
//        this.$axios.get('/static/json/productBanner.js')
//          .then((res)=>{
//            this.items=res.data;
////              this.$nextTick(function () {
////                var mySwiper = new Swiper ('.swiper-container', {
////                  autoplay: {
////                    delay:2000,
////                    stopOnLastSlide: false,
////                    disableOnInteraction: true,
////                  },
////                  loop: true,
////                  // 如果需要分页器
////                  pagination: '.swiper-pagination',
////                })
////              })
//          })
//          .catch(function (response) {
//            console.log(response);
//          });
//      },
      productReady:function(){
        this.$axios.get('./static/json/product.js')
          .then((res)=>{
            this.products=res.data;
          })
          .catch(function(response){
            console.log(response)
          })
      },
      toHref:function(){
        console.log(1)
      }
    },
    computed: {
      mySwiper () {
        return this.$ref.mySwiper.swiper
      }
    },
  }
</script>
