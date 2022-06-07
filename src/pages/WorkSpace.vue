<template>
  <ion-page
    ><ion-content>
      <ion-toolbar style="height: 30px" color="primary"
        ><ion-row>
          <ion-icon
            style="margin-top: -5px; text-align: center; font-size: 13px"
            name="arrow-back-outline"
            color="light"
            @click="
              $router.push(
                '/homepage/e5720509-1cb8-41f0-beae-50d9bb48d944/e10416ad-e9db-4b2e-b6bb-643d96cf046b'
              )
            "
          ></ion-icon>
          <ion-col
            style="margin-top: -15px; text-align: center"
            @click="$router.push('/ProfilPage')"
          >
            <ion-label style="font-size: 13px">profile</ion-label>
          </ion-col>
          <ion-col
            style="margin-top: -15px; text-align: center"
            @click="$router.push('/workspace')"
          >
            <ion-label style="font-size: 13px">
              Mes espaces de travail</ion-label
            >
          </ion-col></ion-row
        >
      </ion-toolbar>
      <div>
        <div style="margin-top: 20px">
          <ion-row style="margin: 10px">
            <ion-icon name="logo-buffer"></ion-icon>
            <ion-label style="font-size: 18px; margin-left: 5px">
              Mon espace de travail utilisateur</ion-label
            ></ion-row
          >

          <ion-row style="margin: 20px">
            <ion-label class="wsp-label"> Nom</ion-label>
            <ion-label
              v-for="space in space"
              :key="space.id"
              class="wsp-data"
              color="primary"
              >{{ space.name }}</ion-label
            >
          </ion-row>
          <ion-row style="margin: 20px">
            <ion-label class="wsp-label">
              Nombre d'utilisateurs/services</ion-label
            >
            <ion-icon class="wsp-data" name="person"></ion-icon>
            <ion-label
              v-for="space in space"
              :key="space.id"
              class="wsp-data"
              >{{ space.workspaceScopesServiceCount }}</ion-label
            >
            <ion-icon class="wsp-data" name="people"></ion-icon>
            <ion-label
              v-for="space in space"
              :key="space.id"
              class="wsp-data"
              >{{ space.workspaceScopesUsersCount }}</ion-label
            >
          </ion-row>
          <ion-row style="margin: 20px">
            <ion-label class="wsp-label"
              >Utilisateur/service en charge par défaut</ion-label
            >

            <label class="wsp-data">{{ this.labelc }}</label>
          </ion-row>
          <ion-row style="margin: 20px">
            <ion-label class="wsp-label">
              Utilisateur/service demandeur par défaut</ion-label
            >
            <label class="wsp-data">{{ this.labelr }}</label>
          </ion-row>

          <ion-row style="margin: 10px">
            <ion-icon name="logo-buffer"></ion-icon>
            <ion-label style="font-size: 18px; margin-left: 5px">
              Mes espaces de travail personnalisés</ion-label
            ></ion-row
          >
          <ion-grid>
            <ion-row>
              <ion-col size="3">
                <ion-label class="wsp-label"> Nom</ion-label>
              </ion-col>
              <ion-col size="3">
                <ion-label class="wsp-label"> Nbre d'U/S</ion-label> </ion-col
              ><ion-col size="3">
                <ion-label class="wsp-label"
                  >U/S en charge par défaut</ion-label
                >
              </ion-col>
              <ion-col size="3">
                <ion-label class="wsp-label">
                  U/S demandeur par défaut</ion-label
                >
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-item-sliding
              style="margin-left: -5px"
              v-for="space in space.userWorkspaces"
              :key="space.id"
              ><ion-item>
                <ion-col size="3">
                  <div>
                    <ion-label style="font-size: 10px" color="primary">{{
                      space.name
                    }}</ion-label>
                  </div></ion-col
                >
                <ion-col size="3">
                  <ion-row>
                    <ion-icon style="font-size: 12px" name="person"></ion-icon>
                    <ion-label style="font-size: 10px; margin-left: 5px"
                      >{{ space.workspaceScopesUsersCount }}
                    </ion-label>
                    <ion-icon class="wsp-data" name="people"></ion-icon>
                    <ion-label style="font-size: 10px; margin-left: 5px">
                      {{ space.workspaceScopesServiceCount }}
                    </ion-label>
                  </ion-row>
                </ion-col>
                <ion-col size="3">
                  <div>
                    <label style="font-size: 10px">{{
                      space.flowchartItemInChargeOfDocuments.label
                    }}</label>
                  </div>
                </ion-col>
                <ion-col size="3">
                  <div>
                    <label style="font-size: 10px">{{
                      space.flowchartItemRequester.label
                    }}</label>
                  </div>
                </ion-col> </ion-item>
                 <ion-item-options side="end">
                   <ion-item-option  @click="">
                      <ion-icon
                        name="create-outline"
                        slot="icon-only"
                        style="margin-top: 5px; font-size: 13px"
                      ></ion-icon
                    ></ion-item-option>
                    <ion-item-option color="danger" @click="delWs(space)">
                      <ion-icon
                        name="trash"
                        slot="icon-only"
                        style="margin-top: 5px; font-size: 13px"
                      ></ion-icon
                    ></ion-item-option>
                  </ion-item-options>
                 
            </ion-item-sliding>

            <ion-button
              style="margin-top: 20px"
              size="small"
              @click="shown = !shown"
            >
              <ion-icon class="wsp-new" name="add"></ion-icon>
              <ion-label style="margin-left: 5px"
                >Nouvel espace de travail personnalisé</ion-label
              >
            </ion-button>
          </ion-grid>
        </div>
        <ion-modal :isOpen="shown" class="modalimg">
          <ion-content force-overscroll="false">
            <div class="modal-content">
              <ion-label color="primary">CRÉER UN ESPACE DE TRAVAIL</ion-label>
              <div class="modal-div">
                <ion-label color="danger" style="font-size: 12px"
                  >Nom *</ion-label
                >
                <ion-input
                  v-model="nameWs"
                  style="font-size: 12px"
                  placeholder=" Obligatoire"
                  class="input-mdl"
                  aria-required="true"
                  required="required"
                ></ion-input>
                <ion-label class="label-container" style="font-size: 12px"
                  >Utilisateur/service en charge par défaut *</ion-label
                >
                <ion-input v-if="shown1" @click="shown1 = !shown1">
                  {{ this.userc.label }}
                </ion-input>
                <ion-searchbar
                  v-if="!shown1"
                  @input="debounceInput3"
                  placeholder="Rechercher un utilisateur ou service"
                >
                </ion-searchbar>
                <ion-row
                  v-for="user in listSearchWorkspacef"
                  :key="user.id"
                  style="margin-left: 20px"
                >
                  <ion-item
                    @click="
                      userc = user;
                      shown1 = !shown1;
                      listSearchWorkspacef = [];
                    "
                  >
                    <ion-icon
                      slot="start"
                      name="people"
                      style="font-size: 13px"
                    ></ion-icon>
                    <ion-label style="font-size: 13px">
                      {{ user.label }}</ion-label
                    >
                  </ion-item>
                </ion-row>
                <ion-label class="label-container" style="font-size: 12px"
                  >Utilisateur/service demandeur par défaut *</ion-label
                >
                <ion-row
                  style="
                    border: solid;
                    border-color: #e7e7e7;
                    border-width: thin;
                    height: 40px;
                    border-radius: 5px;
                    margin-left: 5px;
                    width: 300px;
                  "
                >
                  <ion-label
                    v-for="space in space"
                    :key="space.id"
                    style="
                      font-size: 12px;
                      align-self: center;
                      margin-left: 10px;
                    "
                    >{{ space.name }}</ion-label
                  ></ion-row
                >
                <ion-label class="label-container" style="font-size: 12px"
                  >Utilisateurs et services de l'espace de travail (0)*
                </ion-label>

                <ion-item v-for="u in userd" :key="u.id">{{
                  u.label
                }}</ion-item>

                <ion-searchbar
                  @input="debounceInput2"
                  placeholder="Rechercher un utilisateur ou service"
                >
                </ion-searchbar>
                <ion-row
                  v-for="user in listSearchWorkspace"
                  :key="user.id"
                  style="margin-left: 20px"
                >
                  <ion-item
                    @click="
                      gettt(user);
                      listSearchWorkspace = [];
                    "
                  >
                    <ion-icon
                      slot="start"
                      name="people"
                      style="font-size: 13px"
                    ></ion-icon>
                    <ion-label style="font-size: 13px">
                      {{ user.label }}</ion-label
                    >
                  </ion-item>
                </ion-row>
                <ion-button
                  @click="
                    newWs();
                    shown = !shown;
                  "
                  fill="clear"
                  style="margin-left: 180px; font-size: 12px"
                >
                  Créer l'espace de travail
                </ion-button>
              </div>
            </div>
          </ion-content>
        </ion-modal>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { defineComponent } from "vue";
import { debounce } from "debounce";
import axios from "axios";
import {
  IonContent,
  IonItemSliding,
  IonModal,
  IonItemOption,
  IonItemOptions,
  IonItem,
  IonInput,
  IonButton,
  IonGrid,
  IonToolbar,
  IonSearchbar,
  IonCol,
  IonRow,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
export default defineComponent({
  components: {
    IonContent,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonPage,
    IonModal,
    IonItem,
    IonInput,
    IonButton,
    IonGrid,
    IonToolbar,
    IonSearchbar,
    IonRow,
    IonLabel,
    IonCol,
    IonIcon,
  },
  data() {
    return {
      listSearchWorkspace: [],
      listSearchWorkspacef: [],
      space: [],
      shown: false,
      shown1: false,
      userc: [],
      userd: [],
      nameWs: "",
      labelc: "",
      labelr: "",
    };
  },
  created() {
    this.getWS();
  },
  methods: {
    debounceInput2: debounce(function (e) {
      let local = this;
      var conf2 = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/flowchart%2Fsearch%2Fall%3Fq%3D" +
          e.target.value +
          "%26isWorkspace%3Dtrue",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(conf2).then(function (response6) {
        local.listSearchWorkspace = response6.data.results;
      });
    }),
    getImageURl() {
      return "/assets/default-avatar.jpg";
    },
    getNot() {
      let local = this;
      var notification = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/profile%2Fsubscriptions",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(notification).then(function (response) {
        local.notification = response.data.data;
      });
    },
    debounceInput3: debounce(function (e) {
      let local = this;
      var conf3 = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/flowchart%2Fsearch%2Fall%3Fq%3D" +
          e.target.value +
          "%26isWorkspace%3Dfalse",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(conf3).then(function (response7) {
        local.listSearchWorkspacef = response7.data.results;
      });
    }),
    newWs() {
      let local = this;
      var config = {
        method: "post",
        url: "https://localhost:7026/api/Auth/post/elise-workspace%2Fcreate",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          label: local.nameWs,
          flowchartItemUidInChargeOfDocuments: local.userc.uid,
          flowchartItemUidRequester: local.userd.uid,
          flowchartItemUidWorkspaceContent: [
            "d71ac14b1b2cd144b712102c0f4a6e59",
          ],
        },
      };

      axios(config).then(() => {
        local.getWS();
      });
    },
    getWS() {
      let local = this;
      var space = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/elise-workspace",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(space).then(function (response3) {
        local.space = response3.data.data;
        local.labelc =
          local.space.defaultWorkspace.flowchartItemInChargeOfDocuments.label;
        local.labelr =
          local.space.defaultWorkspace.flowchartItemRequester.label;
      });
    },
    delWs(space) {
      let local = this;
      var config = {
        method: "delete",
        url:
          "https://localhost:7026/api/Auth/delete/elise-workspace%2Fdelete%2F" +
          space.workspaceId,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(() => {
        local.getWS();
      });
    },
    gettt(user) {
      this.userd.push(user);
    },
  },
});
</script>
