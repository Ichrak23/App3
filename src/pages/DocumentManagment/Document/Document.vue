<template>
  <ion-page>
    <ion-header class="header-style">
      <ion-toolbar color="black">
        <ion-menu-button slot="start" color="light">
          <ion-icon name="menu" slot="start"></ion-icon>
        </ion-menu-button>
        <ion-button slot="start" size="small" color="light" fill="clear">
          <ion-icon :icon="attach" color="white" size="large"></ion-icon>
        </ion-button>
        <ion-title class="uppercase-style"
          ><p style="color: white">fichier</p></ion-title
        >
        <ion-button slot="end" expand="block" fill="clear" size="small">
          <div class="button-resize">
            <ion-button
              color="dark"
              class="addbutton-style"
              fill="clear"
              :href="'/AddAttachment/' + this.documentId"
              size="small"
              slot="end"
            >
              <img src="/assets/file-add_icon.svg" />&nbsp;
            </ion-button>

            <ion-button
              fill="clear"
              :href="'/AttachmentList/' + this.documentId"
              size="small"
              slot="end"
            >
              <ion-icon
                :icon="listCircleOutline"
                size="large"
                color="light"
              ></ion-icon>
            </ion-button>
          </div>
          
        </ion-button>
      </ion-toolbar>
      <ion-toolbar color="btr">
        <div class="attachmentName-center">
          <ion-label class="filename-style">
            {{ this.fileName }}
          </ion-label>
          <br />
          <ion-label class="filetype-style">
            {{ this.fileType }}
          </ion-label>
        </div>
        <ion-button slot="end" fill="clear" @click="changePath()">
          <ion-icon :icon="chevronForwardOutline" color="light"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div documentId="visualize">
        <WebViewer
          :key="componentKey"
          v-if="displayViewer"
          :path="`${publicPath}lib`"
          :url="this.path"
        />
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import WebViewer from "../../../components/WebViewer.vue";
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
  chevronForwardOutline,
  ellipsisHorizontal,
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
    WebViewer,
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
      documentId: "",
      i: 0,
      attachments: [],
      fileId: "",
      path: "",
      componentKey: 0,
      fileType: "",
      displayViewer: false,
      publicPath: process.env.BASE_URL,
      modificationDate: "",
    };
  },
  async mounted() {
    var document = {
      method: "get",
      url:
        "https://localhost:7026/api/Auth/get/document%2F" +
        this.documentId +
        "%3FworkspaceId%3De5720509-1cb8-41f0-beae-50d9bb48d944",
      headers: {
        "content-Type": "application/json",
      },
    };
    var documentResult = await axios(document);

    this.attachments = documentResult.data.data.attachments;
    this.modificationDate = documentResult.data.data.modificationDate;

    var fileId = this.attachments[0].externalId;

    if (this.attachments.length > 0) {
      this.changePath();
    }
  },
  setup() {
    return {
      attach,
      list,
      listCircleOutline,
      ellipsisHorizontal,
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
  async created() {
    this.documentId = this.$route.params.id;
  },
  methods: {
    async onChange(event) {
      var formdata = new FormData();
      formdata.append("file", event.target.files[0]);
      var test1 = { modificationDate: this.modificationDate, duration: 120000 };
      var request1 = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(test1),
      };

      fetch(
        "https://localhost:7026/api/Auth/post/document%2Flock%2FCOURRIERS_380",
        request1
      ).then((response) => response.text());
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://localhost:7026/api/Auth/postPdf/attachment",
        requestOptions
      )
        .then((response) => response.text())
        .then(async (result) => {
          var test = {
            documentModificationDate: this.modificationDate,
            addAttachmentsProperties: [
              {
                guid: JSON.parse(result).data[0].guid,
                label: JSON.parse(result).data[0].fileName,
              },
            ],
          };
          var request2 = {
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(test),
          };
          var res = await fetch(
            "https://localhost:7026/api/Auth/post/document%2Fattachments%3FworkspaceId%3Dd2b1ef43-77a0-497f-928d-28a5b35d8c49",
            request2
          );
        })
        .catch((error) => console.log("error", error));
    },

    changePath() {
      this.i++;
      if (this.i == this.attachments.length) {
        this.i = 0;
      }
      var fileId = this.attachments[this.i].externalId;
      var extension = this.attachments[this.i].extension;
      if (extension === ".pdf") {
        this.fileName = this.attachments[this.i].label;
        this.fileType = "PDF v1.0";
        this.displayViewer = true;
        this.componentKey += 1;
        this.path =
          "https://localhost:7026/api/Auth/getPDF/elise-document%2Ffile%2Fstream%2Fpdf?documentId=" +
          this.documentId +
          "&fileId=" +
          fileId;
      }
    },
  },
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}
.button-resize {
  text-align: end;
}
.attachmentName-center {
  text-align: center;
}

.uppercase-style {
  font-size: 17px;
  text-transform: uppercase;
}
ion-content {
  --ion-background-color: #0c3849;
}

ion-item {
  color: white;
  background-color: #0a6e89;
}
.header-style {
  background-color: #0a6e89;
}
.contentpopover {
  background-color: whitesmoke;
}

.popover {
  background-color: whitesmoke;
  color: #e84481;
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
.addbutton-style {
  color: white;
  float: center;
  position: center;
  font-family: "Trebuchet MS", sans-serif;
}

#visualize {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.filetype-style {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 10px;
  text-align: center;
}
.filename-style {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
}
</style>
