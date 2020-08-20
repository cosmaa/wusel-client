<template>
  <div>
    <iframe  class="card col-xl-12 col-lg-12 col-md-12" frameborder="0" :src="trello_url+'.html'" allowfullscreen/>
  </div>
</template>

<script>
    export default {
      props: {
          trello_url: {type: String, required: true, default: "https://trello.com/b/yUV8xkgt"}
      }
    }
</script>

<style scoped>
  .card{
    background: none;
    padding: 0;
    width: 100%;
    height: 800px;
  }
</style>
