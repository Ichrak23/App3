<template>
  <ion-modal  class="modalimg">
    <ion-content force-overscroll="false">
      <div class="modal-content">
        <ion-item lines="none">
          <ion-label color="primary"> Configuration </ion-label>
          <i
            slot="end"
            class="fa fa-floppy-o"
            aria-hidden="true"
            style="color: #0a6e89"
          ></i>
        </ion-item>
      <ion-item lines="none">
          <ion-label>Titre *</ion-label>
      </ion-item>
        
         <ion-input
            placeholder=" Identifiant"
            name="identifiant"
            class="input-login"
            aria-required="true"
            required="required"
            value=""
          ></ion-input>
       

        <ion-label></ion-label>
      </div>
    </ion-content>
  </ion-modal>
</template>
<script>
export default {};
</script>
