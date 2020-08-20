<template>
  <div>
    <button style="margin-bottom: 5px;" class="btn" @click="selected = !selected">go to {{select}}</button>

    <Kanban  v-if="selected" trello_url="https://trello.com/b/NrpltHi8"/>
    <Projects v-if="!selected" ></Projects>
  </div>


</template>

<script>

  import Kanban from "../components/Kanban";
  import Projects from "./wusel/Projects";
  export default {
    name: "Wusel",
    components: {
      Projects,
      Kanban
    },
    data() {
      return {
        selected: true
      }
    },
    computed: {
      select(){
        return this.selected ? 'Projects' : 'Kanban'
      }
    }
  }
</script>

<style scoped>


</style>
