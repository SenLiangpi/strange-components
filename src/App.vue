/* eslint-disable */
<!--
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-05-12 10:17:15
 * @LastEditors: Pi Patle
 * @LastEditTime: 2021-02-25 15:26:45
 -->
<style scoped>
  #app {
    height: 100%;
  }
  
    .banner {
      font-size: 30px;
      padding: 10px 20px;
    }
    .menu {
      width: 210px;
    }
</style>

<template>
  <div id="app" class="au-theme-background-color--base-11">
      <div style="display: flex;">
        <div style="width: 240px;height: 100vh;overflow: hidden;">
          <p style="margin: 0;line-height: 60px;text-align: center;background-color: #031529;color: #fff;letter-spacing: 2px;text-transform: uppercase;">strange-components</p>
          <a-menu
            class="scroll-bar"
            @click="menu_click"
            mode="inline"
            theme="dark"
            style="display: inline-block;overflow-y: auto;overflow-x: hidden;height: calc( 100vh - 60px );">
            <template v-for="item in permiss">
              <a-sub-menu 
                :key="item.code"
                v-if="item.children.length > 0"
              >
                <span slot="title">
                  <span>{{item.name}}</span>
                </span>
                <template v-for="child in item.children">
                  <a-menu-item :key="JSON.stringify(child)">
                    <span>{{child.name}}</span>
                  </a-menu-item>
                </template>
              </a-sub-menu>
              <a-menu-item
                class="additemicon"
                v-if="item.children.length < 1"
                :key="JSON.stringify(item)"
              >
                <span>
                  <span>{{item.name}}</span>
                </span>
              </a-menu-item>
            </template>
          </a-menu>
        </div>
        <div style="flex-grow: 3;">
          <div style="width: 100%;height: 60px;background-color: #fff;">
            
          </div>
          <div style="overflow-y: auto;overflow-x: hidden;height: calc( 100vh - 60px );">
            <router-view/>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      permiss: [
        {
          "name":"组建",
          "type":"00",
          "code":"0001",
          "pageId":"",
          "index":"",
          "children":[
            {
              "name":"select and 图片上传",
              "type":"01",
              "code":"sa.pc.ereport.custormerSource",
              "pageId":"sa.pc.ereport.custormerSource",
              "index":"",
              "children":[],
              "path": '/button'
            },
            {
              "name":"弾框",
              "type":"01",
              "code":"sa.ereport.dealer.report.forms",
              "pageId":"sa.ereport.dealer.report.forms",
              "index":"",
              "children":[],
              "path": '/promptBox'
            }
          ]
        }
      ]
,
    }
  },
  created(){
  },
  methods: {
    menu_click({ item, key, keyPath }){
      const data = JSON.parse(key);
      this.$router.push(data.path);
    },
  }
}
</script>
