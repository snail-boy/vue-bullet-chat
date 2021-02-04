import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
// require('fundebug-revideo');
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "c02071e2d19b0a2a7d6bcf476e1866d75fa4900c85f6f44d66408bd3e28a8855"
fundebugVue(fundebug, Vue);

const str = navigator.userAgent.toLowerCase()
const ver = str.match(/cpu iphone os (.*?) like mac os/)

if (!ver) { // 非IOS系统
            // 引入fastclick 做相关处理
  fastClick.attach(document.body)
} else {
  if (parseInt(ver[1]) < 11) {
    // 引入fastclick 做相关处理
    fastClick.attach(document.body)
  }
}

fundebug.test()


Vue.config.productionTip = false

import Utils from "./views/utils";

Vue.prototype.utils = new Utils()

// import VConsole from 'vconsole'
// let vConsole = new VConsole()

import './views/index.css'

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
