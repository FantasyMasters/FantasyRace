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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}
nav {
  display: flex;
  gap: 1rem;
}
</style>