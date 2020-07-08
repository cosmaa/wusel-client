<template>
  <div class="container">
    Hallo
    </div>
</template>

<script>

import texts_json from '../../data/texts.json'

export default {
  name: 'Bachelor',
  components: {  },
  data() {
    return {
      de: texts_json.bachelor_de
    }
  }
}
</script>
