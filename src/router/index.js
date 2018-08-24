import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import contact from '@/components/contact'
import product from '@/components/product'
import introduce from '@/components/introduce'
import first from '@/components/first'
Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta:{
        title:'关于我们'
      }
    },
    {
      path: '/contract',
      name: 'contact',
      component: contact,
      meta:{
        title:'联系我们'
      }
    },
    {
      path: '/product',
      name: 'product',
      component: product,
      meta:{
        title:'产品详情'
      }
    },
    {
      path: '/introduce/:id',
      name: 'introduce',
      component: introduce,
      meta:{
        title:'案例展示'
      },
      props: true
    },
    {
      path: '/first',
      name: 'first',
      component: first,
      meta:{
        title:'首页'
      },
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

