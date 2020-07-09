<template>
  <div>
    <div class="header_div">
      <Menu v-model="component_selected" />
    </div>
    <div class="main_div">
      <LeftSidebar />
      <Hello v-if="component_selected === 'Hello'" />
      <WishList v-if="component_selected === 'Wish-List'" />
      <Impressum v-if="component_selected === 'Impressum'" />
      <Bachelor v-if="component_selected === 'Bachelor'" />
      <Pictures v-if="component_selected === 'Pictures'" />
    </div>
    <div class="footer_div">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/panels/Footer'
import Menu from '../components/panels/Menu'
import Hello from '../components/Hello'
import WishList from '../components/WishList'
import { eventBus } from '../main'
import Impressum from '../components/Impressum'
import Bachelor from '../components/Bachelor'
import LeftSidebar from '../components/panels/LeftSidebar'
import Pictures from '../components/Pictures'

export default {
  name: 'Landing',
  components: { Pictures, LeftSidebar, Bachelor, Impressum, WishList, Hello, Menu, Footer },
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
