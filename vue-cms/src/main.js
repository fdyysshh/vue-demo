import Vue from 'vue'
import App from './App'
import router from './router'

//使用vue-resource 发送请求
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false
import './css/common.css'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'


import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
