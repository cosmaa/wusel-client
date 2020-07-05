<template>
    <div id='app'>
        <Background/>
        <div class="header">
            <Menu/>
        </div>
        <div class="main_container">
            <router-view/>
        </div>
        <div class="footer">
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Menu from "./components/Menu";
    import Background from "./components/Background";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {
            Footer,
            Background,
            Menu
        }
    }

</script>

<style>
    @import 'master.css';
    @import url('https://fonts.googleapis.com/css?family=Material+Icons');
</style>

