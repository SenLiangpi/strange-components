<!--
 *                                                     __----~~~~~~~~~~~------___
 *                                    .  .   ~~//====......          __--~ ~~
 *                    -.            \_|//     |||\\  ~~~~~~::::... /~
 *                 ___-==_       _-~o~  \/    |||  \\            _/~~-
 *         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *   .~       .~       |   \\ -_    /  /-   /   ||      \   /
 *  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 *  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *           '         ~-|      /|    |-~\~~       __--~~
 *                       |-~~-_/ |    |   ~\_   _-~            /\
 *                            /  \     \__   \/~                \__
 *                        _--~ _/ | .-~~____--~-/                  ~~==.
 *                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                  -_     ~\      ~~---l__i__i__i--~~_/
 *                                  _-~-__   ~)  \--______________--~~
 *                                //.-~~~-~_--~- |-------~~~~~~~~
 *                                       //.-~~~--\
 *                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                               神兽保佑            永无BUG
 -->

<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-10 16:02:57
--> 
<template>
  <div class="page">
    <strange-select :options="options" v-model="select"></strange-select>
    <strange-upload-image-ant v-model="images" :disabled="images.length>4" style="margin-top: 10vw;" @lookOver="lookOver" @change="uploadChange" :examine="aaaaa"></strange-upload-image-ant>
    <strange-upload-recording-ant v-model="audio" @change="audioChange" :disabled="audio.length==3" :examine="true"></strange-upload-recording-ant>
    <strange-upload-recording-ant v-model="audio1" @change="audioChange1" :disabled="audio1.length==3" :examine="true"></strange-upload-recording-ant>
  </div>
</template>
<script>
function getObjectURL(file) {
  var url = null;
  if (window.createObjcectURL != undefined) {
    url = window.createOjcectURL(file);
  } else if (window.URL != undefined) {
    url = window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) {
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}
export default {
  name: "button-examples",
  data() {
    return {
      options: [
        {value: '0',label: '不符合'},
        {value: '0.5',label: '部分符合'},
        {value: '1',label: '符合'},
      ],
      select: '0',
      images: [],
      audio: [],
      audio1: [],
      aaaaa: true
    }
  },
  methods: {
    lookOver(key){
      console.log('aa')
      console.log(key)
    },
    uploadChange(file){
      let url = getObjectURL(file)
      console.log(url)
      this.images.push({url:url,id: new Date().getTime()})
    },
    audioChange(file){
      console.log(file)
      let url = getObjectURL(file)
      let audio = document.createElement('audio')
      audio.src = url
      let b = true
      audio.ontimeupdate = ()=>{
        if(b){
          this.audio.push({url: url,id: new Date().getTime(),time: 0,duration:audio.duration})
          b = false
        }
        audio.pause();
      }
      audio.play();
    },
    audioChange1(file){
      console.log(file)
      let url = getObjectURL(file)
      console.log(url)
      this.audio1.push({url: url,id: new Date().getTime(),time: 0,duration:0})
    }
  },
  created() {
  },
  mounted() {
  },
  watch: {
  }
}
</script>
<style>
  .page{
    background-color: #fff;
    min-height: 100vh;
    /* padding: 3vw; */
  }
</style>
