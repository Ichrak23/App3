<template>
  <ion-page>
    <ion-header class="header2">
       <ion-toolbar>
        <ion-grid style="background-color: white;">
          <ion-row>
              <ion-row style="align-items: center">
            <ion-button fill="clear" :href="'/createdocument/Processus/'+this.id">
              <ion-icon :icon="arrowBack"></ion-icon>
            </ion-button>
            <ion-input id="input" type="text"></ion-input>
            
              <ion-button
                id="nested-button1"
                shape="circle"
                class="buttonshape"
                color="primary"
              >
                <ion-icon :icon="add" size="large" color="light"></ion-icon></ion-button>
              <ion-popover
                trigger="nested-button1"
                :dismiss-on-select="false"
                color="white"
              >
                <ion-content class="popover-content">
                  <ion-list>
                    <ion-item :button="true" :detail="false" >
                      <ion-icon id="podiumicon" :icon="person" style="margin-top: -12px;"></ion-icon>
                      &nbsp;
                      <ion-label class="textlabelcolor"
                        >Demander des taches</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon id="podiumicon" :icon="keypad"></ion-icon>
                      &nbsp;
                      <ion-label class="textlabelcolor"
                        >Appliquer un processus</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon id="podiumicon" :icon="copy"></ion-icon>
                      &nbsp;
                      <ion-label class="textlabelcolor"
                        >lier des documents</ion-label
                      >
                    </ion-item>
                    <ion-item :button="true" :detail="false">
                      <ion-icon id="podiumicon" :icon="link"></ion-icon>
                      &nbsp;
                      <ion-label class="textlabelcolor"
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
                    <ion-icon id="icon1" :icon="mail"></ion-icon>&nbsp;
                    <ion-label class="textlabelcolor"
                      >Diffuser le document</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="checkbox"></ion-icon>
                    &nbsp;
                    <ion-label class="textlabelcolor"
                      >Cloturer le document</ion-label
                    >
                  </ion-item>
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="presentAlert"
                  >
                    <ion-icon :icon="download"></ion-icon>
                    &nbsp;
                    <ion-label class="textlabelcolor"
                      >Réserver le document</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="print"></ion-icon>
                    &nbsp;
                    <ion-label class="textlabelcolor"
                      >Imprimer la fiche de numérisation</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="create"></ion-icon>
                    &nbsp;
                    <ion-label class="textlabelcolor"
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
            <ion-label class="matacheactivestyle" style="color: #0b7b99"
              >HISTORIQUE DES ÉVENEMENTS</ion-label
            >
          </ion-item>

          <ion-icon slot="end" :icon="refreshOutline" color="white"></ion-icon>
          <ion-icon slot="end" :icon="filterOutline"></ion-icon>
        </ion-item>
        <ion-list lines="none">
          <ion-item v-for="hist in history" :key="hist.id" style="padding: 5px">
            <ion-thumbnail>
              <ion-button
                id="nested-button1"
                shape="circle"
                fill="outline"
                color="primary"
              >
                <ion-icon
                  :icon="iconsoperation[hist.operation]"
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
                  {{this.labelOperation[hist.operation]}}
                </p>
              </ion-label>

              <ion-label class="ion-text-wrapp"
                ><p style="font-style: italic; font-size: 12px">
                  {{ hist.user.label }}
                </p></ion-label
              >
            </ion-col>
            <ion-label slot="end" style="font-size:14px">{{
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
  list,
  time,
  filterOutline,
  gitNetwork,
  send,
  paper,
  keypad,
  checkmark,
  calendar,
  more,
  podium,
  person,
  help,
  mail,
  checkbox,
  download,
  print,
  create,
  arrowDownOutline,
  add,
  ellipsisHorizontal,
  close,
  book,
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
  name: "informationss",
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
      iconsoperation: [
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
      history: "",
      user: [],
      id:"",
      currentinfo: [],
      COURRIERS_1216: [],
      fields_Generales_titre: [],
      fields_Generales_contact: [],
      fields_Generales_date: [],
      fields_Generales_importance: [],
      fields_Generales_confidentialite: [],
      fields_Generales_support: [],
      fields_Generales_signale: [],
      fields_Generales_type: [],
      fields_Generales_description: [],
      fields_Generales_commentaire: [],
      fields_Generales_recommande: [],
      fields_Generales_date_ech: [],
      type: [],
      medium: [],
      duePeriod: [],
      registeredMailInformation: [],
      metadata: [],
      isFavorite: false,
    };
  },
   async created() {
    this.id = this.$route.params.id;
  },
  
  
  mounted() {
    let local = this;
    var history = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/elise-document%2F"+this.id+"%2Fhistory%3FstartDate%3D%26endDate%3D%26start%3D0%26limit%3D30%26selectedEvents%3D7%26includeReadEvents%3Dfalse",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(history)
      .then(function (response) {
        local.history = response.data.data.events;
      })
      .catch(function (error) {
        console.log(error);
      });
      //https://localhost:7026/api/Auth/put/document
      let local1 = this;
    var putapi = {
      method: "put",
      url: "https://localhost:7026/api/Auth/put/document",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(putapi)
      .then(function (response) {
        local1.putapi = response.data.data.events;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  setup() {
    return {
      arrowBack,
      list,
      filterOutline,
      gitNetwork,
      close,
      paper,
      time,
      send,
      keypad,
      checkmark,
      calendar,
      more,
      podium,
      person,
      arrowDownOutline,
      help,
      mail,
      checkbox,
      download,
      print,
      create,
      add,
      ellipsisHorizontal,
      book,
      qrCodeOutline,
      star,
      starOutline,
      refreshOutline,
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
    
    async presentAlert() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "RÉSERVER LE DOCUMENT",
        message:
          "La réservation du document vous octroie un accés exclusif en modification sur ce document le temps de la réservation. Il restera accessible des autres utilisateurs, en lecture seule. Il est possible d'apporter plus de précisions aux utilisateurs sur la réservation en précisant le motif.",
        buttons: ["ANNULER", "RÉSERVER LE DOCUMENT"],
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    },
  },
});
</script>
<style scoped>
.header2 {
  background-color: #0a6e89;
}
.ion-card1 {
  background-color: #e8f3f6;
}
.icon1 {
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
  left: 45px;
  top: 40px;
  background-color: #0a6e89;
}
ion-button[shape="circle"] {
  --border-radius: 50%;
  width: 50px;
  height: 50px;
}
ion-button[shape="circle2"] {
  --border-radius: 50%;
  width: 47px;
  height: 47px;
}
ion-button#send::part(native) {
  width: 56px;
  height: 56px;
  border-radius: 100% !important;
}
.input2 {
  background-color: #e8f3f6;
}
.button1 {
  float: right;
  position: relative;
}
.matacheactivestyle {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 15px;
  font-weight: bolder;
}
.Tachesactives {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 16px;
  font-weight: bolder;
}
.prendreencharestyle {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: black;
  font-weight: bolder;
}
.buttonshape {
  font-family: "Trebuchet MS", sans-serif;
}
.lab1 {
  color: #288748;
  font-family: "Trebuchet MS", sans-serif;
}
.lab2 {
  font-family: "Trebuchet MS", sans-serif;
}
.lab3 {
  color: #ffffff;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
}
.lab4 {
  color: #0b7b99;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
}
.user {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  font-weight: normal;
  color: black;
}
.datestyle {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
}
.imgthreedots {
  width: 12px;
}
.popover-content {
  border: #0a6e89;
}
.textlabelcolor {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #0a6e89;
}
.img1 {
  width: 30px;
  height: 30px;
}
.labbvuedetaille {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #0a6e89;
  font-weight: bold;
}
.general {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #f44336;
}
.titrestyle {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #165c77;
  font-weight: bold;
}
ion-icon {
  color: gray;
}
ion-icon.icon1 {
  color: #0a6e89;
  --ion-color: var(--ion-icon-color);
}
.infosnavstyle {
  font-family: "Trebuchet MS", sans-serif;
  color: #e84481;
}
.textlabelcolor {
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
.ion-text-wrap {
  font-family: "Trebuchet MS", sans-serif;
}
.ion-text-wrap {
  font-family: "Trebuchet MS", sans-serif;
  color: #0b7b99;
}
</style>
