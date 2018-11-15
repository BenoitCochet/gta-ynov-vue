<template>
  <b-card no-body>
	  <b-tabs pills card>
	    <b-tab title="Fiche Salarié" active>
        <label style='float:left;'>Date de naissance: {{ date }}</label>
	      <b-form-input v-model="date"
                  type="text"
                  placeholder="Date de naissance"></b-form-input></br>
        <label style='float:left;'>Mail: {{ mail }}</label>
        <b-form-input v-model="mail"
                  type="text"
                  placeholder="Mail"></b-form-input></br>
        <label style='float:left;'>Adresse: {{ addr }}</label>
        <b-form-input v-model="addr"
                  type="text"
                  placeholder="Adresse"></b-form-input></br>
        <label style='float:left;'>Téléphone: {{ tel }}</label>
        <b-form-input v-model="tel"
                  type="text"
                  placeholder="Téléphone"></b-form-input>
                            
                  
	    </b-tab>
	    <b-tab title="Planning">
          <Calendar></Calendar>
	    </b-tab>
      <b-tab title="Tableau de bord">
        Tab Contents 2
      </b-tab>
	  </b-tabs>
	</b-card>
</template>
<script>
import Calendar from './Calendar.vue'

export default {
  name:'Onglet',
  data () {
    return {
      date: '',
      mail: '',
      addr: '',
      tel: ''
    }
  },
  components : {Calendar}
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
