<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <second json="./static/json/indexBanner.js"></second>
    <!--<swiper :options="swiperOption" ref="mySwiper" >-->
      <!--&lt;!&ndash; slides &ndash;&gt;-->
      <!--<swiper-slide v-for="item in items" :key="item.id"><img :src="item.src"></swiper-slide>-->
      <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
    <!--</swiper>-->
    <div class="product">
      <div class="product_left fl">
        <img src="../../static/img/AD0Ip4H4BRACGAAg5-_WwwUoyezc3QIwmwI4zQE.jpg" alt="">
        <p class="product_left_title">公司理念</p>
        <p class="product_left_subtitle">
          公司奉行“信誉第一，顾客第一”的企业宗旨<br>
          服务宗旨：我们做石材，件件都是艺术品。无石材不豪宅，我们致力于打造宁波地区乃至全国的高端精品豪宅。
        </p>
      </div>
      <div class="product_right fr">
        <p class="product_right_title">案例展示</p>
          <div class="product_right_left fl">
            <router-link :to="{name:'introduce',params:{id:0}}">
            <p class="product_right_name a1">{{first.name || "工地名称"}}</p>
            <p class="product_right_subname a2">{{first.material || "使用石材"}}</p>
            <p class="product_right_text a3">
              {{first.introduce}}
            </p>
            <p class="a4">
              <img :src="first.src" alt="">
            </p>
            </router-link>
          </div>
        <div class="product_right_left fl">
          <router-link :to="{name:'introduce',params:{id:1}}">
          <p class="a5">
            <img :src="second.src" alt="">
          </p>
          <p class="product_right_name a6">{{second.name || "工地名称"}}</p>
          <p class="product_right_subname a7">{{second.material || "使用石材"}}</p>
          <p class="product_right_text a8">
            {{second.introduce}}
          </p>
          </router-link>
        </div>
      </div>
      <div class="cl"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import second from './second.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
//      items:[],
      first:[],
      second:[],
//      swiperOption: {
//        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
//        notNextTick: true,
//        pagination: {el:'.swiper-pagination',clickable:true},
//        slidesPerView: 'auto',
//        centeredSlides: true,
//        paginationClickable: true,
//        spaceBetween: 30,
//        onSlideChangeEnd: swiper => {
//          //这个位置放swiper的回调方法
//          console.log(1)
//          this.page = swiper.realIndex+1;
//          this.index = swiper.realIndex;
//        }
//      }
    }
  },
  mounted(){
//    this.ready();
    this.initText();
  },
  methods:{
    initText:function(){
      this.$axios.get('./static/json/product.js')
        .then((res)=>{
          this.first=res.data[0];
          this.second=res.data[1];
        })
        .catch(function (response) {
          console.log(response);
        });
    },
//    ready:function(){
//      this.$axios.get('/static/json/indexBanner.js')
//        .then((res)=>{
//          this.items=res.data;
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
//        })
//        .catch(function (response) {
//          console.log(response);
//        });
//    }
  },
//  computed: {
//    mySwiper () {
//      return this.$ref.mySwiper.swiper
//    }
//  },
  components:{
    second
  }
}
</script>

