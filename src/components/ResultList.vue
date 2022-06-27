<template>
  <ion-card style="height: 400px; width: 360px; overflow-y: scroll">
    <ion-item>
      <span class="list"> &nbsp;{{ this.getTitle() }} ({{ this.total }})</span>
    </ion-item>
    
    
      <div v-for="document in list" :key="document.id">
        <ion-item @click="$router.push('/CreateDocument/' + document.id)">
          <div>
            <ion-row>
              <ion-icon
                name="document-text-outline"
                :style="{ color: this.colors[document.type.label] }"
              ></ion-icon>
              <ion-label
                :style="{ color: this.colors[document.type.label] }"
                style="margin-left: 7px"
              >
                {{ document.type.label }}
              </ion-label></ion-row
            >
            <ion-label class="cont-p">{{ document.subject }}</ion-label>
            <ion-label class="time">{{
              this.changeDate(document.modificationDate)
            }}</ion-label>
          </div>
        </ion-item>
      </div>
    
  </ion-card>
</template>
<script>
import moment from "moment";
import axios from "axios";
import { IonItem } from "@ionic/vue";
export default {
  components: {
    IonItem,
  },
  data() {
    return {
      widgets: [],
      courriers: "",
      list: "",
      total: "",
      colors: {
        "Demande de carte de déchèterie": "#0c89b5",
        "Document interne": "#00A819",
        "Document sortant": "#e84481",
      },
    };
  },
  props: {
    widget: Object,
    WorkspaceId: "",
  },
  created() {
    this.getList();
  },

  methods: {
    getTitle() {
      let name = JSON.parse(
        this.widget.widgetParameters.filter((element) => {
          return element.name == "title";
        })[0].value
      );
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    },

    getList() {
      let local = this;
      var config = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/document%2Ftray%2FFOLDER_SUIVI_COURRIERS_CREES_54%3FworkspaceId%3D" +
          local.WorkspaceId +
          "%26widgetId%3D" +
          local.widget.widgetId +
          "%26start%3D0%26limit%3D50%26sortId%3DTRI_COURRIERS_CHRONO%26sortAsc%3Dfalse",
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios(config)
        .then(function (response) {
          local.courriers = response.data.data.documentsUid;
          local.total = response.data.data.totalCount;
        })
        .then(function () {
          var config1 = {
            method: "post",
            url: "https://localhost:7026/api/Auth/post/elise-document%2Flist",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              WorkspaceId: local.WorkspaceId,
              DocumentsIds: local.courriers,
            },
          };
          axios(config1).then(function (response1) {
            local.list = response1.data.data;
          });
        });
    },
    changeDate(newDate) {
      var date = moment(String(newDate)).format("DD/MM/YYYY");
      return date;
    },
  },
};
</script>
