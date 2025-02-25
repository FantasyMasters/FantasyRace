<template>
  <div class="races">
    <h2 class="races__title">Races in {{ selectedYear }}</h2>

    <ul v-if="isLoading" class="races__loading">
      <p>Loading races...</p>
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

    <p v-else class="races__error">No races found or an error occurred.</p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useF1Store } from '../store/useF1Store';
import { useRouter } from 'vue-router';
import { useFetchApi } from '../composables/useFetchApi';

const store = useF1Store();
const router = useRouter();

const selectedYear = computed(() => store.selectedYear);
const apiUrl = computed(() => selectedYear.value ? `https://api.jolpi.ca/ergast/f1/${selectedYear.value}.json` : '');

const { data, error, isLoading } = useFetchApi(apiUrl);

// Extrae las carreras de la API cuando hay datos disponibles
const races = computed(() => data.value?.RaceTable?.Races || []);

const selectRace = (race) => {
  store.setRace(race);
  router.push('/constructors');
};

// Si no hay año seleccionado, se podría manejar un redireccionamiento o un mensaje
watch(selectedYear, (newYear) => {
  if (!newYear) console.warn('No year selected!');
});
</script>
 <style scoped>
  .races {
    text-align: center;
    padding: 20px;
  }
  
  .races__title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .races__list {
    list-style: none;
    padding: 0;
  }
  
  .races__item {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  .races__item:hover {
    background-color: #f0f0f0;
  }
  
  .races__loading {
    font-style: italic;
  }
  </style>
  
