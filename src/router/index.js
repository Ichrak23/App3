import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "../pages/Home.vue";
import Search from "../pages/Search.vue";
import Profil from "../pages/Profil";
import Login from "../pages/Login";
import WorkSpace from "../pages/WorkSpace";
import Document from "../pages/DocumentManagment/Document/Document.vue"
import AddAttachment from "../pages/DocumentManagment/Document/AddAttachment.vue"
import AttachmentList from "../pages/DocumentManagment/Document/AttachmentList.vue"
import Tabs from "../pages/DocumentManagment/Document/Tabs.vue"
import History from "../pages/DocumentManagment/History/History.vue"
import Information from "../pages/DocumentManagment/Information/Information.vue"
import Process from "../pages/DocumentManagment/Process/Process.vue"
import ProcessCheckButton from "../pages/DocumentManagment/Process/ProcessCheckButton.vue"
import ProcessSendButton from "../pages/DocumentManagment/Process/ProcessSendButton.vue"

import Widget from "../pages/Widget";

const routes = [
  {
    path: "",
    redirect: "/login",
  },
  {
    path: "/tab",
    redirect: "/Document/:id",
    component: Tabs,
    children: [
      {
        path: "/Document/:id",

        component: Document,
      },
      {
        path: "/Document/History/:id",

        component: History,
      },
      {
        path: "/Document/Information/:id",

        component: Information,
      },
      {
        path: "/Document/Process/:id",

        component: Process,
      },
    ],
  },

  {
    path: "/Home/:workspace/:dashboard",
    component: Home,
  },
  {
    path: "/Widget/:widget/:workspace/:path/:dashboardId",
    component: Widget,
  },
  {
    path: "/AttachmentList/:id",
    component: AttachmentList,
  },
  {
    path: "/AddAttachment/:id",
    component: AddAttachment,
  },

  {
    path: "/Search/:listSearch",
    component: Search,
  },
  {
    path: "/Document/:id",
    component: Document,
  },
  {
    path: "/ProcessSendButton/:id",
    component: ProcessSendButton
  },
  {
    path: "/ProcessCheckButton/:id",
    component: ProcessCheckButton,
  },
 
  {
    path: "/Profil",
    component: Profil,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/WorkSpace",
    component: WorkSpace,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
