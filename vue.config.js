/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:16
 * @LastEditors: PiPi
 * @LastEditTime: 2020-06-30 16:14:41
 */ 

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
  }
}
