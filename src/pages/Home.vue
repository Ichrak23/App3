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
            <ion-item
              v-for="widget in store"
              :key="widget.widgetId"
              @click="addWidget(widget)"
            >
              <i
                :class="' fa fa-' + widget.icon"
                slot="start"
                style="color: #0a6e89"
              />
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
          <counter
            ref="widgetCounter"
            :key="widget.widgetId"
            :widget="widget"
            :WorkspaceId="workspace"
            :DashboardId="dashboard"
            @click="
              getWidgetData(widget);
            "
          >
          </counter>
          <ion-button
            v-show="isEditMode"
            color="btl"
            style="
              margin-top: -345px;
              margin-left: 105px;
              opacity: 0.7;
              width: 60px;
              height: 30px;
            "
          >
            <ion-col>
              <i
                class="fa fa-cog"
                aria-hidden="true"
                style="font-size: 25px"
                @click="
                  selectedWidget = widget;
                  ConfigWidget(widget.widgetId);
                "
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
    <conf-widget
      v-if="showConfig"
      :widget="selectedWidget"
      :WorkspaceId="workspace"
      :DashboardId="dashboard"
      @change="getWidget()"
    ></conf-widget>
    <ion-row>
      <div v-for="widget in widgets" :key="widget.widgetId">
        <div v-if="widget.widgetType == 'shortcut'">
          <shortcut
            :widget="widget"
            :WorkspaceId="workspace"
            :DashboardId="dashboard"
          ></shortcut>
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
          <document-creation
            :widget="widget"
            :WorkspaceId="workspace"
            :DashboardId="dashboard"
          ></document-creation>
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
          <web-view
            :widget="widget"
            :WorkspaceId="workspace"
            :DashboardId="dashboard"
          ></web-view>
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
        <result-list
          :widget="widget"
          :WorkspaceId="workspace"
          :DashboardId="dashboard"
        ></result-list>
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
        <task-list
          :widget="widget"
          :WorkspaceId="workspace"
          :DashboardId="dashboard"
        ></task-list>
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
import ConfWidget from "../components/ConfWidget.vue";
import Counter from "../components/Counter.vue";
import ResultList from "../components/ResultList.vue";
import Shortcut from "../components/Shortcut.vue";
import documentCreation from "../components/DocumentCreation.vue";
import TaskList from "../components/TaskList.vue";
import WebView from "../components/WebView.vue";
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
    Counter,
    Shortcut,
    documentCreation,
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
      workspace: "",
      dashboard: "",
      selectedWidget: "",
      path: "null",
      name: "",
      isEditMode: false,
      store: "",
      widgetsPersonal: "",
      isPersonal: false,
      listColumn: [],
      listRow: [],
      column: "",
      row: 0,
      showConfig: false,
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
    this.workspace = this.$route.params.workspace;
    this.dashboard = this.$route.params.dashboard;
    this.getWidget();
    this.getWidgetStore();
    this.getWidgetPersonal();
  },
  methods: {
    // todo
   // reloadCounter() {
     // location.reload();
      // console.log(this.$refs.widgetCounter);
      // this.$refs.widgetCounter.forEach((element) => {
      //   element.number = 55;
      //   console.log(element);
      // });
   // },
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
      });
    },
    ConfigWidget() {
      this.showConfig = true;
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
        for (let i in local.widgets) {
          local.listRow = local.listRow + local.widgets[i].row;
        }
      });
    },
    getWidgetPersonal() {
      let local = this;
      var config = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/elise-dashboard%2Fget%2Fpersonal",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.widgetsPersonal = response.data.data;
        for (let i in local.widgetsPersonal) {
          if (local.dashboard == local.widgetsPersonal[i].dashboardId) {
            local.isPersonal = true;
          }
        }
      });
    },
    getWidgetData(widget) {
      for (let i in widget.widgetParameters) {
        if (widget.widgetParameters[i].name == "dataSource") {
          if(JSON.parse(widget.widgetParameters[i].value).id){
          this.path = JSON.parse(widget.widgetParameters[i].value).id;
        }}
      }
      this.$router.push(
        "/Widget/" + widget.widgetId + "/" + this.workspace + "/" + this.path +"/" + this.dashboard
      );
    },
    addWidget(widget) {
      for (let row = 0; row < 10; row++) {
        for (let k in this.widgets) {
          if (this.widgets[k].row == this.row) {
            this.listColumn = this.listColumn + this.widgets[k].column;
            console.log("dd" + this.listColumn);
          }
        }
        for (let j = 0; j < 14; j++) {
          if (!this.listColumn.includes(j)) {
            this.row = row;
            this.column = j + this.widgets[j - 1].colspan;
            console.log("gg");
            console.log("r" + this.row + "c" + this.column);
            break;
          }
        }

        break;
      }

      let local = this;
      var config = {
        method: "post",
        url:
          "https://localhost:7026/api/Auth/post/dashboard%2F" +
          local.dashboard +
          "%2Fwidget",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          dashboardId: null,
          name: widget.name,
          description: "",
          icon: widget.icon,
          widgetType: widget.widgetType,
          column: this.column,
          row: this.row,
          colSpan: 1,
          rowSpan: 1,
          shared: true,
          system: true,
          owner: null,
          creationDate: "2017-01-01T00:00:00Z",
          modificationDate: "2017-01-01T00:00:00Z",
          widgetParameters: [],
          component: "counter",

          parameters: {},
        },
      };
      axios(config).then(function () {
        local.getWidget();
      });
    },
  },
};
</script>
