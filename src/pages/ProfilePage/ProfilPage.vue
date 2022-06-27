<template>
  <ion-page>
    <ion-content>
      <ion-toolbar style="height: 30px" color="primary"
        ><ion-row>
          <ion-icon
            style="margin-top: -5px; text-align: center; font-size: 13px"
            name="arrow-back-outline"
            color="light"
            @click="
              this.router.push(
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
        <div class="header">
          <div class="grid-item">
            <ion-row>
              <ion-label class="userName">{{
                user.displayName
              }}</ion-label> </ion-row
            ><ion-icon
              class="iconcam"
              name="camera-outline"
              @click="shown1 = !shown1"
            ></ion-icon>
            <ion-modal class="modalimg" :isOpen="shown1">
              <ion-content force-overscroll="false">
                <ion-img
                  class="avatar1"
                  src="/GED/elise/api/flowchart/d71ac14b1b2cd144b712102c0f4a6e59/avatar/100?avatarModificationDate="
                  :style="{ 'background-color': this.color }"
                ></ion-img>
                <ion-row>
                  <ion-label class="label-photo"
                    >Créer à partir d'une photo</ion-label
                  ></ion-row
                >
                <ion-button @click="addPhoto()" color="primary" expand="block">
                  <ion-icon name="image" slot="start"></ion-icon>
                  Importer une photo
                </ion-button>
                <ion-row>
                  <ion-label class="label-taille-photo">
                    Taille max. 5Mo
                  </ion-label></ion-row
                >

                <div class="choice-proposition">
                  <div class="first-line"></div>
                  <div class="second-line"></div>
                </div>
                <ion-row><ion-label class="label-or">ou</ion-label></ion-row>
                <ion-row>
                  <ion-label class="label-photo"
                    >Créer à partir d'une couleur</ion-label
                  ></ion-row
                >
                <ion-row>
                  <ion-button
                    color=" light "
                    :style="{ 'background-color': this.color }"
                    id="open-palette"
                    class="btn-color-big"
                  ></ion-button
                ></ion-row>
                <ion-row class="updateAvatar">
                  <ion-label
                    color="primary"
                    @click="
                      update();
                      shown1 = !shown1;
                    "
                    >METTRE À JOUR L'AVATAR</ion-label
                  ></ion-row
                >
                <ion-modal trigger="open-palette" class="modal-palt">
                  <ion-content
                    force-overscroll="false"
                    style="background-color: cadetblue"
                  >
                    <ion-button
                      v-for="p in palette"
                      :key="p.id"
                      color=" light "
                      :style="{ 'background-color': p }"
                      @click="changeColor(p)"
                      class="btn-color-small"
                    ></ion-button>
                  </ion-content>
                </ion-modal>
              </ion-content>
            </ion-modal>
          </div>
        </div>

        <div class="border">
          <div class="border_white">
            <ion-img class="avatar" :src="getImageURl()"></ion-img>
          </div>
        </div>
        <div style="padding: 5px">
          <ion-row>
            <ion-label color="primary" style="margin: 20px">CONTACT</ion-label>
          </ion-row>
          <ion-row style="margin-left: 10px">
            <ion-icon
              size="small"
              style="margin: 20px"
              name="mail-outline"
            ></ion-icon>

            <ion-label style="margin-top: 20px; font-size: 14px">
              {{ user.mail }}</ion-label
            ></ion-row
          >

          <ion-row>
            <ion-label color="primary" style="margin-left: 20px"
              >MON ABSENCE</ion-label
            ></ion-row
          >

          <div v-if="absence.hasAbsence" style="margin-top: 20px">
            <ion-row
              ><ion-label style="font-size: 13px; padding-left: 30px">
                Une absence est prévue pour le {{ start }}. Retour prévu le
                {{ end }}.
              </ion-label>
            </ion-row>
            <ion-button style="margin: 30px" size="small" @click="desactive()">
              Désactiver l'absence</ion-button
            >
          </div>

          <div
            v-else
            style="padding-left: 30px; padding-top: 20px"
            v-show="!shown"
          >
            <ion-label style="font-size: 13px">Absent à partir du</ion-label>
            <div class="date">
              <ion-row>
                <ion-icon
                  name="calendar-outline"
                  id="open-modal"
                  style="margin-top: 5px; font-size: 19px"
                ></ion-icon>
                <ion-modal trigger="open-modal" class="modaldate">
                  <ion-content force-overscroll="false">
                    <ion-datetime
                      presentation="date"
                      @ionChange="changeDate($event, 'startDate')"
                    ></ion-datetime>
                  </ion-content>
                </ion-modal>

                <ion-input class="date" :value="period.startDate"></ion-input>
              </ion-row>
            </div>
            <ion-label style="font-size: 13px">De retour le</ion-label>
            <div class="date">
              <ion-row>
                <div class="grid-item">
                  <ion-icon
                    name="calendar-outline"
                    id="open-modal1"
                    style="margin-top: 5px; font-size: 19px"
                  ></ion-icon>
                  <ion-modal trigger="open-modal1" class="modaldate">
                    <ion-content force-overscroll="false">
                      <ion-datetime
                        presentation="date"
                        @ionChange="changeDate($event, 'endDate')"
                      ></ion-datetime>
                    </ion-content>
                  </ion-modal>
                </div>
                <ion-input class="date" :value="period.endDate"></ion-input>
              </ion-row>
            </div>
            <ion-row>
              <ion-button
                style="margin: 30px"
                size="small"
                @click="activer()"
                >{{ this.state }}</ion-button
              >
            </ion-row>
          </div>

          <div>
            <ion-row v-if="delegues == ''">
              <ion-label style="padding-left: 30px; font-size: 13px"
                >AUCUN DÉLÉGUÉ PENDANT L'ABSENCE
              </ion-label>
              <ion-icon
                @click="shownSearch = !shownSearch"
                name="add"
                class="iconAdd"
              ></ion-icon
            ></ion-row>
            <div v-else>
              <ion-row>
                <ion-label style="padding-left: 30px; font-size: 13px">
                  DÉLÉGUÉS PENDANT L'ABSENCE</ion-label
                >
                <ion-icon
                  @click="shownSearch = !shownSearch"
                  name="add"
                  class="iconAdd"
                ></ion-icon>
              </ion-row>
              <div style="margin-top: 10px">
                <ion-item-sliding v-for="user in delegues" :key="user.id">
                  <ion-item style="padding-left: 30px; font-size: 13px"
                    ><ion-label style="color: #0a718d">
                      {{ user.eliseStructureElement.label }}</ion-label
                    ></ion-item
                  >
                  <ion-item-options side="end">
                    <ion-item-option color="danger" @click="delDelg(user)">
                      <ion-icon
                        name="trash"
                        slot="icon-only"
                        style="margin-top: 5px; font-size: 13px"
                      ></ion-icon
                    ></ion-item-option>
                  </ion-item-options>
                </ion-item-sliding>
              </div>
            </div>
          </div>

          <ion-row>
            <ion-searchbar
              v-if="shownSearch"
              @input="debounceInput1"
              style="padding-left: 30px; margin-top: 20px"
              placeholder="Ajouter un délégué pendant l'absence"
            ></ion-searchbar
          ></ion-row>
          <ion-row
            v-for="user in listSearch"
            :key="user.id"
            style="margin-left: 20px"
          >
            <ion-item @click="delegue(user)">
              <ion-icon
                slot="start"
                name="people"
                style="font-size: 13px"
              ></ion-icon>
              <ion-label style="font-size: 13px"> {{ user.label }}</ion-label>
            </ion-item>
          </ion-row>

          <ion-row>
            <ion-label color="primary" style="margin: 20px"
              >MES ABONNEMENTS</ion-label
            ></ion-row
          >
          <ion-row class="subttl">
            <ion-checkbox
              :checked="this.notification"
              size="large"
              @click="changeNotif()"
            ></ion-checkbox>

            <ion-label style="margin-left: 15px; margin-top: 4px"
              >Recevoir des notifications de rappel.</ion-label
            ></ion-row
          >

          <ion-row
            ><ion-label color="primary" style="margin: 20px"
              >LANGUE</ion-label
            ></ion-row
          >
          <ion-row>
            <ion-label class="subttl">Votre interface est en :</ion-label>

            <ion-select style="right: 5px; position: absolute; font-size: 13px">
              <ion-select-option
                v-for="language in language"
                :key="language.id"
                :value="language.label"
                >{{ language.label }}
              </ion-select-option>
            </ion-select>
          </ion-row>
          <ion-row>
            <ion-label color="primary" style="margin: 20px"
              >MES DÉLÉGATIONS</ion-label
            ></ion-row
          ><ion-row>
            <ion-label v-if="(delegations = [])" class="subttl"
              >Aucune délégation présente.</ion-label
            >
            <ion-label
              class="subttl"
              v-for="delegation in user.delegations"
              :key="delegation.id"
              >{{ delegation.name }}</ion-label
            ></ion-row
          >
          <ion-row>
            <ion-label color="primary" style="margin: 20px"
              >MES SERVICES</ion-label
            ></ion-row
          >
          <ion-label class="subttl">Mon service principal</ion-label>
          <div v-for="service in user.services" :key="service.id">
            <ion-row v-if="service.isDefault == true">
              <ion-icon
                :icon="people"
                style="margin-left: 45px; margin-top: 10px"
              ></ion-icon>
              <ion-label class="subttl"
                >{{ service.identificationPath }}
              </ion-label>
              <ion-label
                v-if="service.garde == o"
                style="margin-left: 20px; font-size: 14px; margin-top: 10px"
                >(Chef de service)</ion-label
              >
            </ion-row>
          </div>
          <ion-row
            ><ion-label class="subttl">Mon autre service</ion-label></ion-row
          >
          <div v-for="service in user.services" :key="service.id">
            <ion-row v-if="service.isDefault == false">
              <ion-icon
                :icon="people"
                style="margin-left: 45px; margin-top: 10px"
              ></ion-icon>
              <ion-label class="subttl"
                >{{ service.identificationPath }}
              </ion-label>
              <ion-label
                v-if="service.garde == o"
                style="margin-left: 20px; font-size: 14px; margin-top: 10px"
                >(Chef de service)
              </ion-label>
            </ion-row>
          </div>
          <ion-row>
            <ion-label
              color="primary"
              style="margin-left: 20px; margin-top: 20px"
            >
              MES LICENCES</ion-label
            ></ion-row
          >
          <div v-for="license in user.licenses" :key="license.id">
            <br />
            <ion-label class="subttl">
              {{ license.license.application }}
            </ion-label>
          </div>
          <ion-row
            ><ion-label color="primary" style="margin: 20px"
              >DONNÉES TECHNIQUES</ion-label
            ></ion-row
          ><ion-row>
            <ion-label style="margin-left: 30px; font-size: 13px"
              >Identifiant LDAP local : {{ user.id }}</ion-label
            ></ion-row
          >
          <ion-row
            ><ion-label color="primary" style="margin: 20px"
              >VERSION</ion-label
            ></ion-row
          >
          <ion-label style="margin: 30px; font-size: 13px"
            >{{ version.buildLabel }} ({{ version.version }}.{{
              version.build
            }}.{{ version.patchVersion }})</ion-label
          >
          <ion-toolbar color="#FFFFFF">
            <ion-button
              fill="clear"
              slot="end"
              color="#E8F3F6"
              @click="logout()"
            >
              <ion-icon slot="icon-only" :icon="logOut"></ion-icon>
            </ion-button>
          </ion-toolbar>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { debounce } from "debounce";
import axios from "axios";
import { useRouter } from "vue-router";
import { mail, people, logOut, calendar } from "ionicons/icons";
import { defineComponent } from "vue";
import moment from "moment";
import {
  IonIcon,
  IonBackButton,
  IonButton,
  IonToolbar,
  IonImg,
  IonLabel,
  IonItem,
  IonRow,
  IonDatetime,
  IonInput,
  IonSearchbar,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonContent,
  IonPage,
  IonGrid,
  IonButtons,
  IonModal,
  IonCol,
  IonSlide,
  IonSlides,
  IonItemSliding,
} from "@ionic/vue";
export default defineComponent({
  components: {
    IonIcon,
    IonItemSliding,
    IonModal,
    IonBackButton,
    IonButton,
    IonToolbar,
    IonImg,
    IonLabel,
    IonItem,
    IonRow,
    IonDatetime,
    IonInput,
    IonSearchbar,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonContent,
    IonPage,
    IonGrid,
    IonButtons,
    IonCol,
    IonSlide,
    IonSlides,
  },
  data() {
    const router = useRouter();
    return {
      color: "#0062B6",
      palette: [
        "#4D4D4D",
        "#999999",
        "#FFFFFF",
        "#F44E3B",
        "#FE9200",
        "#FCDC00",
        "#DBDF00",
        "#A4DD00",
        "#68CCCA",
        "#73D8FF",
        "#AEA1FF",
        "#FDA1FF",
        "#333333",
        "#808080",
        "#CCCCCC",
        "#D33115",
        "#E27300",
        "#FCC400",
        "#B0BC00",
        "#68BC00",
        "#16A5A5",
        "#009CE0",
        "#7B64FF",
        "#FA28FF",
        "#000000",
        "#666666",
        "#B3B3B3",
        "#9F0500",
        "#C45100",
        "#FB9E00",
        "#808900",
        "#194D33",
        "#0C797D",
        "#0062B1",
        "#653294",
        "#AB149E",
      ],
      router,
      state: "Activer L'Absence",
      user: [],
      delegations: [],
      version: "",
      language: [],
      shown: false,
      shown1: false,
      period: {},
      absence: "",
      notification: "",
      listSearch: [],
      delegues: [],
      image: "",
      start: "",
      end: "",
      open: true,
      shownSearch: false,
    };
  },

  setup() {
    return {
      mail,
      people,
      logOut,
      calendar,
    };
  },

  created() {
    this.getLanguage();
    this.getAbsence();
    this.getDelegues();
    this.getUser();
    this.getVersion();
    this.getNot();
  },
  methods: {
    debounceInput1: debounce(function (e) {
      let local = this;
      var conf1 = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/flowchart%2Fsearch%2Fall%3Fq%3D" +
          e.target.value +
          "%26ignoredElements%5B%5D%3D" +
          local.user.id +
          "%26isWorkspace%3Dfalse",
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios(conf1).then(function (response5) {
        local.listSearch = response5.data.results;
      });
    }),
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
    getLanguage() {
      let local = this;
      var language = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/profile%2Flanguage",
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios(language).then(function (response2) {
        local.language = response2.data.data;
      });
    },

    getVersion() {
      let local = this;
      var version = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/connection%2Fversion",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(version).then(function (response) {
        local.version = response.data.data;
      });
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
    getAbsence() {
      let local = this;
      var absence = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/%2Fprofile%2Fabsence",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(absence).then(function (response) {
        local.absence = response.data.data;
        local.start = moment(local.absence.startDate).locale("Fr").format("LL");
        local.end = moment(local.absence.endDate).locale("Fr").format("LL");
      });
    },
    delegue(user) {
      let local = this;
      var config = {
        method: "post",
        url: "https://localhost:7026/api/Auth/post/user%2Fdelegations%2Fcreate",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          delegatorUniqueIdentifier: local.user.id,
          delegatedUniqueIdentifier: user.uid,
          periodType: 2,
        },
      };
      axios(config).then(() => {
        local.listSearch = [];
        local.getDelegues();
      });
    },

    getDelegues() {
      this.delegues = [];
      let local = this;
      var delegues = {
        method: "get",
        url: "https://localhost:7026/api/Auth/get/profile%2Fdelegations",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(delegues).then(function (response5) {
        local.delegues = response5.data.data;
      });
    },
    changeNotif() {
      let local = this;
      if (local.notification) {
        var config = {
          method: "put",
          url: "https://localhost:7026/api/Auth/put/profile%2Funsubscribe",
          headers: {
            "Content-Type": "application/json",
          },
          data: {},
        };
      } else if (!local.notification) {
        var config = {
          method: "put",
          url: "https://localhost:7026/api/Auth/put/profile%2Fsubscribe",
          headers: {
            "Content-Type": "application/json",
          },
          data: {},
        };
      }

      axios(config);
    },
    changeColor(p) {
      this.color = p;
    },
    changeDate(newDate, type) {
      this.period[type] = moment(String(newDate.detail.value)).format(
        "MM/DD/YYYY"
      );
    },
    logout() {
      fetch("https://elise6-pfe.elisedemo.com/GED/Elise/Home/logoff")
        .then((response) => response.text())
        .then(this.router.push("/loginpagee"));
    },
    delDelg(user) {
      let local = this;
      var config = {
        method: "delete",
        url:
          "https://localhost:7026/api/Auth/delete/user%2Fdelegations%2Fdelete%2F" +
          user.id,
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(() => {
        local.getDelegues();
      });
    },
    update() {
      let local = this;
      var config = {
        method: "post",
        url: "https://localhost:7026/api/Auth/post/elise-avatar%2Fupdate",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          flowchartId: "d71ac14b1b2cd144b712102c0f4a6e59",
          avatarImg:
            "data:image/png;base64,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",
        },
      };
      axios(config).then(() => {});
    },
    desactive() {
      var config = {
        method: "delete",
        url: "https://localhost:7026/api/Auth/delete/%2Fprofile%2Fabsence",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config).then(() => {
        this.getAbsence();
      });
    },
    activer() {
      var config = {
        method: "put",
        url: "https://localhost:7026/api/Auth/put/%2Fprofile%2Fabsence",
        headers: {
          "Content-Type": "application/json",
        },
        data: this.period,
      };
      axios(config).then(() => {
        this.getAbsence();
      });
    },
  },
});
</script>
