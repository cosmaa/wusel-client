<template>
  <div  >
    <div  v-for="(video) in videos"   >
     <video-card class="card col-xl-4 col-lg-5 col-md-6" :video="video"/>
    </div>
  </div>
</template>

<script>
    import VideoCard from "../../../components/Cards/VideoCard";
    export default {
        name: "Videos",
      components: {
          'video-card': VideoCard},
      data() {
          return {
            videos: [
              {
                url: "https://www.youtube.com/embed/H4Qsm01YKTY",
                topic: "VUEJS Animation",
                description: "VueJs Animation is extremely easy to implement using Animate CSS and just two native Vue tags.",
                logo: "vue-logo.png",
                blog_url: "https://medium.com/swlh/extremely-easy-vuejs-animations-d17d7d8a5208"
              }

            ]
          }
      }
    }
</script>

<style scoped>

</style>
