<template >
        <graph-example id="graph-wrapper" />
</template>

<script>
import graphExample from './content/graph/example/graph-example.vue'

export default {
  components: {
    graphExample
  }
}
</script>
<style lang="stylus">
@import 'content/graph/lib/styl/vars.styl'

#graph-wrapper
  background-color white

  .menu-container
    bottom 0
    margin: 5em
    width: 5em
    max-width: 10em
    font-size: 1.7em
    letter-spacing: 0.0325em
    color: $color2
  div.menu
    border: $dark 1px solid
    border-top-width: 5px
    border-bottom-width: 5px
    padding: 1em 2em
    background-color: $color
    color: white
    box-shadow: $sh
    margin-top: 1em
    .title
      border: 1.5px $lightness
      border-style: dotted none
      padding: .5em 0

      h1, h2
        margin:0 0 .5em 0
      h1
        font-size: 1.7em
        letter-spacing: 0.0325em
        font-family: 'Belgrano', serif
        text-shadow: $sh, $sh
      h2
        font-size: 0.8em
        font-style: italic
       letter-spacing: 0.0625em

  .links
    margin: 1em 5em 0 0
    position: absolute
    list-style: none
    top: 0
    right: 0

  .icon
    svg
      padding: 0.1em
      background-color: white
      border-radius: 50%
      display: inline-block
      width: 3em
      height: 3em
      fill: $color3

  .set
    margin: 1em
    display: inline-block

  .console
    display: block
    max-width: 20em
    position: fixed
    margin: 5em
    right: 0
    bottom: 0
    color: $dark

</style>
