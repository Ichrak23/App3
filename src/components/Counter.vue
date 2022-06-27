<template>
  <ion-card
    text-center
    padding
    :style="{ 'background-color': getBackColor() }"
    style="height: 150px; width: 150px"
  >
    <div>
      <div>
        <i :style="{ color: getColor() }" :class="'ic fa fa-' + getIcon()" />
      </div>
      <ion-card-content>
        <ion-card-title class="title" :style="{ color: getColor() }">{{
          getNumberValue
        }}</ion-card-title>
        <ion-card-subtitle class="subtitle" :style="{ color: getColor() }">
          &nbsp;{{ this.getTitle() }}
        </ion-card-subtitle>
      </ion-card-content>
    </div>
  </ion-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      widgets: [],
      color: "",
      number: "",
    };
  },
  props: {
    widget: Object,
    WorkspaceId: "",
    DashboardId: "",
  },
  computed: {
    getNumberValue() {
      return this.number;
    },
  },
  created() {
    this.getColor();
    this.getNumber();
  },
  methods: {
    getTitle() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "title") {
          var name = JSON.parse(params[i].value);
        }
      }
      return name;
    },
    getColor() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "intervals") {
          var color = JSON.parse(params[i].value)[0].color;
        }
      }
      return color;
    },
    getBackColor() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "intervals") {
          var bgcolor = JSON.parse(params[i].value)[0].bgColor;
        }
      }
      return bgcolor;
    },
    getIcon() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "icon") {
          var icon = JSON.parse(params[i].value);
        }
      }
      return icon;
    },
    getPath() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "dataSource") {
          var path = JSON.parse(params[i].value).id;
        }
      }
      return path;
    },
    getSPath() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "dataSource") {
          var path = JSON.parse(params[i].value).source;
        }
      }
      return path;
    },
    getId() {
      var id = this.widget.widgetId;
      return id;
    },
    getNumber() {
      let local = this;
      var config = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/%2Ftray%2F" +
          this.getPath() +
          "%2Fcount%3FworkspaceId%3D" +
          this.WorkspaceId +
          "%26widgetId%" +
          this.getId(),
        headers: {
          "Content-Type": "application/json",
        },
      };
      var config1 = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/%2F" +
          this.getSPath() +
          "%2Fd71ac14b1b2cd144b712102c0f4a6e59%2Fcount",
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (this.getPath()) {
        axios(config).then(function (response) {
          local.number = response.data.data.value;
        });
      } else {
        axios(config1).then(function (response) {
          local.number = response.data.data;
        });
      }
    },
  },
};
</script>
