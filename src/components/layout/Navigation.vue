<template>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
     
    </a>

    <a role="button" class="navbar-burger" :class="{'is-active': isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}" >
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Home
      </router-link>

      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
      <template v-if="user">
        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
         {{ user.displayName || user.email }}
        </a>

        <div class="navbar-dropdown">
          <router-link  class="navbar-item" to="/dashboard">
            Inicio
          </router-link>
          <a class="navbar-item" @click.prevent="logout">
            cerrar sesion
          </a>
          
        </div>
      </div>
      </template>
      <template v-else>
        <div class="buttons">
          <router-link class="button is-primary" to="/registro">
            <strong>Registrarme</strong>
          </router-link>
          <router-link class="button is-light" to="/login">
            Iniciar Sesion
          </router-link>
        </div>
      </template>
        
      </div>
    </div>
  </div>
</nav>
</template>


<script>
import firebase from 'firebase'
export default {
  data (){
    return {
      isOpen: false,
      user: null
    }
  },
    methods: {
      toggleMenu(){
        const status = !this.isOpen
        this.isOpen = status
      },
      logout(){
        firebase.auth().signOut().then(()=>{
          this.$router.push({name: 'login'})
        })
      }
    },
    created () {
      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          this.user = user 
        } else {
          this.user =null
        }
      })
    }
}
</script>