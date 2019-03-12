<template>
  <div id="appBox">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'AppBox',
    data() {
      return {
          msg:"应用:例如终端数据中的每个应用"
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
