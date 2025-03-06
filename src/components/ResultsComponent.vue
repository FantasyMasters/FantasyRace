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
          <strong>{{ result.position }}º</strong> - 
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
import { computed, watch} from 'vue';
import { useF1Store } from '../store/useF1Store';
import { useFetchApi } from '../composables/useFetchApi';

const store = useF1Store();
const emit = defineEmits(["nextStep"]);

const selectedYear = computed(() => store.selectedYear);
const selectedRace = computed(() => store.selectedRace);
const selectedConstructor = computed(() => store.selectedConstructor);
const selectedDriver = computed(() => store.selectedDriver);

const apiUrl = computed(() =>
  selectedRace.value
    ? `https://api.jolpi.ca/ergast/f1/${selectedRace.value.season}/${selectedRace.value.round}/results.json`
    : ''
);

const { data, isLoading } = useFetchApi(apiUrl);

// Obtener los 3 primeros puestos del podio
const podium = computed(() => {
  return data.value?.RaceTable?.Races[0]?.Results?.slice(0, 3) || [];
});

// Calcular score basado en las selecciones del usuario
const calculateScore = () => {
  if (!selectedDriver.value || !selectedConstructor.value || !podium.value.length) return 0;

  let score = 0;
  const points = [25, 18, 15]; // Puntos para 1º, 2º y 3º lugar

  podium.value.forEach((result, index) => {
    if (result.Driver.driverId === selectedDriver.value.driverId) {
      score += points[index];
    }
    if (result.Constructor.constructorId === selectedConstructor.value.constructorId) {
      score += points[index];
    }
  });

  return score;
};

const score = computed(() => calculateScore());

// Guardar score en Pinia y localStorage cada vez que cambien los valores relevantes
watch([score, selectedYear, selectedRace, selectedConstructor, selectedDriver], () => {
  store.setScore(score.value);
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

/* Fondo semitransparente detrás de los resultados */
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


/* Títulos */
.results__title, .results__subtitle, .results__top3 {
  font-size: 4rem;
  margin-bottom: 10px;
  color:white;
  text-shadow: 2px 2px 5px rgb(255, 0, 0);
}


/* Lista de podium */
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

/* Estilos de carga y error */
.results__loading, .results__error {
  font-size: 2rem;
  font-weight: bold;
  color: red;
  margin-top: 20px;
}

/* Sección de selecciones */
.results__selection {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.915);
  border-radius: 5px;
  text-align: left;
  width: 100%;
  max-width: 500px;
  text-shadow: 2px 2px 5px rgb(0, 255, 251);
}

.results__selection p {
  font-size: 2rem;
  font-weight: bold;
}
</style>