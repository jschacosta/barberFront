import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'
import vco from "v-click-outside"
import router from './router/index'
import Scrollspy from 'vue2-scrollspy';
import VueSweetalert2 from 'vue-sweetalert2';
import axios from "axios";
// import axios from 'axios';


import "../src/design/app.scss";

import store from '@/state/store'

import App from './App.vue'

// import { initFirebaseBackend } from './authUtils'
import i18n from './i18n'

// import { configureFakeBackend } from './helpers/fake-backend';

import tinymce from 'vue-tinymce-editor'

// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_APIKEY,
//   authDomain: process.env.VUE_APP_AUTHDOMAIN,
//   databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
//   projectId: process.env.VUE_APP_PROJECTId,
//   storageBucket: process.env.VUE_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
//   appId: process.env.VUE_APP_APPId,
//   measurementId: process.env.VUE_APP_MEASUREMENTID
// };

// if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
//   initFirebaseBackend(firebaseConfig);
// } else {
//   configureFakeBackend();
// }

Vue.component('tinymce', tinymce)
Vue.use(VueRouter)
Vue.use(vco)
Vue.use(Scrollspy);
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(require('vue-chartist'))
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places',
  },
  installComponents: true
})


const access_token = localStorage.getItem('access_token');
if (access_token) {
  axios.defaults.headers.common['Authorization'] = access_token;
}
// AXIOS INTERCEPTOR PARA CHEQUEAR VALIDEZ DEL TOKEN(SI ES 401 REDIRIGE AL LOGIN)
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // CHEQUEA LOS STATUS DE ERROR
    console.log(error)
    if (error.response.status != 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    } else {
      store.dispatch('users/refreshToken', {
        refresh_token: localStorage.getItem('refresh_token')
      }).then(res => {
        localStorage.setItem('access_token', res.access_token);
        window.location.href = window.location.origin + '/';
      });

    }
  }
);



Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')