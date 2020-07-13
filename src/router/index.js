import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes, // short for routes: routes
  linkActiveClass: "active"
});

export default router;
