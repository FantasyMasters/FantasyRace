<template>
  <div id="app">
    
      <MenuComponent />
    
    <router-view></router-view>
  </div>
  <FooterComponent />
</template>

<script setup>
import MenuComponent from './components/MenuComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
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