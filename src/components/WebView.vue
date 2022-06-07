<template>
  <ion-card style="height:150px;width:150px">
    <ion-item>
     
      
    </ion-item>   
  </ion-card>
</template>
<script>
import { IonItem } from "@ionic/vue";
export default {
  components: {
    IonItem,
  },
  data() {
    return {
      widgets: [],
      list: [],
    };
  },
  props: {
    widget: Object,
    Wid:""
  },
  created() {
  },

  methods: {
  },
};
</script>
