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
            <label for="instructions">Instrunctions:</label>
            <textarea id="instructions" ref="instructions" class="materialize-textarea" placeholder=" eg. Start by spreading the tomato paste over pizza base"  v-model="instruckVal"></textarea>
        </div>
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
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
            <a @click="deleteIngredient(index)" class="secondary-content col s2 waves-effect waves-light"><i class="material-icons delete">delete</i></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- Preview Instructions -->
    <div class="card" v-if="instructions.length > 0">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4 class="teal-text">Edit Instructions</h4>
        </li>
        <li class="collection-item avatar" v-for="(instruckt, index) in instructions" :key="index">
          <div class="row instructions-edit-row">
            <div class="field col s1">
              <i class="circle circle-icon teal">{{ index + 1 }}</i>
            </div>
            <div class="field col s9">
              <label for="instrunctionsEdit">Instrunctions:</label>
              <textarea id="instrunctionsEdit" ref="instructionsEdit"  v-model="instructions[index]"></textarea>
            </div>
            <a @click="deleteInstruction(index)" class="secondary-content col s2"><i  class="material-icons">delete</i></a>
          </div>
        </li>
      </ul>
    </div>
    <div class="card">
      <div class="field center-align">
        <button @click.prevent="addRecipe" class="waves-effect waves-light btn-large teal"><i class="material-icons left">cloud</i>Add Recipe</button>
        <button @click.prevent="cancel"  class="waves-effect waves-light btn-large red"><i class="material-icons left">close</i>Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: 'AddRecipe',
  data() {
    return {
      dbCategories: [],
      title: null,
      slug: null,
      imageURL: 'https://lh4.googleusercontent.com/iEFPZ_Wj6mtbGAOV0rwZZkHjVG2ICr3xuIHfOnIbemh0HqT2dJiAezE2fZ8TWeFpjrj23_uH95rSvby5uw1Y=w1919-h948-rw',
      ingredients: [],
      instructions: [],
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
        this.$refs.ingredient.focus()
        this.feedback = null
      }else{
        this.feedback = 'Please make sure you have completed both fields before pressing enter.'
      }
    },
    addInstruct(){
      if(this.instruckVal){
        this.instructions.push(this.instruckVal)
        this.instruckVal = null
        this.$refs.instructions.focus()
      }
    },
    addRecipe(){
      if(this.title) {
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        db.collection('recipes').add({
          title: this.title,
          slug: this.slug,
          imageURL: this.imageURL,
          ingredients: this.ingredients,
          instructions: this.instructions
        }).then(() => {
          this.$router.push('/')
        }).catch(err => {
          console.log(err)
          this.feedback = err
        })
        this.feedback = null
      } else {
        this.feedback = 'Please enter a recipe title to continue'
      }
      
    },
    cancel(){
      if(confirm('Are you sure you want to cancel?')){
        this.$router.push("/")
      }
    },
    deleteIngredient(ind){
      this.ingredients.splice(ind, 1)
    },
    deleteInstruction(ind){
      this.instrunctions.splice(ind, 1)
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
  margin: 10px 0 10px 0;
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

.ingredient-edit-row a i:hover{
  font-size: 3.3em;
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

.instructions-edit-row a i:hover{
  font-size: 3.3em;
}
</style>

