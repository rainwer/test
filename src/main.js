// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(iView)
Vue.use(axios, VueAxios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
