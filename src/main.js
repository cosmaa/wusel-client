import Vue from "vue";
import App from "./App";
import router from "./router/index";
import VueD3 from "vue-d3";
import "animate.css";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
Vue.use(VueD3);
Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
