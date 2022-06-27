<template>
  <master-layout pageTitle="Suivi des demandes ">
    <ion-row>
      <ion-col col-6
        ><ion-row>
          <ion-card text-center padding>
            <fa class="ic" style="color: #784ba1" icon="check" />
            <ion-card-content>
              <ion-card-title class="title" style="color: #784ba1"
                >0</ion-card-title >

              <ion-card-subtitle class="subtitle" style="color: #784ba1">En attente de validation</ion-card-subtitle
              >
            </ion-card-content>
          </ion-card>
        </ion-row></ion-col
      >
      <ion-col col-6
        ><ion-row>
          <ion-card text-center padding>
            <fa class="ic" style="color: #0062b1" icon="edit" />

            <ion-card-content>
              <ion-card-title class="title" style="color: #0062b1"
                >0</ion-card-title
              >
              <ion-card-subtitle class="subtitle" style="color: #0062b1"
                >En attente de signature</ion-card-subtitle
              >
            </ion-card-content>
          </ion-card>
        </ion-row></ion-col
      >
      <ion-col col-6
        ><ion-row>
          <ion-card text-center padding>
            <ion-icon
              class="ic"
              style="color: #0c797d"
              name="person-outline"
            ></ion-icon>
            <ion-card-content>
              <ion-card-title class="title" style="color: #0c797d"
                >3</ion-card-title
              >
              <ion-card-subtitle class="subtitle" style="color: #0c797d"
                >Suite à décider</ion-card-subtitle
              >
            </ion-card-content>
          </ion-card>
        </ion-row></ion-col
      >
      <ion-col col-6
        ><ion-row>
          <ion-card text-center padding>
            <fa class="ic" style="color: #808080" icon="archive" />
            <ion-card-content>
              <ion-card-title class="title" style="color: #808080"
                >0</ion-card-title
              >
              <ion-card-subtitle class="subtitle" style="color: #808080"
                >Clôturés du mois</ion-card-subtitle
              >
            </ion-card-content>
          </ion-card>
        </ion-row></ion-col
      >
    </ion-row>

    <ion-card class="card-pm"> </ion-card>
  </master-layout>
</template>
<script>
export default {
  data() {
    return {
      isShown: false,
      isShown1: false,
    };
  },
  computed: {
    toggleWidgetPreview() {
      return this.isShown1 || this.isShown;
    },
  },
};
</script>
