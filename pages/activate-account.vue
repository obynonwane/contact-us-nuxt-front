<template>
    <v-app>
        <v-main>
            <v-row>
                <v-col >
                    

                    <v-card
                         elevation="2"
                         loading
                         class="mx-auto"
                         max-width="600"
                         v-if="deactivated"
                    >
                        <v-card-text class="text--primary">
                        <div> Setting up your account, please wait ......</div>
                        </v-card-text>

                    </v-card>

                    
                        <v-card
                         elevation="2"
                         class="mx-auto"
                         max-width="600"
                         v-if="activated"
                        >
                           <v-btn
                            class="ma-2"
                            color="primary"
                            dark
                        >
                            Account Activated Successfully
                            <v-icon
                            success
                            right
                            >
                            mdi-checkbox-marked-circle
                            </v-icon>
                        </v-btn>
                       
                       
                        </v-img>


                        <v-card-actions>
                       
                        <nuxt-link  to="/login">Login Here</nuxt-link>

                        </v-card-actions>
                    </v-card>
                    
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>
<script>
export default {

    data(){
        return {
            activated:false,
            deactivated:true,
            paramsModel:{
                verification_token:'',
                salt:''
            }
        }
    },
    watch:{
        activated(val){
          
          if(val){
               setTimeout(() =>{
                this.$router.push('/login')
            }, 3000)
          }
           
        }
    },
    methods:{
        activateAccount() {
             this.$axios.get(`auth/activate-account`,{params:this.paramsModel})
             .then(response => {
                
                this.activated = true
                this.deactivated = false
             })
             .catch(exception => {
                 console.log(exception)
             })
        },

        getRouteParams(){
            this.paramsModel.verification_token = this.$route.query.verification_token
            this.paramsModel.salt = this.$route.query.salt
        }
    },
    mounted(){
        console.log(this.$route.query.salt)
        this.getRouteParams()
        console.log(this.paramsModel)
        this.activateAccount()
    }
}
</script>