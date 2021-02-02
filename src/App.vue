<template>
  <div id="app">
    <vue-bullet-chat />
  </div>
</template>

<script>
import VueBulletChat from "./lib/vue-bullet-chat";
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
