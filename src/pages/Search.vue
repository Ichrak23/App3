<template>
  <ion-page
    ><ion-content>
      <ion-toolbar style="background-color: #f5f5f5">
        <ion-menu-button slot="start" color="primary">
          <ion-icon name="menu" slot="start"></ion-icon> </ion-menu-button
      ></ion-toolbar>
      <ion-toolbar style="background-color: #f5f5f5">
        <ion-label color="primary"
          >Résultats de la recherche({{ this.counter }})</ion-label
        >
        <ion-icon
          name="reload"
          color="primary"
          slot="end"
          @click="getDocuments()"
        ></ion-icon>
      </ion-toolbar>
      <ion-spinner
        v-if="!isloaded"
        name="circles"
        color="success"
        style="min-inline-size: -webkit-fill-available"
      ></ion-spinner>
      <div v-for="doc in documents" :key="doc.id">
        <ion-item
          v-if="doc.type"
          @click="$router.push('/CreateDocument/' + doc.id)"
        >
          <ion-grid>
            <ion-row>
              <ion-icon
                name="document-text-outline"
                :style="{ color: this.colors[doc.type.label] }"
              ></ion-icon>
              <ion-label
                :style="{ color: this.colors[doc.type.label] }"
                style="padding-left: 5px; font-size: 14px"
              >
                {{ doc.type.label }}
              </ion-label>
              <ion-label
                class="time"
                style="padding-left: 5px; font-size: 14px"
              >
                {{ doc.chrono }}
              </ion-label></ion-row
            >
            <ion-label style="padding-left: 20px">
              {{ doc.subject }}
            </ion-label>
            <ion-label class="time" style="margin-left: -5px">
              Document du {{ this.changeDate(doc.creationDate) }}
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
import axios from "axios";
export default {
  data() {
    return {
      isloaded: false,
      documents: "",
      list: "",
      counter: 0,
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
  async created() {
    this.list = this.$route.params.listSearch;
    this.getDocuments();
  },
  methods: {
    changeDate(newDate) {
      var date = moment(String(newDate)).format("DD/MM/YYYY");
      return date;
    },
    getDocuments() {
      let local = this;
      local.counter = 0;
      this.isloaded = false;
      this.documents = "";
      var config = {
        method: "post",
        url: "https://localhost:7026/api/Auth/post/elise-document%2Flist",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          WorkspaceId: local.ws,
          DocumentsIds: local.list.split(","),
        },
      };
      axios(config).then(function (response) {
        console.log(response.data.data);
        local.documents = response.data.data;
        for (let i in local.documents) {
          local.counter = local.counter + 1;
        }
        local.isloaded = true;
      });
    },
  },
};
</script>
