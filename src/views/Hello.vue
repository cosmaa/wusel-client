<template>
    <div class="content">
        <h1>Welcome<span class="rainbow">{{name}}</span>, to <span class="rainbow">WUSEL.SPACE</span></h1>
        Name: <input type="text" @input="checkExist($event)" v-model="form.name">
        <!--Todo Submit button for sign in-->
    </div>
</template>

<script>
    export default {
        name: 'Hello',
        data() {
            return {
                form: {name: ""},
                name: ""
            }
        },
        methods: {
            checkExist(event) {
                this.name = " " + event.target.value;

            }

        }
    }
</script>