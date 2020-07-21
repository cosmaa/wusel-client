<template>
  <div>

    <div class="title">
      <h1><a href="https://github.com/emiliorizzo/vue-d3-network">vue-d3-network</a></h1>
      <!-- example control -->
      <ul class="menu">
        <li>
          <label> Node size </label>
          <input type="range" min="1" max="100" v-model='nodeSize'/> {{ options.nodeSize }}
        </li>
      </ul>
    </div>
    <d3-network ref="net" :netNodes="nodes" :netlinks="links" :options="options"/>

  </div>
</template>

<script>
  import D3Network from "vue-d3-network"

  export default {
    name: "NetWork",
    components: {
      D3Network
    },
    data() {
      return {
        nodes: [
          {id: 1, name: 'my awesome node 1'},
          {id: 2, name: 'my node 2', _color: '#4466ff'},
          {id: 3, name: 'orange node', _color: 'orange'}
        ],
        links: [
          {sid: 1, tid: 2},
          {sid: 3, tid: 1, _svgAttrs: {'stroke-width': 8, opacity: 1}, name: 'custom link'}
        ]
      }
    },
    computed: {
      options() {
        return {
          force: 3000,
          size: {w: 500, h: 500},
          nodeSize: this.nodeSize,
          nodeLabels: true,
          linkLabels: true,
          canvas: this.canvas
        }
      }
    }
  }
</script>

<style scoped>

  .title {
    position: absolute;
    text-align: center;
    left: 2em;
  }

  h1, a {
    color: #1aad8d;
    text-decoration: none;
  }

  ul.menu {
    list-style: none;
    position: absolute;
    z-index: 100;
    min-width: 20em;
    text-align: left;
  }

  ul.menu li {
    margin-top: 1em;
    position: relative;
  }

</style>
