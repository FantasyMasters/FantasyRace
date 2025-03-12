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
// Filtro para constructores
// Aply filters to the constructors
const constructors = computed(() => {
  const results = data.value?.RaceTable?.Races[0]?.Results || [];
  const topConstructors = results.slice(0, 20).map((result) => result.Constructor);
  // Eminina duplicados en el array
  // Dele the duplicates
  const uniqueConstructors = Array.from(new Map(topConstructors.map((c) => [c.constructorId, c])).values());
  
  // Muestra resultados de forma aleatoria
  // Random order for results in grid
  return uniqueConstructors.sort(() => Math.random() - 0.5);
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
