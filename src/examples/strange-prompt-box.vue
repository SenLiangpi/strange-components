<!--
 * @Author: Pi Patle
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-11-09 16:54:35
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-03-17 11:43:49
-->
<template>
  <div class="strange-prompt-box-a">
    <a-button class="prompt-box-button-cancel" @click="button1($event)">一个按钮</a-button>
    <a-button class="prompt-box-button-cancel" @click="button2($event)">一个按钮2</a-button>
    <strange-prompt-box-ant :config="config" :type="type" @ok="prompt_box_ok" @cancel="prompt_box_cancel">
      
    </strange-prompt-box-ant>
    <strange-modal-ant :width="'500px'"
      :visible="modal_visible" :popconfirmText="popconfirmText" :config="modal_config" :confirmLoading="true"
      @shut-down="shut_down" @cancel="modal_cancel" @ok="modal_ok" :delete_type="true"
      @popconfirm-confirm="popconfirm_confirm" @popconfirm-cancel="popconfirm_cancel"
    >
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
      <p>aaaaaaaaaaa</p>
    </strange-modal-ant>
  </div>
</template>
<script>
// import backgroundImage1 from './../assets/preview.jpg'
export default {
  name: "strange-prompt-box",
  components: {
  },
  props: {
    
  },
  data() {
    return {
      config: {
        icon: "question-circle",
        icon_color: "#000",
        title: "确认取消",
        content: "1.每家店只能拥有一个默认接听人<br />2.默认接听人无法删除<br />请谨慎操作",
        okText: "确认",
        cancelText: "取消"
      },
      type: false,
      modal_visible: false,
      popconfirmText: {
        title: '确定要删除吗？',
      },
      modal_config: {
        title: '创建排班'
      }
      // backgroundImage: backgroundImage1
    };
  },
  methods: {
    button1(){
      this.type = true;
    },
    button2(){
      this.modal_visible = true;
    },
    shut_down(){
      this.modal_visible = false;
    },
    prompt_box_ok(e){
      console.log(e)
      this.type = false
    },
    prompt_box_cancel(e){
      console.log(e)
      this.type = false
    },
    modal_cancel(e){
      console.log('modal 取消');
      this.modal_visible = false;
    },
    modal_ok(e){
      console.log(e)
      console.log('确定');
      this.modal_visible = false;
    },
    popconfirm_confirm(e){
      console.log(e)
      console.log('确定')
    },
    popconfirm_cancel(e){
      console.log(e);
      console.log('取消')
    }
  },
  created() {
    
  },
  mounted() {
    
  },
  watch: {}
}
</script>
<style scoped>
  .strange-prompt-box-a{
  }
</style>