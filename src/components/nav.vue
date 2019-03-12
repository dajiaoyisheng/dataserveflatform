<template>
  <div id="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">个人账户</el-menu-item>
        <el-menu-item index="2-2">权限设置</el-menu-item>
        <el-menu-item index="2-3">应用审核</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/index">终端首页</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #nav {
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: aquamarine;
    z-index: 2019;
  }

</style>
