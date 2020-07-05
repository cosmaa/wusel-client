<template>
  <b-row no-gutters>
    <b-col col lg="3">
      <CardFrame v-bind="{ text: text, title: title, buttons: buttons }" />
    </b-col>
    <b-col col lg="9">
      <CardFrame v-bind="{ text: 'text', title: 'CONTENT' }" />
    </b-col>
  </b-row>
</template>

<script>
import CardFrame from '../components/frames/CardFrame'

export default {
  name: 'Home',
  components: { CardFrame },
  data() {
    return {
      title: 'Bachelor Thesis',
      text: 'Visualization of infrastructure for team kraken' + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ',
      list: [],
      buttons: [
        {
          button_text: 'pdf bachelor thesis',
          button_ref: 'https://www.overleaf.com/read/pwpptnkrqxmh'
        },
        {
          button_text: 'aws overview video',
          button_ref: 'https://www.youtube.com/watch?v=Z3SYDTMP3ME'
        }
      ],
      imag_url: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-512.png'
    }
  }
}
</script>
