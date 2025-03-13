<template>
  <div class="results">
    <h2 class="results__title">Resultados de la carrera {{ selectedYear }}</h2>
    <h2 class="results__subtitle"> {{ selectedRace?.raceName }}</h2>

    <div v-if="isLoading" class="results__loading">
      <p>Cargando resultados...</p>
    </div>

    <div v-else-if="podium.length" class="results__podium">
      <h3 class="results__top3">Top 3 - Podium</h3>
      <ul class="results__list">
        <li v-for="result in podium" :key="result.position" class="results__item">
          <strong>{{ result.position }}</strong> - 
          {{ result.Driver.givenName }} {{ result.Driver.familyName }} ({{ result.Constructor.name }})
        </li>
      </ul>
    </div>

    <p v-else class="results__error">Error, no se encontraron resultados.</p>

    <div class="results__selection">
      <h3>Tus elecciones</h3>

      <p><strong>Año:</strong> {{ selectedYear }}</p>
      <p><strong>Carrera:</strong> {{ selectedRace?.raceName }}</p>
      <p><strong>Escuderia:</strong> {{ selectedConstructor?.name }}</p>
      <p><strong>Piloto:</strong> {{ selectedDriver?.givenName }} {{ selectedDriver?.familyName }}</p>
      <p><strong>Puntuación:</strong> {{ score }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useF1Store } from '../store/useF1Store';
import { useFetchApi } from '../composables/useFetchApi';
// Se obtiene el store de Pinia para acceder al estado global
// Get the Pinia store to access the global state
const store = useF1Store();
// Define un evento personalizado "nextStep" para comunicar con el componente padre
// Define a custom "nextStep" event to communicate with the parent component
const emit = defineEmits(["nextStep"]);

// Computed properties para obtener los datos seleccionados desde el store
// Computed properties to get the selected data from the store

// Año seleccionado
// Selected year
const selectedYear = computed(() => store.selectedYear);
// Carrera seleccionada
// Selected race
const selectedRace = computed(() => store.selectedRace);
// Constructor seleccionado
// Selected constructor
const selectedConstructor = computed(() => store.selectedConstructor);
// Piloto seleccionado
// Selected driver
const selectedDriver = computed(() => store.selectedDriver);

// Computed property que genera dinámicamente la URL de la API en base a la carrera seleccionada
// Computed property that dynamically generates the API URL based on the selected race
const apiUrl = computed(() =>
  selectedRace.value
    ? `https://api.jolpi.ca/ergast/f1/${selectedRace.value.season}/${selectedRace.value.round}/results.json`
    : ''
);

/**
 * 🔹 Ejemplo de URL generada si se selecciona la carrera de la temporada 2023, ronda 5:
 * https://api.jolpi.ca/ergast/f1/2023/5/results.json
 */

// Llama al composable useFetchApi para hacer la petición a la API y obtener datos de la carrera
// Call the useFetchApi composable to make the API request and retrieve race data
const { data, isLoading } = useFetchApi(apiUrl);
// Computed property que obtiene los primeros 3 pilotos del podio.
// Computed property that gets the first 3 drivers on the podium.
const podium = computed(() => {
  return data.value?.RaceTable?.Races[0]?.Results?.slice(0, 3) || [];
});
// Calcular la puntuación segun las selecciones realizadas
// Calculate score based on user selections
const calculateScore = () => {
  /**
 * Función que calcula la puntuación del usuario basado en sus selecciones y el podio real.
 * Se asignan puntos si el piloto o el constructor seleccionados coinciden con los del podio.
 */
/**
* Function that calculates the user's score based on their selections and the actual podium finish.
* Points are awarded if the selected driver or constructor matches the one on the podium.
*/
  if (!selectedDriver.value || !selectedConstructor.value || !podium.value.length) return 0;
// Si no hay datos suficientes, devuelve 0 puntos
// If there is not enough data, returns 0 points
  let score = 0;
  // Puntos asignados a los 3 primeros lugares (según sistema de F1)
  // Points assigned to the first 3 places (according to F1 system)
  const points = [25, 18, 15]; // Points for the 1, 2 and 3 positions

// Recorre el podio (top 3 posiciones) y compara con las selecciones del usuario
// Go through the podium (top 3 positions) and compare with the user's selection
  podium.value.forEach((result, index) => {
       // Si el piloto seleccionado coincide con la posición en el podio, suma puntos
       // If the selected driver matches the podium position, he/she scores points
    if (result.Driver.driverId === selectedDriver.value.driverId) {
      score += points[index];
    }
     // Si el constructor seleccionado coincide con la posición en el podio, suma puntos
     // If the selected builder matches the podium position, it scores points
    if (result.Constructor.constructorId === selectedConstructor.value.constructorId) {
      score += points[index];
    }
  });

  return score;
};
// Computed property que almacena la puntuación calculada
// Computed property that stores the calculated score
const score = computed(() => calculateScore());

/**
 * Se utiliza watch para detectar cambios en las selecciones del usuario y actualizar el historial.
 * Se ejecuta cada vez que cambia alguno de los siguientes valores:
 * - score (puntuación calculada)
 * - selectedYear (año seleccionado)
 * - selectedRace (carrera seleccionada)
 * - selectedConstructor (constructor seleccionado)
 * - selectedDriver (piloto seleccionado)
 */
// Guardar score en Pinia y localStorage cada vez que cambien los valores relevantes
//Saves score on Pinia and localStorage when values change
watch([score, selectedYear, selectedRace, selectedConstructor, selectedDriver], () => {
   // Guarda la puntuación en el store de Pinia
  // Save the score to the Pinia store
  store.setScore(score.value);
  // Solo actualiza el historial si hay datos en el podio (es decir, si la API ya respondió)
  // Only update the history if there is data in the podium (i.e. if the API has already responded)
  // 🟢 Agregar los resultados de la carrera al historial del usuario
  // Insert the results of the races in the user history
  if (podium.value.length) {
    store.addToUserHistory('races', selectedRace.value.raceName); 
    store.addToUserHistory('constructors', selectedConstructor.value.name); 
    store.addToUserHistory('drivers', `${selectedDriver.value.givenName} ${selectedDriver.value.familyName}`); 
    store.addToUserHistory('score', score.value, score.value);
  }
});

</script>

<style scoped>

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  padding: 20px;
  position: relative;
}


.results::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/podium.png'); 
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.7;
}

.results__title, .results__subtitle, .results__top3 {
  font-size: 3rem;
  margin-bottom: 10px;
  color:rgb(6, 6, 6);
  text-shadow: 2px 2px 5px rgb(255, 0, 0);
}



.results__podium {
  margin-top: 20px;
  font-size: 2rem;
}

.results__list {
  list-style: none;
  padding: 0;
}

.results__item {
  background: rgba(250, 247, 247, 0.928);
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgb(0, 255, 251);
  
}


.results__loading, .results__error {
  font-size: 2rem;
  font-weight: bold;
  color: red;
  margin-top: 20px;
}


.results__selection {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.915);
  border-radius: 5px;
  text-align: left;
  width: 100%;
  max-width: 500px;
  text-shadow: 2px 2px 5px rgb(0, 255, 251);
  font-size: 2rem;
}

.results__selection p {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 5px;
}
/* Media Queries for screen smaller than 720px */
/* Media Queries para pantallas menores a 720px */
@media (max-width: 720px) {
  .results {
    height: auto; /* Ajusta la altura automáticamente - Adjust height automatically */
    padding: 10px; /* Reduce el padding - Reduce padding*/
  }

  /* Títulos -Titles*/
  .results__title, .results__subtitle, .results__top3 {
    font-size: 1.5rem; 
  }

  /* Lista de podio - Podium list*/
  .results__podium {
    font-size: 1.2rem; 
  }

  .results__item {
    font-size: 1rem; 
    padding: 8px; 
    margin: 3px 0; 
   
  }
  /* Estilos de carga y error */
  /* Styles for loading and error*/
  .results__loading, .results__error {
    font-size: 1.2rem; 
  }
  /* Sección de selecciones */
  /* Selection section */
  .results__selection {
    padding: 10px;
    font-size: 1rem; 
    max-width: 90%;
  }

  .results__selection p {
    font-size: 1rem;
  }
}

</style>

