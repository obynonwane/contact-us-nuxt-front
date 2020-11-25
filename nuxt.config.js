const pkg = require('./package')
const webpack = require('webpack')
import colors from 'vuetify/es5/util/colors'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {


    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - ARTISANS.NG',
        title: 'ARTISANS.NG',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
        ]
      },
    
      // Global CSS (https://go.nuxtjs.dev/config-css)
      css: [ ],
    
      // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
      { ssr: false, src: '@/plugins/axios' },
    ],
    
      // Auto import components (https://go.nuxtjs.dev/config-components)
      components: true,
    
      // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
      buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
      ],
    
      // Modules (https://go.nuxtjs.dev/config-modules)
      modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/toast',
        'nuxt-material-design-icons-iconfont',
        'nuxt-sweetalert2'
      ],

      toast: {
        position: 'top-right',
        register: [ // Register custom toasts
          {
            name: 'my-error',
            message: 'Oops...Something went wrong',
            options: {
              type: 'error'
            }
          }
        ]
    },
    
      // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
      vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
          dark: false,
          themes: {
            dark: {
              primary: colors.blue.darken2,
              accent: colors.grey.darken3,
              secondary: colors.amber.darken3,
              info: colors.teal.lighten1,
              warning: colors.amber.base,
              error: colors.deepOrange.accent4,
              success: colors.green.accent3
            }
          }
        }
      },
    
      // Build Configuration (https://go.nuxtjs.dev/config-build)
      build: {
      },

    /*
    ** Axios module configuration
    */
    axios: {
      // See https://github.com/nuxt-community/axios-module#options
          baseURL: process.env.NODE_ENV === "production" ? "https://api.anscims.com/api/v1/": 'http://127.0.0.1:2000/api/v1/'
          // baseURL: process.env.NODE_ENV === "production" ? 'https://api.jtb.gov.ng:8891/api': 'https://api.jtb.gov.ng:8891/api'
          // baseURL: process.env.NODE_ENV === "production" ? "https://api.anscims.com/api/v1": 'http://anscims.test/api/v1'
    },
}