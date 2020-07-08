<template>
  <div class="container" style="text-align: center">
    <h4 class="wusel_h4">WISH-LIST</h4>
    <button class="language_button" @click="change_language()">{{ value }}</button>
    <p>
      <span id="text_wish_list" class="description_text_wish_list" v-html="text">
        {{ text }}
      </span>
    </p>

    <div class="wish_list_container">
      <Wish v-for="(wish, index) in wishes_json" :key="index" v-bind="{ wish: wish.wish }" />
    </div>
  </div>
</template>

<script>
import wishes_json from '../../data/wishes.json'
import texts_json from '../../data/texts.json'
import Wish from './includes/Wish'

export default {
  name: 'WishList',
  components: { Wish },
  data() {
    return {
      value: 'de?',
      text: texts_json.en,
      en: texts_json.en,
      de: texts_json.de,
      wishes_json: wishes_json
    }
  },
  methods: {
    change_language() {
      if (this.value === 'de?') {
        this.text = this.de
        this.value = 'en?'
      } else {
        this.text = this.en
        this.value = 'de?'
      }
    }
  }
}
</script>

<style scoped></style>
