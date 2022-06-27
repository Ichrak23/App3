<template>
  <master-layout :pageTitle="name">
    <ion-item lines="none">
      <ion-button
        v-show="isEditMode"
        slot="end"
        id="AddWidget"
        style="margin-top: -10px; margin-inline-end: auto; --border-radius: 50%"
      >
        <ion-icon name="add" color="light"></ion-icon>
      </ion-button>
      <ion-popover trigger="AddWidget" :dismiss-on-select="false" color="light">
        <ion-content class="popover-content">
          <ion-list>
            <ion-item v-for="widget in store" :key="widget.widgetId">
              <i :class="' fa fa-' + widget.icon" slot="start" style="color:#0a6e89"/>
              <ion-label>
                {{ widget.name }}
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-popover>
      <ion-button
      v-show="isPersonal"
        slot="end"
        color="light"
        style="margin-top: -10px; margin-inline-end: auto"
        @click="isEditMode = !isEditMode"
      >
        <ion-icon color="primary" name="build-outline"></ion-icon> </ion-button
    ></ion-item>
    <ion-row>
      <div v-for="widget in widgets" :key="widget.widgetId">
        <div v-if="widget.widgetType == 'counter'">
          <w-counter
            :widget="widget"
            :Wid="w"
            :Did="dashboard"
            @click="widgetPage(widget)"
          >
          </w-counter>
          <ion-button
            color="btl"
            style="
              margin-top: -345px;
              margin-left: 105px;
              opacity: 0.7;
              width: 60px;
              height: 30px;
            "
            v-show="isEditMode"
          >
            <ion-col>
              <i
                id="confWidget"
                class="fa fa-cog"
                aria-hidden="true"
                style="font-size: 25px"
                @click="ConfigWidget(widget)"
              ></i
            ></ion-col>
            <conf-widget trigger="confWidget"></conf-widget>
            <ion-col>
              <i
                @click="deleteWidget(widget)"
                class="fa fa-times"
                aria-hidden="true"
                style="font-size: 25px"
              ></i
            ></ion-col>
          </ion-button>
        </div></div
    ></ion-row>

    <ion-row>
      <div v-for="widget in widgets" :key="widget.widgetId">
        <div v-if="widget.widgetType == 'shortcut'">
          <w-shortcut :widget="widget" :Wid="w" :Did="dashboard"></w-shortcut>
          <ion-button
            color="btl"
            style="
              margin-top: -345px;
              margin-left: 105px;
              opacity: 0.7;
              width: 60px;
              height: 30px;
            "
            v-show="isEditMode"
          >
            <ion-col>
              <i
                class="fa fa-cog"
                aria-hidden="true"
                style="font-size: 25px"
              ></i
            ></ion-col>
            <ion-col>
              <i
                @click="deleteWidget(widget)"
                class="fa fa-times"
                aria-hidden="true"
                style="font-size: 25px"
              ></i
            ></ion-col>
          </ion-button>
        </div>
      </div>
    </ion-row>
    <ion-row>
      <div v-for="widget in widgets" :key="widget.widgetId">
        <div v-if="widget.widgetType == 'documentCreation'">
          <wdocument-creation
            :widget="widget"
            :Wid="w"
            :Did="dashboard"
          ></wdocument-creation>
          <ion-button
            color="btl"
            style="
              margin-top: -345px;
              margin-left: 105px;
              opacity: 0.7;
              width: 60px;
              height: 30px;
            "
            v-show="isEditMode"
          >
            <ion-col>
              <i
                class="fa fa-cog"
                aria-hidden="true"
                style="font-size: 25px"
              ></i
            ></ion-col>
            <ion-col>
              <i
                @click="deleteWidget(widget)"
                class="fa fa-times"
                aria-hidden="true"
                style="font-size: 25px"
              ></i
            ></ion-col>
          </ion-button>
        </div></div
    ></ion-row>
    <ion-row>
      <div v-for="widget in widgets" :key="widget.widgetId">
        <div v-if="widget.widgetType == 'webView'">
          <web-view :widget="widget" :Wid="w" :Did="dashboard"></web-view>
          <ion-button
            color="btl"
            style="
              margin-top: -345px;
              margin-left: 105px;
              opacity: 0.7;
              width: 60px;
              height: 30px;
            "
            v-show="isEditMode"
          >
            <ion-col>
              <i
                class="fa fa-cog"
                aria-hidden="true"
                style="font-size: 25px"
              ></i
            ></ion-col>
            <ion-col>
              <i
                @click="deleteWidget(widget)"
                class="fa fa-times"
                aria-hidden="true"
                style="font-size: 25px"
              ></i
            ></ion-col>
          </ion-button>
        </div></div
    ></ion-row>

    <div v-for="widget in widgets" :key="widget.widgetId">
      <div v-if="widget.widgetType == 'resultList'">
        <result-list :widget="widget" :Wid="w" :Did="dashboard"></result-list>
        <ion-button
          color="btl"
          style="
            margin-top: -830px;
            margin-left: 300px;
            opacity: 0.7;
            width: 60px;
            height: 30px;
          "
          v-show="isEditMode"
        >
          <ion-col>
            <i class="fa fa-cog" aria-hidden="true" style="font-size: 25px"></i
          ></ion-col>
          <ion-col>
            <i
              @click="deleteWidget(widget)"
              class="fa fa-times"
              aria-hidden="true"
              style="font-size: 25px"
            ></i
          ></ion-col>
        </ion-button>
      </div>
    </div>
    <div v-for="widget in widgets" :key="widget.widgetId">
      <div v-if="widget.widgetType == 'taskList'">
        <task-list :widget="widget" :Wid="w" :Did="dashboard"></task-list>
        <ion-button
          color="btl"
          style="
            margin-top: -830px;
            margin-left: 310px;
            width: 60px;
            height: 30px;
          "
          v-show="isEditMode"
        >
          <ion-col>
            <i class="fa fa-cog" aria-hidden="true" style="font-size: 25px"></i
          ></ion-col>
          <ion-col>
            <i
              @click="deleteWidget(widget)"
              class="fa fa-times"
              aria-hidden="true"
              style="font-size: 25px"
            ></i
          ></ion-col>
        </ion-button>
      </div>
    </div>
    <ion-slides class="widget-slides" mode="ios" pager="ios" :options="option">
      <ion-slide> </ion-slide>
    </ion-slides>
  </master-layout>
</template>
<script>
import { useRouter } from "vue-router";
import axios from "axios";
import ConfWidget from "/src/components/ConfWidget";
import WCounter from "/src/components/WCounter";
import ResultList from "/src/components/ResultList";
import WShortcut from "/src/components/WShortcut";
import WdocumentCreation from "/src/components/WdocumentCreation";
import TaskList from "/src/components/TaskList";
import WebView from "/src/components/WebView";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonImg,
  IonGrid,
  IonIcon,
  IonButton,
  IonContent,
  IonPage,
  IonCardSubtitle,
  IonSlide,
  IonSlides,
  IonRow,
  IonCol,
} from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonImg,
    IonGrid,
    IonIcon,
    IonButton,
    IonContent,
    IonPage,
    IonCardSubtitle,
    IonSlide,
    IonSlides,
    IonRow,
    IonCol,
    WCounter,
    WShortcut,
    WdocumentCreation,
    TaskList,
    ResultList,
    WebView,
    ConfWidget,
  },
  data() {
    return {
      widgets: [],
      dash: [],
      info: null,
      w: "",
      dashboard: "",
      path: "",
      name: "",
      isEditMode: false,
      store: "",
      widgetsPersonal:"",
      isPersonal:false
    };
  },
  setup() {
    const router = useRouter();
    const option = {
      slidesPerView: 2.29,
      centeredslides: true,
      loop: true,
    };
    return {
      option,
      router,
    };
  },
  async created() {
    this.w = this.$route.params.w;
    this.dashboard = this.$route.params.dashboard;
    this.getWidget();
    this.getWidgetStore();
    this.getWidgetPersonal();
  },
  methods: {
    getWidgetStore() {
      let local = this;
      var config = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/elise-widget%2Fget-widget-store",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.store = response.data.data;
        console.log(local.store);
      });
    },
    ConfigWidget(widget) {
      this.showConfig = this.showConfig;
    },
    deleteWidget(widget) {
      let local = this;
      var config = {
        method: "delete",
        url:
          "https://localhost:7026/api/Auth/delete/widget%2F" + widget.widgetId,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(() => {
        local.getWidget();
      });
    },
    getWidget() {
      let local = this;
      var config = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/dashboard%2F" + local.dashboard,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.widgets = response.data.data.widgetInstances;
        local.name = response.data.data.name;
        console.log(local.widgets);
      });
    },
    getWidgetPersonal() {
      let local = this;
      var config = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/elise-dashboard%2Fget%2Fpersonal",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.widgetsPersonal = response.data.data;
        console.log(local.widgetsPersonal);
        for (let i in local.widgetsPersonal){
          if (local.dashboard == local.widgetsPersonal[i].dashboardId ){
            local.isPersonal = true
          }
        }
      });
    },
    widgetPage(widget) {
      for (let i in widget.widgetParameters) {
        if (widget.widgetParameters[i].name == "dataSource") {
          this.path = JSON.parse(widget.widgetParameters[i].value).id;
        }
      }
      this.$router.push(
        "/WidgetPage/" + widget.widgetId + "/" + this.w + "/" + this.path
      );
    },

  },
};
</script>
