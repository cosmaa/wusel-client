<template>
    <div class="row" >
      <div class="col-xl-4 col-lg-5 col-md-6">
       <project-card/>
      </div>
      <div class="col-xl-4 col-lg-5 col-md-6">
        <project-card/>
      </div>
      <div class="col-xl-4 col-lg-5 col-md-6">
        <project-card/>
      </div>
    </div>
</template>
<script>
import ProjectCard from "../components/ProjectCards/ProjectCard";
export default {
  components: {
    ProjectCard,
  }

};
</script>
<style>
</style>
