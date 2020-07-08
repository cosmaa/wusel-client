<template>
  <div class="container_left">
    <div class="descriptions_container">
      <Description v-bind="{ description_de: hello.wusel_de, description_en: hello.wusel_en, title: 'WHAT\'S WUSEL.SPACE ?' }" />
      <Description v-bind="{ description_de: hello.de, description_en: hello.en, title: 'WHY ENGLISH ?' }" />
    </div>
    <div class="descriptions_container">
      <Description v-bind="{ description_de: bachelor.de, title: 'BACHELOR THESIS IN PROGRESS' }" />
    </div>
    <div class="descriptions_container">
      <Description v-bind="{ description_de: wish_list.de, description_en: wish_list.en, title: 'HÄÄÄ WISHLIST ?' }" />
    </div>
  </div>
</template>

<script>
import texts_json from '../../../data/texts.json'
import Description from '../content/Description'
import Wish from '../content/Wish'

export default {
  name: 'LeftSidebar',
  components: { Description },
  data() {
    return {
      hello: {
        en: texts_json.hello_text_en,
        de: texts_json.hello_text_de,
        wusel_en: texts_json.wusel_en,
        wusel_de: texts_json.wusel_de
      },
      wish_list: {
        en: texts_json.wish_en,
        de: texts_json.wish_de
      },
      bachelor: {
        de: texts_json.bachelor_de
      }
    }
  }
}
</script>

<style scoped></style>
