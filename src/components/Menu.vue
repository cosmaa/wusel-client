<template>
    <div class="header">
        <nav class="nav_bar">
            <ul>
            <span v-for="(link, index) in links" :key="index">
                <li>
                    <a class="header_btn" :href="link.url">
                        <p class="btn_text">
                            {{ link.name }}
                        </p>
                    </a>
                </li>
            </span>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        components: {},
        data() {
            return {
                links: [
                    {
                        name: 'Hello',
                        url: '/',
                        iconName: 'waves',
                        open: false
                    },
                    {
                        name: 'Wish-List',
                        url: '/wishes',
                        iconName: 'directions_boat',
                        open: false
                    },
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
