<template>
	<full-calendar :events="events" :config="config"></full-calendar>
</template>
<script>
	console.log("Calendrier")
	/*;*/
	  var db = new PouchDB('test');

	/*  db.put({
	    _id: '',
	    title  : 'event2',
	    start  : '2018-11-17T12:30:00',
	    end    : '2018-11-17T18:30:00'
	    
	  });*/

	  db.changes().on('change', function() {
	    console.log('Changes');
	  });
	  db.get('2018-11-16T12:30:00').then(function (doc) {
	    
	    console.log(doc);

	  }).catch(function (err) {
	    console.log(err);
	  })
	  var events2 = [];
	  var event = [
	        {
	            title  : 'event1',
	            start  : '2018-11-15',
	        },
	        {
	            title  : 'event2',
	            start  : '2018-11-16T12:30:00',
	            end    : '2018-11-16T18:30:00',
	        },
	        {
	            title  : 'event3',
	            start  : '2010-01-09T12:30:00',
	            allDay : false,
	        }, 	
	      ];
	//function getAllDocs(){
		db.allDocs({
		  include_docs: true,
		  attachments: true
		}).then(function (result) {
		  for(var i=0;i<result.rows.length;i++){
		  	events2[i] = {"title":result.rows[i].doc.title,"start":result.rows[i].doc.start};
		  }
		  console.log(events2);
		  console.log(event);
		}).catch(function (err) {
		  console.log(err);
		});
	//}
	//getAllDocs();
	import {FullCalendar} from 'vue-full-calendar'
	import 'fullcalendar/dist/fullcalendar.css'
	export default {
	  name: 'Calendar',
	  data() {
	    return {
	      events: [
	        {
	            title  : 'event1',
	            start  : '2018-11-15',
	        },
	        {
	            title  : 'event2',
	            start  : '2018-11-16T12:30:00',
	            end    : '2018-11-16T18:30:00',
	        },
	        {
	            title  : 'event3',
	            start  : '2010-01-09T12:30:00',
	            allDay : false,
	        }, 	
	      ],
	      config: {
	      	height : "auto"
	      }
	    }
	  },
	  components : { FullCalendar}
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