<template>
  <ion-page
    ><ion-content>
      <ion-toolbar style="background-color: #f5f5f5">
        <ion-menu-button slot="start" color="primary">
          <ion-icon name="menu" slot="start"></ion-icon> </ion-menu-button
      ></ion-toolbar>
      <ion-toolbar style="background-color: #f5f5f5">
        <ion-icon name="return-up-back-outline" @click="$router.push('/home/' + this.workspace +'/' + this.dashboardId)"></ion-icon>
        <ion-label color="primary" style="margin-left:25px">En cours ({{ this.counter }})</ion-label>
        <ion-icon
          name="reload"
          color="primary"
          slot="end"
          @click="getDocument()"
        ></ion-icon>
      </ion-toolbar>
      <ion-spinner
        v-if="!isloaded"
        name="circles"
        color="success"
        style="min-inline-size: -webkit-fill-available"
      ></ion-spinner>
      <div v-for="document in documents" :key="document.id">
        <ion-item
          v-if="document.type"
          @click="$router.push('/CreateDocument/' + document.id)"
        >
          <ion-grid>
            <ion-row>
              <ion-icon
                name="document-text-outline"
                :style="{ color: this.colors[document.type.label] }"
              ></ion-icon>
              <ion-label
                :style="{ color: this.colors[document.type.label] }"
                style="padding-left: 5px; font-size: 14px"
              >
                {{ document.type.label }}
              </ion-label>
              <ion-label
                class="time"
                style="padding-left: 5px; font-size: 14px"
              >
                {{ document.chrono }}
              </ion-label></ion-row
            >
            <ion-label style="padding-left: 20px">
              {{ document.subject }}
            </ion-label>
            <ion-label class="time" style="margin-left: -5px">
              Document du {{ this.changeDate(document.creationDate) }}
            </ion-label></ion-grid
          >
        </ion-item>
      </div>
      <ion-row style="place-content: center; padding: 20px">
        <ion-label> Fin des résultats </ion-label></ion-row
      >
    </ion-content>
  </ion-page>
</template>
<script>
import moment from "moment";
import { calendar } from "ionicons/icons";
import axios from "axios";
import {
  IonToolbar,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonContent,
} from "@ionic/vue";

export default {
  components: { IonToolbar, IonMenuButton, IonIcon, IonLabel, IonContent },
  data() {
    return {
      dashboardId:"",
      widget: "",
      workspace: "",
      path: "",
      document: "",
      documents: "",
      list: [],
      counter: 0,
      isloaded: false,
      colors: {
        "Demande de carte de déchèterie": "#0c89b5",
        "Document interne": "#00A819",
        "Exemple document interne": "#00A819",
        "Exemple document sortant": "#e84481",
        "Document sortant": "#e84481",
        Standard: "#0c89b5",
        "Document entrant": "#0c89b5",
      },
    };
  },
  setup() {
    return {
      calendar,
    };
  },
  async created() {
    this.widget = this.$route.params.widget;
    this.workspace = this.$route.params.workspace;
    this.path = this.$route.params.path;
    this.dashboardId = this.$route.params.dashboardId
    this.getDocument();
    
  },
  methods: {
    changeDate(newDate) {
      var date = moment(String(newDate)).format("DD/MM/YYYY");
      return date;
    },
    getDocument() {
      let local = this;
      this.counter = 0;
      this.isloaded = false;
      this.documents = "";
      this.list = [];
      var config = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/document%2Ftray%2F" +
          this.path +
          "%3FwidgetId%3D" +
          this.widget +
          "%26f%3D%26workspaceId%3D" +
          this.workspace +
          "%26start%3D0%26limit%3D300%26sortId%3DTRI_COURRIERS_CHRONO%26sortAsc%3Dfalse",
        headers: {
          "Content-Type": "application/json",
        },
      };
      var config2 = {
        method: "get",
         url:
          "https://localhost:7026/api/Auth/get/%2Ffavorite%2Fd71ac14b1b2cd144b712102c0f4a6e59%3Fstart%3D0%26limit%3D30%26sortId%3DTRI_COURRIERS_CHRONO%26sortAsc%3Dfalse",
        headers: {
          "Content-Type": "application/json",
        },
      };
if(this.path!="null"){
      axios(config)
        .then(function (response) {
          local.document = response.data.data.documentsUid;
          for (let i in local.document) {
            (local.list = local.list + local.document[i] + ","),
              (local.counter = local.counter + 1);
          }
        })
        .then(function () {
          var config1 = {
            method: "post",
            url: "https://localhost:7026/api/Auth/post/elise-document%2Flist",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              WorkspaceId: local.workspace,
              DocumentsIds: local.list.split(","),
            },
          };
          axios(config1).then(function (response) {
            local.documents = response.data.data;
            local.isloaded = true;
          });
        })}
        else{
          axios(config2)
        .then(function (response) {
          local.document = response.data.data.documentsUid;
          for (let i in local.document) {
            (local.list = local.list + local.document[i] + ","),
              (local.counter = local.counter + 1);
          }
        })
        .then(function () {
          var config1 = {
            method: "post",
            url: "https://localhost:7026/api/Auth/post/elise-document%2Flist",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              WorkspaceId: local.workspace,
              DocumentsIds: local.list.split(","),
            },
          };
          axios(config1).then(function (response) {
            local.documents = response.data.data;
            local.isloaded = true;
          });
        })

        }
    },
  },
};
</script>
