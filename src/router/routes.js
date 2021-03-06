import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/in_activ/NotFoundPage.vue";

// Admin pages
import Notifications from "@/pages/in_activ/Notifications.vue";
import Icons from "@/pages/in_activ/Icons.vue";
import Maps from "@/pages/in_activ/Maps.vue";
import Typography from "@/pages/in_activ/Typography.vue";
import Impressum from "@/pages/Impressum";
import Hello from "@/pages/Hello";
import Ping from "../pages/in_activ/Ping";
import TaskList from "../pages/in_activ/TaskList";
import Bachelor from "../pages/Bachelor";
import Graph from "../pages/Graph";
import Wusel from "../pages/Wusel";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/hello",
    children: [
      {
        path: "/ping",
        name: "Ping",
        component: Ping
      },
      {
        path: "/wusel",
        name: "Wusel",
        component: Wusel
      },
      {
        path: "/hello",
        name: "Hello",
        component: Hello
      },
      {
        path: "/bachelor",
        name: "Bachelor",
        component: Bachelor
      },
      {
        path: "/graph",
        name: "ist nich geeignet für mobil-ansicht ",
        component: Graph
      },
      {
        path: "/impressum",
        name: "Impressum",
        component: Impressum
      },
      {
        path: "/notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "/icons",
        name: "icons",
        component: Icons
      },
      {
        path: "/maps",
        name: "maps",
        component: Maps
      },
      {
        path: "/typography",
        name: "typography",
        component: Typography
      },
      {
        path: "/tasks",
        name: "tasks",
        component: TaskList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
