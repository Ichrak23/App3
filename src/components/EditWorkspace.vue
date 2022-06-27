<template>
  <ion-modal class="modalimg" :is-open= oppen>
    <ion-content force-overscroll="false">
       <div class="modal-content">
              <ion-label color="primary">INFORMATIONS SUR L'ESPACE DE TRAVAIL</ion-label>
              <div class="modal-div">
                <ion-label style="font-size: 12px"
                  >Nom *</ion-label
                >
                <ion-input
                  v-model="nameWorkspace"
                  style="font-size: 12px"
                  class="input-mdl"
                  aria-required="true"
                  required="required"
              
                ></ion-input>
                <ion-label class="label-container" style="font-size: 12px"
                  >Utilisateur/service en charge par défaut *</ion-label
                >
                <ion-input v-if="!shown1" @click="shown1 = !shown1">
                  {{ this.userc.label }}
                </ion-input>
                <ion-searchbar
                  v-if="shown1"
                  @input="debounceInput1"
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
                    style="
                      font-size: 12px;
                      align-self: center;
                      margin-left: 10px;
                    "
                    >{{ this.space.flowchartItemRequester.label }}</ion-label
                  ></ion-row
                >
                <ion-label class="label-container" style="font-size: 12px"
                  >Utilisateurs et services de l'espace de travail (0)*
                </ion-label>
                <ion-input v-if="!shown2" @click="shown2= !shown2">
                  {{ this.userd.label }}
                </ion-input>
                <ion-searchbar
                 v-if="shown2"
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
                      userd = user;
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
                    update();
                    shown = !shown;
                  "
                  fill="clear"
                  style="margin-left: 165px; font-size: 12px"
                >
                  Modifier l'espace de travail
                </ion-button>
              </div>
            </div>
    </ion-content>
  </ion-modal>
</template>
<script>
import { debounce } from "debounce";
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
      nameWorkspace: this.space.name,
      oppen: true,
      shown1:false,
      shown2:false,
      listSearchWorkspacef: [],
      userd: this.space.flowchartItemRequester,
      userc:this.space.flowchartItemInChargeOfDocuments,
    };
  },
  props: {
    space:"",
  },
  created() {
    console.log(this.space);
  },
  methods: {
    debounceInput1: debounce(function (e) {
      let local = this;
      var config1 = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/flowchart%2Fsearch%2Fall%3Fq%3D" +
          e.target.value +
          "%26isWorkspace%3Dfalse",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config1).then(function (response) {
        local.listSearchWorkspacef = response.data.results;
      });
    }),
    debounceInput2: debounce(function (e) {
      console.log(this.userc);
      let local = this;
      var config1 = {
        method: "get",
        url:
          "https://localhost:7026/api/Auth/get/flowchart%2Fsearch%2Fall%3Fq%3D" +
          e.target.value +
          "%26isWorkspace%3Dfalse",
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios(config1).then(function (response) {
        local.listSearchWorkspace = response.data.results;
      });
    }),

     getUser(user) {
      this.userd.push(user);
    },
    update() {
      let local = this
      var config = {
        method: "put",
        url: "https://localhost:7026/api/Auth/put/elise-workspace%2Fupdate%2F"+ this.space.workspaceId,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
  "id": this.space.workspaceId,
  "label": this.nameWorkspace,
  "flowchartItemUidInChargeOfDocuments": this.userc.uid,
  "flowchartItemUidRequester": this.userd.uid,
  "flowchartItemUidWorkspaceContent": [
    "d71ac14b1b2cd144b712102c0f4a6e59"
  ]
},
      };
      axios(config).then(function(){
        local.oppen= false
      })
      
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
