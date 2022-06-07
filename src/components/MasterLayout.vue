<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons
          @click="openMenu()"
          slot="start"
          style="font-size: 23px; align-self: center"
        >
          <ion-icon name="menu" slot="start"></ion-icon>
        </ion-buttons>
        <ion-title v-if="!shown">{{ pageTitle }}</ion-title>
        <form>
          <ion-searchbar
            enterkeyhint="enter"
            v-if="shown"
            @input="debounceInput"
            placeholder="Rechercher parmi 'Tous les documents'"
            style="margin-top: 10px"
          ></ion-searchbar>
        </form>
        <ion-icon
          v-if="!shown"
          name="search"
          slot="end"
          style="font-size: 23px; align-self: center"
          @click="shown = !shown"
        ></ion-icon>
        <ion-icon
          v-if="shown"
          name="search"
          slot="end"
          style="font-size: 23px; align-self: center"
          @click="search()"
        ></ion-icon>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>
<script>
import axios from "axios";
import { debounce } from "debounce";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonIcon,
  menuController,
  IonSearchbar,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonSearchbar,
    IonHeader,
    IonContent,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonIcon,
  },
  props: { pageTitle: "" },
  data() {
    return {
      shown: false,
      listSearch: "",
    };
  },
  methods: {
    debounceInput: debounce(function (e) {
      let local = this;
      var config = {
        method: "post",
        url: "https://localhost:7026/api/Auth/post/elise-search%2Fsimplesearch",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          workspaceId: "e5720509-1cb8-41f0-beae-50d9bb48d944",
          query: e.target.value,
          start: 0,
          limit: 600,
          sortId: "TRI_COURRIERS_CHRONO",
          sortAsc: false,
          filters: [],
          searchIndexId: "COURRIERS_RECHERCHE_SIMPLE_ALL_ELISE6",
        },
      };

      axios(config).then(function (response) {
        local.listSearch = response.data.data.documentsUid;
        console.log(local.listSearch);
      });
    }),
    search() {
      this.$router.push("/Search/" + this.listSearch);
    },
    openMenu() {
      menuController.open("app-menu");
    },
  },
};
</script>
