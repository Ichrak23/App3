<template>
  <ion-page>
    <ion-header class="header-style">
      <ion-toolbar>
        <ion-grid class="grid-style">
          <ion-row>
            <ion-row >
              <ion-button fill="clear" :href="'/Document/' + this.id">
                <ion-icon :icon="arrowBack"></ion-icon>
              </ion-button>
              <ion-input id="input" type="text"></ion-input>

              <ion-button
                id="nested-button-first"
                shape="circle"
                class="buttonshape"
                color="primary"
              >
                <ion-icon :icon="add" size="large" color="light"></ion-icon
              ></ion-button>
              <ion-popover
                trigger="nested-button-first"
                :dismiss-on-select="false"
                color="white"
              >
                <ion-content class="popover-content">
                  <ion-list>
                    <ion-item :button="true" :detail="false">
                      <ion-icon
                        id="podiumicon"
                        :icon="person"
                        style="margin-top: -12px"
                      ></ion-icon>
                      &nbsp;
                      <ion-label class="popover-content-detail"
                        >Demander des taches</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon id="podiumicon" :icon="keypad"></ion-icon>
                      &nbsp;
                      <ion-label class="popover-content-detail"
                        >Appliquer un processus</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon id="podiumicon" :icon="copy"></ion-icon>
                      &nbsp;
                      <ion-label class="popover-content-detail"
                        >lier des documents</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon id="podiumicon" :icon="link"></ion-icon>
                      &nbsp;
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
                shape="circle"
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
              color="white"
            >
              <ion-content class="popover-content">
                <ion-list>
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="presentAlert"
                  >
                    <ion-icon id="mail-icon" :icon="mail"></ion-icon>&nbsp;
                    <ion-label class="popover-content-detail"
                      >Diffuser le requestDocument</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="checkbox"></ion-icon>
                    &nbsp;
                    <ion-label class="popover-content-detail"
                      >Cloturer le requestDocument</ion-label
                    >
                  </ion-item>
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="presentAlert"
                  >
                    <ion-icon :icon="download"></ion-icon>
                    &nbsp;
                    <ion-label class="popover-content-detail"
                      >Réserver le requestDocument</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="print"></ion-icon>
                    &nbsp;
                    <ion-label class="popover-content-detail"
                      >Imprimer la fiche de numérisation</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="create"></ion-icon>
                    &nbsp;
                    <ion-label class="popover-content-detail"
                      >Créer une procédure de signature<br />
                      graphique</ion-label
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
        <br />
        <ion-item>
          <ion-item>
            <ion-label class="matacheactive-style" style="color: #0b7b99"
              >PROCESSUS D'ÉLABORATION</ion-label
            >
            <ion-select
              :interface-options="customPopoverOptions"
              interface="popover"
            >
              <ion-select-option
                class="matacheactive-style"
                value="PROCESSUSDETRAITEMENT"
                size="cover"
                >PROCESSUS DE TRAITEMENT</ion-select-option
              >
            </ion-select>
          </ion-item>
          <ion-icon slot="end" :icon="list" color="white"></ion-icon>
          <ion-icon slot="end" :icon="gitNetwork"></ion-icon>
        </ion-item>
        <br />
        <br />

        <ion-label
          class="Taches-actives-style"
          style="color: #4a4a4a; margin-left: 15px"
          >Tâches terminées (1)</ion-label
        >

        <ion-card class="card-style">
          <ion-row>
            <div class="task-avatar">
              <ion-col>
                <ion-avatar>
                  <img src="/assets/capture3.png" />
                </ion-avatar>
                <div class="task-jelon">
                  <ion-avatar>
                    <img src="/assets/badge.svg" />
                  </ion-avatar>
                </div>
                <div class="task-type-icon-wrapper">
                  <ion-avatar>
                    <img src="/assets/person.svg" />
                  </ion-avatar>
                </div>
              </ion-col>
            </div>
            <ion-grid>
              <ion-row>
                <ion-col size="8">
                  <div class="take-charge-by-style">1. Prendre en charge</div>
                  <div class="user">
                    <ion-label>{{ requestDocument.createdBy }}</ion-label
                    >><ion-label>{{ requestDocument.modifiedBy }}</ion-label>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="date-style">{{ requestDocument.creationDate }}</div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-row>
          <ion-row>
            <img class="image-comment-style" src="/assets/comment.png" />
            <ion-textarea
              placeholder="Enter votre commentaire..."
            ></ion-textarea>
            <ion-button
              fill="outline"
              color="primary"
              id="send"
              @click="presentLoading"
              :href="'/ProcessSendButton/' + this.id"
            >
              <ion-icon :icon="send" size="large"></ion-icon>
            </ion-button>
            <ion-button fill="outline" color="primary" id="send">
              <ion-icon :icon="checkmark" size="large"></ion-icon>
            </ion-button>
          </ion-row>
          
          <ion-row> </ion-row>
        </ion-card>
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
  IonCol,
  IonToolbar,
  IonAvatar,
  IonCard,
  loadingController,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import {
  arrowBack,
  list,
  checkmark,
  time,
  gitNetwork,
  send,
  paper,
  keypad,
  calendar,
  ellipsisHorizontal,
  more,
  podium,
  person,
  help,
  mail,
  checkbox,
  download,
  print,
  create,
  add,
  star,
  starOutline,
  qrCodeOutline,
  save,
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
    IonCol,
    IonToolbar,
    IonAvatar,
    IonCard,
  },

  data() {
    return {
      requestDocument: "",
      user: [],
      type: [],
      id: "",
    };
  },
  async created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    let local = this;
    var requestDocument = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/requestDocument%2FCOURRIERS_284%3FworkspaceId%3De5720509-1cb8-41f0-beae-50d9bb48d944",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(requestDocument)
      .then(function (response) {
        local.requestDocument = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  

  setup() {
    return {
      arrowBack,
      list,
      time,
      checkmark,
      gitNetwork,
      paper,
      send,
      keypad,

      calendar,
      more,
      ellipsisHorizontal,
      podium,
      person,
      help,
      mail,
      checkbox,
      download,
      print,
      create,
      add,
      qrCodeOutline,
      star,
      starOutline,
      save,
      link,
      copy,
    };
  },
  methods: {
    async presentLoading() {
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
        message: "Please wait...",
        duration: this.timeout,
      });

      await loading.present();

      setTimeout(function () {
        loading.dismiss();
      }, this.timeout);
    },
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
.card-style {
  background-color: #e8f3f6;
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
ion-button[shape="circle2"] {
  --border-radius: 50%;
  width: 47px;
  height: 47px;
}
ion-select-option {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 20px;
  font-weight: bolder;
}
.task-avatar {
  display: flex;
  align-items: center;
  position: relative;
}
.task-jelon {
  position: absolute;
  top: calc(50% - 8px);
  height: 18px;
  width: 18px;
  background-color: #0a6e89;
  border-radius: 50%;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -2px;
}
.task-type-icon-wrapper {
  bottom: 0;
  display: flex;
  width: 18px;
  height: 18px;
  font-size: 16px;
  border-radius: 30px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 9;
  right: 0;
  top: 37px;
  background-color: #0a6e89;
}
ion-button[shape="circle"] {
  --border-radius: 50%;
  width: 56px;
  height: 56px;
}
ion-button[shape="circle2"] {
  --border-radius: 50%;
  width: 30px;
  height: 30px;
}
ion-button#send::part(native) {
  width: 56px;
  height: 56px;
  border-radius: 100% !important;
}
.matacheactive-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 15px;
  font-weight: bolder;
}
.Taches-actives-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 16px;
  font-weight: bolder;
}
.take-charge-by-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: black;
  font-weight: bolder;
}




.user {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  font-weight: normal;
  color: black;
}
.date-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
}

.popover-content {
  border: #0a6e89;
}
.popover-content-detail {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #0a6e89;
}
.image-comment-style {
  width: 30px;
  height: 30px;
}

.grid-style{
  background-color: white;
}

ion-icon {
  color: gray;
}
ion-icon.mail-icon {
  color: #0a6e89;
  --ion-color: var(--ion-icon-color);
}
.popover-content-detail {
  color: #0a6e89;
}
.popover-content {
  --ion-background-color: #e8f3f6;
}
.contentpopover {
  background-color: white;
}
.my-custom-class {
  font-family: "Trebuchet MS", sans-serif;
}
.myCustomSelect {
  width: 100% !important;
}
.footer {
  background-color: #0b7b99;
  color: #0b7b99;
}
</style>
