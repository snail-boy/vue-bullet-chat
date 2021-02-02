import Vue from 'vue'
import App from './App.vue'
import Utils from "./lib/utils";

Vue.prototype.utils = new Utils()

import VConsole from 'vconsole'
let vConsole = new VConsole()


import './lib/index.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
