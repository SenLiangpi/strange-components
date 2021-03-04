<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-03-04 11:37:45
 -->
# strange-components
基于 vue 2.x strange-components 奇怪的组件集合

ψ(｀∇´)ψ　面白い

# 用法
安装 npm i strange-components
```javascript
  //全局引入
  import strangeComponents from 'strange-components'
  import 'strange-components/dist/style.css'
  Vue.use(strangeComponents)
  //按需引入 组件名请参照 组件列表
  import 'strange-components/dist/style.css'
  import { strange_pdf } from 'strange-components'
  Vue.component('strange-pdf',strange_pdf)
```
# 组件列表
带有 ant 的组件有使用 ant-design-vue 使用时需要安装对应 ant-design-vue 组件
```javascript
  {
    strangeSelect,//strange-select
    strangeUploadImageAnt,//strange-upload-image-ant
    strangeUploadRecordingAnt,//strange-upload-recording-ant
    strange_prompt_box_ant,//strange-prompt-box-ant
    strange_modal,//strange-modal-ant
    strange_pdf//strange-pdf
  }
```
* strange-upload-image-ant
使用了 ant-design-vue a-upload a-icon


皮皮研究所出品