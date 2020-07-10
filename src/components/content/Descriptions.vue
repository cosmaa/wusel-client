<template>
  <div class="descriptions_container">
    <Info
      v-for="(info, index) in descriptions"
      :key="index"
      :title="info.title"
      :en="info.en"
      :de="info.de"
    />
  </div>
</template>

<script>
import Info from "./Info";
export default {
  name: "Descriptions",
  components: { Info },
  props: {
    descriptions: { type: Array, required: false, default: () => [] }
  }
};
</script>

<style scoped></style>
