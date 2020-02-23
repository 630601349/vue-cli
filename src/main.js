import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axios from 'axios'
//引入MinUi库，配置
import MinUi from 'mint-ui'

import ElementUI from 'element-ui'

//引入MinUi库样式文件;
import "mint-ui/lib/style.css";
import MyHeader from './components/obj1/myHeader';
import MyFoot from './components/obj1/myFoot';
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/normalize_zh.css";

Vue.component("myheader",MyHeader)

Vue.component("myfoot",MyFoot);


Vue.use(ElementUI)

//将组件库注册Vue对象
Vue.use(MinUi);

axios.defaults.baseURL = "http://127.0.0.1:4000/"

axios.defaults.withCredentials = true;

//注册
Vue.prototype.axios = axios;



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
