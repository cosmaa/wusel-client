<template>
  <div class="content">
    <div class="container-fluid">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>

</style>
