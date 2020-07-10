<template>
  <div class="menu_container" style="overflow: hidden; text-align: center">
    <span class="menu_buttons">
      <button
        v-for="button in buttons"
        :key="button.name"
        class="menu_button"
        @click="change_main_content(button, $event)"
      >
        {{ button.name }}
      </button>
    </span>

    <span v-if="!hide_input" class="menu_input">
      <input
        v-model="input_name"
        placeholder="Name "
        type="text"
        @keyup.enter="hide_input = true"
        @input="checkExist($event)"
    /></span>

    <span class="menu_title">
      Welcome<span class="rainbow">{{ name }}</span>
    </span>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  name: "Menu",
  components: {},
  data() {
    return {
      input_name: "",
      name: "",
      hide_input: false,
      buttons: [
        {
          name: "Hello"
        },
        {
          name: "Pictures"
        },
        {
          name: "Bachelor"
        },
        {
          name: "Wish-List"
        }
      ]
    };
  },
  methods: {
    change_main_content(button, event) {
      const name = button.name;
      eventBus.$emit("change_main_content", { event, name });
    },
    checkExist(event) {
      this.name = " " + event.target.value;
    }
  }
};
</script>
