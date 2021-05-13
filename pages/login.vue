<template style="color:#000000">
  <v-app>
    <v-main>
      <MenuBar />
      <v-container>
        <v-row class="text-center" style="margin-top:50px">
          <v-col xs="12" sm="6" md="6" lg="6">
            <v-card style="padding:20px;width:100%">
              <v-alert
                type="error"
                dismissible
                elevation="19"
                border="top"
                v-if="showValidationError"
              >{{validationError}}</v-alert>
              <p class="header-text text-center">Login</p>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="formdata.email"
                  :rules="emailRules"
                  label="E-mail"
                  prepend-inner-icon="mdi-email"
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
                  @click:append="showPassword = !showPassword"
                />

                <v-btn
                  :loading="submitting"
                  :disabled="submitting || !valid"
                  color="primary"
                  class="sub-btn mr-4"
                  @click="submit"
                >Login</v-btn>
              </v-form>

              <section style="margin-top:20px">
                <p>
                  Don't have an account?
                  <nuxt-link to="/signup">Sign-up</nuxt-link>
                </p>
              </section>
            </v-card>
          </v-col>

          <v-spacer></v-spacer>
          <v-col xs="12" sm="6" md="4" lg="4">
            <v-img
              :lazy-src="require('@/assets/worker2.png')"
              :src="require('@/assets/worker2.png')"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from "@/components/menu";
export default {
  data() {
    return {
      submitting: false,

      validationError: null,
      showValidationError: false,
      showRegAleert: false,

      formdata: {
        email: "",
        password: ""
      },
      showPassword: false,
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"]
    };
  },

  methods: {
    submit() {
      this.showValidationError = false;
      if (this.$refs.form.validate()) {
        this.submitting = true;
        this.$store
          .dispatch("auth/login", this.formdata)
          .then(response => {
            this.submitting = false;
          })
          .catch(err => {
            this.validationError = err.response.data.error;
            if (this.validationError) this.showValidationError = true;
            this.submitting = false;
          });
      }
    }
  },
  mounted() {
    ///   this.$axios.post(`GetTokenID`,  {email:'admin@irs.an.gov.ng', password:'anscims_password1', clientname:'jtb'})
    //   .then(response => {
    //       console.log(response)
    //   })
  },
  components: {
    MenuBar
  }
};
</script>

<style  scoped>
.header-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #2f80ed;
}

.sub-btn {
  width: 330px;
  height: 42px;
  background: #2f80ed;
  border-radius: 5px;
}
</style>