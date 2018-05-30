<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <rbk-nav-bar></rbk-nav-bar>
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    'rbk-nav-bar': Navbar
  },
  data(){
    return {
      recipes: [
          {
            title: 'Spicy Meatballs with Spaghetti',
            slug: 'spicy-meatballs-with-spaghetti',
            catergory: ['Italian', 'Pasta'],
            favourite: false,
            image: 'https://images.unsplash.com/photo-1513096010416-a2d75c794cf9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e966da6f823c4750779d8f8a10c6a205&auto=format&fit=crop&w=1302&q=80',
            id: 1,
            ingredients: [
              {name: 'Minced Beef', measure: '1 kg'}, 
              {name: 'Carrots', measure: '3 Pcs'},
              {name: 'Oats', measure: '500 g'},
              {name: 'Spaghetti', measure: '1 kg'}
            ],
            instrunctions: ['1. Dessert sweet roll I love gingerbread I love wafer wafer tart I love. Wafer macaroon I love toffee ice cream lemon drops. Sweet pastry liquorice. Halvah I love gummi bears toffee.', '2. Danish tiramisu cake gummies liquorice carrot cake donut cheesecake. Toffee soufflé chupa chups I love liquorice sesame snaps fruitcake bonbon.', '3. Tart I love caramels dessert I love marzipan chocolate cake tart sweet roll 4.', 'Fruitcake marzipan wafer lemon drops pudding oat cake oat cake marzipan biscuit. I love I love icing sweet roll jujubes cupcake soufflé pie.']
          },
          {
            title: 'Meaty Pizza',
            slug: 'meaty-pizza',
            catergory: ['Italian', 'Pizza'],
            favourite: true,
            image: 'https://images.unsplash.com/photo-1527133256227-fc3549f55332?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99090964dc23f9bc2048da6a162aef63&auto=format&fit=crop&w=800&q=80',
            id: 2,
            ingredients: [
              {name: 'Pizza Base', measure: '1 Pc'}, 
              {name: 'Salami', measure: '200 g'},
              {name: 'Tomato Pure', measure: '100 g'},
              {name: 'Woolies Mozerella', measure: '1 kg'},
              {name: 'Cherizo', measure: '300 g'},
              {name: 'Minced Beef', measure: '200g kg'}
            ],
            instrunctions: ['1. Dessert sweet roll I love gingerbread I love wafer wafer tart I love. Wafer macaroon I love toffee ice cream lemon drops. Sweet pastry liquorice. Halvah I love gummi bears toffee.', '2. Danish tiramisu cake gummies liquorice carrot cake donut cheesecake. Toffee soufflé chupa chups I love liquorice sesame snaps fruitcake bonbon.', '3. Tart I love caramels dessert I love marzipan chocolate cake tart sweet roll 4.', 'Fruitcake marzipan wafer lemon drops pudding oat cake oat cake marzipan biscuit. I love I love icing sweet roll jujubes cupcake soufflé pie.']           
          }
      ]
    }
  }
}
</script>

<style>

</style>
