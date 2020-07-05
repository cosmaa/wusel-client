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
    @import 'style/master.css';
    @import url('https://fonts.googleapis.com/css?family=Material+Icons');
</style>

