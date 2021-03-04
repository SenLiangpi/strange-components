/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-03 16:55:56
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-03 17:09:44
 */
const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')

const components = fs.readdirSync(path.resolve(__dirname, '../src/strange-components/src/components'))
const directives = fs.readdirSync(path.resolve(__dirname, '../src/strange-components/src/directives'))
const helpers = fs.readdirSync(path.resolve(__dirname, '../src/strange-components/src/helpers'))

let externals = {}

components.forEach(name => {
  externals[`components/${name}`] = `strange-components/dist/lib/${name}`
})

directives.forEach(name => {
  name = name.substring(0, name.lastIndexOf('.'))
  externals[`directives/${name}`] = `strange-components/dist/directives/${name}`
})

helpers.forEach(name => {
  name = name.substring(0, name.lastIndexOf('.'))
  externals[`helpers/${name}`] = `strange-components/dist/helpers/${name}`
})

externals = Object.assign({
  vue: 'vue'
}, externals, nodeExternals())

exports.components = components.reduce((last, curr) => {
  last[`lib/${curr}`] = path.resolve(__dirname, `../src/strange-components/src/components/${curr}`)
  return last
}, {})
exports.directives = directives.reduce((last, curr) => {
  last[`directives/${curr.substring(0, curr.lastIndexOf('.'))}`] = path.resolve(__dirname, `../src/strange-components/src/directives/${curr}`)
  return last
}, {})
exports.helpers = helpers.reduce((last, curr) => {
  last[`helpers/${curr.substring(0, curr.lastIndexOf('.'))}`] = path.resolve(__dirname, `../src/strange-components/src/helpers/${curr}`)
  return last
}, {})
exports.theme = {
  'theme': path.resolve(__dirname, `../src/strange-components/src/theme/index.js`)
}

exports.externals = externals

exports.alias = {
  'vue$': 'vue/dist/vue.esm.js',
  '@': path.resolve(__dirname, '../src/strange-components/src'),
  'strange-components': path.resolve(__dirname, '../src/strange-components'),
  '@strange-components': path.resolve(__dirname, 'strange-components'),
  'components': path.resolve(__dirname, '../src/strange-components/src/components'),
  'helpers': path.resolve(__dirname, '../src/strange-components/src/helpers'),
  'dirctives': path.resolve(__dirname, '../src/strange-components/src/directives')
}
