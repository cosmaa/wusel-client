<template>
    <div class="container">
        <span v-for="(link, index) in links" class="ref_btn" :key="index" ><a class="ref_text" :href="link.url" >{{ link.name }}</a></span>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                links: [
                    {
                        name: 'Imprssum',
                        url: '/impressum',
                        iconName: 'share',
                        open: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>