<template>
  <v-app>
    <v-navigation-drawer
      class="lighten-5 px-3 py-3"
      v-model="drawer"
      :permanent="$vuetify.breakpoint.mdAndUp"
      v-if="$route.path != '/login'"
      app id="core-navigation-drawer" style="background-color: #0a5a97; height: 100vh; top: 0px; max-height: calc(100% - 0px); transform: translateX(0%) !important; width: 260px;"
    >
      <div class="v-navigation-drawer__content">
        <div class="v-list v-sheet v-sheet--tile theme--dark v-list--dense v-list--nav mb-0 py-0">
          <div tabindex="-1" class="v-list-item theme--dark">
            <div class="v-image__image v-image__image--cover w-100 h-100 d-none"
                 style="background-image: url(''); background-position: center center;"></div>
            <h2 class="h6  text-uppercase mb-0 cursor-pointer" @click="$router.push('/')" style="color: #fff"><span class="br1">Kibeho Sanctuary</span></h2>
          </div>
        </div>
        <hr  class="v-divider theme--light">
        <div class="v-list v-sheet v-sheet--tile theme--dark v-list--nav">
          <nuxt-link to="/admin" class="text-deco-none d-none v-list-item v-list-item--link theme--dark" tabindex="0">
            <div class="v-list-item__icon"><i aria-hidden="true"
                                              class="v-icon notranslate mdi mdi-view-dashboard theme--dark"></i></div>
            <div class="v-list-item__content">
              <div class="v-list-item__title">Dashboard</div>
              <div class="v-list-item__subtitle"></div>
            </div>
          </nuxt-link>
          <nuxt-link to="/admin/blogs"
             class="white--text text-deco-none v-list-item v-list-item--link theme--dark" tabindex="0">
            <div class="v-list-item__icon"><i aria-hidden="true"
                                              class="v-icon notranslate mdi mdi-clipboard-outline theme--dark"></i>
            </div>
            <div class="v-list-item__content">
              <div class="v-list-item__title">Event</div>
              <div class="v-list-item__subtitle"></div>
            </div>
          </nuxt-link>
          <nuxt-link to="/admin/articles"
             class="white--text text-deco-none v-list-item v-list-item--link theme--dark" tabindex="0">
            <div class="v-list-item__icon"><i aria-hidden="true"
                                              class="v-icon notranslate mdi mdi-clipboard-outline theme--dark"></i>
            </div>
            <div class="v-list-item__content">
              <div class="v-list-item__title">Event datails</div>
              <div class="v-list-item__subtitle"></div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </v-navigation-drawer>

    <v-app-bar app color="#0a5a97">
      <v-toolbar absolute right class="border-0 shadow-none" style="background-color:#0a5a97 !important;">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-toolbar>
      <div class="authentication-buttons ml-auto text-white">
        <div v-if="$auth.loggedIn">
          <!-- {{ $auth.user.email }} -->
          <v-btn icon to="/" class="logout-btn text-decoration-none h6 mr-7 " title="Logout">
            <!-- <v-icon light @click="$auth.logout()">mdi-logout</v-icon> -->
            <span class="br">Logout</span>
          </v-btn>
        </div>
        <div v-else>
          <v-btn icon to="/login" class="login-btn text-decoration-none">
            <v-icon>mdi-login</v-icon>
          </v-btn>
          <v-btn icon to="#" class="register-btn text-decoration-none d-none">
            <v-icon>mdi-account-key-outline</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "adminPanel",
    data(){
      return{
        drawer:null
      }
    }
  }
</script>

<style scoped>
  .br {
    color: #0a5a97;
    background: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    text-transform: capitalize;

  }
  /* .br1 {
    color: #0a5a97;
    background: #fff;
    padding: 20px 19px;
    border-radius: 5px;


  } */
</style>
