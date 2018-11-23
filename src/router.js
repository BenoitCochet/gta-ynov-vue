import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import EmployeComponent from "./views/employe.vue"
import ManagerComponent from "./views/manager.vue"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/employe",
            name: "employe",
            component: EmployeComponent
        },
        {
            path: "/manager",
            name: "manager",
            component: ManagerComponent
        }
    ]
})