<template>
<ion-page>
    <ion-tabs >
    <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
          <ion-tab-button tab="createdocument" :href="'/createdocument/'+this.id">
          <ion-icon :icon='eyeSharp'></ion-icon>
        
        </ion-tab-button>
       <ion-tab-button tab="informationss" :href="'/createdocument/Informations/'+this.id">
          <img src="/assets/info.png" />
          <ion-label class="labtab" style="font-size: 17px" color="black"
            >informations</ion-label
          >
        </ion-tab-button>
        <ion-tab-button tab="Processus" :href="'/createdocument/Processus/'+this.id">
          <img src="/assets/icons8-processus-20.png" />
          <ion-label class="labtab" style="font-size: 17px" color="black"
            >Processus</ion-label
          >
        </ion-tab-button>
        <ion-tab-button tab="Historique" :href="'/createdocument/Historique/'+this.id">
          <img src="/assets/icons8-historique-20.png" />
          <ion-label class="labtab" style="font-size: 17px" color="black"
            >Historique</ion-label
          >
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
      id:""
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
  methods: {
  },
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}
ion-label {
  font-family: "Trebuchet MS", sans-serif;
}
.lab1 {
  color: #0c8ab6;
  font-family: "Trebuchet MS", sans-serif;
}
.lab2 {
  font-family: "Trebuchet MS", sans-serif;
}
.lab4 {
  font-family: "Trebuchet MS", sans-serif;
  color: whitesmoke;
}
.lab5 {
  font-family: "Trebuchet MS", sans-serif;
  color: #b6cbd4;
  font-size: 24px;
}
.lab6 {
  font-family: "Trebuchet MS", sans-serif;
  color: #b6cbd4;
  font-size: 12px;
}
.fichiertitle {
  font-size: 17px;
}
ion-content {
  --ion-background-color: #0c3849;
}
.h3 {
  color: white;
  font-weight: bold;
  font-family: "Trebuchet MS", sans-serif;
}
.labtab {
  font-family: "Trebuchet MS", sans-serif;
}
.p {
  font-family: "Trebuchet MS", sans-serif;
  color: white;
}
.buttonedit {
  font-family: "Trebuchet MS", sans-serif;
  color: white;
}
.button1 {
  float: left;
  position: left;
  font-family: "Trebuchet MS", sans-serif;
}
.button2 {
  float: right;
  position: right;
  font-family: "Trebuchet MS", sans-serif;
}
ion-icon {
  color: black;
}
ion-item {
  color: white;
  background-color: #0a6e89;
}
.header1 {
  background-color: #0a6e89;
}
.contentpopover {
  background-color: whitesmoke;
}
.makingcenter {
  margin-top: -14%;
}
.popover {
  background-color: whitesmoke;
  color: #e84481;
}
.test {
  margin-left: 0;
}
.btn-file > input {
  width: 100%;
  height: 100%;
  padding: 0px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  opacity: 0;
  font-size: 23px;
  direction: ltr;
  cursor: pointer;
}
.fileupload .btn {
  vertical-align: middle;
  line-height: 21px;
  margin-left: -5px;
}
.btn-file {
  position: relative;
  vertical-align: middle;
}
.btn-default {
  background: #0a6e89;
  color: #ffffff;
}
.popover_setting .popover-content {
  --min-width: 600px !important;
  --min-height: 150px !important;
  --ion-background-color: red;
  --ion-text-color: #ffffff;
  background-color: red;
}
.popover-content {
  --ion-background-color: #e8f3f6;
}
.toolbar2 {
  color: white;
  background-color: #1b1f2d;
}
.textlabelcolor {
  color: #0a6e89;
}
.addbutton {
  color: white;
  float: center;
  position: center;
  font-family: "Trebuchet MS", sans-serif;
}
.list {
  margin-bottom: 1000px;
}
#visualize {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>