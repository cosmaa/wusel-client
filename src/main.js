import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "vue-d3-sunburst";

Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
