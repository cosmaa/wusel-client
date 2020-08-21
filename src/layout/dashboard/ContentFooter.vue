<template>
  <footer class="footer">
    <div style="font-size: 20px;"  class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/impressum'}">Impressum</router-link>
          </li>
        </ul>
      </nav>
      <div style="font-size: 20px;" class="copyright d-flex flex-wrap">
        Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="https://github.com/cosmaa" target="_blank"> &nbsp; Stani</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
