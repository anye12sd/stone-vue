<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <!--<div class="swiper-container">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide" v-for="item of items">-->
          <!--<img :src="item.src">-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash; Add Pagination &ndash;&gt;-->
      <!--<div class="swiper-pagination swiper-pagination-white"></div>-->
    <!--</div>-->
    <!--<swiper :options="swiperOption" ref="mySwiper" >-->
      <!--&lt;!&ndash; slides &ndash;&gt;-->
      <!--<swiper-slide v-for="item in items" :key="item.id"><img :src="item.src"></swiper-slide>-->
      <!--&lt;!&ndash; Optional controls &ndash;&gt;-->
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
    <!--</swiper>-->
    <Carrousel json="./static/json/contractBanner.js"></Carrousel>
    <div class="product">
      <div class="product_title_box">
        <div class="product_title_eng">联系我们</div>
      </div>
      <p class="product_text_chn">通过研究商业模式来定义品牌模式提供优秀的品牌整合解决方案，令品牌长远发展，更具竞争力</p>
      <p class="product_text_eng">TO DEFINE THE BRAND MODEL BY STUDYING THE BUSINESS MODEL TO PROVIDE EXCELLENT BRAND INTEGRATION SOLUTIONS, SO THE BRANLONG-TERM DEVELOPMENT, MORE COMPETITIVE</p>
    </div>
    <div class="contract_box">
      <div>
        <img src="../assets/img/AD0Ip4H4BRAEGAAgyZiYwwUo0vO6FDBaOFo.png" alt="">
        <p>手机: 15869148736</p>
        <p>座机:0574-89026566</p>
      </div>
      <div>
        <img src="../assets/img/AD0Ip4H4BRAEGAAgypiYwwUombifqgcwXTha.png" alt="">
        <p>浙江省宁波市鄞州区环城南路东段1728号红星美凯龙二楼B-8032</p>
      </div>
      <div>
        <p>邮箱：617794014@qq.com</p>
      </div>
    </div>
    <div class="map">
      <div id="map-bg" style="width:960px;height:400px;margin:0 auto">

      </div>
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
//      this.ready();
      this.getMap()
    },
    methods:{
      getMap:function(){
        var map = new BMap.Map('map-bg')   // 缩放限制
        map.centerAndZoom(new BMap.Point(121.6027683850, 29.8457507010), 18)
        map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
        map.enableScrollWheelZoom() // 滚轮
        var pt = new BMap.Point(121.6027683850, 29.8457507010);
        // 添加带有定位的导航控件
        var navigationControl = new BMap.NavigationControl({
          // 靠左上角位置
          anchor: BMAP_ANCHOR_TOP_LEFT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: true
        });
        map.addControl(navigationControl);
        // 添加定位控件
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function(e){
          // 定位成功事件
          var address = '';
          address += e.addressComponent.province;
          address += e.addressComponent.city;
          address += e.addressComponent.district;
          address += e.addressComponent.street;
          address += e.addressComponent.streetNumber;
          alert("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError",function(e){
          // 定位失败事件
          alert(e.message);
        });
        map.addControl(geolocationControl);
        var myIcon = new BMap.Icon("./static/img/Location_16.676056338028px_1194795_easyicon.net.png", new BMap.Size(16,23));
        var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
        map.addOverlay(marker2);
      }
//      ready:function(){
//        this.$axios.get('/static/json/contractBanner.js')
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
//      }
    },
    computed: {
      mySwiper () {
        return this.$ref.mySwiper.swiper
      }
    },
  }

</script>

<style scoped>

</style>
