<template>
    <v-app>
        <v-main>
            <v-row>
                <v-col>
                 <h1 v-if="authenticated">food</h1>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    computed: {
      authenticated(){
          return this.$store.state.auth.authenticated
      }
      
    },

    methods:{
   
    }
    ,
    mounted(){
        this.$store.dispatch('auth/checkLogin');
    }
}
</script>