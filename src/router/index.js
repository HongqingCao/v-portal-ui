import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import pi from '@/pages/pi/index'
import pii from '@/pages/pii/index'
import piii from '@/pages/piii/index'
import piv from '@/pages/piv/index'
import pv from '@/pages/pv/index'
import pvi from '@/pages/pvi/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
     {
      path: '/pi',
      name: 'pi',
      component: pi
    },
    {
      path: '/pii',
      name: 'pii',
      component: pii
    },
    {
      path: '/piii',
      name: 'piii',
      component: piii
    },
    {
      path: '/piv',
      name: 'piv',
      component: piv
    },
    {
      path: '/pv',
      name: 'pv',
      component: pv
    },
    {
      path: '/pvi',
      name: 'pvi',
      component: pvi
    }
  ]
})
