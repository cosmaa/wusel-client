<template>
  <card class="card-project">
    <div slot="image">
      <img :src="require('@/assets/img/project/'+ pic)" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar" :src="require('@/assets/img/logos/'+ logo)"  alt="...">
        <h4 class="title">
        </h4>
      </div>
      <p class="description text-center">
        {{text}}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row" style="justify-content: center;">
        <div>
          <h5>{{title}}
            <br>
            <small>{{sub_title}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
  export default {
    props: {
      title: {Type: String, required: true, default: "HELLO"},
      sub_title: {Type: String, required: true, default: "YOU"},
      text: {Type: String, required: true, default: "some Text"},
      logo: {Type: String, required: true, default: "python-logo.png"},
      pic: {Type: String, required: true, default: "graph.jpg"}
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
