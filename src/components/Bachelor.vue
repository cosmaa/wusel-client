<template>
  <div class="container">
    <Description v-bind="{ description_de: de, title: 'BACHELOR THESIS IN PROGRESS'}" />
  </div>
</template>

<script>
import Description from './includes/Description'
import texts_json from '../../data/texts.json'

export default {
  name: 'Bachelor',
  components: { Description },
  data() {
    return {
      de: texts_json.bachelor_de
    }
  }
}
</script>
