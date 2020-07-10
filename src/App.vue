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
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
</style>
