<template>
  <div class="add-recipe container">
    <div class="card">
      <h2 class="center-align teal-text">Create Your New Recipe!</h2>
      <hr>
    <form>
      <div class="field title">
        <label for="title">Recipe Title</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-image-url">
        <label for="image-url">Image URL</label>
        <input type="text" name="title" v-model="imageURL">
      </div>
      <div class="row" @keydown.enter.prevent="addIngre">
        <div class="input-field col l6 add-ingredient">
          <label for="ingredient">Ingredient</label>
          <input type="text" ref="ingredient" name="title" v-model="ingreVal"> 
        </div>
        <div class="input-field col l6">
          <label for="measure">Measure</label>
          <input type="text" name="title" v-model="ingreMeas"> 
        </div>
      </div>
      <div class="input-field" @keydown.tab.prevent="addInstruct">
          <textarea id="instrunctions" ref="instrunctions" class="materialize-textarea"  v-model="instruckVal"></textarea>
          <label for="instrunctions">Instrunctions</label>
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <button @click="addRecipe" class="waves-effect waves-light btn teal">Add Recipe</button>
      </div>
    </form>
    <!-- <div>{{$data}}</div> -->
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'AddRecipe',
  data() {
    return {
      dbCategories: [],
      title: null,
      imageURL: null,
      ingredients: [],
      instrunctions: [],
      ingreVal: null,
      ingreMeas: null,
      instruckVal: null,
      feedback: null
    }
  },
  methods:{
    getCategories(){
      // db.collection('categories')
      //   .get()
      //   .then(snapshot => {
      //     snapshot.forEach(doc => {
      //       const fetchedCategories = doc.data()
      //       this.dbCategories.push(fetchedCategories)
      //     })
      //   })
    },
    addIngre(){
      if(this.ingreVal && this.ingreMeas){
        this.ingredients.push({name: this.ingreVal, measure: this.ingreMeas})
        this.ingreVal = null
        this.ingreMeas = null
        this.$refs.ingredient.focus()
        this.feedback = null
      }else{
        this.feedback = 'Please make sure you have completed both fields before pressing enter'
      }
    },
    addInstruct(){
      if(this.instruckVal){
        this.instrunctions.push(this.instruckVal)
        this.instruckVal = null
        this.$refs.instrunctions.focus()
      }
    },
    addRecipe(){
      console.log(this.ingredients, this.instrunctions)
    }
  },
  created(){
    // this.getCategories()
  }
}
</script>

<style scoped>
h2 {
  font-size: 3em;
  margin: 20px auto;
}
.container {
  margin-top: 60px;
}
.card {
  padding: 20px;
}

.card form{
  padding: 50px;
}
</style>

