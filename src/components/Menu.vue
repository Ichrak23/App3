<template>
  <ion-menu menu-id="app-menu" content-id="main-content" class="app-menu">
    <ion-content style="background-color: primary">
      <ion-list>
        <ion-item class="ion-text-center main-header">
          <ion-grid class="input-wrapper">
            <ion-img
              :src="getImageURl()"
              class="avatar1"
              button
              @click="menuNavigation('/Profil')"
            ></ion-img>
            <div style="padding-top: 20px">
              <div class="truncated">
                {{ this.user.displayName }}
              </div>
              <div class="truncated-email">
                {{ this.user.mail }}
              </div>
            </div>
          </ion-grid>
        </ion-item>
        <ion-col>
          <ion-row style="margin-left: 20px">
            <ion-label style="font-size: 14px; font-weight: 600"
              >Espace de travail utilisateur
            </ion-label>

            <fa
              icon="caret-down"
              @click="shown6 = !shown6"
              style="margin-left: 80px"
            />
          </ion-row>
          <ion-label
            color="primary"
            style="margin-left: 20px; font-size: 12px"
            >{{ this.WsName }}</ion-label
          >
        </ion-col>
        <div v-show="shown6" class="dash">
          <ion-row>
            <ion-icon name="logo-buffer"></ion-icon>
            <ion-label style="padding-left: 20px; font-size: 12px"
              >Mon espace de travail utilisateur
            </ion-label></ion-row
          >
          <ion-row>
            <ion-label
              class="child-item"
              button
              @click="
                menuNavigation(
                  '/home/' + id + '/e10416ad-e9db-4b2e-b6bb-643d96cf046b'
                )
              "
              >{{ this.dWsName }}
            </ion-label>
          </ion-row>
          <ion-row>
            <ion-icon name="logo-buffer"></ion-icon>
            <ion-label style="padding-left: 20px; font-size: 12px"
              >Mes espaces de travail personnalisés
            </ion-label></ion-row
          >
          <ion-row v-for="space in workspace.userWorkspaces" :key="space.id">
            <ion-label
              class="child-item"
              button
              @click="
                id = space.workspaceId;
                WsName = space.name;
                menuNavigation(
                  '/home/' + id + '/e10416ad-e9db-4b2e-b6bb-643d96cf046b'
                );
              "
            >
              {{ space.name }}
            </ion-label>
          </ion-row>
        </div>

        <ion-row style="padding: 20px">
          <ion-img src="/assets/dashboard.png"></ion-img>
          <ion-label
            style="
              padding-left: 10px;
              font-size: 14px;
              align-self: center;
              font-weight: 600;
            "
            >Tableaux de bord partagés</ion-label
          >
        </ion-row>

        <div class="dash">
          <ion-row
            style="
              padding: 10px;
              font-size: 12px;
              margin-top: -20px;
              margin-left: 30px;
            "
          >
            <ion-label>Tableux de bord</ion-label>
            <hr />
            <ion-icon
              name="chevron-forward-outline"
              v-if="!shown"
              @click="shown = !shown"
            ></ion-icon>
            <ion-icon
              name="chevron-down-outline"
              v-if="shown"
              @click="shown = !shown"
            ></ion-icon>
          </ion-row>
          <span v-show="shown">
            <ion-row v-for="d of dash" :key="d.id">
              <ion-label
                class="child-item"
                button
                @click="menuNavigation('/home/' + id + '/' + d.dashboardId)"
              >
                {{ d.name }}
              </ion-label>
            </ion-row>
          </span>

          <ion-row style="padding: 10px; font-size: 12px; margin-left: 30px">
            <ion-label>Activities</ion-label>
            <hr />
            <ion-icon
              name="chevron-forward-outline"
              v-if="!shown2"
              @click="shown2 = !shown2"
            ></ion-icon>
            <ion-icon
              name="chevron-down-outline"
              v-if="shown2"
              @click="shown2 = !shown2"
            ></ion-icon>
          </ion-row>
          <span v-show="shown2">
            <ion-row>
              <ion-label
                class="child-item"
                button
                >Activities</ion-label
              >
            </ion-row>
          </span>

          <ion-row style="padding: 10px; font-size: 12px; margin-left: 30px">
            <ion-label>Explorateur</ion-label>
            <hr />
            <ion-icon
              name="chevron-forward-outline"
              v-if="!shown3"
              @click="shown3 = !shown3"
            ></ion-icon>
            <ion-icon
              name="chevron-down-outline"
              v-if="shown3"
              @click="shown3 = !shown3"
            ></ion-icon>
          </ion-row>
          <span v-show="shown3">
            <ion-row>
              <ion-label
                class="child-item"
                button
                @click="menuNavigation('/home')"
                >Vues dynamiques</ion-label
              >
            </ion-row>
            <ion-row>
              <ion-label class="child-item"> Recherches </ion-label>
            </ion-row>
            <ion-row>
              <ion-label class="child-item"> Favoris </ion-label>
            </ion-row>
            <ion-row>
              <ion-label class="child-item"> Documents réservés </ion-label>
            </ion-row>
          </span>
        </div>
        <ion-row style="padding: 20px; margin-top: -20px"
          ><ion-img src="/assets/dashboard.png"></ion-img>
          <ion-label
            style="
              padding-left: 10px;
              font-size: 14px;
              align-self: center;
              font-weight: 600;
            "
            >Tableaux de bord personnels</ion-label
          >
          <hr />
          <ion-icon
            style="font-size: 14px; align-self: center"
            :icon="add"
            @click="shown4 = !shown4"
          ></ion-icon>
        </ion-row>
        <ion-item-sliding
          style="margin-left: -5px"
          v-for="dash of dashPer"
          :key="dash.id"
          >
            <ion-item lines="none" class="child-item" style="margin-top : -25px !important;">
            <ion-label 
              button
              @click="menuNavigation('/home/' + id + '/' + dash.dashboardId)"
            >
              {{ dash.name }}
            </ion-label>
          </ion-item>
          <ion-item-options side="end">
           
            <ion-item-option color="danger" @click="deleteDash(dash)">
              <ion-icon
                name="trash"
                slot="icon-only"
                style="margin-top: 5px; font-size: 13px"
              ></ion-icon
            ></ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
       </ion-list>
      <ion-toolbar class="tool">
        <ion-button fill="clear" slot="end" @click="logout()">
          <ion-icon slot="icon-only" name="log-out-outline"></ion-icon>
        </ion-button>
      </ion-toolbar>
      <ion-modal
        :isOpen="shown4"
        v-if="!shown5"
        :breakpoints="[0.1, 0.5, 1]"
        :initialBreakpoint="0.5"
      >
        <ng-template>
          <app-modal-content>
            <div class="modal-content">
              <ion-item class="modal-label">
                <ion-label>AJOUTER UN TABLEAU DE BORD</ion-label>
                <ion-icon
                  @click="addDashboard()"
                  name="save-outline"
                  color="primary"
                ></ion-icon>
              </ion-item>
              <div class="modal-div">
                <ion-label color="danger">Nom*</ion-label>

                <ion-input
                  id="dashboardName"
                  type="text"
                  autocomplete="false"
                  placeholder="Obligatoire"
                  class="input-mdl"
                  name="name"
                  aria-required="true"
                  required="required"
                  v-model="dashboardName"
                  @keyup.enter="addDashboard"
                ></ion-input>
                <ion-label class="label-container">Description</ion-label>
                <ion-textarea
                  class="textarea"
                  v-model="description"
                  style="
                    border-radius: 5px;
                    margin: 5px;
                    background-color: #f3f8f9;
                  "
                  aria-required="true"
                  required="required"
                >
                </ion-textarea>
              </div>
            </div>
          </app-modal-content>
        </ng-template>
      </ion-modal>
    </ion-content>
  </ion-menu>
</template>
<script>
import {
  IonMenu,
  IonInput,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonModal,
  IonList,
  IonIcon,
  IonGrid,
  IonLabel,
  IonTextarea,
  IonImg,
  IonButton,
  menuController,
  modalController,
} from "@ionic/vue";
import axios from "axios";
import { add } from "ionicons/icons";
export default {
  components: {
    IonMenu,
    IonIcon,
    IonButton,
    IonGrid,
    IonTextarea,
    IonImg,
    IonInput,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
    IonModal,
  },
  setup() {
    return {
      add,
    };
  },
  data() {
    return {
      dash: [],
      user: [],
      dWsName: "",
      WsName: "",
      id: "e5720509-1cb8-41f0-beae-50d9bb48d944",
      workspace: [],
      shown: false,
      shown2: false,
      shown4: false,
      shown3: false,
      shown5: false,
      shown6: false,
      dashPer: [],
      dashboardName: "",
      description: "",
    };
  },
  async created() {
    this.getworkspace();
    this.getdashPer();
    this.getUser();
    this.getdash();
  },
  methods: {
    menuNavigation(url) {
      menuController.close("app-menu");
      this.$router.push(url);
    },
    async addDashboard() {
      let local = this;
      var config = {
        method: "post",
        url: "https://localhost:7026/api/Auth/post/elise-dashboard%2Fcreate",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: this.dashboardName,
          description: this.description,
        },
      };
      axios(config).then(() => {
        this.getdashPer();
        this.shown5 = !this.shown5;
      });
    },
    getworkspace() {
      let local = this;
      var config = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/elise-workspace",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.workspace = response.data.data;
        local.id = local.workspace.defaultWorkspace.workspaceId;
        local.WsName = local.workspace.defaultWorkspace.name;
        local.dWsName = local.workspace.defaultWorkspace.name;
      });
    },
    getdash() {
      let local = this;
      var config = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/elise-dashboard%2Fget%2Fshared%2F" +
          this.id,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.dash = response.data.data;
      });
    },
    getdashPer() {
      let local = this;
      var config = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/elise-dashboard%2Fget%2Fpersonal",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(function (response) {
        local.dashPer = response.data.data;
      });
    },
    getImageURl() {
      return "/assets/default-avatar.jpg";
    },
    getUser() {
      let local = this;
      var user = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/connection%2Fuser",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(user).then(function (response) {
        local.user = response.data.data;
      });
    },
    deleteDash(dash){
      let local = this;
      var config = {
        method: "delete",
        url:
          "https://localhost:7026/api/Auth/delete/elise-dashboard%2Fdelete%2F" +
          dash.dashboardId,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(() => {
        local.getdashPer();
      });
    },
    logout() {
      fetch("https://elise6-pfe.elisedemo.com/GED/Elise/Home/logoff")
        .then((response) => response.text())
        .then(this.menuNavigation("/login"));
    },
  },
};
</script>
<style>
.sw {
  padding: 50px;
}
</style>
