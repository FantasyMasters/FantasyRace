<template>
  <div class="races">
    <h2 class="races__title">Carreras en {{ selectedYear }}</h2>
    <h3 class="races__subtitle">Elige una....</h3>

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
import { useRouter } from 'vue-router';
import { useFetchApi } from '../composables/useFetchApi';

const store = useF1Store();
const router = useRouter();

const selectedYear = computed(() => store.selectedYear);
const apiUrl = computed(() => selectedYear.value ? `https://api.jolpi.ca/ergast/f1/${selectedYear.value}.json` : '');

const { data, error, isLoading } = useFetchApi(apiUrl);

const races = computed(() => data.value?.RaceTable?.Races || []);

const selectRace = (race) => {
  store.setRace(race);
  router.push('/constructors');
};

watch(selectedYear, (newYear) => {
  if (!newYear) console.warn('No year selected!');
});
</script>

<style scoped>

.races {
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

.races__title, .races__subtitle {
  font-size: 5rem;
  color: black;
  text-shadow: 2px 2px 5px rgba(4, 238, 242, 0.846);
  margin-bottom: 20px;
}

.races__subtitle {
  font-size: 2rem;
}

.races__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1000px;
  padding: 20px;
  list-style-type: none;
}

.races__list::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/circuito.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.7; 
  z-index: -1;
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
  opacity: 0.9;
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
</style>