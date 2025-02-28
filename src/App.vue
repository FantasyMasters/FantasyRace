<template>
  <div id="app">
    
      <MenuComponent />
    
    <router-view>
    </router-view>
  </div>
  <FooterComponent />
</template>

<script setup>
import MenuComponent from './components/MenuComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

 <style>
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

html, body{
  width: 100%;
  overflow-x:hidden;
  font-family: Arial, Helvetica, sans-serif;
}

</style>