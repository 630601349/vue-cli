import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/obj1/login'
import Register from '../components/obj1/register'
import Index from '../components/obj1/index'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Index
  },
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/Reg',
    component:Register
  }
]

const router = new VueRouter({
  routes
})

export default router
