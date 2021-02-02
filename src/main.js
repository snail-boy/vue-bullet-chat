import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Utils from "./lib/utils";

Vue.prototype.utils = new Utils()

// import VConsole from 'vconsole'
// let vConsole = new VConsole()

import './lib/index.css'

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
