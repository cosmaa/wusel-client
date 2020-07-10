<template>
  <div class="wish_card" :class="cardClasses" @click="toggle_active()">
    <div class="wish_card_title">
      <p class="wish_card_text">{{ wish.wish }}</p>
    </div>
    <div class="wish_card_container" />
  </div>
</template>

<script>
export default {
  name: "Wish",
  props: {
    wish: { type: Object, required: true }
  },
  data() {
    return {
      status: this.wish.status,
      is_active: this.wish.status === "active",
      is_done: this.wish.status === "done"
    };
  },
  computed: {
    cardClasses() {
      return {
        card_active: this.is_active,
        card_done: this.is_done
      };
    }
  },
  methods: {
    toggle_active() {
      alert(
        "nice soon you can see all tasks an decisions for this wish/todo if you click on it!"
      );
    }
  }
};
</script>
