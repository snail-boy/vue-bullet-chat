<template>
  <div id="app">
    <vue-bullet-chat />
  </div>
</template>

<script>
  import VueBulletChat from "./views/vue-bullet-chat";
  export default {
    name: 'app',
    components: {VueBulletChat},
    data () {
      return {

      }
    }
  }
</script>

<style>
  #app {
    font-family:"Comic Sans MS","幼圆","黑体",sans-serif;
    margin: 0;
    padding: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
