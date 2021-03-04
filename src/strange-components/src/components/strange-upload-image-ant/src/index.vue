<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-04 13:44:39
 * @LastEditors: PiPi
 * @LastEditTime: 2020-08-11 11:57:08
-->
<template>
  <div class="strange-upload-image-ant">
    <div class="upload-div" v-if="examine">
      <a-upload class="upload"
        :disabled="disabled || false" accept="image/*" :file-list="[]"
        :before-upload="beforeUpload"
      >
        <div class="upload-style">
          <a-icon style="font-size: 10vw;margin: 5vw auto 0;display: block;" type="plus" />
          <p style="font-size: 3.4vw;text-align: center;">上传图片</p>
        </div>
      </a-upload>
    </div>
    <div class="upload-image-list" v-for="(a,index) in value" :key="index" :style="{ backgroundImage: 'url('+a.url+')' }" @click="lookOver(a)">
      <a-icon v-if="examine" @click.stop="listsDelete(index)" type="minus-circle" theme="filled" style="position: absolute;color: #d0021b;font-size: 5vw;top: -1.5vw;right: -1.5vw;" />
    </div>
  </div>
</template>

<script>
  export default { 
    name: "strange-upload-image-ant",
    components: {},
    props: {
      value: {
        type: Array,
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
        
      };
    },
    methods: {
      lookOver(key){
        this.$emit("lookOver", key)
      },
      beforeUpload(file){
        this.$emit('change',file);
        return false
      },
      listsDelete(index){
        this.value.splice(index, 1)
        this.$emit("update", this.value)
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
<style scoped>
.strange-upload-image-ant{
  overflow: hidden;
}
.upload-div{
  width: 29.33vw;
  float: left;
  margin-left: 3vw;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
}
.upload-style{
  width: 29.33vw;
  height: 29.33vw;
  border: 1px solid #e7e7e7;
  color: #999999;
}
.upload-image-list{
  float: left;
  width: 29.33vw;
  height: 29.33vw;
  margin-left: 3vw;
  background-position: center;
  background-size: cover;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
  position: relative;
}
</style>