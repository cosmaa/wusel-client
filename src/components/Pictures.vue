<template>
  <div class="main_container">
    <div class="banners-container">
      <article class="banner" :style="{ 'background-image': 'url(' + wg + ')' }">
        <section class="banner-copy">
          <h1>WG</h1>
        </section>
      </article>
      <article class="banner" :style="{ 'background-image': 'url(' + lankow + ')' }">
        <section class="banner-copy">
          <h1>Lankow-Contest</h1>
        </section>
      </article>
      <article class="banner" :style="{ backgroundImage: `url(${ilohh})` }">
        <section class="banner-copy">
          <h1>ILOHH</h1>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  data() {
    return {
      lankow: '/20190914_202212.jpg',
      wg: '/1540401105591.jpg',
      ilohh: '/1590061765652.jpg'
    }
  }
}
</script>
