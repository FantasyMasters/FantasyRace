<template>
  <div class="races">
    <h2 class="races__title">Carreras en {{ selectedYear }}</h2>

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
import { useFetchApi } from '../composables/useFetchApi';

const store = useF1Store();
const emit = defineEmits(["nextStep"]);

const selectedYear = computed(() => store.selectedYear);
const apiUrl = computed(() => selectedYear.value ? `https://api.jolpi.ca/ergast/f1/${selectedYear.value}.json` : '');

const { data, error, isLoading } = useFetchApi(apiUrl);

//las carreras estaran mezcladas de manera aleatoria
const races = computed(() => {
  const racesArray = data.value?.RaceTable?.Races || [];
  return racesArray.sort(() => Math.random() - 0.5);  
});

const selectRace = (race) => {
  store.setRace(race);
  emit("nextStep");
};

watch(selectedYear, (newYear) => {
  if (!newYear) console.warn('No year selected!');
});
</script>

<style scoped>

.races {
  text-align: center;
  padding: 20px;
  min-height: 70px;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  margin-top:80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0px; 
}

.races::before {
  content: "";
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/circuito.png'); 
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
}

.races__title {
  font-size: 5rem;
  color: rgb(17, 17, 17);
  text-shadow: 5px 5px 5px rgba(249, 1, 1, 0.856);
}

.races__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1500px;
  padding: 20px;
  list-style-type: none;
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

/*MediasQueries*/
/* Media Queries para tablets (1024px) */
@media (max-width: 1024px) {
  .races__list {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
  }

  .races__title {
    font-size: 4rem;
  }

  .races__item {
    font-size: 16px;
  }

.races__item:hover {
  box-shadow: none;
  transform: none;
}

}

/* Media Queries para móviles (menos de 720px) */
@media (max-width: 720px) {
  .races__list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .races__title {
    font-size: 3rem;
  }

  .races__item {
    font-size: 14px;
  }
  
  .races__item:hover {
  box-shadow: none;
  transform: none;
}
}

</style>