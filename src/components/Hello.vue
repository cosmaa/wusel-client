<template>
  <div class="main_container">
    <div class="side_content">
      <Descriptions :descriptions="texts.hello.descriptions" />
    </div>
  </div>
</template>

<script>
import texts_json from '../../data/texts.json'
import Descriptions from './content/Descriptions'

export default {
  name: 'Hello',
  components: { Descriptions },
  data() {
    return {
      texts: texts_json
    }
  }
}
</script>
