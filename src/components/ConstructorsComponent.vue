<template>
  <div class="constructors">
    <h2 class="constructors__title">
      Teams in GP {{ selectedRace?.raceName }} ({{ selectedYear }})
    </h2>

    <ul v-if="isLoading" class="constructors__loading">
      <p>Loading constructors...</p>
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

    <p v-else class="constructors__error">No constructors found or an error occurred.</p>
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
const selectedYear = computed(() => store.selectedYear);

const apiUrl = computed(() =>
  selectedRace.value
    ? `https://api.jolpi.ca/ergast/f1/${selectedRace.value.season}/${selectedRace.value.round}/results.json`
    : ''
);

const { data, isLoading } = useFetchApi(apiUrl);

// Filtrar los constructores que quedaron en el top 10
const constructors = computed(() => {
  const results = data.value?.RaceTable?.Races[0]?.Results || [];
  const topConstructors = results.slice(0, 10).map((result) => result.Constructor);
  return Array.from(new Map(topConstructors.map((c) => [c.constructorId, c])).values());
});

const selectConstructor = (constructor) => {
  store.setConstructor(constructor);
  router.push('/drivers');
};
</script>

  
  <style scoped>
  .constructors {
    text-align: center;
    padding: 20px;
  }
  
  .constructors__title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .constructors__list {
    list-style: none;
    padding: 0;
  }
  
  .constructors__item {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 5px;
    border-radius: 5px;
    transition: 0.3s;
  }
  
  .constructors__item:hover {
    background-color: #f0f0f0;
  }
  
  .constructors__loading {
    font-style: italic;
  }
  </style>
  
