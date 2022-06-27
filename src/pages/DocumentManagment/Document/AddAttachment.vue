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
        <ion-title
          ><div class="uppercase_style" style="color: white">
            fichier
          </div></ion-title
        >
        <ion-button
          slot="end"
          color="dark"
          class="add_button"
          fill="clear"
          :href="'/AddAttachment/' + this.documentId"
          size="small"
        >
          <img src="/assets/file-add_icon.svg" />
        </ion-button>
        <ion-button
          slot="end"
          size="small"
          fill="clear"
          :href="'/AttachmentList/' + this.documentId"
        >
          <ion-icon
            :icon="listCircleOutline"
            size="large"
            color="light"
          ></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="add-file-title">ajouter un fichier</div>
      <ion-row>
        <div class="file-input">
          <img class="image-position" src="/assets/uploadBlue.97f392e8.svg" />

          <div class="add-first-title">
            Déposez un fichier ici pour l'ajouter au
          </div>
          <div class="add-second-title">
            document ou cliquez pour parcourir vos fichiers
          </div>
          <div class="spinner-class">
            <ion-spinner
              v-if="this.isLoaded"
              name="crescent"
              color="light"
            ></ion-spinner>
          </div>
        </div>
        <input
          type="file"
          accept="application/pdf,application/vnd.ms-excel"
          size="2"
          class="hidden-file-input"
          @change="onInputChange"
        />
      </ion-row>
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
import { listCircleOutline, attach, add } from "ionicons/icons";
export default defineComponent({
  name: "AddAttachment",
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
      documentId: "",
      i: 0,

      attachments: [],
      fileId: "",
      document: "",
      path: "",
      componentKey: 0,
      modificationDate: "",
      isLoaded: false,
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

    var response = await axios(document);

    this.document = response.data.data;

    this.attachments = response.data.data.attachments;
    this.attachments = response.data.data.attachments;
    this.modificationDate = response.data.data.modificationDate;

    var fileId = this.attachments[0].externalId;
  },
  setup() {
    return {
      attach,

      listCircleOutline,

      add,
    };
  },
  async created() {
    this.documentId = this.$route.params.id;
  },
  methods: {
    async onInputChange(event) {
      this.isLoaded = true;
      var formdata = new FormData();
      formdata.append("file", event.target.files[0]);
      var paramsDocument = {
        modificationDate: this.modificationDate,
        duration: 120000,
      };

      var requestDocument = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(paramsDocument),
      };

      fetch(
        "https://localhost:7026/api/Auth/post/document%2Flock%2F" +
          this.documentId,
        requestDocument
      ).then((response) => response.text());

      var requestAttachment = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://localhost:7026/api/Auth/postPdf/attachment",
        requestAttachment
      )
        .then((response) => response.text())
        .then(async (result) => {
          var paramsDocumentAttachment = {
            documentId: this.documentId,
            documentModificationDate: this.modificationDate,
            addAttachmentsProperties: [
              {
                guid: JSON.parse(result).data[0].guid,
                label: JSON.parse(result).data[0].fileName,
              },
            ],
          };
          var requestDocumentAttachment = {
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(paramsDocumentAttachment),
          };
          var uploadResult = await fetch(
            "https://localhost:7026/api/Auth/post/document%2Fattachments%3FworkspaceId%3Dd2b1ef43-77a0-497f-928d-28a5b35d8c49",
            requestDocumentAttachment
          )
            .then((response) => response.text())
            .then(async (result) => {
              this.$router.push("/Document/" + this.documentId);
            });
        })
        .catch((error) => console.log("error", error));
    },
  },
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}

ion-content {
  --ion-background-color: #0c3849;
}

.uppercase_style {
  text-transform: uppercase;
  font-size: 17px;
}

ion-item {
  color: white;
  background-color: #0a6e89;
}
ion-row {
  place-content: center;
}
.header-style {
  background-color: #0a6e89;
}
.add-file-title {
  font-family: "Trebuchet MS", sans-serif;
  color: #b6cbd4;
  font-size: 20px;
  font-weight: bolder;
  margin: 0px 0px 20px;
  text-transform: uppercase;
  margin-left: 80px;
  margin-top: 20px;
}
.image-position {
  position: inherit;
  margin-left: 120px;
  margin-top: 20px;
}
.hidden-file-input {
  position: absolute;
  font-size: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 0;
  border: none;
  cursor: pointer;
}
.file-input {
  background-color: #0c3849;
  border-style: dashed;
  border-color: #b6cbd4;
  height: 280px;
  width: 370px;
  margin-top: 10px;
  padding-bottom: 10px;
}
input[type="file" i] {
  appearance: none;
  background-color: initial;
  cursor: default;
  align-items: baseline;
  color: inherit;
  text-overflow: ellipsis;
  white-space: pre;
  text-align: start !important;
  padding: initial;
  border: initial;
  border-color: initial;
  overflow: hidden !important;
  border-radius: initial;
}

.add-first-title {
  font-family: "Trebuchet MS", sans-serif;
  color: #b6cbd4;
  font-size: 16px;
  margin: 0px 0px 20px;
  margin-left: 40px;
}
.add-second-title {
  font-family: "Trebuchet MS", sans-serif;
  color: #b6cbd4;
  font-size: 16px;
  margin: 0px 0px 20px;
  margin-left: 10px;
}
.spinner-class {
  text-align: center;
}
.add_button {
  color: white;
  float: center;
  position: center;
  font-family: "Trebuchet MS", sans-serif;
}
</style>
