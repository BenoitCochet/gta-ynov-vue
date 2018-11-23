<template>
	<div>
		<b-row>Ajouter un créneau : 
			Titre : <input style="margin-right: 10px" v-model="title"></input>
			Date début : <datetime style="margin-right: 10px" type="datetime" v-model="datedeb"></datetime>
			Date fin : <datetime style="margin-right: 10px" type="datetime" v-model="datefin"></datetime>
			<button v-on:click="ajout(title, datedeb, datefin)" style="margin-left: 15px">Valider</button>
		</b-row></br>
		<full-calendar :events="events" :config="config"></full-calendar>
	</div>
</template>
<script>
	import {FullCalendar} from 'vue-full-calendar'
	import 'fullcalendar/dist/fullcalendar.css'
	import {Datetime} from 'vue-datetime'
	import 'vue-datetime/dist/vue-datetime.css'

	var db = new PouchDB('calendar');

	db.changes().on('change', function() {
		console.log('Changes');
	});

	var events2 = [];

	db.allDocs({
	  include_docs: true,
	  attachments: true
	}).then(function (result) {
	  for(var i=0;i<result.rows.length;i++){
	  	events2[i] = {"title":result.rows[i].doc.title,"start":result.rows[i].doc.start,"end":result.rows[i].doc.end};
	  }
	}).catch(function (err) {
	  console.log(err);
	});
	
	export default {
	  name: 'Calendar',
	  data() {
	    return {
	      datedeb : "",
	      datefin : "",
	      title: "",
	      events: events2,
	      config: {
	      	height : "auto"
	      }
	    }
	  },
	  methods:{
	  	ajout: function(title, datedeb, datefin){
	  		db.allDocs({
			  include_docs: false,
			  attachments: true
			}).then(function (result) {
			  var n = result.rows.length+1;
			  var id = 'creneau'+n;
			  console.log(id)
			  db.put({
			    _id: id,
			    title  : title,
			    start  : datedeb.split(".")[0],
			    end    : datefin.split(".")[0]
			  });
			  db.get('creneau'+n);
			}).catch(function (err) {
			  console.log(err);
			});
	  		console.log(datefin);
	  	}
	  },
	  components : { FullCalendar, Datetime}
	}
	
</script>

<style type="text/css">
@media(max-width:767px){
  .label{
    font-size: 25px;
  }
  .fc-view-container{
    font-size: 10px;
  }
  #calendar{
  	font-size: 12px;
  }
  .fc-axis{
  	width: 30px !important;
  }
  .fc-center{
  	margin-top: 15px;
  }
  h2{
  	font-size: 18px;
  }
}
</style>