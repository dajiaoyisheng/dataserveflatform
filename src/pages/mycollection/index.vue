<template>
  <div id="mycollection">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Mycollection',
    data() {
      return {
        msg: '我的收藏'
      }
    }
  }

</script>

<style scoped>
  #mycollection {}

</style>
