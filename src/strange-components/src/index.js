/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-01-20 09:56:40
 */
import Vue from 'vue'
// import './style/reset.css'
import theme from './theme'

import Directives from './directives'
// import all comps
import strangeSelect from './components/strange-select/index.js'
import strangeUploadImageAnt from './components/strange-upload-image-ant/index.js'
import strangeUploadRecordingAnt from './components/strange-upload-recording-ant/index.js'
import strange_prompt_box_ant from './components/strange-prompt-box/index.js'
import strange_modal from './components/strange-modal/index.js'
import strange_pdf from './components/strange-pdf/index.js'

// add all comps into an array
export const components = [
  strangeSelect,
  strangeUploadImageAnt,
  strangeUploadRecordingAnt,
  strange_prompt_box_ant,
  strange_modal,
  strange_pdf
]

// export comps one by one
export {
  strangeSelect,
  strangeUploadImageAnt,
  strangeUploadRecordingAnt,
  strange_prompt_box_ant,
  strange_modal,
  strange_pdf
}

// export all comps as an object
const strange = {
  strangeSelect,
  strangeUploadImageAnt,
  strangeUploadRecordingAnt,
  strange_prompt_box_ant,
  strange_modal,
  strange_pdf
}

strange.install = function (Vue, options = {}) {
  // install all the comps
  components.forEach(component => {
    if (component.name) Vue.component(component.name, component)
  })
  // Vue.prototype.$messageBox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$message = Message
  // Vue.prototype.$loading = Loading
}

// add direvtives installing function
strange.direvtive = function (Vue) {
  for (let name in Directives) {
    Vue.directive(name, Directives[name])
  }
}

// add theme generator function
strange.theme = theme
// gen default theme
strange.theme()
// set font family for html and body
// document.body.style.fontFamily = '"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif'
// gen directive
strange.direvtive(Vue)
export default strange
