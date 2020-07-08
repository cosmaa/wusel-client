<template>
  <div>
    <div class="header">
      <Menu v-model="component_selected" />
    </div>
    <div class="main_container">
      <Hello v-if="component_selected === 'Hello'" />
      <WishList v-if="component_selected === 'Wish-List'" />
      <Impressum v-if="component_selected === 'Impressum'" />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/includes/Footer'
import Menu from '../components/includes/Menu'
import Hello from '../components/Hello'
import WishList from '../components/WishList'
import { eventBus } from '../main'
import Impressum from '../components/Impressum'

export default {
  name: 'Landing',
  components: { Impressum, WishList, Hello, Menu, Footer },
  data() {
    return {
      component_selected: 'Hello'
    }
  },
  created() {
    eventBus.$on('change_main_content', data => {
      this.component_selected = data.name
    })
  }
}
</script>
