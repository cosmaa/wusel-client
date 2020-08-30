<template>
  <div >
    <button style="margin-bottom: 5px;" class="btn" @click="component = 'kladde'">Kladde</button>
    <button style="margin-bottom: 5px;" class="btn" @click="component = 'kanban'">Tasks</button>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
    <component :is="component"></component>
    </transition>
  </div>
</template>

<script>

  import Kladde from "./content/bachelor/Kladde";
  import BachelorKanban from "./content/bachelor/BachelorKanban";
  export default {
    components: {
      'kanban': BachelorKanban,
      'kladde': Kladde
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
