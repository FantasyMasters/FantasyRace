<template>
  <div class="races">
    <h2 class="races__title">Carreras en {{ selectedYear }}</h2>

    <ul v-if="isLoading" class="races__loading">
      <p>Cargando...</p>
    </ul>

      <ul v-else-if="races?.length" class="races__list">
       <li 
        v-for="race in races" 
        :key="race.round" 
        class="races__item" 
        @click="selectRace(race)"
       >
        {{ race.raceName }} - {{ race.Circuit.circuitName }}
        </li>
      </ul>

    <p v-else class="races__error">Error, No se han encontrado carreras.</p>
</div>
</template>


<script setup>
import { computed, ref, watch } from 'vue';
import { useF1Store } from '../store/useF1Store';
import { useFetchApi } from '../composables/useFetchApi';
  // Se obtiene una instancia del store de Pinia para acceder y modificar el estado global
  // An instance of the Pinia store is obtained to access and modify the global state.
const store = useF1Store();
  // Define un evento personalizado "nextStep" para comunicar con el componente padre
  // Define a custom "nextStep" event to communicate with the parent component
const emit = defineEmits(["nextStep"]);
// Computed property para obtener el año seleccionado desde el store
// Computed property to get the selected year from the store
const selectedYear = computed(() => store.selectedYear);
// Computed property para construir dinámicamente la URL de la API en base al año seleccionado
// Computed property to dynamically build the API URL based on the selected year
const apiUrl = computed(() => selectedYear.value ? `https://api.jolpi.ca/ergast/f1/${selectedYear.value}.json` : '');
// Llama al composable useFetchApi para hacer la petición a la API y obtener datos
// Call the useFetchApi composable to make the request to the API and obtain data
const { data, error, isLoading } = useFetchApi(apiUrl);


// Computed property para obtener la lista de carreras del año seleccionado
// Computed property to get the list of races for the selected year
const races = computed(() => {
  // Se accede a los datos de la API, si existen, se extrae la propiedad "Races" del "RaceTable"
 // Access the data from the API, if it exists, extract the "Races" property from the "RaceTable"
  const racesArray = data.value?.RaceTable?.Races || [];
  // Se devuelve la lista de carreras en orden aleatorio (random shuffle)
  // The list of races is returned in random order (random shuffle)
  return racesArray.sort(() => Math.random() - 0.5);  
});
// Función que se ejecuta cuando el usuario selecciona una carrera
// Function that is executed when the user selects a race
const selectRace = (race) => {
  store.setRace(race);// Guarda la carrera seleccionada en el store -- Save the selected race to the store
  emit("nextStep");// Emite el evento "nextStep" para que el componente padre avance a la siguiente vista
};                 //Emits the "nextStep" event to advance the parent component to the next view

// Se observa cualquier cambio en selectedYear y se muestra una advertencia si no hay un año seleccionado
watch(selectedYear, (newYear) => {
  if (!newYear) console.warn('No year selected!'); // Mensaje de advertencia en consola si no hay año seleccionado-Warning message in console if no year is selected
});
</script>

<style scoped>

.races {
  text-align: center;
  padding: 20px;
  min-height: 70px;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  margin-top:80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0px; 
}

.races::before {
  content: "";
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/circuito.png'); 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
}

.races__title {
  font-size: 5rem;
  color: rgb(17, 17, 17);
  text-shadow: 5px 5px 5px rgba(249, 1, 1, 0.856);
}

.races__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1500px;
  padding: 20px;
  list-style-type: none;
}

.races__item {
  background:white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 2px solid red;
}

.races__item:hover {
  box-shadow: 0px 0px 15px 5px rgba(0, 255, 255, 0.8);
  transform: scale(1.05);
}

.races__loading {
  color: white;
  font-size: 5rem;
}

.races__error {
  color: rgb(255, 2, 2);
  font-weight: bold;
  background: white;
  padding: 10px;
  border-radius: 8px;
}
/* Media Queries para tablets (1024px) */
/* Media Queries for tablets (1024px) */
@media (max-width: 1024px) {
  .races__list {
    grid-template-columns: repeat(3, 2fr);
    margin-top: 2rem;
  }

  .races__title {
    font-size: 3rem;
    padding-top: 40px;
  }

  .races__item {
    font-size: 0.8rem;
  }

.races__item:hover {
  box-shadow: none;
  transform: none;
}
}
/* Media Queries para móviles (menos de 720px)*/
/* Media Queries for mobile (below 720px) */
@media (max-width: 720px) { 
  .races__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    height: 80vh; 
    overflow-y: auto; 
    width: 200%; 
  }

  .races__title {
    font-size: 1.8rem;
    padding-top: 20px;
    text-align: center;
    margin-bottom: 1rem;
  }

  .races__item {
    font-size: 1rem;
    width: 50%;
    margin-bottom: 10px;
  }
  
  .races__item:hover {
    box-shadow: none;
    transform: none;
  }
}
</style>