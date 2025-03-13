<template>
  <div class="constructors">
    <h2 class="constructors__title">
      Equipos en {{ selectedRace?.raceName }} ({{ selectedYear }})
    </h2>

    <ul v-if="isLoading" class="constructors__loading">
      <p>Cargando equipos...</p>
    </ul>

    <ul v-else-if="constructors.length" class="constructors__list">
      <li
        v-for="constructor in constructors"
        :key="constructor.constructorId"
        class="constructors__item"
        @click="selectConstructor(constructor)"
      >
        {{ constructor.name }} ({{ constructor.nationality }})
      </li>
    </ul>

    <p v-else class="constructors__error">Error, no se han encontrado equipos</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useF1Store } from '../store/useF1Store';
import { useFetchApi } from '../composables/useFetchApi';
// Se obtiene el store de Pinia para acceder al estado global
// Get the Pinia store to access the global state
const store = useF1Store();
// Define un evento personalizado "nextStep" para comunicar con el componente padre
// Define a custom "nextStep" event to communicate with the parent component
const emit = defineEmits(["nextStep"]);
// Computed property para obtener la carrera seleccionada desde el store
// Computed property to get the selected race from the store
const selectedRace = computed(() => store.selectedRace);
// Computed property para obtener el año seleccionado desde el store
// Computed property to get the selected year from the store
const selectedYear = computed(() => store.selectedYear);
// Computed property para construir dinámicamente la URL de la API en base a la carrera seleccionada
// Computed property to dynamically build the API URL based on the selected race
const apiUrl = computed(() =>
  selectedRace.value
    ? `https://api.jolpi.ca/ergast/f1/${selectedRace.value.season}/${selectedRace.value.round}/results.json`
    : ''
);
/**
 * 🔹 URL generada si se selecciona una carrera de la temporada 2023, ronda 5:
 * https://api.jolpi.ca/ergast/f1/2023/5/results.json
 */

// Llama al composable useFetchApi para hacer la petición a la API y obtener datos
// Call the useFetchApi composable to make the request to the API and obtain data
const { data, isLoading } = useFetchApi(apiUrl);

//Computed property para obtener la lista de constructores que participaron en la carrera seleccionada.
//Computed property to get the list of builders who participated in the selected race
const constructors = computed(() => {
  // Se accede a los datos de la API, si existen, se extrae la propiedad "Results" de la carrera
  // Access the API data, if it exists, extract the "Results" property of the race
  const results = data.value?.RaceTable?.Races[0]?.Results || [];
  // Se obtienen los primeros 20 constructores de la carrera (máximo permitido en la F1)
  // The first 20 constructors of the race are obtained (maximum allowed in F1)
  const topConstructors = results.slice(0, 20).map((result) => result.Constructor);
/**
   * 🔹 Estructura esperada de "results":
   * [
   *   { position: "1", Driver: {...}, Constructor: { constructorId: "red_bull", name: "Red Bull" } },
   *   { position: "2", Driver: {...}, Constructor: { constructorId: "mercedes", name: "Mercedes" } },
   *   ...
   * ]
   */

  // Se eliminan constructores duplicados utilizando un Map basado en su "constructorId"
  // Duplicate constructors are eliminated using a Map based on their "constructorId"
  const uniqueConstructors = Array.from(new Map(topConstructors.map((c) => [c.constructorId, c])).values());
  
 // Se devuelve la lista de constructores en orden aleatorio (random shuffle)
 // The list of constructors is returned in random order (random shuffle)
  return uniqueConstructors.sort(() => Math.random() - 0.5);
});

/**
 * Función que se ejecuta cuando el usuario selecciona un constructor.
 * - Guarda el constructor seleccionado en el store.
 * - Emite el evento "nextStep" para que el componente padre avance a la siguiente vista.
 */
 /**
* Function executed when the user selects a constructor.
* - Saves the selected constructor to the store.
* - Emits the "nextStep" event to advance the parent component to the next view.
*/
const selectConstructor = (constructor) => {
  store.setConstructor(constructor);
  emit("nextStep");
};
</script>

  
<style scoped>

.constructors {
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.constructors__title {
  font-size: 4rem;
  color: rgb(3, 3, 3);
  text-shadow: 5px 5px 5px rgba(255, 0, 0, 0.846);
  margin-bottom: 20px;
}

.constructors__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  list-style-type: none;
}

.constructors__list::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 190%;
  background-image: url('../assets/equipos.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5; 
  z-index: -1;
}

.constructors__item {
  background:white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 2px solid red;
  opacity: 0.9;
}

.constructors__item:hover {
  box-shadow: 0px 0px 15px 5px rgba(0, 255, 255, 0.8);
  transform: scale(1.05);
}

.constructors__loading {
  color: white;
  font-size: 5rem;
}

.constructors__error {
  color: rgb(255, 2, 2);
  font-weight: bold;
  background: white;
  padding: 10px;
  border-radius: 8px;
}
/*media queries*/
/* Media Query para pantallas menores a 1024px */
/* Media Query for screens smaller than 1024px */
@media (max-width: 1024px) {
  .constructors__list {
    grid-template-columns: repeat(3, 1fr); 
    margin-top: 2rem;
    height: 60vh; 
  }

  .constructors__title {
    font-size: 1.8rem;
    padding-top: 1rem;
  }

  .constructors__item {
    font-size: 1.4rem;
    width: 90%; /* Ancho del 50% para cada ítem */
    margin-bottom: 10px;
  }

  .constructors__item:hover {
    box-shadow: none;
    transform: none;
  }
}

/* Media Query para pantallas menores a 720px (móviles) */
/* Media Query for screens smaller than 720px (mobile) */
@media (max-width: 720px) {
  .constructors__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.8rem;
    height: 72vh; 
    overflow-y: auto; 
    width: 100%; 
  }

  .constructors__title {
    font-size: 1.2rem;
    padding-top: 20px;
    text-align: center;
    margin-bottom: 1rem;
  }

  .constructors__item {
    font-size: 1rem;
    width: 90%; 
    margin-bottom: 10px;
  }

  .constructors__item:hover {
    box-shadow: none;
    transform: none;
  }
}
</style>
