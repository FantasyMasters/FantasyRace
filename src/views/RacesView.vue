<template>
    <div class="races-view">
      <h1 class="races-view__title">Select a race - track</h1>
      <RacesComponent />
    </div>
  </template>
  
  <script setup>
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
  
