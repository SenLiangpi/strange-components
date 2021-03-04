/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:16
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-01-20 10:05:55
 */
import Vue from 'vue'
import Router from 'vue-router'

import button from './../examples/button.vue'
import datepicker from './../examples/datePicker.vue'
import promptBox from './../examples/strange-prompt-box.vue'
import pdf from './../examples/pdf.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   redirect: { name: 'intro' }
    // },
    {
      path: '/button',
      name: 'button',
      component: button
    },{
      path: '/datepicker',
      name: 'datepicker',
      component: datepicker
    },{
      path: '/promptBox',
      name: 'promptBox',
      component: promptBox
    },{
      path: '/pdf',
      name: 'pdf',
      component: pdf
    }
  ]
})
