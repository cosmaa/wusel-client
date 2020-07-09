<template>
  <div class="main_container" style="text-align: center">
    <div class="side_content">
      <Descriptions :descriptions="texts.wish_list.descriptions" />
    </div>
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
import Descriptions from './content/Descriptions'

import Wish from './content/Wish'
import texts_json from '../../data/texts.json'

export default {
  name: 'WishList',
  components: { Descriptions, Wish },
  data() {
    return {
      texts: texts_json,
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
