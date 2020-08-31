<template >
    <div id="menu">
        <ul class="test-menu" v-if="setts" >
            <li >
                <label>Nodes: <span>{{setts.maxNodes}}</span></label>
                <input type="range" v-model.number="setts.maxNodes" @input="change" min="1" max="500" step="1"/>
            </li>
            <li>
                <label>Max Links per Node: <span>{{setts.maxLinks}}</span></label>
                <input type="range" v-model.number="setts.maxLinks" @input="change" min="1" max="10" step="1"/>
            </li>
            <li>
                <button class="btn" @click="$emit('simulate')">Simulate</button>
            </li>
        </ul>
        <ul class="test-menu">
            <li>
                <label>Forces: <span>{{opts.force}}</span></label>
                <input type="range" v-model.number="opts.force" @input="change" min="1" max="5000" step="1"/>
            </li>
            <li>
                <label>Offset X: <span>{{opts.offset.x}}</span></label>
                <input type="range" v-model.number="opts.offset.x" @input="change" min="-1000" max="1000" step="1"/>
            </li>
            <li>
                <label>Offset Y: <span>{{opts.offset.y}}</span></label>
                <input type="range" v-model.number="opts.offset.y" @input="change" min="-1000" max="1000" step="1"/>
            </li>
            <li>
                <input type="checkbox" v-model="opts.icon" @change="change"/>
                <label>Node Sprite</label>
            </li>
        </ul>
        <ul class="test-menu">
            <li>
                <label>Node Size: <span>{{opts.nodeSize }}</span></label>
                <input type="range" v-model.number="opts.nodeSize" @input="change" min="3" max="100" step="1"/>
            </li>
            <li>
                <label>Link Thickness: <span>{{opts.linkWidth }}</span></label>
                <input type="range" v-model.number="opts.linkWidth" @input="change" min="1" max="15" step="1"/>
            </li>
            <li>
                <input type="checkbox" v-model="opts.linkLabels" @change="change"/>
                <label>Show link names</label>
            </li>
            <li  >
                <input type="checkbox" v-model="opts.nodeLabels" @change="change"/>
                <label>Show node names</label>
            </li>
            <li v-if="opts.nodeLabels || opts.linkLabels">
                <label>Font Size: <span>{{opts.fontSize}}</span></label>
                <input type="range" v-model.number="opts.fontSize" @input="change" min="1" max="30" step="1"/>
            </li>
            <li  >
                <input type="checkbox" v-model="opts.strLinks" @change="change"/>
                <label>Straight Links</label>
            </li>
        </ul>
    </div>
</template>
<script>
import defaultData from './defaultdata.js'
export default {
  props: ['links', 'nodes', 'settings', 'options'],
  data () {
    let data = Object.assign({}, defaultData)
    return {
      opts: data.options,
      showNodeValues: false,
      showLinkValues: false,
      setts: null
    }
  },
  created () {
    this.opts = this.options
    this.setts = this.settings
  },
  methods: {
    change () {
      this.$emit('options', this.opts)
    },
    reset () {
      this.opts = Object.assign({}, defaultData.options)
      this.options.width = this.$el.clientWidth
      this.options.height = this.$el.clientHeight
      this.$emit('reset', this.options)
    },
    emit (e) {
      this.$emit(e)
    }
  }
}
</script>
<style src="../assets/css/icons.css"></style>
<style lang="stylus" scoped>
 @import '../lib/styl/vars.styl'

.test-menu
  display: block
  padding: 0.2em
  list-style: none
  li
    margin: 0.5em 0
    label
      font-size: 0.85em
      display: block
      span
        font-weight: normal
    input + label
      display: inline
      margin-left: .2em

ul.test-menu + ul.test-menu
  border-left: none

</style>
