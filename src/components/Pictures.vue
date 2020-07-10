<template>
  <div class="main_container">
    <div class="banners-container">
      <article class="banner"  v-for="(image) in images" :key="image.pathShort"  :style="{ 'background-image': `url(${image.pathLong})` }" >
        <section class="banner-copy">
          <h1>{{image.pathShort}}</h1>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pictures",
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    this.importAll(require.context('@/assets/img/banner/', true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
  },
};
</script>
