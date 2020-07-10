<template>
  <div id="app">
    <Background />
    <router-view />
  </div>
</template>

<script>
import Background from "./components/includes/Background";

export default {
  name: "App",
  components: {
    Background
  }
};
</script>

<style lang="scss">
@import "assets/main.scss";
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>
