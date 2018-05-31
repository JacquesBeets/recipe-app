<template>
  <div class="add-recipe container">
    <div class="card new-recipe">
      <h2 class="center-align white-text">CREATE YOUR NEW RECIPE</h2>
    <form>
      <div class="row">
        <div class="field title col s12">
          <label for="title">Recipe Title:</label>
          <input type="text" name="title" placeholder="eg. Everything Meaty Pizza" v-model="title">
        </div>
      </div>
      <div class="row">
        <div class="field add-image-url col s12">
          <label for="image-url">Image URL:</label>
          <input type="text" name="title" placeholder="Paste you image link here..." v-model="imageURL">
        </div>
      </div>
      <div class="row" @keydown.enter.prevent="addIngre">
        <div class="field col s5 add-ingredient">
          <label for="ingredient">Ingredient:</label>
          <input type="text" ref="ingredient" placeholder="eg. Mozzeralla Cheese" name="title" v-model="ingreVal"> 
        </div>
        <div class="field col s2">
          <label for="measure">Quantity:</label>
          <input type="text" name="title" placeholder="eg. 200" v-model="ingreQty"> 
        </div>
        <div class="field col s5">
          <label for="measure">Measure:</label>
          <input type="text" name="title" placeholder="eg. grams" v-model="ingreMeas"> 
        </div>
      </div>
      <div class="row">
        <div class="field col s12" @keydown.tab.prevent="addInstruct">
            <label for="instrunctions">Instrunctions:</label>
            <textarea id="instrunctions" ref="instrunctions" class="materialize-textarea" placeholder=" eg. Start by spreading the tomato paste over pizza base"  v-model="instruckVal"></textarea>
        </div>
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <button @click.prevent="addRecipe" class="waves-effect waves-light btn-large teal"><i class="material-icons left">cloud</i>Add Recipe</button>
      </div>
    </form>
    </div>
    <!-- Preview Ingredients -->
    <div class="card preview-ingredients" v-if="ingredients.length > 0">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4 class="teal-text">Edit Ingredients</h4>
        </li>
        <li class="collection-item" v-for="(ingredient, index) in ingredients" :key="index">
          <div class="row ingredient-edit-row">
              <div class="field col s4 add-ingredient">
                <label for="ingredient">Ingredient</label>
                <input type="text" name="title" v-model="ingredients[index].name"> 
              </div>
              <div class="field col s2">
                <label for="measure">Quantity</label>
                <input type="text" name="title" v-model="ingredients[index].qty"> 
              </div>
              <div class="field col s4">
                <label for="measure">Measure</label>
                <input type="text" name="title" v-model="ingredients[index].measure"> 
              </div>
            <a href="#!" class="secondary-content col s2"><i  class="material-icons">delete</i></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- Preview Instructions -->
    <div class="card" v-if="instrunctions.length > 0">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4 class="teal-text">Edit Instructions</h4>
        </li>
        <li class="collection-item avatar" v-for="(instruckt, index) in instrunctions" :key="index">
          <div class="row instructions-edit-row">
            <div class="field col s1">
              <i class="circle circle-icon teal">{{ index + 1 }}</i>
            </div>
            <div class="field col s9">
              <label for="instrunctionsEdit">Instrunctions:</label>
              <textarea id="instrunctionsEdit" ref="instrunctionsEdit"  v-model="instrunctions[index]"></textarea>
            </div>
            <a href="#!" class="secondary-content col s2"><i  class="material-icons">delete</i></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- class="materialize-textarea" -->
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
      ingreQty: null,
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
      if(this.ingreVal && this.ingreQty && this.ingreMeas){
        this.ingredients.push({name: this.ingreVal, qty: this.ingreQty, measure: this.ingreMeas})
        this.ingreVal = null
        this.ingreQty = null
        this.ingreMeas = null
        console.log(this.$refs)
        this.$refs.ingredient.focus()
        this.feedback = null
      }else{
        this.feedback = 'Please make sure you have completed both fields before pressing enter.'
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
  font-size: 2.5em;
  margin: 0 auto;
  padding: 10px;
  background-color: #009688;
  border: 1px solid #009688;
  /* box-shadow: 0px 2px 12px 0px rgba(121, 121, 121, 0.507); */
}
label {
  font-size: 1em;
}

.container {
  margin-top: 60px;
}

.card new-recipe{
  padding: 20px;
  padding-bottom: 0;
}

.card form{
  padding: 50px;
}

.btn-large {
  margin-top: 10px;
}

.ingredient-edit-row {
  margin-bottom: 0;
}
.ingredient-edit-row a{
  text-align: center;
  margin-top: 1em;
}

.ingredient-edit-row a i{
  font-size: 3em;
}

.instructions-edit-row {
  margin-bottom: 0;
}

.instructions-edit-row .circle-icon{
  text-align: center;
  margin-top: 1em;
}

.instructions-edit-row textarea {
  border: 1px solid#009688;
  outline-color: #009688;
  margin-top: 5px;
}

.instructions-edit-row a {
  text-align: center;
  margin-top: 1em;
}

.instructions-edit-row a i{
  font-size: 3em;
}

</style>

