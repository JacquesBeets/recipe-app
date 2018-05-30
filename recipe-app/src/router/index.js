import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/Index'
import RecipeView from '@/components/RecipeView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    },
    {
      path: '/recipe/:slug',
      name: 'RecipeView',
      component: RecipeView
    }
  ]
})
