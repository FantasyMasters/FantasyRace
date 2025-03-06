<template>
    <div class="user-profile">
      <UserProfileComponent />
    </div>
  </template>
  
  <script setup>
  import UserProfileComponent from '@/components/UserProfileComponent.vue';
  </script>
  
  <style scoped>
  .user-profile {
    background-image: linear-gradient(to bottom right, #09090A, #0BABB0, #FF0404);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    z-index: 10001; /* Para que el contenido del formulario esté encima */
  }
</style>