<template>
  <div id="mysub">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Mysub',
    data() {
      return {
        msg: '我的订阅'
      }
    }
  }

</script>

<style scoped>
  #mysub {}

</style>
