<template>
  <div><Navbar></Navbar>
  <Onglet></Onglet></div>
</template>

<script>
  import Onglet from '../components/OngletManager.vue'
  import Navbar from '../components/NavbarManager.vue'

export default {
  name: 'app',
  components: {
    Onglet: Onglet,
    Navbar: Navbar
  },
  data () {
    return {
      msg: ''
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

body{
  background: white;
}
.navbar-toggler{
  display: none;
}
</style>
