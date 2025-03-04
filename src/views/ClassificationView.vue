<MenuComponent />
 <!--<template>
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
</template>-->


<script setup>
import MenuComponent from '@/components/MenuComponent.vue';
import ClassificationComponent from '../components/ClassificationComponent.vue';
</script>

<template>
  <div>
    <ClassificationComponent />
  </div>
</template>
