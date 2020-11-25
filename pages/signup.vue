<template style="color:#000000">
<v-app>
    <v-main>
        <MenuBar />
        <v-container>
            
                    
            <v-row class="text-center" style="margin-top:50px">
            
                <v-col xs="12"  sm="6" md="6" lg="6">
                    <v-alert type="error"  dismissible elevation="19"  border="top" v-if="showValidationError">{{validationError}}</v-alert>
                    <v-card style="padding:20px;width:100%">
                    <p class="header-text text-center">Registration</p>
                      <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        >
                        <v-text-field
                        v-model="formdata.first_name"
                        :rules="nameRules"
                        label="First Name"
                        prepend-inner-icon="mdi-account"
                        required
                        solo
                        ></v-text-field>

                        <v-text-field
                        v-model="formdata.surname"
                        prepend-inner-icon="mdi-account"
                        :rules="surnameRules"
                        label="Surname"
                        required
                        solo
                        ></v-text-field>

                        <v-text-field
                        v-model="formdata.email"
                        :rules="emailRules"
                        label="E-mail"
                        prepend-inner-icon="mdi-email"
                        required
                        solo
                        ></v-text-field>

                        <v-text-field
                        v-model="formdata.phone"
                        :counter="11"
                        :rules="phoneRules"
                        label="Phone"
                        prepend-inner-icon="mdi-phone"
                        required
                        solo
                        ></v-text-field>

                    

                        <v-text-field 
                        label="Password" 
                        :rules="passwordRules"
                        v-model="formdata.password"
                        solo
                        :type="showPassword ? 'text' : 'password'"
                        prepend-inner-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"/>

                        <v-text-field 
                        label="Confirm Password" 
                        v-model="formdata.confirm_password"
                        :rules="confirmPasswordRules"
                        solo
                        :type="showPassword ? 'text' : 'password'"
                      
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"/>

                        <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Terms and Conditions?"
                        required
                        ></v-checkbox>

                        <v-btn
                        :loading="submitting" 
                        :disabled="submitting || !valid"
                        color="primary"
                        class="sub-btn mr-4"
                        @click="submit"
                        >
                        Sign-up
                        </v-btn>


                    </v-form>

                    <section style="margin-top:20px">
                        <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
                    </section>
                    </v-card>
                </v-col>

                
                <v-spacer></v-spacer>
                <v-col xs="12"  sm="6" md="4" lg="4">
                    <v-img
                    :lazy-src="require('@/assets/worker2.png')"
                  
                    :src="require('@/assets/worker2.png')">
                </v-img>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import MenuBar from '@/components/menu'



import { mapMutations } from'vuex'
  export default {

      data() {
          return {
           
            submitting:false,
            validationError:null,
            showValidationError:false,
            showRegAleert:false,
            formdata:{
                first_name: '',
                surname:'',
                email: '',
                phone:'',
                role:'CUSTOMER'
            },
            showPassword:false,
            valid: true,
            
            nameRules: [
                v => !!v || 'First name is required',
            ],
           
            surnameRules: [
                v => !!v || 'Surname is required',
            ],
            
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            
            phoneRules: [
                v => !!v || 'Phone is required',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ],
            confirmPasswordRules: [
                v => !!v || 'Confirm Password is required',
            ],
            select: null,
            checkbox: false,
          }
      },


    methods: {
    
        submit(){
            
            if (this.$refs.form.validate()) {
            this.submitting = true
            this.$store.dispatch('auth/register',this.formdata)
            .then((res) =>{
                this.$router.push('/account-create-success')
                this.reset()
                this.submitting = false
                
                
            }).catch(err => {
                
                this.validationError = err.response.data.error
                if(this.validationError) this.showValidationError = true
                this.submitting = false
            })
          }

          
        },

        reset () {
            this.$refs.form.reset()
        },
    },
    components:{
        MenuBar
    }
  }
</script>

<style  scoped>
    .header-text{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 42px;
        color: #2F80ED;
    }

    .sub-btn{
        width: 330px;
        height: 42px;
        background: #2F80ED;
        border-radius: 5px;
    }
</style>