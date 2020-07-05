<template>
    <div class="content">
        <h1>Welcome<span class="rainbow" id="name"></span>, to <span class="rainbow">WUSEL.SPACE</span></h1>
        Name: <input type="text" id="fname">
        <input type="button" id="enter_name" onclick="validateForm()" value="Submit">
    </div>
</template>

<script>
    export default {
        name: "Hello"
    }
</script>

<style scoped>

</style>