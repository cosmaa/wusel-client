<template>
    <div id='app'>
        <Background/>
        <Menu/>
        <div class="container">
        <router-view/>
        </div>
    </div>
</template>

<script>
    import Menu from "./components/Menu";
    import Background from "./components/Background";

    export default {
        name: 'App',
        components: {
            Background,
            Menu
        }
    }

</script>

<style>
    @import 'style/style.css';
    @import 'style/hello.css';
    @import 'style/wishes.css';
    @import url('https://fonts.googleapis.com/css?family=Material+Icons');
</style>

