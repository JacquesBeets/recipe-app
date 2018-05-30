import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    }
  ]
})
