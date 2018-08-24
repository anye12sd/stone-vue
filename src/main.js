// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import './assets/css/common.css'
import Carrousel from './components/carrousel/index'
Vue.use(Carrousel)
import Nav from './components/nav/nav'
Vue.use(Nav)
import Footer from './components/footer/footer'
Vue.use(Footer)
import Header from './components/header/header'
Vue.use(Header)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
