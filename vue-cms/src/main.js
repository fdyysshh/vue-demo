import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'

//使用vue-resource 发送请求
import VueResource from 'vue-resource'
Vue.use(VueResource)
//配置请求根域名
Vue.http.options.root='http://www.lovegf.cn:8899/'

Vue.config.productionTip = false
//引入样式
import './css/common.css'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'



//引入mint-ui
import { Header,Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
/* eslint-disable no-new */

//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dataStr).format(pattern)
})

//缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
