<template>
  <card class="video-card">
    <div slot="video">
      <iframe :src="video.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div>
      <div class="author">
        <img class="avatar" :src="require('@/assets/img/logos/'+ video.logo)"  alt="...">
        <h4 class="title">
        </h4>
      </div>
      <p class="description text-center">
        {{video.description}}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row" style="justify-content: center;">
        <div>
          <h5>{{video.topic}}</h5>
          <a :href="video.blog_url" target="_blank">go to blog</a>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
  export default {
    props: {
      video: {Type: Object, required: true, default: function () {
        return {
          url: "",
          topic:  "YOU",
          description: "some Text",
          logo: "python-logo.png",
          blog_url: "add author"
        }

        }},

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
<style scoped>


</style>
