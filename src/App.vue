<template>
  <div id="app">
    <v-nav></v-nav>
    <v-sidebar></v-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import vNav from '@/components/nav.vue'
  import vSidebar from '@/components/sidebar.vue'
  export default {
    name: 'App',
    components: {
      vNav,
      vSidebar
    }
  }

</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
