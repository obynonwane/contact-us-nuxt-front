<template>
     <v-app-bar color="#ffffff">
           <nuxt-link to="/"><v-toolbar-title class="app-name">ARTISANSobinna.NG</v-toolbar-title></nuxt-link>
           <v-spacer></v-spacer>
           <section style="margin-right:80px">
            <v-btn text rounded class="menu-item">About Us</v-btn>
            <v-btn text rounded class="menu-item">Contact Us</v-btn>
            <nuxt-link to="/login"><v-btn text rounded class="menu-item">Login</v-btn></nuxt-link>
            <nuxt-link to="/signup"><v-btn color="primary" style="margin-right:20px">Sign Up</v-btn></nuxt-link>
            <!-- <v-icon medium color="primary darken-2"> mdi-bell </v-icon>
            <v-badge overlap dot color="red"></v-badge> -->


            <template class="text-center">
              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon medium v-bind="attrs"   v-on="on" color="primary darken-2"> mdi-bell </v-icon>
                  <v-badge overlap dot color="red"></v-badge>
                </template>

                <v-card>
                  <v-list>
                    <v-list-item>
                      <v-list-item-avatar>
                        <img
                          src="https://cdn.vuetifyjs.com/images/john.jpg"
                          alt="John"
                        >
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                        <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-btn
                          :class="fav ? 'red--text' : ''"
                          icon
                          @click="fav = !fav"
                        >
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list>
                    <v-list-item>
                      <v-list-item-action>
                        <v-switch
                          v-model="message"
                          color="purple"
                        ></v-switch>
                      </v-list-item-action>
                      <v-list-item-title>Enable messages</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-action>
                        <v-switch
                          v-model="hints"
                          color="purple"
                        ></v-switch>
                      </v-list-item-action>
                      <v-list-item-title>Enable hints</v-list-item-title>
                    </v-list-item>
                  </v-list>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="primary"
                      text
                      @click="menu = false"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
           </section>
         </v-app-bar>
</template>

<script>
export default {
   data(){
     return{
       fav: true,
       menu: false,
       message: false,
       hints: true,

        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
     }
   },
  components: {
    
  }
}
</script>

<style scoped>
.app-name{
  color:#000000;
  margin-left:80px;
}
.menu-item {
  color:#000000
}
</style>