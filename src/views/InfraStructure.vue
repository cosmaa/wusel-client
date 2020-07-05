<template>
  <b-row no-gutters>
    <b-col col lg="3">
      <CardFrame v-bind="{ text: text, title: title, list: list, buttons: buttons }" />
    </b-col>
    <b-col col lg="9">
      <CardFrame v-bind="{ text: 'text', title: 'CONTENT' }" />
    </b-col>
  </b-row>
</template>

<script>
import CardFrame from '../components/frames/CardFrame'

export default {
  name: 'Infrastructure',
  components: { CardFrame },
  data() {
    return {
      title: 'Infrastructure of Kraken Resources',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ',
      list: [],
      buttons: [
        {
          button_text: 'info on github',
          button_ref: 'https://confluence.scm.otto.de/display/P20/Willkommen+im+Confluence+von+Projekt+Deep+Sea'
        }
      ]
    }
  }
}
</script>
