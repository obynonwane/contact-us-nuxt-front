<template>
    <v-app>
        <v-main>
            <v-row>
                <v-col >
                     <v-alert type="success"  dismissible elevation="19"  border="top" >Success: Account Verification link has been sent to your email</v-alert>

                    <v-card
                         elevation="2"
                         loading
                         class="mx-auto"
                         max-width="600"
                    >
                         <v-img
                        :lazy-src="require('@/assets/worker.png')"
                        max-height="400"
                        max-width="400"
                        :src="require('@/assets/worker.png')">
                        </v-img>
                        <v-card-title>Nigeria's Top Services Connector</v-card-title>
                        </v-img>

                  

                        <v-card-text class="text--primary">
                        <div> We are glad you came</div>
                        </v-card-text>

                        <v-card-actions>
                        <!-- <v-btn color="orange" text>Back Home</v-btn> -->
                        <nuxt-link  to="/">Home</nuxt-link>

                        </v-card-actions>
                    </v-card>
                    <!-- <v-card style="width:800px; margin:0 auto;"
                    elevation="2"
                    loading
                    >
                    
                     <br>
                     <br>
                    </v-card> -->
                    
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script>
import Swal from 'sweetalert2'
export default {    

    mounted(){
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Account Created Successfully',
            showConfirmButton: false,
            timer: 3000
        })
    }
}
</script>