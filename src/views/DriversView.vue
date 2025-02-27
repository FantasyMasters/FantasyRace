<template>
   <MenuComponent /> 
    <div class="drivers-view">
      <h1 class="drivers-view__title">Select a driver</h1>
      <DriversComponent />
    </div>
    <FooterComponent />
  </template>
  
  <script setup>
  import FooterComponent from '@/components/FooterComponent.vue';
  import MenuComponent from '../components/MenuComponent.vue';
  import DriversComponent from '../components/DriversComponent.vue';
  </script>
  
  <style scoped>
  .drivers-view {
    text-align: center;
    padding: 20px;
  }
  
  .drivers-view__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  
