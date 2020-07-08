<template>
  <div class="content">
    <span class="wusel_h4">{{title}}</span>
    <button class="language_button" @click="change_language()">{{ value }}</button>
    <p>
      <span id="text_wish_list" class="description_text_wish_list" v-html="text">
        {{ text }}
      </span>
    </p>
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
      text: this.description_en
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
