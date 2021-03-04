/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:16
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-11-24 16:11:13
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import codeH from './examples/helper/code-h.vue'
import router from './router'
import strangeComponents from './strange-components/src'
// import './style/_common.scss'

// import $ from 'jquery'
// import 'popper.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
// adminUi.theme('dark')
Vue.use(strangeComponents)

Vue.component('code-h', codeH)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
