<template>
  <section class="years__container">

    <div class="Componentyears">
      <label for="year-select" class="Componentyears__label">Elige un Año:</label>
      <select id="year-select" name="year-select" v-model="selectedYear" class="Componentyears__select" @change="handleYearChange">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>

    </section>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useF1Store } from '../store/useF1Store';

  
  const store = useF1Store();
  const emit = defineEmits(["nextStep"]);
  
  const years = computed(() => Array.from({ length: 26 }, (_, i) => 2000 + i));
  const selectedYear = computed({
    get: () => store.selectedYear,
    set: (value) => store.setYear(value)
  });
  
  const handleYearChange = () => {
  if (selectedYear.value) {
    emit("nextStep");  
  }
  };
  
  </script>
  
  <style scoped>

  /* Contenedor principal con la segunda imagen de fondo */
.years__container {  
  height: 70vh;    
  width: 70vw;
  padding: 10rem;
  position: relative;
  z-index: 2;
  background-image: url('../assets/bandera.png');
  opacity: 0.9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 285px;
  border-radius: 12px;
}

  .Componentyears {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background-color: #fff;
    border-radius: 12px;
    border: solid, 2px, red;
  }

  .Componentyears:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 10px 20px rgba(1, 255, 204, 0.947);
  }

  .Componentyears__label {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    text-shadow: 10px 10px 10px rgba(246, 10, 2, 0.936);  
    color: black;
  }

  .Componentyears__select {
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 0.5rem; 
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  appearance: none;
  border: none;
  width: 30%;
}

/* Cambiar color de fondo y texto cuando el select está en foco */
.Componentyears__select:focus {
  background-color: #fcffff; 
  outline: none;
  border: solid, 1.5px, rgb(255, 0, 0);
}
/*Opciones dentro del select */
.Componentyears__select option {
  max-height: 50px; 
  overflow-y: auto;
    background-color: white; 
  color: black; 
}
/* Quitar el color azul de selección en algunos navegadores */
.Componentyears__select option:hover,
.Componentyears__select option:checked {
  background-color: #d32f2f; 
  color: white; 
}

  .Componentyears__select:hover {
    border-color: #888888;
  }
  </style>
