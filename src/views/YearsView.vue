<template>
  <main class="years">
    <!-- Imagen de fondo principal -->
    <img src="../assets/f1_7.jpg" alt="Fondo F1" class="years__background" />  
   
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
  padding: 2rem;
  overflow: hidden;
  position: relative;
}

/* Imagen de fondo principal */
.years__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

</style>

