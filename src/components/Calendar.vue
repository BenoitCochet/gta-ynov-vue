<template>
	<full-calendar :events="events"></full-calendar>
</template>
<script>
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
	      ]
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