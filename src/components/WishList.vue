<template>
  <div class="container" style="text-align: center">
    <Description v-bind="{ description_de: de, description_en: en, title: 'HÄÄÄ WISHLIST ?'}" />
    <div class="wish_list_container">
      <Wish v-for="(wish, index) in wishes_json" :key="index" v-bind="{ wish: wish.wish }" />
    </div>
  </div>
</template>

<script>
import wishes_json from '../../data/wishes.json'
import texts_json from '../../data/texts.json'
import Wish from './includes/Wish'
import Description from "./includes/Description";

export default {
  name: 'WishList',
  components: { Description, Wish },
  data() {
    return {
      en: texts_json.wish_en,
      de: texts_json.wish_de,
      wishes_json: wishes_json
    }
  }
}
</script>

<style scoped></style>
