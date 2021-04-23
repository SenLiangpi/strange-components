<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-04 13:44:39
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-03-11 15:09:24
-->
<template>
  <transition name="modal">
    <div :id="box_id" class="strange-prompt-box" v-show="box_type">
      <div class="prompt-box-div" :id="modal_id" :style="{width: width,marginTop: `calc(50vh - ${box_dom_offsetHeight}px)`}">
        <div class="prompt-modal-title">
          <span style="margin-right: 10px;">{{modal_config.title || 'title'}}</span>
          <a-popconfirm
            v-if="delete_type"
            placement="bottom"
            :title="modal_popconfirmText.title || 'title'"
            :ok-text="modal_popconfirmText.ok || '确定'"
            :cancel-text="modal_popconfirmText.no || '取消'"
            @confirm="popconfirm_confirm($event)"
            @cancel="popconfirm_cancel($event)"
          >
            <a href="#" style="color: #000000a6;">
              <a-icon type="delete" class="modal_delete" />
            </a>
          </a-popconfirm>
          <a href="javascript:void(0)" style="color: #000000a6;float: right;" @click="modal_shut_down($event)">
            <a-icon type="close" class="modal_delete" />
          </a>
        </div>
        <div class="prompt-modal-dev">
          <slot></slot>
        </div>
        <div class="prompt-modal-button">
          <div style="display: inline-block;float: right;">
            <a-button class="prompt-box-button-cancel" @click="cancel($event)">{{modal_config.cancelText || '取消'}}</a-button>
            <a-button class="prompt-box-button-ok" :loading="confirmLoading" @click="ok($event)" type="primary">{{modal_config.okText || '确定'}}</a-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default { 
    name: "strange-modal-ant",
    components: {},
    props: {
      delete_type:{
        type: Boolean
      },
      width: {
        type: String
      },
      visible: {
        type: Boolean
      },
      config: {
        type: Object
      },
      popconfirmText: {
        type: Object
      },
      confirmLoading:{
        type: Boolean
      }
    },
    model: {
      
    },
    data() {
      return {
        box_type: false,
        box_class: false,
        box_id: String(parseInt(Math.random() * 1000000))+new Date().getTime(),
        modal_id: String(parseInt(Math.random() * 1000000))+new Date().getTime(),
        modal_config: {
          title: ' ',
          cancelText: '取消',
          okText: '确定'
        },
        modal_popconfirmText: {
          title: ' ',
          ok: '取消',
          no: '确定'
        },
        box_dom_offsetHeight: 0
      };
    },
    methods: {
      ok(event){
        this.$emit('ok',event);
      },
      cancel(event){
        this.$emit('cancel',event);
      },
      modal_shut_down(event){
        this.$emit('shut-down',event);
      },
      popconfirm_confirm(event){
        this.$emit('popconfirm-confirm',event);
      },
      popconfirm_cancel(event){
        this.$emit('popconfirm-cancel',event);
      },
    },
    created() {
      if(this.config){
        this.modal_config = this.config;
      }
      if(this.popconfirmText){
        this.modal_popconfirmText = this.popconfirmText;
      }
    },
    mounted() {
    },
    watch: {
      visible: {
        handler(val){
          if(val){
            this.box_type = true;
            this.$nextTick(()=>{
              this.box_dom_offsetHeight = (document.getElementById(this.modal_id).offsetHeight/2)+100;
            })
          }else{
            this.box_type = false;
          }
        }
      },
    }
  }
</script>
<style scoped>
.strange-prompt-box{
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease-in-out 0s;
  background-color: rgba(0,0,0,0.4);
}
.modal-enter-active, .modal-leave-active {
  /* filter: blur(0px); */
  opacity: 1;
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* filter: blur(15px); */
  opacity: 0;
}
/* .background-enter{
  
}
.background-out{
  
} */
.prompt-box-div{
  background-color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  margin: 0 auto;
  /* margin-top: calc(50vh - 180px); */
}
.prompt-modal-title{
  padding: 10px 20px;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 500;
  font-size: 16px;
}
.modal_delete:hover{
  color: #f44336;
}
.prompt-modal-dev{
  padding: 10px 20px;
  border-bottom: 1px solid #e8e8e8;
}
.prompt-modal-button{
  padding: 10px 20px;
  overflow: hidden;
}
.prompt-box-button-cancel{
}
.prompt-box-button-ok{
  margin-left: 10px;
}
</style>