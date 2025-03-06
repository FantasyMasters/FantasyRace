<template>
  <!-- banner y título -->
  <div class="classification-page">
    <h1 class="classification-page__title">Clasificación</h1>
  </div>

  <!-- contenedor para las tablas (slider) -->
  <div class="tables-container">
    <!-- Deslizable -->
    <div class="tables-slider">
      <div v-for="(table, index) in tables" :key="index" class="race-table">
        <h2 class="race-table__title">{{ table.title }}</h2>
        <div class="race-table__grid">
          <div class="race-table__header">Posición</div>
          <div class="race-table__header">Score</div>
          <div v-for="pos in 10" :key="pos" class="race-table__item">
            <span class="race-table__position">{{ pos }}</span>
            <span class="race-table__score">-</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Propiedades y datos
defineProps({
  title: {
    type: String,
    required: true
  }
});

const tables = [
  { title: "Carrera 1" },
  { title: "Carrera 2" },
  { title: "Carrera 3" }
];
</script>

<style scoped>
/* banner y título */
.classification-page {
  background: url('../assets/classificationbanner.jpg') no-repeat center center;
  background-size: cover;
  padding: 5rem;
  text-align: center;
  color: white;
  box-shadow: red 0 0 15px;
}

.classification-page__title {
  font-size: 5rem;
  margin-bottom: 5rem;
  text-shadow: 2px 2px 4px purple;
  text-align: center;

}


/* contenedor para las tablas (con desplazamiento horizontal) */
.tables-container {
  display: flex;
  justify-content: center; 
  overflow-x: scroll; /* Permite desplazarse horizontalmente */
  padding-bottom: 4rem; 
  padding-top: 2rem;
  font-size: 1.5rem;

}

/* Estilo para el slider de las tablas */
.tables-slider {
  display: flex;
  gap: 10rem;
  flex-wrap: nowrap;
  padding: 2rem;
}

/* tabla */
.race-table {
  background-color: black;
  color: white;
  padding: 1.5rem;
  border-radius: 5rem;
  box-shadow: 0 0 15px rgb(4, 255, 213);
  width: 30rem;
  text-align: center;
}

.race-table__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding-top: 1rem;
  
}

.race-table__header {
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
}

.race-table__item {
  display: contents; 
}

.race-table__position,
.race-table__score {
  display: block;
  text-align: center;
  padding: 1rem;
}
</style>