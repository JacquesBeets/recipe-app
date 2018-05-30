<template>
  <div class="index container">
    <div class="row">
      <div class="col sm12 m7">
        <div class="card" v-for="recipe in recipes" :key="recipe.id">
          <div class="card-image">
              <img :src="recipe.image">
              <span class="card-title">{{recipe.title}}</span>
              <!-- <span v-for="ingredient in recipe.ingredients" :key="ingredient.name">{{ingredient.name}}</span> -->
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      recipes: [
          {
            title: 'Spicy Meatballs with Spaghetti',
            slug: 'spicy-meatballs-with-spaghetti',
            image: 'https://lh3.googleusercontent.com/u_3dFXBPmzlqpZwvLMZmp4y1QIncRDZXKwwOE-EAtcrfoSBL8KY808HPE3LaJTXKgXR16NGAPq0bmKfJZ4HA=w1919-h899-rw',
            id: 1,
            ingredients: [
              {name: 'Minced Beef', measure: '1 kg'}, 
              {name: 'Carrots', measure: '3 Pcs'},
              {name: 'Oats', measure: '500 g'},
              {name: 'Spaghetti', measure: '1 kg'}
            ]
          },
          {
            title: 'Meaty Pizza',
            slug: 'meaty-pizza',
            image: 'https://images.unsplash.com/photo-1527133256227-fc3549f55332?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99090964dc23f9bc2048da6a162aef63&auto=format&fit=crop&w=800&q=80',
            id: 2,
            ingredients: [
              {name: 'Pizza Base', measure: '1 Pc'}, 
              {name: 'Salami', measure: '200 g'},
              {name: 'Tomato Pure', measure: '100 g'},
              {name: 'Woolies Mozerella', measure: '1 kg'},
              {name: 'Cherizo', measure: '300 g'},
              {name: 'Minced Beef', measure: '200g kg'}
            ]           
          }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  background-color: rgba(0, 0, 0, 0.363);
  color: white;
}
</style>
