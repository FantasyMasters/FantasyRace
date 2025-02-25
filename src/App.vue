<template>
  <div id="app">
    
      <MenuComponent />
    
    <router-view></router-view>
  </div>
</template>

<script setup>
import MenuComponent from './components/MenuComponent.vue';
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
nav {
  display: flex;
  gap: 1rem;
}
</style>