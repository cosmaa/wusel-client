<template>
  <div class="container">
    <div class="content">
      <h1>
        Welcome<span class="rainbow">{{ name }}</span
        >, to <span class="rainbow">WUSEL.SPACE</span>
      </h1>
      Name: <input v-model="form.name" type="text" @input="checkExist($event)" />
      <!--Todo Submit button for sign in-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      form: { name: '' },
      name: ''
    }
  },
  methods: {
    checkExist(event) {
      this.name = ' ' + event.target.value
    }
  }
}
</script>
