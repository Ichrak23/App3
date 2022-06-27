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
                id="nested-view-button"
                shape="circle"
                class="buttonshape"
                color="primary"
              >
                <ion-icon :icon="add" size="large" color="light"></ion-icon>
              </ion-button>
              <ion-popover
                trigger="nested-view-button"
                :dismiss-on-select="false"
                color="light"
              >
                <ion-content class="popover-content">
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
                      &nbsp;
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
                      &nbsp;
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
              <ion-content class="popover-content">
                <ion-list>
                  <ion-item
                    :button="true"
                    :detail="false"
                    @click="presentAlert"
                  >
                    <ion-icon id="icon1" :icon="mail" color="primary">
                    </ion-icon
                    >&nbsp;
                    <ion-label class="popover-content-detail"
                      >Diffuser le document</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="checkbox" color="primary"></ion-icon>
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
                    <ion-icon :icon="download" color="primary"></ion-icon>
                    &nbsp;
                    <ion-label class="popover-content-detail"
                      >Réserver le document</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="print" color="primary"></ion-icon>
                    &nbsp;
                    <ion-label class="popover-content-detail"
                      >Imprimer la fiche de numérisation</ion-label
                    >
                  </ion-item>
                  <ion-item :button="true" :detail="false">
                    <ion-icon :icon="create" color="primary"></ion-icon>
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

          <ion-row>
            <ion-col>
              <img src="/assets/Captureee.png" />
            </ion-col>
            <ion-col size-xs="10">
              <div class="document-description-style">
                <ion-label position="floating">{{
                  documentdetype.description
                }}</ion-label>
                <br />
              </div>
              <div class="document-subject-style">
                <ion-label position="floating">{{ document.subject }}</ion-label
                >&nbsp;
                <ion-icon
                  :icon="isFavorite ? star : starOutline"
                  color="black"
                  @click="isFavorite = !isFavorite"
                ></ion-icon>
              </div>
              <ion-button color="btl" fill="outline">
                <ion-icon :icon="qrCodeOutline" color="black"></ion-icon>&nbsp;
                {{ document.chrono }}
              </ion-button>
              <ion-button small="" color="success" fill="outline"
                >En Circulation</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <br />
        <ion-label class="matacheactive-style">ma tâche active</ion-label>
        <ion-card class="card-backgroundcolor">
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
                    <ion-label>{{ document.createdBy }}</ion-label
                    >><ion-label>{{ document.modifiedBy }}</ion-label>
                  </div>
                </ion-col>
                <ion-col class="date-style">
                  <ion-label>{{ currentDateTime() }}</ion-label>
                </ion-col>
              </ion-row></ion-grid
            >
          </ion-row>
          <ion-grid>
            <ion-row>
              &nbsp;
              <ion-icon :icon="chatboxEllipsesSharp" color="primary"></ion-icon>
              &nbsp;
              <ion-textarea
                placeholder="Enter votre commentaire..."
              ></ion-textarea>
              <ion-button fill="outline" color="primary" id="send">
                <ion-icon :icon="send" size="large" color="primary"></ion-icon>
              </ion-button>
              <ion-button fill="outline" color="primary" id="send">
                <ion-icon
                  :icon="checkmark"
                  size="large"
                  color="primary"
                ></ion-icon>
              </ion-button> </ion-row
          ></ion-grid>
          <br />
          <br />
          <ion-row> </ion-row>
        </ion-card>
        <ion-row>
          <ion-label class="matacheactive-style">propriétés</ion-label>
        </ion-row>
        <ion-card>
          <ion-row>
            <ion-col> </ion-col>
            <ion-col>
              <ion-button
                class="view-button"
                fill="clear"
                style="color: #0a6e89"
                @click="ishidden()"
                ><ion-label
                  class="detailed-view-button"
                  v-if="detailedView == true"
                  >Afficher la vue simplifiée</ion-label
                >
                <ion-label class="detailed-view-button" v-else
                  >Afficher la vue détaillée</ion-label
                >
              </ion-button>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-label class="general-part-style"
              >{{ documentGénérale }}*</ion-label
            >
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style">
              {{ documentTitre }}*</ion-label
            >
          </ion-row>

          <ion-row>
            <ion-input
              v-if="borderColor == true"
              class="input-style"
              fill="block"
              :placeholder="document.subject"
              @click="setBorderColor()"
            ></ion-input>
            <ion-input
              v-if="borderColor == false"
              class="input-withoutborder-style"
              fill="block"
              :placeholder="document.subject"
              @click="setBorderColor()"
            >
            </ion-input>
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style">{{
              documentType
            }}</ion-label>
          </ion-row>

          <ion-row>
            <ion-input
              v-if="borderColor == true"
              class="input-style"
              fill="block"
              :placeholder="documentdetype.label"
              position="floating"
              @click="setBorderColor()"
            ></ion-input>
            <ion-input
              v-if="borderColor == false"
              class="input-withoutborder-style"
              fill="block"
              :placeholder="documentdetype.label"
              position="floating"
              @click="setBorderColor()"
            ></ion-input>
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style">{{
              documentDate
            }}</ion-label>
            &nbsp;
          </ion-row>

          <ion-row>
            <ion-input
              v-if="borderColor == true"
              class="input-style"
              fill="block"
              readonly
              :placeholder="currentDateTime()"
              position="floating"
              @click="setBorderColor()"
            >
              <ion-icon size="large" :icon="calendar"></ion-icon>
            </ion-input>
            <ion-input
              v-if="borderColor == false"
              class="input-withoutborder-style"
              fill="block"
              :placeholder="currentDateTime()"
              position="floating"
              @click="setBorderColor()"
            ></ion-input>
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style"
              >{{ documentImportance }} *
            </ion-label>
          </ion-row>
          <ion-row>
            <ion-select
              class="my-custom-select"
              :interface-options="customActionSheetOptions"
              interface="action-sheet"
              placeholder="Cliquez ici pour filtrer..."
            >
              <ion-alert>
                <ion-select-option inset="true" value="Normal"
                  >Normal</ion-select-option
                >
                <ion-select-option value="Important"
                  >Important</ion-select-option
                >
                <ion-select-option value="Urgent">Urgent</ion-select-option>
                <ion-select-option value="Bas">Bas</ion-select-option>
              </ion-alert>
            </ion-select>
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style">support * </ion-label>
          </ion-row>
          <ion-row>
            <ion-select
              class="my-custom-select"
              :interface-options="customActionSheetOptions"
              interface="action-sheet"
              placeholder="Cliquez ici pour filtrer..."
            >
              <ion-select-option value="Fichier éléctronique"
                >Fichier éléctronique</ion-select-option
              >
              <ion-select-option value="Application"
                >Application</ion-select-option
              >
              <ion-select-option value="chorus">chorus</ion-select-option>
              <ion-select-option value="E-mail">E-mail</ion-select-option>
              <ion-select-option value="Fax">Fax</ion-select-option>
              <ion-select-option value="Formulaire web"
                >Formulaire web</ion-select-option
              >
              <ion-select-option value="Papier">Papier</ion-select-option>
            </ion-select>
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style"
              >{{ documentRecommande }}
            </ion-label>
          </ion-row>
          <br />
          <ion-row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ion-checkbox></ion-checkbox>
          </ion-row>
          <br />
          <ion-row>
            <ion-col>
              <ion-label class="document-title-style"
                >{{ documentRef }}
              </ion-label>
            </ion-col>
            <ion-col> </ion-col>
          </ion-row>

          <ion-row>
            <ion-input
              v-if="borderColor == true"
              class="input-style"
              fill="block"
              position="floating"
              @click="setBorderColor()"
            ></ion-input>
            <ion-input
              v-if="borderColor == false"
              class="input-withoutborder-style"
              fill="block"
              position="floating"
              @click="setBorderColor()"
            ></ion-input>
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style"
              >{{ documentConfidentialité }} *
            </ion-label>
          </ion-row>
          <ion-row>
            <ion-select
              class="my-custom-select"
              :interface-options="customActionSheetOptions"
              interface="action-sheet"
              placeholder="Cliquez ici pour filtrer..."
            >
              <ion-select-option value="Normal">Normal</ion-select-option>
              <ion-select-option value="Confidentiel"
                >Confidentiel</ion-select-option
              >
              <ion-select-option value="Personnel">Personnel</ion-select-option>
            </ion-select>
          </ion-row>
          <br />
          <ion-row>
            <ion-label class="document-title-style">{{
              documentDateech
            }}</ion-label>
          </ion-row>
          <ion-row>
            <ion-select
              class="my-custom-select"
              :interface-options="customActionSheetOptions"
              interface="action-sheet"
              placeholder="Cliquez ici pour filtrer..."
            >
              <ion-select-option value="Normal"
                >Aucune échéance</ion-select-option
              >
              <ion-select-option value="Confidentiel"
                >Une date du calendrier</ion-select-option
              >
              <ion-select-option value="Personnel">Aucune</ion-select-option>
              <ion-select-option value="Personnel"
                >Sous 15 jours</ion-select-option
              >
              <ion-select-option value="Personnel"
                >Sous 30 jours</ion-select-option
              >
            </ion-select>
          </ion-row>
        </ion-card>
      </ion-grid>
      <ion-card v-if="detailedView">
        <ion-row>
          <ion-label class="general-part-style">{{
            documentClassement
          }}</ion-label>
        </ion-row>
        <br />
        <ion-row>
          <ion-label class="document-title-style">
            {{ documentplanClasssement }}</ion-label
          >
        </ion-row>
        <ion-row>
          <ion-input
            v-if="borderColor == true"
            class="input-style"
            fill="block"
            placeholder="Ajouter un terme..."
            position="floating"
            @click="setBorderColor()"
          ></ion-input>
          <ion-input
            v-if="borderColor == false"
            class="input-withoutborder-style"
            fill="block"
            placeholder="Ajouter un terme..."
            position="floating"
            @click="setBorderColor()"
          ></ion-input>
        </ion-row>
        <br />
        <ion-row>
          <ion-label class="document-title-style">
            tableau de gestion</ion-label
          >
        </ion-row>

        <ion-row>
          <ion-input
            v-if="borderColor == true"
            class="input-style"
            fill="block"
            placeholder="Ajouter un terme..."
            position="floating"
            @click="setBorderColor()"
          ></ion-input>
          <ion-input
            v-if="borderColor == false"
            class="input-withoutborder-style"
            fill="block"
            placeholder="Ajouter un terme..."
            position="floating"
            @click="setBorderColor()"
          ></ion-input>
        </ion-row>
        <br />
        <ion-row>
          <ion-label class="document-title-style">
            {{ documentmotscles }}</ion-label
          >
        </ion-row>

        <ion-row>
          <ion-textarea class="input-style" fill="block"></ion-textarea>
        </ion-row>

        <br />
      </ion-card>
    </ion-content>
    <ion-footer-style class="footer-style">
      <ion-row v-if="borderColor == true">
        <ion-col>
          <br />
          <ion-label class="footer-title-style"
            >LE DOCUMENT A ÉTÉ MODIFIÉ</ion-label
          >
        </ion-col>
        <ion-col>
          <ion-button color="light" @click="enregistrerModif()">
            <ion-icon :icon="save"></ion-icon>
            <ion-lab class="footer-subtitle-style"
              >Enregistrer les modifications</ion-lab
            >
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-footer-style>
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
  IonIcon,
  IonLabel,
  IonList,
  IonCol,
  IonToolbar,
  IonAvatar,
  IonTextarea,
  IonCard,
  IonSelectOption,
  IonSelect,
  IonCheckbox,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import {
  arrowBack,
  ellipsisHorizontal,
  list,
  shieldSharp,
  chatboxEllipsesSharp,
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
    IonSelectOption,
    IonSelect,
    IonCheckbox,
  },
  data() {
    return {
      id: "",
      borderColor: false,
      detailedView: false,
      document: "",
      attachments: "",
      documentTitre: "",
      documentGénérale: "",
      documentType: "",
      documentDate: "",
      documentConfidentialité: "",
      documentImportance: "",
      documentDateech: "",
      documentRecommande: "",
      documentRef: "",
      documentdetype: "",
      isFavorite: false,
    };
  },
  async created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    let local = this;
    var document = {
      method: "get",
      url:
        "https://localhost:7026/api/Auth/get/document%2F" +
        this.id +
        "%3FworkspaceId%3De5720509-1cb8-41f0-beae-50d9bb48d944",

      headers: {
        "content-Type": "application/json",
      },
    };
    axios(document)
      .then(function (response) {
        local.document = response.data.data;
        local.attachments = response.data.data.attachments[0];
        console.log("document", local.attachments.url);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local0 = this;
    var courrier = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(courrier)
      .then(function (response) {
        local0.courrier = response.data.data.mailDirection;
        console.log("here", local0.courrier);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local11 = this;
    var documentdetype = {
      method: "get",
      url:
        "https://localhost:7026/api/Auth/get/document%2F" +
        this.id +
        "%3FworkspaceId%3De5720509-1cb8-41f0-beae-50d9bb48d944",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentdetype)
      .then(function (response) {
        local11.documentdetype = response.data.data.type;
      })
      .catch(function (error) {
        console.log(error);
      });
    let local1 = this;
    var documentTitre = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentTitre)
      .then(function (response) {
        local1.documentTitre =
          response.data.data.columns[0].groups[0].fields[0].description;
        console.log(local1.documentTitre);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local2 = this;
    var documentGénérale = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentGénérale)
      .then(function (response) {
        local2.documentGénérale = response.data.data.columns[0].groups[0].label;

        console.log(local2.documentGénérale);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local3 = this;
    var documentType = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentType)
      .then(function (response) {
        local3.documentType =
          response.data.data.columns[0].groups[0].fields[2].label;

        console.log(local3.documentType);
      })
      .catch(function (error) {
        console.log(error);
      });

    let local4 = this;
    var documentDate = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentDate)
      .then(function (response) {
        local4.documentDate =
          response.data.data.columns[0].groups[0].fields[4].label;

        console.log(local3.documentDate);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local5 = this;
    var documentImportance = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentImportance)
      .then(function (response) {
        local5.documentImportance =
          response.data.data.columns[0].groups[0].fields[5].label;

        console.log(local5.documentImportance);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local6 = this;
    var documentConfidentialité = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentConfidentialité)
      .then(function (response) {
        local6.documentConfidentialité =
          response.data.data.columns[0].groups[0].fields[6].label;

        console.log(local6.documentConfidentialité);
      })
      .catch(function (error) {
        console.log(error);
      });

    let local7 = this;
    var documentDateech = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentDateech)
      .then(function (response) {
        local7.documentDateech =
          response.data.data.columns[0].groups[0].fields[12].label;

        console.log(local7.documentDateech);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local8 = this;
    var documentRecommande = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentRecommande)
      .then(function (response) {
        local8.documentRecommande =
          response.data.data.columns[0].groups[0].fields[11].label;
        console.log(local8.documentRecommande);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local9 = this;
    var documentRef = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentRef)
      .then(function (response) {
        local9.documentRef =
          response.data.data.columns[0].groups[0].fields[1].label;

        console.log(local9.documentRef);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local10 = this;
    var documentClassement = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentClassement)
      .then(function (response) {
        local10.documentClassement =
          response.data.data.columns[0].groups[1].label;

        console.log(local10.documentClassement);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local12 = this;
    var documentplanClasssement = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentplanClasssement)
      .then(function (response) {
        local12.documentplanClasssement =
          response.data.data.columns[0].groups[1].fields[0].description;

        console.log(local12.documentplanClasssement);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local13 = this;
    var documenttableaudegestion = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documenttableaudegestion)
      .then(function (response) {
        local13.documenttableaudegestion =
          response.data.data.columns[0].groups[1].fields[0].description;

        console.log(local13.documenttableaudegestion);
      })
      .catch(function (error) {
        console.log(error);
      });
    let local14 = this;
    var documentmotscles = {
      method: "get",
      url: "https://localhost:7026/api/Auth/get/customfield%2Fgrid%2F2%2FCOURRIERS_TYPE_3",
      headers: {
        "content-Type": "application/json",
      },
    };
    axios(documentmotscles)
      .then(function (response) {
        local14.documentmotscles =
          response.data.data.columns[0].groups[1].fields[2].description;

        console.log(local14.documentmotscles);
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  setup() {
    return {
      arrowBack,
      ellipsisHorizontal,
      list,
      shieldSharp,
      chatboxEllipsesSharp,
      paper,
      send,
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
    setBorderColor() {
      this.borderColor = true;
    },
    enregistrerModif() {
      var config = {
        method: "put",

        url: "https://localhost:7026/api/Auth/put/document",

        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      };

      axios(config);
    },
    ishidden() {
      this.detailedView = !this.detailedView;
    },
    currentDateTime() {
      const current = new Date();
      const date =
        current.getFullYear() +
        "/" +
        (current.getMonth() + 1) +
        "/" +
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
.card-backgroundcolor {
  background-color: #ffffff;
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
.task-avatar {
  display: flex;
  align-items: center;
  position: relative;
}

.grid-style {
  background-color: white;
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
  left: -3px;
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
  top: 45px;
  background-color: #0a6e89;
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
ion-button#send::part(native) {
  width: 56px;
  height: 56px;
  border-radius: 100% !important;
}
ion-select {
  --placeholder-font-family: "Trebuchet MS", sans-serif;
  background-color: #e8f3f6;
  --placeholder-font-style: italic;
  border: 1px solid #165c77;
}
.input-style {
  background-color: #e8f3f6;
  border-radius: 5px !important;
  font-size: 0.9em;
  border: 1px solid #165c77;
  height: 10%;
  width: 50%;
}
.input-withoutborder-style {
  background-color: #e8f3f6;
  border-radius: 15px !important;
  font-size: 0.9em;
  height: 10%;
  width: 50%;
}
.view-button {
  float: right;
  position: relative;
}
.matacheactive-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 16px;
  margin-left: 20px;
  text-transform: uppercase;
  color: #0a6e89;
}
ion-input {
  --placeholder-font-family: "Trebuchet MS", sans-serif;
  --placeholder-font-style: italic;
  --placeholder-font-weight: bolder;
  --placeholder-font-color: black;
}
.take-charge-by-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: black;
  font-weight: bolder;
}
.buttonshape {
  font-family: "Trebuchet MS", sans-serif;
}
.document-description-style {
  color: #288748;
  font-family: "Trebuchet MS", sans-serif;
}
.document-subject-style {
  font-family: "Trebuchet MS", sans-serif;
}
.footer-title-style {
  color: #ffffff;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
}
.footer-subtitle-style {
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
.date-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  text-align: end;
}
.imgthreedots {
  width: 12px;
}
.popover-content {
  border: #0a6e89;
}
.popover-content-detail {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #0a6e89;
}
.img1 {
  width: 30px;
  height: 30px;
}
.detailed-view-button {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #0a6e89;
  font-weight: bold;
}
.general-part-style {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 12px;
  color: #f44336;
}
.document-title-style {
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
.popover-content-detail {
  color: black;
}
.popover-content {
  --ion-background-color: #ffffff;
}
.contentpopover {
  background-color: white;
}
.my-custom-class {
  font-family: "Trebuchet MS", sans-serif;
}
.my-custom-select {
  width: 100% !important;
  font-family: "Trebuchet MS", sans-serif;
  font-style: italic;
  color: black;
}
.footer-style {
  background-color: #0b7b99;
  color: #0b7b99;
}
ion-textarea {
  --placeholder-font-family: "Trebuchet MS", sans-serif;
  --color: black;
  border: 1px solid #165c77;
  --placeholder-font-style: italic;
  --background: #e8f3f6;
}
</style>
