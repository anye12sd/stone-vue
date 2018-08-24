<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <div class="about_content">
      <div class="about_title">我们的核心业务</div>
      专业的大理石知识，精湛的大理石工业，认真的大理石服务
    </div>
    <div class="about_content">
      <div class="product_right_title">
        关于铭禾<span>ABOUT US</span>
      </div>
      <div class="about_box">
        <div class="about_box_left fl">
          <img src="../../static/img/ABUIABACGAAgk-Py1AUokM-r3gEw2AQ4kAM.jpg" alt="">
        </div>
        <div class="about_box_right fr">
          <p>铭禾石业工厂位于广东省云浮市，专业经营进口莎安娜米黄，欧典米黄等高端天然石材，从2009年至今，铭禾石业已经发展成一个集设计，精品工艺加工及安装为一体的企业。 专业的石材设计团队，为您提供专属的尊贵服务。公司同时引进了先进的国际一流设备，专注于别墅，高端会所的私人定制。经营范围广泛：罗马柱，水刀拼花，浮雕，护墙，电视玄关背景，楼梯踏步等。公司奉行“信誉第一，顾客第一”的企业宗旨，在推行现代化管理模式的同时，不断加大市场的开发力度，凭着丰富的管理经验、雄厚的经济实力、现代化的机械加工设备，良好的企业信誉和精湛的生产技术，关注每一个细节，全力打造一流加工技术的铭禾品牌。</p>
        </div>
        <div class="cl"></div>
      </div>
    </div>
    <div class="about_content">
      <div class="product_right_title">
        关于工厂<span>ABOUT US</span>
      </div>
      <div class="about_box">
        <div class="about_box_left fr">
          <router-link :to="{name:'introduce',params:{id:8}}">
            <img src="../../static/img/ABUIABACGAAgk-Py1AUokM-r3gEw2AQ4kAM.jpg" alt="">
          </router-link>
        </div>
        <div class="about_box_right fl">
          <p>铭禾石业工厂位于广东省云浮市，专业经营进口莎安娜米黄，欧典米黄等高端天然石材，从2009年至今，铭禾石业已经发展成一个集设计，精品工艺加工及安装为一体的企业。 专业的石材设计团队，为您提供专属的尊贵服务。公司同时引进了先进的国际一流设备，专注于别墅，高端会所的私人定制。经营范围广泛：罗马柱，水刀拼花，浮雕，护墙，电视玄关背景，楼梯踏步等。公司奉行“信誉第一，顾客第一”的企业宗旨，在推行现代化管理模式的同时，不断加大市场的开发力度，凭着丰富的管理经验、雄厚的经济实力、现代化的机械加工设备，良好的企业信誉和精湛的生产技术，关注每一个细节，全力打造一流加工技术的铭禾品牌。</p>
        </div>
        <div class="cl"></div>
      </div>
    </div>
    <div class="about_content">
      <div class="product_right_title">
        经营理念 <span>OPERATION PHILOSOPHY</span>
      </div>
      <div>
        <img src="../../static/img/AD0Ip4H4BRACGAAgsoSYwwUotI2X0QUwwAc4pQE.jpg" alt="">
      </div>
      <p style="text-align: left;font-size: 16px;margin-top: 20px;">12年沉淀，我们只做一件事</p>
      <p style="text-align: left;font-size: 16px">专注大理石，只为给客户带来更好的服务体验</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  export default{
    name:'about'
  }
</script>
