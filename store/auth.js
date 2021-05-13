import {CONSTANTS} from '@/helpers/constants'
export const state = () => ({
    user:null,
    token:null,
    name:null,
    authenticated:false
})


export const mutations = {

    SET_USER(state, payload) {
        state.user = payload
    },
    SET_LOGIN_TRUE(state, payload){
        state.authenticated = payload
    },
    SET_TOKEN(state, payload){
        state.token = payload
    },
}
export const getters = {
   

}

export const actions = {
 
    register({commit}, credentials){
       return this.$axios.post(`auth/signup`,credentials).then(response => {
      })
    },
    login({commit}, credentials){
        return  this.$axios.post(`auth/signin`,credentials).then(response => {
            console.log(response.data)
            let {user, token} = response.data
           
            response.data.authenticated = true
            this.$axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${token}`;
    
              localStorage.setItem("artisans_data_store", JSON.stringify(response.data));
              this.$router.push("/dashboard");


            let authenticated = true
            commit("SET_LOGIN_TRUE", authenticated);
            commit("SET_USER", user)
            commit("SET_TOKEN", token)
        })
    },

    checkLogin({commit}){
        try {
       
            const local_item_name = CONSTANTS.AUTH_LOCAL_KEY
            const localStorageItem = localStorage.getItem(local_item_name)
            if(localStorageItem) {
                let appStorage = JSON.parse(localStorageItem);
                let auth_state = appStorage.authenticated
                let user = appStorage.user
                commit("SET_LOGIN_TRUE", auth_state )
                commit("SET_USER", user)
              }
        }catch(exceeption){
            console.log(exceeption)
        }
    },
    logout(){
        try{
            const local_item_name = CONSTANTS.AUTH_LOCAL_KEY
            localStorage.removeItem(local_item_name);
            this.$router.push("/");
            window.location.reload(true)
        }catch(exceeption){
            console.log(exceeption)
            this.$router.push("/");
            window.location.reload(true)
        }
    },
}


  