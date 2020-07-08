<template>
  <div class="container" style="text-align: center">
    <div class="wish_list_container">
      <Wish v-for="wish in examples" :key="wish.wish" v-bind="{ wish: wish }" />
    </div>
    <div class="wish_list_container">
      <Wish v-for="(wish, index) in wishes_json" :key="index" v-bind="{ wish: wish }" />
    </div>

  </div>
</template>

<script>
import wishes_json from '../../data/wishes.json'

import Wish from './content/Wish'


export default {
  name: 'WishList',
  components: {  Wish },
  data() {
    return {

      wishes_json: wishes_json,
      examples: [
        {
          wish: 'done',
          status: 'done'
        },
        {
          wish: 'active',
          status: 'active'
        },
        {
          wish: 'todo',
          status: ''
        }
      ]
    }
  }
}
</script>

<style scoped></style>
