<template>
  <div class="container" style="text-align: center">
      <button class="language_button" @click="change_language()">{{ value }}</button>
      <p>
    <span v-html="text" id="text_wish_list" class="description_text_wish_list">
      {{ text }}
    </span>
      </p>

    <div class="wish_list_container">
      <Wish v-for="(wish, index) in myJson" :key="index" v-bind="{ wish: wish.wish }" />
    </div>
  </div>
</template>

<script>
import json from '../../data/wishes.json'
import Wish from './includes/Wish'

export default {
  name: 'WishList',
  components: { Wish },
  data() {
    return {
      value: 'de?',
      text: '',
      en:
        "This is a list of tasks and projects that I (and Renate) are working on. <span class='rainbow'>Wusel.Space</span>  is in English as it is an ongoing process of learning to speak and write English. Soon there will be an area where you can tell me if I have misspelled something.",
      de:
        "Das ist eine Liste von Aufgaben und Projekten an denen ich (und Renate) arbeiten. <span class='rainbow'>Wusel.Space</span> ist auf Englisch, da es ein fortlaufender Prozesse ist english reden und schreiben zu lernen. Bald gibts auch einen Bereich, in dem ihr mir mitteilen könnt wenn ich etwas falsch geschrieben habe.",
      myJson: json
    }
  },
  created() {
    this.text = this.en
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
