import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import Router from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'fullcalendar/dist/fullcalendar.css'
import FullCalendar from 'vue-full-calendar'


Vue.use(BootstrapVue)
Vue.use(FullCalendar)
new Vue({
  el: '#app',
  render: h => h(App)
})
