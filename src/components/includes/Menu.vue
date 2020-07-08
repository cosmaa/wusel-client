<template>
  <div class="container" style="overflow: hidden; text-align: center">
    <span class="menu_buttons">
      <button v-for="button in buttons" :key="button.name" class="menu_button" @click="change_main_content(button, $event)">{{ button.name }}</button>
    </span>
    <span
class="menu_title"
      >Welcome<span class="rainbow">{{ name }}</span
      >, to <span class="rainbow">WUSEL.SPACE</span>
    </span>
    <span class="menu_input"> Name: <input v-model="form.name" type="text" @input="checkExist($event)"/></span>
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'Menu',
  components: {},
  data() {
    return {
      form: { name: '' },
      name: '',
      buttons: [
        {
          name: 'Hello'
        },
        {
          name: 'Bachelor'
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
    },
    checkExist(event) {
      this.name = ' ' + event.target.value
    }
  }
}
</script>
