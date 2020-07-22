<template>
  <div class="bachelor" style="background-color: rgba(205,0,252,0.36);padding: 10px;">
    <svg viewBox="0 0 100 100" style="background-color: white">
      <g x="100px">
        <circle r="10px"  cx="50px" cy="50px"   fill="orange"></circle>
        <text class="label" x="50px" y="50px" >todo</text>
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
