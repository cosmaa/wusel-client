import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import Impressum from "@/pages/Impressum";
import Hello from "@/pages/Hello";
import Projects from "../pages/Projects";
import Ping from "../layout/Ping";
import TaskList from "../pages/TaskList";

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
        path: "hello",
        name: "Hello",
        component: Hello
      },

      {
        path: "impressum",
        name: "Impressum",
        component: Impressum
      },
      {
        path: "projects",
        name: "Projects",
        component: Projects
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "tasks",
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
