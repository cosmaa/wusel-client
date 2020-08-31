<template >
    <div id="selection" class="notification" >
      <div class="close" @click='emit("clearSelection")'>
      </div>
      <table class="mini">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr  v-for="(value,key) in nodes" :key="key">
                    <td>{{value.id}}</td>
                    <td>{{value.name}}</td>
                    <td>
                        <button class="icon" @click='emit("removeNode",[value.id])' title="delete">
                            <span class="icon-delete"> </span>
                        </button>
                    </td>
                    <td>
                        <button class="icon" @click='emit("unSelectNode",[value.id])' title="unselect">
                            ❌
                        </button>
                    </td>
                </tr>
            </table>
      <span >selected Nodes: <strong>{{ Object.keys(nodes).length }}</strong></span>
      <span>, Links: <strong>{{ Object.keys(links).length }}</strong></span>
    </div>
</template>
<script>
export default {
  props: ['data'],
  methods: {
    emit (action, args) {
      this.$emit('action', action, args)
    }
  },
  computed: {
    links () {
      return this.data.links
    },
    nodes () {
      return this.data.nodes
    }
  }
}
</script>
<style lang="stylus">
@import '../lib/styl/vars.styl'
  $btn-size = 1em

span
  font-size: 1em

button.icon
  background-color: rgba(255, 255, 255, 0)
  border-style: none
  height: $btn-size
  width: $btn-size
  line-height: 1.25em
  border-radius: 50%
  padding:0
  margin:0
  color:$color2

button.big
  margin-bottom: 1em
  span
    font-size: 1em

.close
  position absolute
  top 0
  right 0

  &:after
    color $dark

  &:hover
    &::after
      color $color
.mini
  font-size: 1em

 .title
    color: $color
table
  border-collapse: collapse
tr
  border-bottom: solid 1px lightgrey
th
  border-bottom: solid 2px lightgrey
th
td
  padding: 0 .5em
  text-align: left

.notification
  position: absolute
  bottom: 6.5em
  right: 1em
  z-index: 100
  width: auto
  padding: 1.5em 0.5em 0.5em 0.5em
  border-radius: 0.5em
  box-shadow: $box-sh
  border: $border
  background-color: $color3
  box-shadow: $hard-sh

</style>
