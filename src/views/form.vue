<template>
  <div>
    <b v-for="type in types" :key="type">
      <b-col ><label class="label" :for="`type-${type}`"> {{ type }}:</label></b-col>
      <b-col ><b-form-input size="lg" :id="`type-${type}`"></b-form-input></b-col>
    </b>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: [
        'Date de naissance', 'Mail', 'Adresse', 'Téléphone'
      ]
    }
  }
}
</script>

<style>
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