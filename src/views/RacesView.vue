<template>
  <MenuComponent />
    <div class="races-view">
      <h1 class="races-view__title">Select a race - track</h1>
      <RacesComponent />
    </div>
    <FooterComponent />
  </template>
  
  <script setup>
  import FooterComponent from '@/components/FooterComponent.vue';
  import MenuComponent from '../components/MenuComponent.vue';
  import RacesComponent from '../components/RacesComponent.vue';
  </script>
  
  <style scoped>
  .races-view {
    text-align: center;
    padding: 20px;
  }
  
  .races-view__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  
