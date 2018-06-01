<template>
  <div class="container" v-if="recipeImage">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-image">
            <img :src="recipeImage" :alt="recipe.slug">
            <router-link :to="editRecipeLink" class="edit-recipe-button btn-floating btn-large halfway-fab waves-effect waves-light">
              <i class="material-icons">edit</i>
            </router-link>
          </div>
          <div class="card-title">
            <h3>{{recipe.title}}</h3>
          </div>
          <div class="card-content">
            <ul class="collection with-header ingredient-collection">
              <li class="collection-header">
                <h4 class="teal-text">Ingredients:</h4>
              </li>
              <li class="collection-item" v-for="(indredient, index) in recipe.ingredients" :key="index">
                {{indredient.qty}} {{indredient.measure}} - <strong>{{indredient.name}}</strong> 
              </li>
            </ul>
          </div>
            <div class="row instructions-row">
              <div class="col">
                <div class="card teal instructions-card">
                  <div class="card-content instructions-content">
                    <ul class="collection">
                      <li class="collection-header">
                        <h4 class="white-text">Instructions:</h4>
                      </li>
                      <li class="collection-item avatar teal" v-for="(instruction, index) in recipe.instructions" :key="index">
                        <i class="circle teal darken-3">{{index + 1}}</i>
                        <p class="white-text">{{instruction}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'RecipeView',
  data(){
    return {
      recipeSlug: this.$route.params.recipe_slug,
      editRecipeLink: null,
      recipe: null,
      recipeImage: null
    }
  },
  created(){
    let ref = db.collection('recipes').where('slug', '==', this.recipeSlug)
    ref.get()
      .then(snapshot => {
          snapshot.forEach(doc => {
            this.recipe = doc.data()
            this.recipe.id = doc.id
            this.editRecipeLink = `/recipe/edit/${this.recipeSlug}`
            this.recipeImage = this.recipe.imageURL
          })
      })
  }
}
</script>

<style scoped> 
.container {
  max-width: 1000px;
  margin-top: 30px;
}

/* .card{
  padding-bottom: 30px;
} */

.card-image {
  border: 30px solid #009688;
}

.card-title {
  padding: 0 30px 0 30px;
}

.card-content {
  padding: 0 30px 0 30px;
}

.instructions-row {
  margin-bottom: 0;
}

.instructions-card {
  padding:30px;
  margin-bottom: 0;
}

.instructions-content {
  padding: 0;
  margin: 0;
}

.instructions-content ul {
  padding: 0;
  margin: 0;
}

.instructions-content h4 {
  padding-left: 20px;
}

</style>
