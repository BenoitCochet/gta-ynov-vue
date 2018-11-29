<template>
  <div>
    <b>
      <b-col ><label class="label" :for="nom"> Nom:</label></b-col>
      <b-col ><b-form-input size="lg" :id="nom" v-model="nom"></b-form-input></b-col>
    </b>
    <b>
      <b-col ><label class="label" :for="prenom"> Prénom:</label></b-col>
      <b-col ><b-form-input size="lg" :id="prenom" v-model="prenom"></b-form-input></b-col>
    </b>
    <b>
      <b-col ><label class="label" :for="datenaissance"> Date de naissance:</label></b-col>
      <b-col ><b-form-input size="lg" :id="datenaissance" v-model="datenaissance"></b-form-input></b-col>
    </b>
    <b>
      <b-col ><label class="label" :for="adresse"> Adresse:</label></b-col>
      <b-col ><b-form-input size="lg" :id="adresse" v-model="adresse"></b-form-input></b-col>
    </b>
    <b>
      <b-col ><label class="label" :for="tel"> Téléphone:</label></b-col>
      <b-col ><b-form-input size="lg" :id="tel" v-model="tel"></b-form-input></b-col>
    </b>
    <b>
      <b-col ><label class="label" :for="mail"> Mail:</label></b-col>
      <b-col ><b-form-input size="lg" :id="mail" v-model="mail"></b-form-input></b-col>
    </b>
    <b-row> <b-col><div class="form">    <button v-on:click="ajoutSalarie(nom, prenom, datenaissance, adresse, tel, mail)" style="margin-left: 15px">Valider</button></div></b-col>
    </b-row>
  </div>
</template>

<script>
 // var db = new PouchDB('employes');

    db.changes().on('change', function() {
        console.log('Changes');
    });
export default {

  data () {
    return {
      nom : "",
      prenom : "",
      datenaissance: "",
      adresse: "",
      tel: "",
      mail: ""
    }
  },
    methods:{
      ajoutSalarie: function(nom, prenom, datenaissance, adresse, tel, mail){
        db.put({
          _id: nom+prenom,
          nom  : nom,
          prenom  : prenom,
          datenaissance    : datenaissance,
          adresse :adresse,
          tel:tel,
          mail:mail
        });
        location.reload();
      }
    },
}
</script>

<style>
.form{
  float:left;
}
@media(max-width:767px){
  .label{
    font-size: 25px;
  }
  table{
    font-size: 10px;
  }
  .nav{
    font-size: 9px;
  }
  .fc-scroller{
    height: auto;
  }
}

@media(min-width:768px){
  .label{
    font-size: 25px;
  }
}

@media(min-width:992px){
  .label{
    font-size: 20px;
  }
}

@media(min-width:1200px){
}
</style>