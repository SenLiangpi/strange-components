<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-05 14:31:30
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-13 21:11:55
-->
<template>
  <div class="strange-upload-recording-ant">
    <div class="recording" @click="recordingClick" v-if="examine">
      <div class="recording-div">
        <div class="recording-icon" style="" :class="{ 'recording-type': recordingType }">
          <div></div>
        </div>
        <p style="font-size: 3.4vw;text-align: center;">{{formartTime(dateTime)}}</p>
      </div>
    </div>
    <div class="audio-list" v-for="(a,index) in value" :key="index">
      <div class="audio-list-div">
        <a-icon @click="audioButton(a,index)" style="color: #4397d4;font-size: 12vw;display: block;margin: 6vw auto 0;" :type="iconType(a.url)" />
        <p style="font-size: 3.4vw;text-align: center;">{{formartTime(a.time)}}/{{formartTime(a.duration)}}</p>
      </div>
      <a-icon v-if="examine" @click="listsDelete(index)" type="minus-circle" theme="filled" style="position: absolute;color: #d0021b;font-size: 5vw;top: -1.5vw;right: -1.5vw;" />
    </div>
    <audio controls ref="audioPlayer" style="display: none;"></audio>
  </div>
</template>

<script>
  function formartTime(time){
    // console.log(time);
    if(time > 0){
      var m = Math.floor(time / 60);
      var s = Math.floor(time % 60);
      return (m<10?"0"+m:m)+":"+ (s<10?"0"+s:s);
    }else{
      return '00:00'
    }
	}
  import { recording } from './recording.js'
  export default { 
    name: "strange-upload-recording-ant",
    components: {},
    props: {
      value: {
        type: Array
      },
      disabled: {
        type: Boolean
      },
      examine: {
        type: Boolean
      }
    },
    model: {
      prop: "value",
      event: "update"
    },
    data() {
      return {
        newRecording: false,
        recordingType: false,
        dateTime: 0,
        recordingTime: '',
        audioList: [],
        formartTime,
        audioListType: '',
        audioListIndex: '',

      };
    },
    methods: {
      iconType(url){
        if(this.audioListType == url){
          return 'pause'
        }else{
          return 'caret-right'
        }
      },
      resetTime(){
        for(let a in this.value){
          this.value[a].time = 0
        }
        this.$emit("update", this.value)
      },
      audioButton(data,index) {
        if(this.audioListType == data.url){
          this.audioListType = ''
          this.audioListIndex = ''
          this.$refs.audioPlayer.pause();
        }else if(!this.recordingType){
          this.audioListType = data.url
          this.audioListIndex = index
          if(this.$refs.audioPlayer.src == data.url){
            this.$refs.audioPlayer.play();
          }else{
            this.resetTime()
            this.$refs.audioPlayer.src = data.url
            this.$refs.audioPlayer.play();
          }
        }
      },
      recordingClick(){
        if(!this.recordingType){
          if(!this.disabled){
            this.audioListType = ''
            this.audioListIndex = ''
            this.$refs.audioPlayer.pause();
            this.newRecording.start()
            this.recordingType = true;
          }
        }else{
          let file = this.newRecording.end()
          this.$emit('change',file);
          this.recordingType = false;
          setTimeout(()=>{
            this.dateTime = 0
          },100)
        }
      },
      audioListUpdate(val){
        for(let a in val){
          // let audio = document.createElement('audio') //生成一个audio元素 
          // audio.src = val[a].url //音乐的路径 
          // audio.addEventListener("canplay", ()=> {
          //   this.value[a].duration = audio.duration
          // });
          // ontimeupdate
        }
      },
      listsDelete(index){
        this.audioListType = ''
        this.audioListIndex = ''
        this.$refs.audioPlayer.pause();
        this.$Dialog.confirm({
          title: '确认删除？',
          message: '删除后录音内容无法恢复',
        }).then(() => {
          this.value.splice(index, 1)
          this.$emit("update", this.value)
        }).catch(() => {
          // on cancel
        });
      }
    },
    created() {
      this.newRecording = new recording();
      this.newRecording.authorization((time)=>{
        this.dateTime = time
      })
      // this.audioListUpdate(this.value)
      this.$nextTick(()=>{
        this.$refs.audioPlayer.ontimeupdate = ()=>{
          this.value[this.audioListIndex].time = this.$refs.audioPlayer.currentTime
          // this.value[this.audioListIndex].duration = this.$refs.audioPlayer.duration
          this.$emit("update", this.value)
          // console.log(audioDom.currentTime)
        }
        this.$refs.audioPlayer.onended = ()=>{
          this.value[this.audioListIndex].time = 0
          this.$emit("update", this.value)
          this.audioListType = ''
          this.audioListIndex = ''
        }
      })
    },
    mounted() {
    },
    watch: {
      value: {
        handler(val){
          // this.audioListUpdate(val)
        },
        deep: true
      },
      dateTime: {
        handler(val){
          if(val>=600){
            this.recordingClick()
          }
        },
        deep: true
      }
    }
  }
</script>
<style scoped>
.strange-upload-recording-ant{
  overflow: hidden;
}
.recording{
  width: 29.33vw;
  height: 29.33vw;
  float: left;
  margin-left: 3vw;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
}
.recording-div{
  border: 1px solid #e7e7e7;
  color: #999999;
  height: 29.33vw;
  
}
.recording-icon{
  padding: 1.5vw;
  border: 1px solid #999999;
  display: inline-block;
  border-radius: 6vw;
  margin: 0 auto;
  margin: 6vw 9.1vw 0;
}
.recording-icon div{
  width: 7vw;
  height: 7vw;
  background-color: #999999;
  border-radius: 6vw;
}
.recording-type{
  border-color: #d0021b;
}
.recording-type div{
  background-color: #d0021b;
}
.audio-list{
  width: 29.33vw;
  height: 29.33vw;
  float: left;
  margin-left: 3vw;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
  position: relative;
}
.audio-list-div{
  border: 1px solid #e7e7e7;
  color: #999999;
  height: 29.33vw;
}
</style>