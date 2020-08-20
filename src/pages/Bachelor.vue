<template>
  <div >
    <button style="margin-bottom: 5px;" class="btn" @click="component = 'kladde'">Kladde</button>
    <button style="margin-bottom: 5px;" class="btn" @click="component = 'kanban'">Tasks</button>
    <component :is="component"></component>
  </div>
</template>

<script>

  import Kladde from "./content/bachelor/Kladde";
  import BachelorKanban from "./content/bachelor/BachelorKanban";
  export default {
    components: {
      'kanban':BachelorKanban,
      'kladde':Kladde
    },
    data() {
      return {
        component: 'kladde'
      }
    }
  }
</script>

<style lang="scss" >


</style>
