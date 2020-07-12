import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Impressum from "@/pages/Impressum";
import Hello from "@/pages/Hello";
import Projects from "../pages/Projects";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/hello",
    children: [
      {
        path: "hello",
        name: "Hello",
        component: Hello,
        icon: "ti-rocket"
      },
      {
        path: "impressum",
        name: "Impressum",
        component: Impressum,
        icon: "ti-rocket"
      },
      {
        path: "projects",
        name: "Projects",
        component: Projects,
        icon: "ti-rocket"
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
        icon: "ti-rocket"
      },
      {
        path: "icons",
        name: "icons",
        component: Icons,
        icon: "ti-rocket"
      },
      {
        path: "maps",
        name: "maps",
        component: Maps,
        icon: "ti-rocket"
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
        icon: "ti-rocket"
      },
      {
        path: "todos",
        name: "todos",
        component: TableList,
        icon: "ti-rocket"
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
