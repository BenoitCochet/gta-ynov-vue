<template>
  <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="fiche" role="tabpanel" aria-labelledby="projet-tab">
          fiche
      </div>
      <div class="tab-pane fade" id="planning" role="tabpanel" aria-labelledby="periode-tab">
          planning
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
