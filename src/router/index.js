import Vue from 'vue'
import Router from 'vue-router'
import index from '../index/index'
import manage from '../manage/manage'
import information from '../information/information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path:'/manage',
      name:'manage',
      component:manage
    },
    {
      path:'/information',
      name:'information',
      component:information
    }
  ]
})
