<template>
  <div class="col-xl-6 col-lg-12 col-md-12">
    <input type="checkbox" v-model="show">
    <select v-model="src" style="width: 30em">
      <option v-for="item in pdfList" :value="item.pdf" v-text="item.name"></option>
    </select>
    <input v-model.number="page" type="number" style="width: 5em"> /{{numPages}}
    <hr>
    <pdf v-if="show" ref="pdf" :src="src" :page="page" @num-pages="numPages = $event"
         @link-clicked="page = $event"></pdf>

  </div>
</template>
<script>
  import pdf from 'vue-pdf'
  import file from '@/assets/img/pdf/expose1.pdf'

  export default {
    components: {
      pdf
    },
    data() {
      return {
        show: true,
        pdfList: [
          {
            pdf: file,
            name: " Expose: Kommunikation/Kopplung"
          }
        ],
        src: file,
        loadedRatio: 0,
        page: 1,
        numPages: 0,
        rotate: 0,
      }
    }
  }
</script>
