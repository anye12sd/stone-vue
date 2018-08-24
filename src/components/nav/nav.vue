<template>
  <div class="indexBtn">
    <ul>
      <li><router-link class="" :to="{name:'HelloWorld'}">首页</router-link></li>
      <li><router-link :class="{'router-link-exact-active':isActive}" :to="{name:'product'}">案例展示</router-link></li>
      <li><router-link class="" :to="{name:'about'}">关于我们</router-link></li>
      <li><router-link class="" :to="{name:'contact'}">联系我们</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'Nav',
    props:['isactive'],
    data(){
      return{
        isActive:this.isactive
      }
    }
  }
</script>
