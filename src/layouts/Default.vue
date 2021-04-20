<template>
  <v-app id="inspire">
    <!--Drawer Left-->
    <v-navigation-drawer app v-model="left" left width="300">
      <v-list dense>
      </v-list>
    </v-navigation-drawer>
    <!--Drawer Right-->
    <v-navigation-drawer app v-model="right" fixed right temporary width="300">
      <v-list dense>
        <Auth />
      </v-list>
    </v-navigation-drawer>

    <!--Navbar-->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="left = !left"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
       <router-link :to="{ name: 'Home' }">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn plain v-if="!loggedIn" @click.stop="right = !right"><v-icon>mdi-login</v-icon>Login</v-btn>
      
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- Footer -->
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Auth from '../components/auth/Auth.vue'
export default {
  name: 'App',

  components: {
    Auth
  },
  data(){
    return{
      right: null,
      right: false,
      left: null,
      left: false,
      loggedIn:false,
    }
  },
};
</script>
<style >
.removeLine{
    text-decoration: none;
    color: grey;
 }
 span:hover {
  cursor: pointer;
  color: grey;
}
</style>
