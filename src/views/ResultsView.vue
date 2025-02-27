<template>
  <MenuComponent />
    <div class="results-view">
      <h1 class="results-view__title">Race Results</h1>
      <ResultsComponent />
    </div>
  </template>
  
  <script setup>
  import MenuComponent from '../components/MenuComponent.vue';
  import ResultsComponent from '../components/ResultsComponent.vue';
  </script>
  
  <style scoped>
  .results-view {
    text-align: center;
    padding: 20px;
  }
  
  .results-view__title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  
