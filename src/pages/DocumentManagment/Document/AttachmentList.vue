<template>
  <ion-page>
    <ion-header class="header-style">
      <ion-toolbar color="black">
        <ion-menu-button slot="start" color="light">
          <ion-icon :icon="list" color="white"></ion-icon>
        </ion-menu-button>
        <ion-button slot="start" size="small" color="light" fill="clear">
          <ion-icon :icon="attach" color="white" size="large"></ion-icon>
        </ion-button>
        <ion-title class="uppercase-style"
          ><p style="color: white">fichier</p></ion-title
        >
        <ion-button slot="end" expand="block" fill="clear">
          <div class="button-resize">
            <ion-button
              color="dark"
              class="addbutton-style"
              fill="clear"
              :href="'/AddAttachment/' + this.id"
            >
              <img src="/assets/file-add_icon.svg" />
            </ion-button>
            <ion-button fill="clear" :href="'/Document/' + this.id">
              <ion-icon
                :icon="listCircleOutline"
                size="large"
                color="light"
              ></ion-icon>
            </ion-button>
          </div>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button fill="clear" :href="'/Document/' + this.id">
        <ion-icon :icon="arrowBack" color="light"></ion-icon>
      </ion-button>
      <ion-card>
        <ion-item>
          <ion-icon :icon="attach" size="large" color="light"></ion-icon>
          <ion-label class="attachmentlist-title"
            >liste des fichiers({{ this.attachments.length }})</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-label class="attachmentlist-subtitle"
            >visible par tous</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-row>
            <ion-label
              class="filename-style"
              v-for="a in this.attachments"
              :key="a.internalId"
            >
              {{ a.label }} v{{ a.version }}
              <div class="attachment-information">
                PDF -Crée par {{ a.creator.label }} le {{ a.creationDate }}
              </div>
              <div class="delete-button">
                <ion-button
                  @click="deleteAttachment()"
                  fill="clear"
                  size="small"
                >
                  <ion-icon :icon="trashOutline" size="large"></ion-icon>
                </ion-button>
                <ion-button
                  @click="deleteAttachment()"
                  fill="clear"
                  size="small"
                >
                  <ion-icon :icon="create" size="large"></ion-icon>
                </ion-button>
              </div>
            </ion-label>
          </ion-row>
        </ion-item>
      </ion-card>
      <ion-card>
        <ion-item>
          <ion-icon :icon="attach" size="large" color="light"></ion-icon>
          <ion-label class="attachmentlist-title"
            >liste des fichiers supprimés({{
              this.deletedAttachments.length
            }})</ion-label
          >
        </ion-item>

        <ion-item>
          <ion-label class="attachmentlist-subtitle"
            >visible par tous</ion-label
          >
        </ion-item>
        <ion-item>
          <ion-row>
            <ion-label
              class="filename-style"
              v-for="a in this.attachments"
              :key="a.internalId"
            >
              {{ a.label }} v{{ a.version }}
              <div class="attachment-information">
                PDF -Crée par {{ a.creator.label }} le {{ a.creationDate }}
              </div>
            </ion-label>
          </ion-row>
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
  ellipsisVertical,
  trashOutline,
  attach,
  add,
  create,
} from "ionicons/icons";
export default defineComponent({
  name: "Document",
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
      id: "",
      i: 0,
      modificationDate: "",

      attachments: [],
      deletedAttachments: [],
      fileId: "",

      componentKey: 0,

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
      url:
        "https://localhost:7026/api/Auth/get/document%2F" +
        this.id +
        "%3FworkspaceId%3Dd2b1ef43-77a0-497f-928d-28a5b35d8c49",
      headers: {
        "content-Type": "application/json",
      },
    };
    var r = await axios(document);
    local.document = r.data.data;

    local.attachments = r.data.data.attachments;
    this.attachments = r.data.data.attachments;
    this.deletedAttachments = r.data.data.deletedAttachments;
    this.modificationDate = r.data.data.modificationDate;
    this.fileId = this.attachments[0].externalId;

    for (this.i = 0; this.i <= local.attachments.length; this.i++) {
      local.fileNames = r.data.data.attachments[this.i].label;
    }
  },

  setup() {
    return {
      attach,
      list,
      arrowBack,
      listCircleOutline,
      trashOutline,
      ellipsisVertical,
      add,
      create,
    };
  },
  methods: {
    async deleteAttachment() {
      var paramsDocument = {
        documentId: this.id,
        documentModificationDate: this.modificationDate,
        isAttachmentConfidential: false,
        deleteHistory: false,
      };
      var requestDocument = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(paramsDocument),
      };
      await fetch(
        "https://localhost:7026/api/Auth/post/attachment%2Fdelete%2F" +
          this.fileId,
        requestDocument
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      window.location.reload();
    },
  },
});
</script>
<style scoped>
* {
  font-family: "Trebuchet MS", sans-serif;
}
.attachmentlist-title {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 21px;
  color: #b6cbd4;
  text-transform: uppercase;
}
.attachmentlist-subtitle {
  font-family: "Trebuchet MS", sans-serif;
  font-size: 18px;
  color: #b6cbd4;
  text-transform: uppercase;
  margin-left: 40px;
}

.addbutton-style {
  color: white;
  float: center;
  position: center;
  font-family: "Trebuchet MS", sans-serif;
}

ion-content {
  --ion-background-color: #0c3849;
}

.uppercase-style {
  font-size: 17px;
  text-transform: uppercase;
}

ion-icon {
  color: black;
}
ion-item {
  color: white;
  background-color: #0a6e89;
}
.header-style {
  background-color: #0a6e89;
}

.delete-button {
  text-align: end;
}
.button-resize {
  text-align: end;
}
.addbutton {
  color: white;
  float: center;
  position: center;
  font-family: "Trebuchet MS", sans-serif;
}
.filename-style {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;
}
.p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #b6cbd4;
  font-size: 16px;
}
</style>
