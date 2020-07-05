<template>

        <div class="wish_list_container" >
            <Wish v-for="(wish,index) in myJson" :key="index" v-bind="{wish: wish.wish}"/>
        </div>


</template>

<script>
    import json from '../data/wishes.json'
    import Wish from "./Wish";

    export default {
        name: "WishList",
        components: {Wish},
        data() {
            return {
                myJson: json
            }
        }
    }
</script>

<style scoped>

</style>