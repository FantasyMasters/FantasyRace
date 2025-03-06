<template>
  <div class="constructors">
    <h2 class="constructors__title">
      Equipos en {{ selectedRace?.raceName }} ({{ selectedYear }})
    </h2>
 <h3 class="constructors__subtitle">Elige uno.....</h3>

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

const store = useF1Store();
const emit = defineEmits(["nextStep"]);

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

.constructors__title, .constructors__subtitle {
  font-size: 4rem;
  color: rgb(255, 255, 255);
  text-shadow: 5px 5px 5px rgba(255, 0, 0, 0.846);
  margin-bottom: 20px;
}

.constructors__subtitle {
  font-size: 2rem;
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
  height: 100%;
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
  font-size: 20px;
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
</style>
