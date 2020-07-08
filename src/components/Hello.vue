<template>
  <div class="container">
  <div class="descriptions_container">
    <Description v-bind="{ description_de: wusel_de, description_en: wusel_en, title: 'WHAT\'S WUSEL.SPACE ?' }" />
    <Description v-bind="{ description_de: de, description_en: en, title: 'WHY ENGLISH ?' }" />
  </div>
  </div>
</template>

<script>
import Description from './includes/Description'
import texts_json from '../../data/texts.json'

export default {
  name: 'Hello',
  components: { Description },
  data() {
    return {
      form: { name: '' },
      name: '',
      en: texts_json.hello_text_en,
      de: texts_json.hello_text_de,
      wusel_en: texts_json.wusel_en,
      wusel_de: texts_json.wusel_de
    }
  },
  methods: {
    checkExist(event) {
      this.name = ' ' + event.target.value
    }
  }
}
</script>
