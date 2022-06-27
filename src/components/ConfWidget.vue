<template>
  <ion-modal class="modalimg" :is-open="oppen">
    <ion-content force-overscroll="false">
      <div class="modal-content">
        <ion-item lines="none">
          <ion-label color="primary"> Configuration </ion-label>
          <i
            @click="
              save();
              oppen = false;
            "
            slot="end"
            class="fa fa-floppy-o"
            aria-hidden="true"
            style="color: #0a6e89"
          ></i>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Titre *</ion-label>
        </ion-item>

        <ion-input
          placeholder=" Obligatoire"
          name="titre"
          class="input-login"
          aria-required="true"
          required="required"
          v-model="titre"
        ></ion-input>
        <ion-item lines="none">
          <ion-label>Source de données *</ion-label></ion-item
        >
        <ion-item>
          <ion-select
            placeholder="Cliquez ici pour filtrer..."
            @ionChange="selectType"
          >
            <ion-select-option value="1">Activités</ion-select-option>
            <ion-select-option value="3">Recherches</ion-select-option>
            <ion-select-option value="4">Favoris</ion-select-option>
            <ion-select-option value="2">Documents réservés</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item v-show="selectedElement == 1">
          <ion-input></ion-input>
          <ion-select
            placeholder="Cliquez ici pour filtrer..."
            @ionChange="selectType2"
          >
            <ion-select-option
              v-for="element in list"
              :key="element.id"
              :value="element.id"
            >
              {{ element.label }}</ion-select-option
            >
          </ion-select>
        </ion-item>

        <ion-label></ion-label>
      </div>
    </ion-content>
  </ion-modal>
</template>
<script>
import axios from "axios";
import {
  IonModal,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
export default {
  components: {
    IonModal,
    IonContent,
    IonItem,
    IonInput,
    IonLabel,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return {
      list: "",
      selectedElement: "",
      selectedElement2: "",
      titre: this.getTitle(),
      oppen: true,
    };
  },
  props: {
    widget: "",
    WorkspaceId: "",
    DashboardId: "",
  },
  created() {
    this.getList();
    this.getIcon();
    this.getSource();
    console.log(this.getSource());
  },
  methods: {
    selectType(test) {
      console.log("event", test.detail.value);
      this.selectedElement = test.detail.value;
      console.log("t" + this.titre);
    },
    selectType2(test) {
      console.log("event", test.detail.value);
      this.selectedElement2 = test.detail.value;
    },
    getList() {
      let local = this;
      var config = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/tray%3FworkspaceId%3D" +
          local.WorkspaceId,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.list = response.data.data;
        console.log("w : " + local.widget);
      });
    },
    getSource() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "dataSource") {
          var source = params[i].value;
        }
      }
      return source;
    },
    getTitle() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "title") {
          var source = JSON.parse(params[i].value);
        }
      }
      return source;
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

    save() {
      let local = this;
      var config = {
        method: "put",
        url:
          "https://localhost:7026/api/Auth/put/dashboard%2F" +
          local.DashboardId +
          "%2Fwidget",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: local.widget.widgetId,
          component: local.widget.widgetType,
          row: local.widget.row,
          column: local.widget.column,
          columnSpan: 1,
          parameters: {
            dataSource: {
              source: this.selectedElement,
              id: this.selectedElement2,
            },
            icon: "hashtag",
            intervals: [
              {
                bgColor: "#009CE0",
                color: "#FFFFFF",
              },
            ],
            title: local.titre,
          },
          name: local.widget.name,
          modificationDate: "2022-06-12T11:16:16.953Z",
          shared: true,
          system: false,
          owner: local.widget.owner,
          widgetId: local.widget.widgetId,
          rowspan: local.widget.rowspan,
          colspan: local.widget.colspan,
          widgetParameters: [
            {
              widgetId: local.widget.widgetId,
              name: "dataSource",
              value:
                '{"source":"' +
                local.selectedElement +
                '","id":"' +
                local.selectedElement2 +
                '"}',
            },
            {
              widgetId: local.widget.widgetId,
              name: "icon",
              value: '"' + local.getIcon() + '"',
            },
            {
              widgetId: local.widget.widgetId,
              name: "intervals",
              value: '[{"bgColor":"#FFFFFF","color":"#009CE0"}]',
            },
            {
              widgetId: local.widget.widgetId,
              name: "title",
              value: '"' + local.titre + ' "',
            },
            {
              widgetId: local.widget.widgetId,
              name: "text",
            },
          ],
          widgetType: local.widget.widgetType,
        },
      };
      axios(config)
        .then(function () {
          local.getList();
        })
        /* .then(() => {
          this.$emit("change");
        });
      location.reload(); */
    },
  },
};
</script>
<style>
ion-select {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
