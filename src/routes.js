
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableListStudent from "views/TableListStudent.js";
import TableListPersonel from "views/TableListPersonel.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
// import Upgrade from "views/Upgrade.js";
import Login from "views/Login";
import ProjectDocument from "views/ProjectDocument";
import AllProject from "views/AllProject";
import NewProjectDocument from "views/NewProjectDocument";
import test from "views/test";
import DTableAddBudget from "views/DTableAddBudget";
import DetailBudget from "views/DetailBudget";

const dashboardRoutes = [
  {
    path: "/project-doc/:id_project", // Add route parameter for id_project
    component: ProjectDocument,
    layout: "/admin"
  },
  {
    path: "/allproject",
    name: "โครงการทั้งหมด",
    icon: "nc-icon nc-bullet-list-67",
    component: AllProject,
    layout: "/admin",
    color: "#fff2e5"
  },
  {
    path: "/Listbudgetproject",
    name: "งบประมาณทั้งหมด",
    icon: "nc-icon nc-chart-bar-32",
    component: DetailBudget,
    layout: "/admin",
    color: "#ffd9b3"
  },
  {
    path: "/addbudgetproject",
    name: "เพิ่มงบประมาณ",
    icon: "nc-icon nc-preferences-circle-rotate",
    component: DTableAddBudget,
    layout: "/admin",
    color: "#ffc080"
  },
  {
    path: "/tablestudent",
    name: "จัดการบทบาทนักศึกษาและที่ปรึกษา",
    icon: "nc-icon nc-ruler-pencil",
    component: TableListStudent,
    layout: "/admin",
    color: "#ffa64d"
  },
  {
    path: "/tablepersonal",
    name: "จัดการบทบาทบุคลากร",
    icon: "nc-icon nc-single-02",
    component: TableListPersonel,
    layout: "/admin",
    color: "#ff8d1a"
  },
  
  
  
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Dashboard,
  //   layout: "/admin"
  // },

  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin"
  // },

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/test",
  //   name: "test",
  //   icon: "nc-icon nc-pin-3",
  //   component: test,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/user"
  // }
];

const StuactRoutes = [
  {
    path: "/project-doc/:id_project", // Add route parameter for id_project
    component: ProjectDocument,
    layout: "/stuact"
  },
  {
    path: "/allproject",
    name: "โครงการทั้งหมด",
    icon: "nc-icon nc-bullet-list-67",
    component: AllProject,
    layout: "/stuact",
    color: "#fffbb3"
  },
  {
    path: "/Listbudgetproject",
    name: "งบประมาณทั้งหมด",
    icon: "nc-icon nc-chart-bar-32",
    component: DetailBudget,
    layout: "/stuact",
    color: "#fff880"
  },
  {
    path: "/addbudgetproject",
    name: "เพิ่มงบประมาณ",
    icon: "nc-icon nc-preferences-circle-rotate",
    component: DTableAddBudget,
    layout: "/stuact",
    color: "#fff44d"
  },
  {
    path: "/tablestudent",
    name: "จัดการบทบาทนักศึกษาและที่ปรึกษา",
    icon: "nc-icon nc-ruler-pencil",
    component: TableListStudent,
    layout: "/stuact",
    color: "#fff21a"
  },
  // {
  //   path: "/tablepersonal",
  //   name: "จัดการบทบาทบุคลากร",
  //   icon: "nc-icon nc-single-02",
  //   component: TableListPersonel,
  //   layout: "/stuact",
  //   color: "#e6d800"
  // },
  
  
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Dashboard,
  //   layout: "/stuact"
  // },

  
];
const AdviserRoutes = [
  {
    path: "/project-doc/:id_project", // Add route parameter for id_project
    component: ProjectDocument,
    layout: "/adviser"
  },
  {
    path: "/allproject",
    name: "โครงการทั้งหมด",
    icon: "nc-icon nc-bullet-list-67",
    component: AllProject,
    layout: "/adviser",
    color: "#80ff80"
  },
  {
    path: "/Listbudgetproject",
    name: "งบประมาณทั้งหมด",
    icon: "nc-icon nc-chart-bar-32",
    component: DetailBudget,
    layout: "/adviser",
    color: "#1aff1a"
  },

];

const StudentRoutes = [
  {
    path: "/project-doc/:id_project", // Add route parameter for id_project
    component: ProjectDocument,
    layout: "/students"
  },
  {
    path: "/c-project-doc",
    name: "สร้างโครงการใหม่",
    icon: "nc-icon nc-notes",
    component: NewProjectDocument,
    layout: "/students",
    color: "#8080ff"
  },
  {
    path: "/allproject",
    name: "โครงการทั้งหมด",
    icon: "nc-icon nc-bullet-list-67",
    component: AllProject,
    layout: "/students",
    color: "#4d4dff"
  },
  {
    path: "/Listbudgetproject",
    name: "งบประมาณทั้งหมด",
    icon: "nc-icon nc-chart-bar-32",
    component: DetailBudget,
    layout: "/students",
    color: "#1a1aff"
  },

];

const GuestRoutes = [
  {
    path: "/login",
    name: "เข้าสู่ระบบ",
    icon: "nc-icon nc-notes",
    component: Login,
    layout: "/guest",
    // color: "#1a1aff"
  }, 
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/guest"
  // },

];
export { StuactRoutes, StudentRoutes, GuestRoutes,AdviserRoutes };
export default dashboardRoutes;
