import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/pages/home/home'
import Hotel from '../src/pages/hotel/hotel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    }
  ]
})
