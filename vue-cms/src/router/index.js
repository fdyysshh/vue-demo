import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home'
import member from'../pages/member'
import search from'../pages/search'
import shopCar from'../pages/shopCar'
import newsList from '../pages/newsList'
import newsInfo from '../pages/newsInfo'
import photoList from '../pages/photoList'
import photoInfo from '../pages/photoInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:home},
   {path:'/home',component:home},
   {path:'/member',component:member},
   {path:'/search',component:search},
   {path:'/shopCar',component:shopCar},
   {path:'/home/newsList',component:newsList},
   {path:'/home/newsInfo/:id',component:newsInfo},
   {path:'/home/photoList',component:photoList},
   {path:'/home/photoInfo/:id',component:photoInfo}
  ],
  linkActiveClass:'mui-active'  //覆盖默认的路由高亮类
})
