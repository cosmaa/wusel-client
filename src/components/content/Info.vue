<template>
  <div class="description_div">
    <button  v-if="isHidden" class="show_button" @click="isHidden = false" v-html="title">{{ title }}</button>
    <div v-if="!isHidden" class="description_content">
      <button class="show_button" v-html="title" @click="isHidden = true">{{ title }}</button>
      <button class="language_button" @click="change_language()">{{ value }}</button>
      <span class="description_text" v-html="text">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    title: { type: String, required: false , default: 'INFOS?'},
    de: { type: String, required: false , default: 'äääähh keene Übersätzung, wa!'},
    en: { type: String, required: false , default: 'äääähh no translation, nüff!'},
  },
  data() {
    return {
      value: 'de?',
      text: this.en,
      isHidden: true,
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
