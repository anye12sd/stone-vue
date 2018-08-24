<template>
  <div class="footBar">
    <div class="footBar_content">
      <div class="footBar_content_contract">
        <p>联系我们</p>
        <p>地址：浙江省宁波市鄞州区环城南路1728号红星美凯龙二楼B-8032铭禾石业</p>
        <p>邮编：315000</p>
        <p>邮件：617794014@qq.com</p>
      </div>
      <div class="kefu">
        <p>客服热线</p>
        <p>057489026566</p>
        <p>(工作时间 9:00-17:00)</p>
        <img src="../../assets/img/AD0Ip4H4BRAEGAAg1o6XwwUo2eCmqAIwLjgw.png" alt="" class="wechat" @mouseover="onMouseOver" @mouseout="onMouseOut">
        <transition name="fade">
          <img src="../../assets/img/wechat.jpg" alt="" class="wechatimg" v-if="show">
        </transition>
        <!--<img src="../assets/img/wechat.jpg" alt="" class="wechatimg" v-show="show">-->
      </div>
      <div class="help">
        <p>商家服务</p>
        <p>平层装修</p>
        <p>别墅装修</p>
        <p>工程</p>
        <p>专业大理石</p>
      </div>
      <div class="help">
        <p>帮助信息</p>
        <p>帮助中心</p>
        <p>赎回投资</p>
        <p>新手指引</p>
        <p>安全保障</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Footer',
    data(){
      return{
        show:false
      }
    },
    methods:{
      onMouseOver:function(){
        this.show = true;
      },
      onMouseOut:function(){
        this.show = false;
      },
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
