<template>
  <ion-page>
    <ion-content class="first">
      <ion-card class="card">
        <img
          class="instance"
          src="../../public/assets/instance-logo.png"
          alt="logoIns"
        />
        <div class="instance-name">GED</div>
        <ion-label class="information-message"
          >Identifiez-vous pour accéder à votre instance</ion-label
        >
        <ion-label class="form-login-label">Identifiant</ion-label>
        <div class="form-login">
          <ion-input
            placeholder=" Identifiant"
            slot="start"
            name="identifiant"
            v-model="userInfo.username"
            class="input-login"
            aria-required="true"
            required="required"
            value=""
            aria-describedby="logon-username-desc"
          ></ion-input>
        </div>
        <ion-label class="form-password-label"> Mot de passe</ion-label>
        <div class="form-password">
          <ion-input
            placeholder="********"
            v-model="userInfo.password"
            type="password"
            name="password"
            class="input-password"
            aria-required="true"
            required="required"
            aria-describedby="logon-password-desc"
          ></ion-input>
        </div>
        <ion-item lines="none">
          <ion-button class="mdp" slot="end" fill="clear"
            >Mot de passe oublié ?</ion-button
          >
        </ion-item>
        <ion-button
          @click="login(), (shown = !shown)"
          expand="block"
          class="submit-button"
          type="submit"
          style=""
          color="#0A6E89"
        >
          Connexion
        </ion-button>

        <ion-img
          v-if="shown"
          class="loading-form"
          src="/assets/logon-loading.gif"
          alt="Chargement en cours..."
        ></ion-img>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import axios from "axios";
import { alertController } from "@ionic/core";
import { useRouter } from "vue-router";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonImg,
  IonGrid,
  IonIcon,
  IonButton,
  IonContent,
  IonPage,
} from "@ionic/vue";
export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonImg,
    IonGrid,
    IonIcon,
    IonButton,
    IonContent,
    IonPage,
  },
  data() {
    const router = useRouter();
    return {
      shown: false,
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  setup() {
    return {};
  },
  mounted() {},

  methods: {
    presentAlert() {
      return alertController
        .create({
          header: "Alert",
          subHeader: "",
          message: "Mot de passe incorrect.",
          buttons: ["OK"],
        })
        .then((a) => a.present());
    },
    login() {
      var data = JSON.stringify({
        username: this.userInfo.username,
        password: this.userInfo.password,
      });
      var config = {
        method: "post",
        url: "https://localhost:7026/api/Auth/adduser",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      let local = this;
      axios(config).then(function (response) {
        if (response.data.success) {
          local.$router.push("/home/e5720509-1cb8-41f0-beae-50d9bb48d944/e10416ad-e9db-4b2e-b6bb-643d96cf046b");
        } else {
          local.presentAlert();
          local.shown = false;
        }
      });
    },
  },
};
</script>
