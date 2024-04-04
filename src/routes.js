
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";
import Login from "views/Login";
import ProjectDocument from "views/ProjectDocument";
import AllProject from "views/AllProject";
import NewProjectDocument from "views/NewProjectDocument";


const dashboardRoutes = [
  {
    path: "/project-doc/:id_project", // Add route parameter for id_project
    component: ProjectDocument,
    layout: "/admin"
  },
  {
    path: "/c-project-doc",
    name: "สร้างโครงการใหม่",
    icon: "nc-icon nc-notes",
    component: NewProjectDocument,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "ตารางจัดการบทบาท",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/allproject",
    name: "โครงการทั้งหมด",
    icon: "nc-icon nc-notes",
    component: AllProject,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/user"
  }
];

const GuestRoutes =[
  {
    path: "/login",
    name: "เข้าสู่ระบบ",
    icon: "nc-icon nc-notes",
    component: Login,
    layout: "/guest"
  }, {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/guest"
  },

];

const StudentRoutes =[
  {
    path: "/c-project-doc",
    name: "สร้างโครงการใหม่",
    icon: "nc-icon nc-notes",
    component: NewProjectDocument,
    layout: "/students"
  },
  {
    path: "/allproject",
    name: "โครงการทั้งหมด",
    icon: "nc-icon nc-notes",
    component: AllProject,
    layout: "/students"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/students"
  },
];
export { StudentRoutes,GuestRoutes};
export default dashboardRoutes;
