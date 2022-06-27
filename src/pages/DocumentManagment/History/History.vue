<template>
  <ion-page>
    <ion-header class="header-style">
      <ion-toolbar>
        <ion-grid class="grid-style">
          <ion-row>
            <ion-button fill="clear" :href="'/Document/' + this.id">
              <ion-icon :icon="arrowBack"></ion-icon>
            </ion-button>
            <ion-input id="input" type="text"></ion-input>
            <ion-row style="align-items: center">
              <ion-button
                id="nested-button1"
                shape="circle"
                class="buttonshape"
                color="primary"
              >
                <ion-icon :icon="add" size="large" color="light"></ion-icon>
              </ion-button>
              <ion-popover
                trigger="nested-button1"
                :dismiss-on-select="false"
                color="light"
              >
                <ion-content class="popover-content-detail">
                  <ion-list>
                    <ion-item :button="true" :detail="false">
                      <ion-icon
                        id="podiumicon"
                        :icon="person"
                        color="primary"
                      ></ion-icon>

                      <ion-label class="popover-content-detail"
                        >Demander des taches</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon id="podiumicon" :icon="keypad" color="primary">
                      </ion-icon>

                      <ion-label class="popover-content-detail"
                        >Appliquer un processus</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon
                        id="podiumicon"
                        :icon="copy"
                        color="primary"
                      ></ion-icon>

                      <ion-label class="popover-content-detail"
                        >lier des documents</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon
                        id="podiumicon"
                        :icon="link"
                        color="primary"
                      ></ion-icon>

                      <ion-label class="popover-content-detail"
                        >Ajouter un lien externe</ion-label
                      >
                    </ion-item>
                  </ion-list>
                </ion-content>
              </ion-popover>
              <ion-button
                id="nested-button"
                class="buttonshape"
                color="light"
                shape="circle2"
              >
                <ion-icon
                  :icon="ellipsisHorizontal"
                  color="primary"
                  size="large"
                ></ion-icon>
              </ion-button>
            </ion-row>
            <ion-popover
              trigger="nested-button"
              :dismiss-on-select="true"
              color="light"
            >
              <ion-content class="popover-content-detail">
                <ion-list>
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="presentAlert"
                  >
                    <ion-icon id="icon1" :icon="mail" color="primary">
                    </ion-icon>
                    <ion-label class="popover-content-detail"
                      >Diffuser le document</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="checkbox" color="primary"></ion-icon>

                    <ion-label class="popover-content-detail"
                      >Cloturer le document</ion-label
                    >
                  </ion-item>
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="presentAlert"
                  >
                    <ion-icon :icon="download" color="primary"></ion-icon>

                    <ion-label class="popover-content-detail"
                      >Réserver le document</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="print" color="primary"></ion-icon>

                    <ion-label class="popover-content-detail"
                      >Imprimer la fiche de numérisation</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="create" color="primary"></ion-icon>

                    <ion-label class="popover-content-detail"
                      >Créer une procédure de signature graphique</ion-label
                    >
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-popover>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-item>
          <ion-item>
            <ion-label class="title-style" style="color: #0b7b99"
              >HISTORIQUE DES ÉVENEMENTS</ion-label
            >
          </ion-item>

          <ion-icon slot="end" :icon="refreshOutline" color="white"></ion-icon>
          <ion-icon slot="end" :icon="filterOutline"></ion-icon>
        </ion-item>
        <ion-list lines="none">
          <ion-item
            class="action-button"
            v-for="hist in paramsHistory"
            :key="hist.id"
            style="padding: 5px"
          >
            <ion-thumbnail>
              <ion-button
                id="nested-button1"
                shape="circle"
                fill="outline"
                color="primary"
              >
                <ion-icon
                  :icon="iconsOperation[hist.operation]"
                  color="dark"
                  size="large"
                ></ion-icon>
              </ion-button>
            </ion-thumbnail>
            <ion-col>
              <ion-label class="ion-text-wrapp"
                ><p
                  style="color: #0b7b99; font-weight: bolder; font-size: 14px"
                >
                  {{ this.labelOperation[hist.operation] }}
                </p>
              </ion-label>
              <ion-label class="ion-text-wrapp"
                ><p style="font-style: italic; font-size: 12px">
                  {{ hist.user.label }}
                </p></ion-label
              >
            </ion-col>
            <ion-label slot="end" style="font-size: 14px">{{
              hist.date.slice(0, 4) +
              "/" +
              hist.date.slice(4, 6) +
              "/" +
              hist.date.slice(6, 8)
            }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonPopover,
  IonItem,
  IonInput,
  alertController,
  IonIcon,
  IonLabel,
  IonList,
  IonToolbar,
  loadingController,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import {
  arrowBack,
  refreshOutline,
  filterOutline,
  send,
  keypad,
  mail,
  checkbox,
  download,
  print,
  create,
  add,
  ellipsisHorizontal,
  close,
  book,
  link,
  copy,
} from "ionicons/icons";
import axios from "axios";
export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
  },
  name: "Informations",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonButton,
    IonGrid,
    IonRow,
    IonPopover,
    IonItem,
    IonInput,
    IonIcon,
    IonLabel,
    IonList,
    IonToolbar,
  },
  data() {
    return {
      iconsOperation: [
        "add",
        "create",
        "close",
        "book",
        "send",
        "send",
        "download",
        "refreshOutline",
      ],
      labelOperation: [
        "Création du document",
        "Modification du document",
        "suppression du document",
        "suppression du document",
        "lecture du document",
        "Diffusion collaborative du document",
        "Autre diffusion du document",
        " Réservation du document",
        "Annuler Réservation du document",
        "Mise à jourFlowchartProcessing",
      ],
      operation: "",
      paramsHistory: "",
      user: [],
      id: "",
      type: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
  },

  mounted() {
    let local = this;
    var paramsHistory = {
      method: "get",
      url:
        "https://localhost:7026/api/Auth/get/elise-document%2F" +
        this.id +
        "%2Fhistory%3FstartDate%3D%26endDate%3D%26start%3D0%26limit%3D30%26selectedEvents%3D7%26includeReadEvents%3Dfalse",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(paramsHistory)
      .then(function (response) {
        local.paramsHistory = response.data.data.events;
      })
      .catch(function (error) {
        console.log(error);
      });
    //https://localhost:7026/api/Auth/put/document

    var requestHistory = {
      method: "put",
      url: "https://localhost:7026/api/Auth/put/document",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(requestHistory)
      .then(function (response) {
        local.requestHistory = response.data.data.events;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  setup() {
    return {
      arrowBack,
      refreshOutline,

      filterOutline,

      send,

      keypad,

      mail,
      checkbox,
      download,
      print,
      create,

      add,
      ellipsisHorizontal,
      close,
      book,
      link,
      copy,
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();
      const dateTime = date + " " + time;

      return dateTime;
    },
  },
});
</script>
<style scoped>
.header-style {
  background-color: #0a6e89;
}
.nested-button {
  align-items: center;
}

.mail-icon {
  position: absolute;
  top: 25%;
  right: 0;
  transform: translate(0, -50%);
}
ion-button[shape="circle"] {
  --border-radius: 50%;
  width: 56px;
  height: 56px;
}
.popover-content-detail {
  color: black;
}

ion-button[shape="circle"] {
  --border-radius: 50%;
  width: 56px;
  height: 56px;
}
ion-button[shape="circle2"] {
  --border-radius: 50%;
  width: 47px;
  height: 47px;
}

.grid-style {
  background-color: white;
}

.title-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 15px;
  font-weight: bolder;
}

.popover-content-detail {
  border: #0a6e89;
}
.popover-content-detail-title {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #0a6e89;
}
.action-button {
  margin-bottom: 10px;
}
ion-icon {
  color: gray;
}
ion-icon.mail-icon {
  color: #0a6e89;
  --ion-color: var(--ion-icon-color);
}

.popover-content-detail-title {
  color: #0a6e89;
}
.popover-content-detail {
  --ion-background-color: #e8f3f6;
}
</style>
