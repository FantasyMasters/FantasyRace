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
const steps = [YearsComponent, RacesComponent, ConstructorComponent, DriversComponent, ResultsComponent];
const currentStep = ref(0);

// Computed  para que se pueda cambiar de uno a otro
const currentComponent = computed(() => steps[currentStep.value]);

//Creamos una condicion para cambiar de componente.
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};
</script>

<style scoped>
/* Estilos generales */
.years {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

/*los componentes estén encima */
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

