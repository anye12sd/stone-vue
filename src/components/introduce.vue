<template>
  <div>
    <Header></Header>
    <Nav isactive="true"></Nav>
    <div class="introduce_box">
      <p>工地信息：<span>{{product.name}}</span></p>
      <p>开工时间：<span>{{product.time}}</span></p>
      <p>所用石材：<span>{{product.material}}</span></p>
      <p>用户反馈：</p>
      <img v-for="srcs in product.feedbackImg" :src="srcs" alt="">
      <!--<img src="../../static/img/65bb23d72c47fc5a9b16d2efac9c37c4.jpg" alt="">-->
      <!--<img src="../../static/img/65bb23d72c47fc5a9b16d2efac9c37c4.jpg" alt="">-->
      <!--<img src="../../static/img/65bb23d72c47fc5a9b16d2efac9c37c4.jpg" alt="">-->
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  export default{
    name:'introduce',
    data(){
      return{
        product:[],
      }
    },
    mounted(){
      this.getInfo()
    },
    methods:{
      getInfo:function(){
        this.$axios.get('./static/json/product.js')
          .then((res)=>{
            var data = res.data;
            var id = this.$route.params.id
            for(var i = 0;i<=data.length;i++){
              if(i == id){
                this.product = data[i];
                console.log(data[i],110)
              }
            }
            //this.product=res.data;
          })
          .catch(function(response){
            console.log(response)
          })
      }
    }
  }
</script>

<style scoped>
  .indexBtn ul li{
    background: #ff6537;
    border-radius: 25px;
    color: #fff;
  }
</style>

