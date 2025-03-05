<template>
  
    <div class="Componentyears">
      <label for="year-select" class="Componentyears__label">Elige un Año:</label>
      <select id="year-select" name="year-select" v-model="selectedYear" class="Componentyears__select" @change="handleYearChange">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useF1Store } from '../store/useF1Store';
  import { useRouter } from 'vue-router';
  
  const store = useF1Store();
  const router = useRouter();
  
  const years = computed(() => Array.from({ length: 26 }, (_, i) => 2000 + i));
  const selectedYear = computed({
    get: () => store.selectedYear,
    set: (value) => store.setYear(value)
  });
  
  const handleYearChange = () => {
    if (selectedYear.value) {
    router.push('/races');
  }
  };
  
  
  </script>
  
  <style scoped>
  .Componentyears {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid rgba(17, 11, 11, 0.3);
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .Componentyears:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .Componentyears__label {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    text-shadow: 10px 10px 10px rgba(65, 64, 64, 0.846);  
    color: #141414;
    text-align: center;
  }

  .Componentyears__select {
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem; 
  background-color: #f4f6f7; 
  color: #333;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  appearance: none;
}

/* Cambiar color de fondo y texto cuando el select está en foco */
.Componentyears__select:focus {
  background-color: #ffe6e6; 
  color: #d32f2f; 
  border-color: #b71c1c; 
  outline: none;
}
/*Opciones dentro del select */
.Componentyears__select option {
  max-height: 120px; 
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
    border-color: #888;
  }
  </style>
