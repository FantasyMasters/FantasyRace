<template>
  <div class="results">
    <h2 class="results__title">Year {{ selectedYear }}</h2>
    <h2 class="results__title">Results in GP {{ selectedRace?.raceName }}</h2>

    <div v-if="isLoading" class="results__loading">
      <p>Loading results...</p>
    </div>

    <div v-else-if="podium.length" class="results__podium">
      <h3>Top 3 - Podium</h3>
      <ul class="results__list">
        <li v-for="result in podium" :key="result.position" class="results__item">
          <strong>{{ result.position }}º</strong> - 
          {{ result.Driver.givenName }} {{ result.Driver.familyName }} ({{ result.Constructor.name }})
        </li>
      </ul>
    </div>

    <p v-else class="results__error">No results found or an error occurred.</p>

    <div class="results__selection">
      <h3>Your Choices</h3>
      <p><strong>Year:</strong> {{ selectedYear }}</p>
      <p><strong>Race:</strong> {{ selectedRace?.raceName }}</p>
      <p><strong>Team:</strong> {{ selectedConstructor?.name }}</p>
      <p><strong>Driver:</strong> {{ selectedDriver?.givenName }} {{ selectedDriver?.familyName }}</p>
      <p><strong>Score:</strong> {{ score }}</p>
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
    text-align: center;
    padding: 20px;
  }
  
  .results__title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .results__podium, .results__selection {
    margin: 20px 0;
  }
  
  .results__list {
    list-style: none;
    padding: 0;
  }
  
  .results__item {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .results__loading {
    font-style: italic;
  }
  </style>
  
