import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './css/common.css'
import './lib/mui/dist/css/mui.min.css'
import './lib/mui/dist/css/icons-extra.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
