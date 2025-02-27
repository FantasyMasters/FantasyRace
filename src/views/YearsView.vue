<template>
  <MenuComponent />
    <div class="years-view">
      <h1 class="years-view__title">Choose a year of Formula 1 competition</h1>
      <YearsComponent />
    </div>
    <FooterComponent />
  </template>
  
  <script setup>
  import FooterComponent from '@/components/FooterComponent.vue';
  import MenuComponent from '../components/MenuComponent.vue';
  import YearsComponent from '../components/YearsComponent.vue';
  </script>
  
  <style scoped>
  .years-view {
    text-align: center;
    padding: 20px;
  }
  
  .years-view__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  
