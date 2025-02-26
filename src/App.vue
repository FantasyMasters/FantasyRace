<template>
  <div id="app">
    
      <MenuComponent />
    
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script setup>
import MenuComponent from './components/MenuComponent.vue';
import Footer from './components/FooterComponent.vue'
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