<template>
  <master-layout pageTitle="About Page">
 
  <form >
    <ion-searchbar placeholder="First typing, then hit Enter key or iOS keyboard action button Search">
    </ion-searchbar>
  </form>



    
    <div>
      <div v-for="widget in widgets" :key="widget.widgetId">
        <div v-if="widget.widgetType == 'counter'">
          <w-counter :widget="widget"></w-counter>
        </div>
      </div>

      <h1>Todos</h1>

      <div>
        <ion-row>
          <ion-label style="font-size: 12px; width: 130px"> Nom</ion-label>
          <div v-for="space in space.userWorkspaces" :key="space.id">
            <ion-label style="margin-left: 5px">{{ space.name }}</ion-label>
          </div>
        </ion-row>
        <ion-row>
          <ion-label style="font-size: 12px; width: 130px">
            Nombre d'utilisateurs/services</ion-label
          >
          <ion-label v-for="space in space.userWorkspaces" :key="space.id"
            >{{ space.workspaceScopesServiceCount }}
            {{ space.workspaceScopesUsersCount }} </ion-label
          ><br />
        </ion-row>
        <ion-row>
          <ion-label style="font-size: 12px; width: 130px"
            >Utilisateur/service en charge par défaut</ion-label
          >

          <label
            style="margin-left: 2px"
            v-for="sp in space.userWorkspaces"
            :key="sp.id"
            >{{ sp.flowchartItemInChargeOfDocuments.label }}</label
          >
        </ion-row>
      </div>
    </div>
  </master-layout>
</template>
<script>
import { calendar } from "ionicons/icons";
import axios from "axios";
import WCounter from "../components/WCounter.vue";
import {
  IonDatetime,
  IonLabel,
  IonIcon,
  IonContent,
  IonModal,
  IonInput,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
/* 
const baseURL = "http://localhost:3006/todos";
 */
export default {
  components: {
    IonDatetime,
    IonLabel,
    IonIcon,
    IonContent,
    IonModal,
    IonInput,
    IonRow,
    IonSelect,
    IonSelectOption,
    WCounter,
  },
  data() {
    return {
      dash: [],
      user: [],
      dap: [],
      workspace: [],
      todos: [],
      todoName: "",
      name: "",
      language: [],
      shown: false,
      space: [],
      labelc: "",
      labelr: "",
      spacepers: [],
      widgets: [],
      color: "",
    };
  },
  setup() {
    return {
      calendar,
    };
  },
  async created() {
    this.getWidget();
    /*   try {
      const res = await axios.get(baseURL);
      this.todos = res.data;
      const res1 = await axios.get(`http://localhost:3006/workspace`);
      this.workspace = res1.data;
     
    } catch (e) {
    } */
  },
  methods: {
    changeColor(p) {
      this.color = p;
    },
   /*  async addTodo() {
      const res = await axios.post(baseURL, { name: this.todoName });
      this.todos = [...this.todos, res.data];
      this.todoName = "";
    }, */

    getWidget() {
      let local = this;
      var config = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/elise-dashboard%2Fget%2Fshared%2Fe5720509-1cb8-41f0-beae-50d9bb48d944",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.widgets = response.data.data[0].widgetInstances;
      });
    },
    widgetIcon(icon) {
      return JSON.parse(icon);
    },
    widgetcolor(c) {
      this.color = JSON.parse(c)[0].color;
    },

    /*   async adddp() {
      const res2 = await axios.post(`http://localhost:3006/pers`, {
        name: this.name,
      });
      this.dap = [...this.dap, res2.data];
      this.name = "";
    }, */
  },
  mounted() {
    let local = this;

    var cng = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/elise-workspace",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(cng).then(function (response3) {
      local.space = response3.data.data;
      local.labelc =
        local.space.defaultWorkspace.flowchartItemInChargeOfDocuments.label;
      local.labelc = local.space.defaultWorkspace.flowchartItemRequester.label;
      local.spacepers = local.space.userWorkspaces;
    });
  },
};
</script>
