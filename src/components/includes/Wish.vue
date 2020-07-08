<template>
    <div class="wish_card" >
        <div class="wish_card_title">
            <p class="wish_card_text">{{wish}}</p>
        </div>
        <div class="wish_card_container">
            {{tasks}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Wish",
        props: {
            wish: { type: String, required: true, default: 'default-wish (data is missing)'},
            tasks: {type: Array , required: false},
        }
    }
</script>

