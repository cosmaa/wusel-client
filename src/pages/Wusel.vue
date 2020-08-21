<template>
  <div>
    <div>
      <button style="margin-bottom: 5px;" class="btn" @click="component = 'projects'">Projects</button>
      <button style="margin-bottom: 5px;" class="btn" @click="component = 'kanban'">Tasks</button>
      <button style="margin-bottom: 5px;" class="btn" @click="component = 'videos'">Videos</button>
    </div>
    <component :is="component"></component>
  </div>


</template>

<script>

  import Kanban from "./content/wusel/Kanban";
  import Projects from "./content/wusel/Projects";
  import Videos from "./content/wusel/Videos";

  export default {
    components: {
      'projects':Projects,
      'kanban': Kanban,
      'videos': Videos
    },
    data() {
      return {
        component: 'projects'
      }
    }
  }
</script>

<style scoped>


</style>
