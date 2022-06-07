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
              >PROCESSUS D'ÉLABORATION</ion-label
            >
            <ion-select
              :interface-options="customPopoverOptions"
              interface="popover"
            >
              <ion-select-option
                class="matacheactivestyle"
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

        <ion-label class="Tachesactives" style="color: #4a4a4a;margin-left:15px"
          >Tâches terminées (1)</ion-label
        >

        <ion-card class="ion-card1">
          <ion-row>
            <div class="task-avatar">
              <ion-col>
                <ion-avatar>
                  <img src="/assets/capture3.png" />
                </ion-avatar>
                <div class="tache-jelon">
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
              <div class="prendreencharestyle">1. Prendre en charge</div>
              <div class="user">
                <ion-label>{{ document.createdBy }}</ion-label
                >><ion-label>{{ document.modifiedBy }}</ion-label>
              </div>
            </ion-col>
            <ion-col>
              <div class="datestyle">{{ document.creationDate }}</div>
            </ion-col>

            
          </ion-row>
            </ion-grid>
          </ion-row>
          <ion-row>
            <img class="img1" src="/assets/comment.png" />
            <ion-textarea
              placeholder="Enter votre commentaire..."
            ></ion-textarea>
            <ion-button
              fill="outline"
              color="primary"
              id="send"
              @click="presentLoading"
              :href="'/ProcessusSendButton/'+this.id"
            >
              <ion-icon :icon="send" size="large"></ion-icon>
            </ion-button>
            <ion-button fill="outline" color="primary" id="send">
              <ion-icon :icon="checkmark" size="large"></ion-icon>
            </ion-button>
          </ion-row>
          <br />
          <br />
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
    IonCol,
    IonToolbar,

    IonAvatar,

    IonCard,
  },

  data() {
    return {
      document: "",
      user: [],
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
       id:"",
    };
  },
  async created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    let local = this;
    var document = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/document%2FCOURRIERS_284%3FworkspaceId%3De5720509-1cb8-41f0-beae-50d9bb48d944",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(document)
      .then(function (response) {
        local.document = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  async created() {
    try {
      const res1 = await axios.get(
        `http://localhost:3007/fields_Generales_titre`
      );
      this.fields_Generales_titre = res1.data;

      const res3 = await axios.get(
        `http://localhost:3007/fields_Generales_reference`
      );
      this.fields_Generales_reference = res3.data;
      const res4 = await axios.get(
        "http://localhost:3007/fields_Generales_type"
      );
      this.fields_Generales_type = res4.data;
      const res5 = await axios.get(
        "http://localhost:3007/fields_Generales_contact"
      );
      this.fields_Generales_contact = res5.data;
      const res6 = await axios.get(
        "http://localhost:3007/fields_Generales_date"
      );
      this.fields_Generales_date = res6.data;
      const res7 = await axios.get("http://localhost:3007/currentinfo");
      this.currentinfo = res7.data;
    } catch (e) {
      console.log(e);
    }
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
.tache-jelon {
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
</style>