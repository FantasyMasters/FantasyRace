<template>
  <div class="drivers">
    <h2 class="drivers__title">
      Drivers of {{ selectedConstructor?.name }} in GP {{ selectedRace?.raceName }} ({{ selectedYear }})
    </h2>

    <ul v-if="isLoading" class="drivers__loading">
      <p>Loading drivers...</p>
    </ul>

    <ul v-else-if="drivers.length" class="drivers__list">
      <li
        v-for="driver in drivers"
        :key="driver.driverId"
        class="drivers__item"
        @click="selectDriver(driver)"
      >
        {{ driver.givenName }} {{ driver.familyName }} ({{ driver.nationality }})
      </li>
    </ul>

    <p v-else class="drivers__error">No drivers found or an error occurred.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useF1Store } from '../store/useF1Store';
import { useRouter } from 'vue-router';
import { useFetchApi } from '../composables/useFetchApi';

const store = useF1Store();
const router = useRouter();

const selectedRace = computed(() => store.selectedRace);
const selectedConstructor = computed(() => store.selectedConstructor);
const selectedYear = computed(() => store.selectedYear);

const apiUrl = computed(() =>
  selectedRace.value
    ? `https://api.jolpi.ca/ergast/f1/${selectedRace.value.season}/${selectedRace.value.round}/results.json`
    : ''
);

const { data, isLoading } = useFetchApi(apiUrl);

// Filtrar los pilotos del constructor seleccionado
const drivers = computed(() => {
  if (!selectedConstructor.value) return [];
  const results = data.value?.RaceTable?.Races[0]?.Results || [];
  return results
    .filter((result) => result.Constructor.constructorId === selectedConstructor.value.constructorId)
    .map((result) => result.Driver);
});

const selectDriver = (driver) => {
  store.setDriver(driver);
  router.push('/results');
};
</script>

  
  <style scoped>
  .drivers {
    text-align: center;
    padding: 20px;
  }
  
  .drivers__title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .drivers__list {
    list-style: none;
    padding: 0;
  }
  
  .drivers__item {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  .drivers__item:hover {
    background-color: #f0f0f0;
  }
  
  .drivers__loading {
    font-style: italic;
  }
  </style>
  
