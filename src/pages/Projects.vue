<template>
    <div class="row" >
      <div class="col-xl-4 col-lg-5 col-md-6">
       <project-card/>
       <project-card/>
      </div>
      <project-card/>
    </div>
</template>
<script>
import ProjectCard from "./ProjectCards/ProjectCard";
export default {
  components: {
    ProjectCard,
  }

};
</script>
<style>
</style>
