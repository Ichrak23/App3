<template>
  <ion-card style="height: 400px; width:360px; overflow-y: scroll">
    <ion-item>
      <span class="list"> &nbsp;{{ this.getTitle() }} </span>
    </ion-item>
    <div v-for="doc in list" :key="doc.id">
      <ion-item>
        <div>
          <ion-row>
          <ion-icon name="document-text-outline" :style="{ color: this.colors[doc.type.label] }"></ion-icon>
          <ion-label :style="{ color: this.colors[doc.type.label] }" style="margin-left:7px">
            {{ doc.type.label }}
          </ion-label></ion-row>
          <ion-label class="cont-p">{{ doc.subject }}</ion-label>
          <ion-label class="time">{{
            this.changeDate(doc.modificationDate)
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
      list: [],
      colors: {
        "Demande de carte de déchèterie": "#0c89b5",
        "Document interne": "#00A819",
        "Document sortant": "#e84481",
      },
    };
  },
  props: {
    widget: Object,
    Wid: "",
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
        method: "post",
        url: "https://localhost:7026/api/Auth/post/elise-document%2Flist",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          WorkspaceId: local.Wid,
          DocumentsIds: [
            "COURRIERS_298",
            "COURRIERS_129",
            "COURRIERS_134",
            "COURRIERS_295",
            "COURRIERS_292",
            "COURRIERS_291",
            "COURRIERS_290",
            "COURRIERS_280",
            "COURRIERS_253",
          ],
        },
      };
      axios(config).then(function (response) {
        local.list = response.data.data;
      });
    },
    changeDate(newDate) {
      var date = moment(String(newDate)).format("DD/MM/YYYY");
      return date;
    },
  },
};
</script>
