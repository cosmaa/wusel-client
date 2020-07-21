<template>
  <div class="movies" style="background-color: aquamarine;padding: 5px; margin: 10px;">
      <svg viewBox="0 0 300 300" style="background-color: white">
        <g x="100px">
          <circle r="50px"  cx="100px" cy="100px"  fill="orange"></circle>
          <text class="label" x="100px" y="100px" > text</text>

        </g>


      </svg>
  </div>
</template>

<script>
  import axios from "axios";


  export default {
    name: "Bachelor",
    components: {
    },
    data() {
      return {
        nodes: [
          {id: 1, name: 'my awesome node 1'},
          {id: 2, name: 'orange node', _color: 'orange'}
        ],
        links: [
          {sid: 1, tid: 2}
        ]

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
