<template>
  <div class="drivers">
    <h2 class="drivers__title">
      Pilotos de {{ selectedConstructor?.name }} en {{ selectedRace?.raceName }} ({{ selectedYear }})
    </h2>
    <ul v-if="isLoading" class="drivers__loading">
      <p>Cargando pilotos...</p>
    </ul>

    <ul v-else-if="drivers.length" class="drivers__list">
      <li
        v-for="driver in drivers"
        :key="driver.driverId"
        class="drivers__item"
        @click="selectDriver(driver)">

        {{ driver.givenName }} {{ driver.familyName }} ({{ driver.nationality }})
      </li>
    </ul>

    <p v-else class="drivers__error">Error, no se ha elegido piloto</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useF1Store } from '../store/useF1Store';
import { useFetchApi } from '../composables/useFetchApi';

const store = useF1Store();
const emit = defineEmits(["nextStep"]);

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
// Filter for drivers of the selected team
const drivers = computed(() => {
  if (!selectedConstructor.value) return [];
  const results = data.value?.RaceTable?.Races[0]?.Results || [];
  return results
    .filter((result) => result.Constructor.constructorId === selectedConstructor.value.constructorId)
    .map((result) => result.Driver);
});

const selectDriver = (driver) => {
  store.setDriver(driver);
  emit("nextStep");
};

</script>

<style scoped>

.drivers {
  text-align: center;
  min-height: 100vh;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  position: relative;
  padding-top: 200px; 
}

.drivers__title{
  font-size: 4rem;
  color: rgb(8, 8, 8);
  text-shadow: 5px 5px 5px rgba(255, 4, 4, 0.846);
  margin-bottom: 50px;
}

.drivers__list {
  display: grid;
  grid-template-columns:1fr 1fr;
  gap: 20px;
  width: 90%;
  max-width: 1000px;
  padding: 60px;
  list-style-type: none;
}

.drivers__list::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160%;
  background-image: url('../assets/piloto.png');
  background-size: 110%;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5; 
  z-index: -1;
  margin-top: 100px;
}

.drivers__item {
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

.drivers__item:hover {
  box-shadow: 0px 0px 15px 5px rgba(0, 255, 255, 0.8);
  transform: scale(1.05);
}

.drivers__loading {
  color: white;
  font-size: 5rem;
}

.drivers__error {
  color: rgb(255, 2, 2);
  font-weight: bold;
  background: white;
  padding: 10px;
  border-radius: 8px;
}

/*media queries*/
@media (max-width: 1024px) {
  .drivers__list {
    grid-template-columns: 1fr;
  }
  .drivers__list::before {
    height: 100%;
  }
  .drivers__title{
    font-size: 3rem;
  }
}

@media screen and (max-width: 720px) {
  .drivers__list {
    grid-template-columns: 1fr;
  }
  .drivers__list::before {
    height: 100%;
  }
  .drivers__title{
    font-size: 2rem;
  
}
}

  

</style>

  
