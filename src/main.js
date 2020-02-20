import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入axios
import axios from 'axios'
//引入MinUi库，配置
import MinUi from 'mint-ui'

//引入MinUi库样式文件
import "mint-ui/lib/style.css"
import MyHeader from './components/obj1/myHeader'
import MyFoot from './components/obj1/myFoot'

Vue.component("myheader",MyHeader)

Vue.component("myfoot",MyFoot)

//将组件库注册Vue对象
Vue.use(MinUi);

//设置axios对象的基础路径属性
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
