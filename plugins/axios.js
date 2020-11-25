import { mapGetters, mapActions } from 'vuex';
import {CONSTANTS} from '@/helpers/constants'


export default function ({ $axios, app, store } ) { 
  
  //  store.dispatch('auth/logUser', {name:'Chekwube', id:'chekwube@gmail.com'})
  let token;
  const local_item_name = CONSTANTS.AUTH_LOCAL_KEY
  const localStorageItem = localStorage.getItem(local_item_name)
  if(localStorageItem) {
    let appStorage = JSON.parse(localStorageItem);
    token = appStorage.token
    console.log("token",token)
  }
  $axios.setHeader('Content-Type', 'application/json', [
    'post'
  ])

  $axios.setHeader('Authorization',`Bearer ${token}`)
  $axios.setHeader('platform', 'WEB')
  $axios.setHeader('application_token', `$$$6746547gfhryg@ggfhdghgfdhgf^hfghds&`)
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      localStorage.removeItem('artisans_data_store')
      app.$toast.error(error.response.data.message)
      window.location = '/';
    } else {
      app.$toast.error(error.status)
    }
  })
}
