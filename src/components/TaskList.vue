<template>
  <ion-card style="height: 400px; width: 360px; overflow-y: scroll">
    <ion-item>
      <span class="list"> &nbsp;{{ this.getTitle() }} </span>
      <fa style="color: #0062b1" slot="end" icon="refresh" />
    </ion-item>
    <div v-for="taches in list" :key="taches.id">
      <div v-if="taches.title[1] == 'u'">
        <ion-label class="time">{{ taches.title }}</ion-label>
        <ion-item v-for="tache in taches.tasksInfos" :key="tache.id">
          <fa class="icon-fa" icon="angles-right" />
          <div class="cont-p">
            {{ tache.subject }}
            <p class="sub">
              {{ tache.task.requestBy.label }} >
              {{ tache.task.assignedTo.label }}
            </p>
            <p class="time" style="margin-left: -25px">
              {{ changeDate(tache.task.requestDate) }}
            </p>
          </div>
        </ion-item>
      </div>
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
    getId() {
      var id = this.widget.widgetId;
      return id;
    },
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
          "https://localhost:7026/api/Auth/get/%2Ftask%2Fworkspace%3FwidgetId%3D" +
          this.getId() +
          "%26workspaceId%3D" +
          this.Wid +
          "%26sortBy%3Ddate%26totalCount%3D5",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.list = response.data.data;
      });
    },
    changeDate(newDate) {
      var date = moment(String(newDate)).format("DD/MM/YYYY HH:mm");
      return date;
    },
  },
};
</script>
