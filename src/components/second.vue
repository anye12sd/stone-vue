<!--这个是局部组件轮播图-->
<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="item in items" :key="item.id"><img :src="item.src"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  export default{
    props:['json'],
    data(){
      return{
        items:[],
        jsonUrl:this.json,
        swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
          autoplay: {
            delay:2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
        pagination: {el:'.swiper-pagination',clickable:true},
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          console.log(1)
          this.page = swiper.realIndex+1;
          this.index = swiper.realIndex;
        }
      }
      }
    },
    mounted(){
      this.getJson();
    },
    methods:{
      getJson:function(){
        console.log(this.jsonUrl)
        this.$axios.get(this.jsonUrl)
        .then((res)=>{
          this.items=res.data;
//              this.$nextTick(function () {
//                var mySwiper = new Swiper ('.swiper-container', {
//                  autoplay: {
//                    delay:2000,
//                    stopOnLastSlide: false,
//                    disableOnInteraction: true,
//                  },
//                  loop: true,
//                  // 如果需要分页器
//                  pagination: '.swiper-pagination',
//                })
//              })
        })
        .catch(function (response) {
          console.log(response);
        });
      }
    }
  }
</script>
