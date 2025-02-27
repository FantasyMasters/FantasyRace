<template>
  <MenuComponent />
    <div class="constructors-view">
      <h1 class="constructors-view__title">Select a team</h1>
      <ConstructorsComponent />
    </div>
  </template>
  
  <script setup>
  import MenuComponent from '../components/MenuComponent.vue';
  import ConstructorsComponent from '../components/ConstructorsComponent.vue';
  </script>
  
  <style scoped>
  .constructors-view {
    text-align: center;
    padding: 20px;
  }
  
  .constructors-view__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  
