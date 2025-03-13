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

  // Se obtiene una instancia del store de Pinia para acceder y modificar el estado global
  // An instance of the Pinia store is obtained to access and modify the global state.
  const store = useF1Store();
  // Define un evento personalizado "nextStep" que será emitido cuando el usuario seleccione un año
  // Defines a custom event "nextStep" that will be emitted when the user selects a year
  const emit = defineEmits(["nextStep"]);
  // Se genera un array de años desde 2000 hasta 2025 dinámicamente
  //An array of years from 2000 to 2025 is dynamically generated
  const years = computed(() => Array.from({ length: 26 }, (_, i) => 2000 + i));

  // Computed property reactiva para gestionar el año seleccionado en el store
  // Computed property reactive to manage the selected year in the store
  const selectedYear = computed({
    // Obtiene el año seleccionado desde el store
    // Get the selected year from the store
    get: () => store.selectedYear,
    // Establece un nuevo año en el store usando la acción `setYear`
    // Set a new year in the store using the `setYear` action
    set: (value) => store.setYear(value)
  });
  // Maneja el cambio de año y emite el evento "nextStep" si hay un año seleccionado
  // Handles the year change and emits the "nextStep" event if a year is selected
  const handleYearChange = () => {
  if (selectedYear.value) {
    // Notifica al componente padre que se debe avanzar al siguiente paso
    // Notify the parent component to move to the next step
    emit("nextStep");  
  }
  };
  
  </script>
  
  <style scoped>

 
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


.Componentyears__select:focus {
  background-color: #fcffff; 
  outline: none;
  border: solid, 1.5px, rgb(255, 0, 0);
}

.Componentyears__select option {
  max-height: 50px; 
  overflow-y: auto;
    background-color: white; 
  color: black; 
}

.Componentyears__select option:hover,
.Componentyears__select option:checked {
  background-color: #d32f2f; 
  color: white; 
}

  .Componentyears__select:hover {
    border-color: #888888;
  }

/* Media Queries para tablets ( 1024px) */
/* Media Queries for tablets ( below 1024px) */
@media (max-width: 1024px) {
  .years__container {
    height: 60vh; 
    width: 80vw; 
    padding: 30rem; 
  }

  .Componentyears {
    width: 70%; 
    top: 15%; 
  }

  .Componentyears__label {
    font-size: 3.5rem;
  }

  .Componentyears__select {
    width: 50%;
    font-size: 1.2rem;
  }
}
/* Media Queries para movil (menos de 720px) */
/* Media Queries for mobile (below 720px) */
@media (max-width: 720px) {
  .years__container {
    height: 50vh; 
    width: 90vw; 
    padding: 15rem;   
  }

  .Componentyears {
    width: 80%; 
    top: 5%; 
  }

  .Componentyears__label {
    font-size: 2.5rem; 
  }

  .Componentyears__select {
    width: 70%; 
    font-size: 1rem; 
  }
}

  </style>
