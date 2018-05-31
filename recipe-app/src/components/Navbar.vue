<template>
  <div class="navbar">
    <nav class="nav-extended cyan darken-4">
      <div class="nav-content">
        <router-link to="/">
          <span class="nav-title">My Recipe Book</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab waves-effect waves-light pulse teal">
          <router-link :to="{ name: 'AddRecipe' }" >
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.navbar nav {
  padding: 0 20px;
}
</style>
