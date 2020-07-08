<template>
  <div class="wish_card">
    <div class="wish_card_title">
      <p class="wish_card_text">{{ wish }}</p>
    </div>
    <div class="wish_card_container"/>
  </div>
</template>

<script>
export default {
  name: 'Wish',
  props: {
    wish: { type: String, required: true, default: 'default-wish (data is missing)' },
    status: { type: String, required: false, default: '' }
  }
}
</script>
