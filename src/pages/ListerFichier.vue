<template>
  <ion-page>
    <ion-header class="headerstyle">
      <ion-toolbar color="black">
        <ion-menu-button slot="start" color="light">
          <ion-icon :icon="list" color="white"></ion-icon>
        </ion-menu-button>
        <ion-button slot="start" size="small" color="light" fill="clear">
          <ion-icon :icon="attach" color="white" size="large"></ion-icon>
        </ion-button>
        <ion-title class="fichiertitle"
          ><p style="color: white">FICHIER</p></ion-title
        >
        <ion-button slot="end" expand="block" fill="clear">
          <div class="fileupload fileupload-new" data-provides="fileupload">
            <div class="input-append">
              <div class="uneditable-input">
                <i class="glyphicon glyphicon-file fileupload-exists"></i>
              </div>
              <span class="btn btn-default btn-file">
                <span class="fileupload-new">
                  <ion-button color="dark" class="addbutton" fill="clear" :href="'/ajoutfichier/'+this.id">
                    <img src="/assets/file-add_icon.svg" />&nbsp;
                  </ion-button></span
                >
                 
                <ion-button fill="clear" :href="'/createdocument/'+this.id">
                  <ion-icon
                    :icon="listCircleOutline"
                    size="large"
                    color="light"
                  ></ion-icon>
                </ion-button>
                <br />
              </span>
            </div>
          </div>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button fill="clear" :href="'/createdocument/'+this.id">
        <ion-icon :icon="arrowBack" color="light"></ion-icon>
      </ion-button>

      <br />
      <br />
      <ion-card>
      <ion-item>
        <ion-icon :icon="attach" size="large" color="light"></ion-icon>
        <ion-label class="lab1"
          >LISTE DES FICHIERS({{ this.attachments.length }})</ion-label
        >
      </ion-item>
      <br />
      <ion-item>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<ion-label class="lab2"
          >VISIBLE PAR TOUS</ion-label
        >
      </ion-item>
     
        
        <ion-row >
        
            <ion-label
              class="fileNameStyle2"
              v-for="a in this.attachments"
              :key="a.internalId"
            >
              {{ a.label }}&nbsp; &nbsp; v{{ a.version }}<br>
              PDF -Crée par {{ a.creator.label }} le {{ a.creationDate }}
              <div class="buttonposition">
              <ion-button @click="deleteAttachment()" fill="clear" size="small">
                <ion-icon :icon="trashOutline" size="large"></ion-icon>
              </ion-button>
              <ion-button @click="deleteAttachment()" fill="clear" size="small">
                 <ion-icon :icon="create" size="large"></ion-icon>
              </ion-button>
              </div>
              </ion-label>
          <br />
        </ion-row>
      </ion-card>
      <br>

      <ion-card>
      <ion-item>
        <ion-icon :icon="attach" size="large" color="light"></ion-icon>
        <ion-label class="lab1"
          >LISTE DES FICHIERS SUPPRIMÉS({{ this.deletedAttachments.length }})</ion-label
        >
      </ion-item>
      <br />
      <ion-item>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<ion-label class="lab2"
          >VISIBLE PAR TOUS</ion-label
        >
      </ion-item>
        <ion-item >
            <ion-label
              class="fileNameStyle2"
              v-for="a in this.deletedAttachments"
              :key="a.internalId"
            >
              {{ a.label }}&nbsp; &nbsp; v{{ a.version }}<br>
              PDF -Crée par {{ a.creator.label }} le {{ a.creationDate }}
            </ion-label>   
        </ion-item>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonButton,
  IonMenuButton,
} from "@ionic/vue";
import { defineComponent } from "@vue/runtime-core";
import {
  list,
  listCircleOutline,
  arrowBack,
  chevronForwardOutline,
  ellipsisHorizontal,
  ellipsisVertical,
  trashOutline,
  attach,
  qrCodeOutline,
  star,
  send,
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
  name: "CreateDocument",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonIcon,
    IonButton,
    IonMenuButton,
  },

  data() {
    return {
      fileName: "",
      id:"",
      i: 0,
      modificationDate:"",
      docinfos: "",
      attachments: [],
      deletedAttachments:[],
      fileId: "",
      doc: "",
      path: "",
      componentKey: 0,
      filetypepdf: "",
      afficheViewer: false,
      currentinfo: [],
      COURRIERS_1216: [],
      doc_info: [],
      publicPath: process.env.BASE_URL,
     
    };
  },
   async created() {
    this.id = this.$route.params.id;
  },
  async mounted() {
    let local = this;
    var document = {
      method: "get",
      url:"https://localhost:7026/api/Auth/get/document%2F"+this.id+"%3FworkspaceId%3Dd2b1ef43-77a0-497f-928d-28a5b35d8c49",
      headers: {
        "content-Type": "application/json",
      },
    };
    var r = await axios(document);
   local.document = r.data.data;
    console.log("hne", r.data.data);
    local.attachments = r.data.data.attachments;
    this.attachments = r.data.data.attachments;
    this.deletedAttachments=r.data.data.deletedAttachments;
    this.modificationDate=r.data.data.modificationDate;
    console.log("modificationDate",r.data.data.modificationDate);
    console.log("document", r.data.data.attachments);
    console.log("document2", r.data.data.attachments[0].label);
    console.log("deletedattachments",r.data.data.deletedAttachments);
    this.fileId=this.attachments[0].externalId;


    // var fileId = this.attachments[0].externalId;
    console.log("ichraaaaaaaaaaak",this.fileId);

    for (this.i = 0; this.i <= local.attachments.length; this.i++) {

      local.fileNames = r.data.data.attachments[this.i].label;
      console.log("doc3", local.fileNames);

    }
  },

  setup() {
    return {
      attach,
      listofnames: [],
      list,
      arrowBack,
      listCircleOutline,
      ellipsisHorizontal,
      trashOutline,
      ellipsisVertical,
      chevronForwardOutline,
      qrCodeOutline,
      star,
      calendar,
      help,
      person,
      settings,
      search,
      add,
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
  methods: {
  
    changePath() {
      this.i++;

      if (this.i == this.attachments.length) {
        console.log("terminé", this.listofnames);
        return this.listofnames;
      }

      this.fileName = this.attachments[this.i].label;
      console.log(this.fileName);
      this.listofnames.push(this.fileName);
      console.log(this.listofnames);
      this.filetypepdf = this.attachments[this.i].extension;

      this.afficheViewer = true;
      this.componentKey += 1;
      this.path =
        "https://localhost:7026/api/Auth/getPDF/elise-document%2Ffile%2Fstream%2Fpdf?documentId=" +
        this.id +
        "&fileId=";
    },
    async deleteAttachment(){
        
       var test = {
            documentId:this.id,
            documentModificationDate:this.modificationDate,
            isAttachmentConfidential:false,
            deleteHistory:false
          };
          var request = {
            method: "POST",
            headers: new Headers({"content-type": "application/json" }),
            body: JSON.stringify(test),
          };
         await fetch(
            'https://localhost:7026/api/Auth/post/attachment%2Fdelete%2F'+this.fileId,
            request
          ).then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  window.location.reload();
  },
  }
});

</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}
.lab1 {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 25px;
  color: #b6cbd4;
}
.lab2 {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 18px;
  color: #b6cbd4;
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
.headerstyle {
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
.buttonposition{
  text-align: end;
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
.transparent {
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
.fileNameStyle2 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
}
.p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #b6cbd4;
  font-size: 16px;
}
.fileNameStyle {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
}
</style>
