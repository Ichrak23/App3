<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="createdocument" :href="'/Document/' + this.id">
          <ion-icon :icon="eyeSharp"></ion-icon>
        </ion-tab-button>
        <ion-tab-button
          tab="Informations"
          :href="'/Document/Information/' + this.id"
        >
          <img src="/assets/info.png" />
          <ion-label class="tabstitle-style">Informations</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="Process" :href="'/Document/Process/' + this.id">
          <img src="/assets/icons8-processus-20.png" />
          <ion-label class="tabstitle-style">Processus</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="Historique" :href="'/Document/History/' + this.id">
          <img src="/assets/icons8-historique-20.png" />
          <ion-label class="tabstitle-style">Historique</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import {
  list,
  attach,
  qrCodeOutline,
  star,
  send,
  eyeSharp,
  calendar,
  help,
  person,
  settings,
  search,
  add,
  more,
  analytics,
  hourglass,
  people,
  podium,
  create,
  informationCircleOutline,
  open,
  trendingUp,
  download,
  arrowdropnight,
} from "ionicons/icons";
export default defineComponent({
  name: "DocNew",
  components: {
    IonPage,
    IonTabBar,
    IonTabButton,
    IonRouterOutlet,
    IonTabs,
    IonLabel,
  },
  data() {
    return {
      id: "",
    };
  },

  setup() {
    return {
      attach,
      list,
      qrCodeOutline,
      star,
      calendar,
      help,
      person,
      settings,
      search,
      add,
      eyeSharp,
      more,
      informationCircleOutline,
      analytics,
      hourglass,
      send,
      people,
      create,
      podium,
      open,
      trendingUp,
      download,
      arrowdropnight,
    };
  },
  async created() {
    this.id = this.$route.params.id;
  },
  methods: {},
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}

.tabstitle-style {
  font-size: 17px;
  color: black;
}
</style>
