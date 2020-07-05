<template>
  <b-card bg-variant="dark" header="header" class="my-card-frame" text-variant="white">
    <template  v-slot:header >
      <div class="p-2">
      <h4 class="mb-0">{{ title }}</h4>
      </div>
    </template>
    <b-card-body >
      <b-card-text>{{ text }}</b-card-text>
      <div class="overflow-auto" style="max-height: 300px;">
        <b-list-group v-for="(value, key) in object" :key="key">
          <b-list-group-item style="margin: 1px;" variant="light">{{ key }} : {{ value }} </b-list-group-item>
        </b-list-group>
      </div>
      <b-button-group v-for="(button, i) in buttons" :key="i" style="margin: 2px;">
        <b-button target="_blank" :href="button.button_ref" variant="primary">
          {{ button.button_text }}
        </b-button>
      </b-button-group>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardFrame',
  props: {
    title: { type: String, required: true, default: 'titel is missing' },
    text: { type: String, required: false, default: '' },
    object: { type: Object, required: false },
    list: { type: Array, required: false },
    buttons: { type: Array, required: false }
  }
}
</script>

