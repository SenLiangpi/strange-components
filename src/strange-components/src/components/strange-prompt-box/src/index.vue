<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-03 17:03:15
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-12-22 17:14:42
-->
<template>
<transition name="box">
  <div :id="box_id" class="strange-prompt-box" v-show="type">
    <div class="prompt-box-div" >
      <a-icon class="prompt-box-icon" :type="config.icon" :style="{color: config.icon_color || '#faad14'}" />
      <h3 class="prompt-box-title">{{config.title}}</h3>
      <div class="prompt-box-content">
        {{config.content}}
      </div>
      <div class="prompt-box-button">
        <a-button class="prompt-box-button-cancel" @click="cancel($event)">{{config.cancelText || "取消"}}</a-button>
        <a-button class="prompt-box-button-ok" @click="ok($event)" type="primary">{{config.okText || "确定"}}</a-button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
  export default { 
    name: "strange-prompt-box-ant",
    components: {},
    props: {
      config: {
        type: Object
      },
      type: {
        type: Boolean
      }
    },
    model: {
      
    },
    data() {
      return {
        box_type: false,
        box_class: false,
        box_id: String(parseInt(Math.random() * 10000000000))
      };
    },
    methods: {
      ok(event){
        this.$emit('ok',event);
      },
      cancel(event){
        this.$emit('cancel',event);
      }
    },
    created() {
    },
    mounted() {
    },
    watch: {
      // type: {
      //   handler(val){
      //     if(val){
      //       this.box_type = true
      //       this.$nextTick(()=>{
      //         setTimeout(()=>{
      //           this.box_class = true
      //         },10)
      //       })
      //     }else{
      //       this.box_class = false;
      //       let a = 0;
      //       document.getElementById(this.box_id).addEventListener('animationend',()=>{
      //         this.box_type = false;
      //       },false)
      //     }
      //   }
      // },
    }
  }
</script>
<style scoped>
.box-enter-active, .box-leave-active {
  filter: blur(0px);
  opacity: 1;
}
.box-enter, .box-leave-to /* .fade-leave-active below version 2.1.8 */ {
  filter: blur(15px);
  opacity: 0;
}
.strange-prompt-box{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.4);
  transition: all 0.5s ease-in-out 0s;
}
/* .background-enter{
  filter: blur(15px);
  opacity: 0;
}
.background-out{
  background-color: rgba(0,0,0,0.4);
  filter: blur(0px);
  opacity: 1;
} */
.prompt-box-div{
  width: 350px;
  background-color: #fff;
  padding: 20px 20px 20px 40px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: calc(50vh - 180px);
}
.prompt-box-icon{
  position: absolute;
  top: 24px;
  left: 20px;
  font-size: 16px;
  color: #faad14;
}
.prompt-box-title{
  font-size: 16px;
}
.prompt-box-content{
  margin: 10px 0;
  font-size: 14px;
}
.prompt-box-button{
  display: inline-block;
  float: right;
}
.prompt-box-button-cancel{
  margin-right: 10px;
}
</style>