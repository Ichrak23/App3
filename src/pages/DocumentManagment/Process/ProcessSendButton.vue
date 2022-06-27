<template>
  <ion-page>
    <ion-header class="header-style">
      <ion-toolbar>
        <ion-grid class="grid-style">
          <ion-row>
              <ion-row >
            <ion-button fill="clear" :href="'/Document/'+this.id">
              <ion-icon :icon="arrowBack"></ion-icon>
            </ion-button>
            <ion-input id="input" type="text"></ion-input>
            
              <ion-button
                id="nested-first-button"
                shape="circle"
                class="buttonshape"
                color="primary"
              >
                <ion-icon :icon="add" size="large" color="light"></ion-icon></ion-button>
              <ion-popover
                trigger="nested-first-button"
                :dismiss-on-select="false"
                color="white"
              >
                <ion-content class="popover-content">
                  <ion-list>
                    <ion-item :button="true" :detail="false" >
                      <ion-icon id="podiumicon" :icon="person" style="margin-top: -12px;"></ion-icon>
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
                      >Diffuser le document</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="checkbox"></ion-icon>
                    &nbsp;
                    <ion-label class="popover-content-detail"
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
                    <ion-label class="popover-content-detail"
                      >Réserver le document</ion-label
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

        <ion-label class="taches-actives-style" style="color: #4a4a4a"
          >Tâches actives (1)</ion-label
        >

        <ion-card class="card-style">
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
              <div class="take-charge-by-style">1. Prendre en charge</div>
              <div class="user">
                <ion-label>{{ document.createdBy }}</ion-label
                >><ion-label>{{ document.modifiedBy }}</ion-label>
              </div>
            </ion-col>
            <ion-col>
              <div class="date-style">{{ document.creationDate }}</div>
            </ion-col>

            
          </ion-row>
        </ion-grid>
        </ion-row>
          <ion-row>
            <div class="user">
              &nbsp;&nbsp;<ion-icon :icon="time">&nbsp;</ion-icon>
              <ion-label
                >démarré par {{ document.modifiedBy }} le
                {{ currentDateTime() }}</ion-label
              >
            </div>
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
             :href="'/ProcessCheckButton/'+this.id"
            >
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
  IonTextarea,
  IonCard,
  loadingController,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import {
  arrowBack,
  list,
  time,
  gitNetwork,
  send,
  paper,
  keypad,
  checkmark,
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
    IonTextarea,
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
    };
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
      gitNetwork,
      paper,
      send,
      keypad,
      checkmark,
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
ion-select-option {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 20px;
  font-weight: bolder;
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

.grid-style{
  background-color: white;
}

.matacheactive-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 20px;
  font-weight: bolder;
}
.taches-actives-style {
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
.my-custom-select {
  width: 100% !important;
}

</style>
