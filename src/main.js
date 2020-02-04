import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import 'firebase/firestore';
import { firestorePlugin }  from 'vuefire'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

const firebaseApp = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID,
};
firebase.initializeApp(firebaseApp);


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
