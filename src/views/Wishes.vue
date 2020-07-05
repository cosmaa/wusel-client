<template>
    <div class="container">
        <div class="content">
            <h4>Wishlist</h4>
            <WishList/>
        </div>
    </div>
</template>

<script>
    import WishList from "../components/WishList";

    export default {
        name: "Wishes",
        components: {WishList}

    }
</script>
