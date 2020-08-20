<template>
  <div>
    <button style="margin-bottom: 5px;" class="btn" @click="component = 'kanban'">Tasks</button>
    <button style="margin-bottom: 5px;" class="btn" @click="component = 'projects'">Projects</button>
    <component :is="component"></component>
  </div>


</template>

<script>

  import Kanban from "./content/wusel/Kanban";
  import Projects from "./content/wusel/Projects";

  export default {
    name: "Wusel",
    components: {
      'projects':Projects,
      'kanban': Kanban
    },
    data() {
      return {
        component: 'kanban'
      }
    }
  }
</script>

<style scoped>


</style>
