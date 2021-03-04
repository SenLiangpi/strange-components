<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-03 17:03:15
 * @LastEditors: Pi Patle
 * @LastEditTime: 2020-08-26 15:07:53
-->
<template>
  <div class="strange-select">
    <div class="strange-select-list" v-for="(a,index) in options" :key="index" @click="selectClick(a.value)">
      <div class="strange-select-list-icon" :class="{ 'strange-select-list-selected': a.value===value }">
        <div></div>
      </div>
      <span class="strange-select-list-text">{{a.label}}</span>
    </div>
  </div>
</template>

<script>
  export default { 
    name: "strange-select",
    components: {},
    props: {
      options: {
        type: Array
      },
      value: {
        type: String
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
      selectClick(value){
        this.$emit("update", value);
        this.$emit('change',value);
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
.strange-select-list{
  border: 1px solid #e7e7e7;
  font-size: 4vw;
  border-radius: 1vw;
  position: relative;
  margin-bottom: 1vw;
  padding: 3vw 0;
}
.strange-select-list:last-child{
  margin-bottom: 0vw;
}
.strange-select-list-icon{
  position: absolute;
  display: inline-block;
  border: 1px solid #e7e7e7;
  border-radius: 5vw;
  padding: 1vw;
  margin-left: 3vw;
}
.strange-select-list-icon div{
  width: 3vw;
  height: 3vw;
  border-radius: 3vw;
}
.strange-select-list-text{
  margin-left: 11vw;
}
.strange-select-list-selected{
  border-color: #2999e1;
  transition: border 1s;
}
.strange-select-list-selected div{
  background-color: #2999e1;
  transition: background-color 1s;
}
</style>