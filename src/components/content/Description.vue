<template>
  <div class="description_div">
    <button v-if="isHidden" class="show_button" @click="isHidden = false">{{ title }}</button>
    <div v-if="!isHidden" class="description_content">
      <button class="hide_button" @click="isHidden = true">X</button>
      <span class="description_title">{{ title }}</span>
      <button class="language_button" @click="change_language()">{{ value }}</button>
      <span class="description_text" v-html="text">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topic',
  props: {
    title: { type: String, required: false },
    description_en: { type: String, required: false, default: 'äääähh no translation, nüff!' },
    description_de: { type: String, required: false, default: 'äääähh keene Übersätzung, wa!' }
  },
  data() {
    return {
      value: 'de?',
      text: this.description_en,
      isHidden: true
    }
  },
  computed() {
    this.data.text = this.props.description_en
  },
  methods: {
    change_language() {
      if (this.value === 'de?') {
        this.text = this.description_de
        this.value = 'en?'
      } else {
        this.text = this.description_en
        this.value = 'de?'
      }
    }
  }
}
</script>

<style scoped></style>
