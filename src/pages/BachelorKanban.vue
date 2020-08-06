<template>
  <div>
    <Kanban trello_url="https://trello.com/b/yUV8xkgt" />
  </div>


</template>

<script>

  import Kanban from "../components/Kanban";
  export default {
    name: "BachelorKanban",
    components: {
      Kanban
    },
    data() {
      return {}

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
