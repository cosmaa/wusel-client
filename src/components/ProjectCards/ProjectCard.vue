<template>
  <card class="card-project">
    <div slot="image">
      <img src="@/assets/img/backgrounds/graph.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar" src="@/assets/img/logos/graph-db-logo.png" alt="...">
        <h4 class="title">
          <br>
          <a  href="https://github.com/cosmaa" target="_blank">
            <span class="rainbow">@github</span>
          </a>
        </h4>
      </div>
      <p class="description text-center" >
        "I like to experiment with
        <br>graph database -
        <br> any hints?"
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row" style="justify-content: center;">
        <div v-for="(info, index) in details" :key="index">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      details: [
        {
          title: "Neo4J",
          subTitle: "GraphDatabase"
        },
      ]
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  }
};
</script>
<style>
</style>
