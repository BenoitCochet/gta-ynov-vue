<template>

	  <b-tabs pills card>
	    <b-tab title="Gestion salarié" active>
          <Form></Form>       
	    </b-tab>
	    <b-tab title="Planning">
          <Calendar></Calendar>
	    </b-tab> 
      <b-tab title="Tableau de bord">
        <label>Compteur d'heure</label>
        <b-tabs>
          <b-tab title="Journée" active>
            <br>I'm the first fading tab
          </b-tab>
          <b-tab title="Semaine" >
            <br>I'm the second tab content
          </b-tab>
          <b-tab title="Année">
            <br>Disabled tab!
          </b-tab>
        </b-tabs>
      </b-tab>
	  </b-tabs>
</template>
<script>
import Calendar from './Calendar.vue'
import Form from '../views/gestionsalarie.vue'

export default {
  name:'Onglet',
  data () {
    return {
    }
  },
  components : {Calendar, Form}
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
/*
@media(max-width:767px){
  .form-control{
    width: 200px !important;
  }
}

@media(min-width:768px){
  .form-control{
    width: 200px !important;
  }
}

@media(min-width:992px){
  .form-control{
    width: 200px !important;
  }
}

@media(min-width:1200px){
  .form-control{
    width: 100% !important;
  }
}
*/
</style>
