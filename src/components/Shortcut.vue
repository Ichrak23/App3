<template>
  <ion-card text-center padding :style="{ 'background-color': getBackColor() }" @click="$router.push( getUrl() )" style="
      height: 150px;
      width: 150px;
    ">
    <div>

      <div>
        <i :style="{ color: getColor() }" :class="'ic fa fa-' + getIcon()" />
      </div>
      <ion-card-content>
        <ion-card-title
          class="title"
          :style="{ color: this.color }"
        > </ion-card-title>
        <ion-card-subtitle class="subtitle" :style="{ color: getColor() }" style="margin-top:80px">
          &nbsp;{{ this.getTitle() }}
        </ion-card-subtitle>
      </ion-card-content>
    </div>
  </ion-card>
</template>
<script>

import {IonCard,IonItem,IonLabel,IonCardContent,IonCardSubtitle,IonCardTitle } from "@ionic/vue";
export default {
   components: {
    IonCard,IonItem,IonLabel,IonCardContent,IonCardSubtitle,IonCardTitle},
  data() {
    return {
      widgets: [],
      color: "",
    };
  },
  props: {
    widget: Object,
    WorkspaceId:""
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
    getUrl() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "url") {
          var url = JSON.parse(params[i].value);
        }
      }
      return url;
    },
  },
};
</script>
