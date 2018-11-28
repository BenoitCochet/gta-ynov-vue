<template>
    <div class="container-fluid" id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>
 
<script>
    var db = new PouchDB('employes');
    import router from "./router"
     var employe = {};
     var managerAccount= {
                    username: "manager",
                    password: "manager"
                };
    console.log(managerAccount);
    db.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      for(var empl in result.rows){
        employe[empl] = {username:result.rows[empl].doc.nom,password:result.rows[empl].doc.nom,Id:result.rows[empl].doc._id}; 
      }
    }).catch(function (err) {
      console.log(err);
    });
    export default {
        name: 'App',
        router,
        data() {
            return {
                authenticated: false,
                managerAccount: managerAccount,
                employeAccount: employe
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        margin: auto;
    }
</style>