import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import index from '@/components/index/index'
import dy_table_zzs_xgm_fb1_lb from '@/components/index/qyqk/Reportform/zzs/dy_table_zzs_xgm_fb1_lb'


Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    { //login (登录)
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/dy_table_zzs_xgm_fb1_lb',
      name: 'dy_table_zzs_xgm_fb1_lb',
      component: dy_table_zzs_xgm_fb1_lb
    },
  ]
})
