<template>
  <div class="main_container">
    <div class="banners-container">
      <article
        class="banner"
        :style="{ 'background-image': 'url(' + wg + '})' }"
      >
        <section class="banner-copy">
          <h1>WG</h1>
        </section>
      </article>
      <article
        class="banner"
        :style="{ 'background-image': 'url(' + lankow + '})' }"
      >
        <section class="banner-copy">
          <h1>Lankow-Contest</h1>
        </section>
      </article>
      <article
        class="banner"
        :style="{ 'background-image': 'url(' + ilohh + '})' }"
        @click="print()"
      >
        <section class="banner-copy">
          <h1>ILOHH</h1>
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
      lankow: "/img/20190914_202212.jpg",
      wg: "/img/1540401105591.jpg",
      ilohh: "<%= BASE_URL %>/img/1590061765652.jpg"
    };
  },
  methods: {
    print() {
      console.log(this.ilohh);
    }
  }
};
</script>
