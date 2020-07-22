<template>
    <div class="row"  >
      <div class="col-xl-4 col-lg-5 col-md-6" v-for="(card, index) in cards" :key="index">
        <ProjectCard :text="card.text" :logo="card.logo" :pic="card.pic" :title="card.title" :sub_title="card.sub_title"/>
      </div>
    </div>
</template>
<script>
import json from "@/assets/jsons/projects.json";
import ProjectCard from "../components/Cards/ProjectCard";

export default {
  components: {
    ProjectCard

  },
  data() {
    return {
      cards: json.cards
    }
  }

};
</script>
<style>
</style>
