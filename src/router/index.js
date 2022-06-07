import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomeM from "../pages/HomePage.vue";
import Search from "../pages/Search.vue";
import AcTivities from "../pages/AcTivities.vue";
import ProfilPage from "../pages/ProfilPage";
import LoginPagee from "../pages/LoginPagee";
import FollowRequests from "../pages/FollowRequests";
import WorkSpace from "../pages/WorkSpace";
import CreateDocument from "../pages/CreateDocument";
import ListerFichier from "../pages/ListerFichier";
import AjoutFichier from "../pages/AjoutFichier";
import Tabs from "../pages/Tabs";
import Historique from "../pages/Historique";
import Informations from "../pages/Informations";
import Processus from "../pages/Processus";
import WidgetPage from "../pages/WidgetPage";
import ProcussusCheckButton from "../pages/ProcessusCheckButton.vue";
import ProcussusSendButton from "../pages/ProcessusSendButton.vue";
const routes = [
  {
    path: "",
    redirect: "/loginpagee",
  },
  {
    path: "/tab",
    redirect: "/CreateDocument/:id",
    component: Tabs,
    children: [
      {
        path: "/CreateDocument/:id",

        component: CreateDocument,
      },
      {
        path: "/createdocument/Historique/:id",

        component: Historique,
      },
      {
        path: "/createdocument/Informations/:id",

        component: Informations,
      },
      {
        path: "/createdocument/Processus/:id",

        component: Processus,
      },
    ],
  },

  {
    path: "/HomePage/:w/:dashboard",
    component: HomeM,
  },
  {
    path: "/WidgetPage/:wg/:ws/:path",
    component: WidgetPage,
  },
  {
    path: "/ListerFichier/:id",
    component: ListerFichier,
  },
  {
    path: "/AjoutFichier/:id",
    component: AjoutFichier,
  },

  {
    path: "/Search/:listSearch",
    component: Search,
  },
  {
    path: "/CreateDocument/:id",
    component: CreateDocument,
  },
  {
    path: "/ProcessusSendButton/:id",
    component: ProcussusSendButton
  },
  {
    path: "/ProcessusCheckButton/:id",
    component: ProcussusCheckButton,
  },
  {
    path: "/FollowRequests",
    component: FollowRequests,
  },
  {
    path: "/AcTivities",
    component: AcTivities,
  },
 
  {
    path: "/ProfilPage",
    component: ProfilPage,
  },
  {
    path: "/LoginPagee",
    component: LoginPagee,
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
