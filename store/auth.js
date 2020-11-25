import {CONSTANTS} from '@/helpers/constants'
export const state = () => ({
    user:null,
    token:null,
    authenticated:false,
    list:[{name:'obinna', id:'bios@yahoo.com'},{name:"Ifunaya", id:'ify@yahoo.com'}],
    name:null,
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
           

            this.$axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${token}`;
    
              localStorage.setItem("artisans_data_store", JSON.stringify(response.data));
              this.$router.push("/dashboard");


            let loginStatus = true;
            commit("SET_LOGIN_TRUE", loginStatus);
            commit("SET_USER", user)
            commit("SET_TOKEN", token)
        })
    },
    getLocalStorage({commit}){
        let token;
        const local_item_name = CONSTANTS.AUTH_LOCAL_KEY
        const localStorageItem = localStorage.getItem(local_item_name)
      
        if(localStorageItem) {
          let appStorage = JSON.parse(localStorageItem);
          token = appStorage.token
          // console.log("token",token)
        }
    }
}


  