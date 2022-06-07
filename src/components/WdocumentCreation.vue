<template>
  <ion-card
    text-center
    padding
    style="height: 150px; width: 150px"
  >
    <div
    :style="{ 'border-color': colors[getDirectionType()] }"
      style="
        border-style: dashed;
        height: 120px;
      "
    >
      <span class="spn-doc" >
        {{ this.getTitle() }}</span
      >
      
      <ion-grid class="ion-no-padding">
        <ion-row class="ion-align-items-center ion-justify-content-center">
           <ion-input
                type="file"
                id="file"
                accept="application/pdf,application/vnd.ms-excel"
                @change="onChange"
                multiple
                title="Déposez vos fichiers ou cliquez ici"
                class="hidden-file-input"
              >
              </ion-input>
          <ion-icon class="doc" name="documents-outline"></ion-icon>
          <p class="dep">Déposez vos fichiers ou cliquez ici
          </p>
          <div class="spinnerclass">
            <ion-spinner v-if="this.isloaded"  name="circles" color="success" ></ion-spinner>
          </div>
        </ion-row>
      </ion-grid>
    </div>
    <div 
      :style="{ 'background-color': colors[getDirectionType()] }"
      class="bt-l"
    >
      <ion-row style="justify-content: center" @click="newDocument()">
        <ion-icon name="add" style="color: #fff; font-size: 17px"></ion-icon>
        <ion-label style="color: #fff; font-size: 15px" >
          Document seul</ion-label
        ></ion-row
      >
    </div>
  </ion-card>
</template>
<script>
export default {
  data() {
    return {
      widgets: [],
      color: "",
      colors:['#e84481','#0c89b5','#00A819'],
      newdoc: "",
      id:"",
      isloaded:false
    
    };
  },
  props: {
    widget: Object,
    Wid:""
  },
  methods: {
    getTitle() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "title") {
          var name = JSON.parse(params[i].value);
        }
      }
      return name;
    },
     getDirectionType() {
      var params = this.widget.widgetParameters;
      for (let i in params) {
        if (params[i].name == "directionType") {
          var item = JSON.parse(params[i].value);
        }
      }
      return item;
    },
    newDocument(){
      if(getDirectionType() == 2){
        console.log("ajout doc");
      }},
    
   
    async onChange(event) {
      this.isloaded=true;
      console.log(event.target.files);
      var formdata = new FormData();
      formdata.append("file", event.target.files[0]);
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
          console.log(JSON.parse(result).data[0]);
          var test = {
            documentType: "COURRIERS_TYPE_3",
            direction: 2,
            attachments: [
              {
                guid: JSON.parse(result).data[0].guid,
                label: JSON.parse(result).data[0].fileName,
              },
            ],
            addPreProcessTask: true,
            inChargeUid: "d71ac14b1b2cd144b712102c0f4a6e59",
            requesterUid: "d71ac14b1b2cd144b712102c0f4a6e59",
          };
          var request2 = {
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(test),
          };
          fetch(
            "https://localhost:7026/api/Auth/post/elise-document%2Fcreate-from-workflow",
            request2
          ).then(response => response.text())
   .then(async (result) => {
          this.id=JSON.parse(result).data.externalId;
          this.$router.push('/CreateDocument/'+ this.id)
          console.log(this.id);
    })
        })
        .catch((error) => console.log("error", error));
    },
  },
  
};
</script>
<style scoped>
.hidden-file-input{
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
.spinnerclass{

   text-align: center;
}
</style>
