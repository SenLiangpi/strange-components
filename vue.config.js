/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:16
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-04-22 16:56:19
 */ 
const path = require('path')
const config = require('./build/config')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    resolve: {
      alias: config.alias
    },
    optimization: {
      sideEffects: false
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
  //     }
  //   }
  // }
}
