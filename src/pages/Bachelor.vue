<template>
  <div class="row">
    <div  class="col-xl-6 col-lg-9 col-md-10">
      {{currentPage}} / {{pageCount}}
      <pdf
        :src="my_pdf"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
      ></pdf>
    </div>
    <div style="background-color: rgba(205,0,252,0.36);padding: 5px; margin: 15px; width: 48%">
      <svg height="400px" width="100%" style="background-color: white">
        <g x="100px">
          <circle r="20px" cx="50px" cy="50px" fill="orange"></circle>
          <text class="label" x="50px" y="50px">todo</text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import pdf from 'vue-pdf'

  export default {
    name: "Bachelor",
    components: {
      pdf
    },
    data() {
      return {
        my_pdf: require('@/assets/pdfs/expose1.pdf'),
        nodes: [
          {id: 1, name: 'my awesome node 1'},
          {id: 2, name: 'orange node', _color: 'orange'}
        ],
        links: [
          {sid: 1, tid: 2}
        ],
        currentPage: 0,
        pageCount: 0,

      }
    },
    mounted() {
      const path = 'http://0.0.0.0:5000/api/graph'
      axios.get(path)
        .then((res) => {
          this.nodes = res.data.nodes;
          this.links = res.data.links;
        })

    }
  }
</script>

<style scoped>


</style>
