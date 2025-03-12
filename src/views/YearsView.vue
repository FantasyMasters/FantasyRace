<template>
  <main class="years">

      <div class="years-view">
        <component :is="currentComponent" @nextStep="nextStep" />
      </div>

  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import YearsComponent from "../components/YearsComponent.vue";
import RacesComponent from "../components/RacesComponent.vue";
import ConstructorComponent from "../components/ConstructorsComponent.vue";
import DriversComponent from "../components/DriversComponent.vue";
import ResultsComponent from '../components/ResultsComponent.vue';
import { useF1Store } from "@/store/useF1Store";
const steps = [YearsComponent, RacesComponent, ConstructorComponent, DriversComponent, ResultsComponent];
const currentStep = ref(0);

// Computed to change from one to another component
const currentComponent = computed(() => steps[currentStep.value]);

//To iterate and change from one component to another
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};

</script>

<style scoped>

.years {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
}


.years-view {
  position: relative;
  z-index: 2; 
  width: 250%;
  max-width: 1500px; 
  padding: 100px;
  background: rgba(0, 0, 0, 0.291); 
  border-radius: 10px;
}
</style>

