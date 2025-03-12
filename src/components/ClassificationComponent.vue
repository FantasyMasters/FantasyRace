<template>
  <div class="classification-page">
    <h1 class="classification-page__title">Clasificación</h1>
  </div>

  <div class="tables-container">
    <div v-for="(table, index) in tables" :key="index" class="race-table">
      <h2 class="race-table__title">{{ table.title }}</h2>
      <div class="race-table__grid">
        <div class="race-table__header">Posición</div>
        <div class="race-table__header">Nombre</div>
        <div class="race-table__header">Score</div>

        <div v-for="(player, playerIndex) in table.players" :key="playerIndex" class="race-table__item">
          <span class="race-table__position">{{ playerIndex + 1 }}</span>
          <span class="race-table__name">{{ player.name }}</span>
          <span class="race-table__score">{{ player.score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const tables = ref([]);
let intervalId = null;

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();

    const processedData = data.map(user => {
      const totalScore = user.score.reduce((sum, val) => sum + val, 0);
      const totalConstructors = user.constructors.length;
      const ranking = totalConstructors > 0 ? totalScore / totalConstructors : 0;
      return { ...user, totalScore, ranking };
    })
    .sort((a, b) => b.ranking - a.ranking)
    .slice(0, 30);

    tables.value = [
      { title: "Top 10 - Carrera 1", players: processedData.slice(0, 10) },
      { title: "Top 10 - Carrera 2", players: processedData.slice(10, 20) },
      { title: "Top 10 - Carrera 3", players: processedData.slice(20, 30) }
    ];
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
};

onMounted(() => {
  fetchUsers();
  intervalId = setInterval(fetchUsers, 10000); // Actualiza cada 10 segundos
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>

/* banner y título */
.classification-page {
  background: url('../assets/classificationbanner.jpg') no-repeat center center;
  background-size: cover;
  padding: 3rem;
  text-align: center;
  color: white;
  box-shadow: red 0 0 15px;
  margin-top: 3rem;
  padding-top: 8rem;
  padding-bottom: 4rem
}


.classification-page__title {
  font-size: 5rem;
  margin-bottom: 5rem;
  text-shadow: 2px 2px 4px purple;
  text-align: center;
}


.tables-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  justify-content: center;
  gap: 7rem;
  
   
 
}
.race-table {
  background-color: black;
  color: white;
  border-radius: 3rem;
  box-shadow: 0 4px 10px aqua;
  width: 20%;
  padding: 2rem;
  height: 40rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  
}
.race-table__title {
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 1rem;
 
}
.race-table__grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 8px;
}
.race-table__header {
  font-weight: bold;
  background-color: rgb(255, 0, 0);
  color: #ffffff;
  padding: 0.50rem;
  text-align: center;
  border-radius: 3rem;
  box-shadow: 0 4px 10px aqua;
}
.race-table__item {
  display: contents;
}
.race-table__position,
.race-table__name,
.race-table__score {
  padding: 0.50rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

@media (max-width: 1024px) {
  .tables-container {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .race-table {
    width: 60%;
  }
}

@media (max-width: 720px) {
  .classification-page__title {
    font-size: 2rem;
  }
  .tables-container {
    gap: 3rem;
  }
  .race-table {
    width: 80%;
  }
}
</style>