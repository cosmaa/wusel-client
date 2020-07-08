<template>
  <div class="container" style="overflow: hidden">
    <button v-for="button in buttons" :key="button.name" class="menu_button" @click="change_main_content(button, $event)">{{ button.name }}</button>
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'Menu',
  components: {},
  data() {
    return {
      buttons: [
        {
          name: 'Hello'
        },
        {
          name: 'Wish-List'
        }
      ]
    }
  },
  methods: {
      change_main_content(button, event) {
      const name = button.name
      eventBus.$emit('change_main_content', { event, name })
    }
  }
}
</script>
