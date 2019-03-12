<template>
  <div id="sidebar">
    <el-row class="tac">
      <el-col>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">
              <router-link to="/index">首页</router-link>
            </span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据目录</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/lawsreg">法律法规</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/lawanswer">法律问答</router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link to="/violationcase">违规案例</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">
              <router-link to="/mysub">我的订阅</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-document"></i>
            <span slot="title">
              <router-link to="/recomhistory">推荐历史</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">
              <router-link to="/mycollection">我的收藏</router-link>
            </span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        msg: "侧边栏"
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #sidebar {
    width: 150px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 60px;
    // background-color: cadetblue;
    z-index: 2019;
  }

</style>
