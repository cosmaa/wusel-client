<template>
  <header>
    <b-navbar  type="dark" variant="dark">
      <b-navbar-nav v-for="(link, index) in links" :key="index" v-bind="{ link, index, open: link.open }" align="center" >
        <b-nav-item  size="sm" :to="link.url" >

          <h4><i style="vertical-align: bottom;" class="material-icons">{{ link.iconName }}</i> {{ link.name }}</h4>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  components: {},
  data() {
    return {
      links: [
        {
          name: 'Home',
          url: '/',
          iconName: 'waves',
          open: false
        },
        {
          name: 'Resources',
          url: '/resources',
          iconName: 'directions_boat',
          open: false
        },
        {
          name: 'Infra',
          url: '/infra',
          iconName: 'share',
          open: false
        }
      ]
    }
  }
}
</script>
