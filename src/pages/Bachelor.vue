<template>
  <div class="row">
    <PDFViewer/>

  </div>
</template>

<script>
  import axios from "axios";
  import PDFViewer from "../components/PDFViewer";

  export default {
    name: "Bachelor",
    components: {
      PDFViewer,
    },
    data() {
      return {}

    }
  }
</script>

<style scoped>


</style>
