<template>
  <div>
    <h2>{{ text }}</h2>
    <svg style="background: #2c3e50;" width="100%">
      <circle r="10" cx="20" cy="20" fill="aquamarine" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SvgBox',
  props: {
    text: { type: String, required: false }
  }
}
</script>
