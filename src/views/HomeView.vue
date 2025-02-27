

<template>
  <div class="home">
    <h1 class="home__title">F1 Home</h1>
    <p>Driver scores: </p>
    <ul>
      <li>First position: 25 points</li>
      <li>Second position: 18 points</li>
      <li>Third position: 15 points</li>
    </ul>
    <p>Team scores: </p>
    <ul>
      <li>First position: 25 points</li>
      <li>Second position: 18 points</li>
      <li>Third position: 15 points</li>
    </ul>
    
  </div>
  <FooterComponent />
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
</script>


<style scoped>
.home {
  padding: 20px;
}

.home__title {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
