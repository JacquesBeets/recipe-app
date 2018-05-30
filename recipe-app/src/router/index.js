import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/Index'
import RecipeView from '@/components/RecipeView'
import AddRecipe from '@/components/AddRecipe'

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
      path: '/add-recipe',
      name: 'AddRecipe',
      component: AddRecipe
    },
    {
      path: '/view-recipe/:slug',
      name: 'RecipeView',
      component: RecipeView
    }
  ]
})
