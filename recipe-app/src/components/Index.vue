<template>
  <div class="index container">
    <div class="row">
      <div class="col s12 m6 l4" v-for="recipe in recipes" :key="recipe.id">
        <router-link class="card-link" :to="'/recipe/' + recipe.slug">
          <div class="card">
            <div class="card-image waves-effect waves-dark">
                <img :src="recipe.imageURL">
                <span class="card-title">{{recipe.title}}</span>
                <!-- <span v-for="ingredient in recipe.ingredients" :key="ingredient.name">{{ingredient.name}}</span> -->
              </div>
              <router-link v-if="recipe.favourite" to="" class="btn-floating btn-large halfway-fab waves-effect waves-light red">
                <i class="material-icons">favorite_border</i>
              </router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      recipes: []
    }
  },
  created(){
    db.collection('recipes')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let recipeData = doc.data()
        let recipe = {
          title: recipeData.title,
          slug: recipeData.slug,
          imageURL: recipeData.imageURL,
          favourite: recipeData.favourite
        }
        recipe.id = doc.id
        this.recipes.push(recipe)
      });
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card:hover {
    box-shadow: 4px 4px 20px 4px #696969cc;
    width: 102%;
    height: 102%;
  }

  .index {
    margin-top: 60px;
  }


  span {
    background-color: rgba(0, 0, 0, 0.664);
    color: white;
    width: 100%;
    text-align: center;
  }
</style>
