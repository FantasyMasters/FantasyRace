<template>
  <!--titulo y banner-->
  <div class="classification-page">
    <h1 class="classification-page__title">Clasificación</h1>
  </div>


  <!--tablas-->
  <div class="tables-container">
    <div class="tables-slider">
      <div v-for="(table, index) in currentTables" :key="index" class="race-table">
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
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})


// tablas
const tableSets = [
  [
    {
      title: "Carrera 1",
      players: [
        { name: "Jugador ", score: 100 },
        { name: "Jugador ", score: 90},
        { name: "Jugador ", score: 80 },
        { name: "Jugador ", score: 70 },
        { name: "Jugador ", score: 60 },
        { name: "Jugador ", score: 50 },
        { name: "Jugador ", score: 40 },
        { name: "Jugador ", score: 30 },
        { name: "Jugador ", score: 20 },
        { name: "Jugador ", score: 10 }
      ]
    },
    {
      title: "Carrera 2",
      players: [
        { name: "Jugador ", score: 95 },
        { name: "Jugador ", score: 85 },
        { name: "Jugador ", score: 75 },
        { name: "Jugador ", score: 65 },
        { name: "Jugador ", score: 55 },
        { name: "Jugador ", score: 45 },
        { name: "Jugador ", score: 35 },
        { name: "Jugador ", score: 25 },
        { name: "Jugador ", score: 15 },
        { name: "Jugador ", score: 5 }
      ]
    },
    {
      title: "Carrera 3",
      players: [
        { name: "Jugador ", score: 87 },
        { name: "Jugador ", score: 77 },
        { name: "Jugador ", score: 67 },
        { name: "Jugador ", score: 65 },
        { name: "Jugador ", score: 64 },
        { name: "Jugador ", score: 62 },
        { name: "Jugador ", score: 60 },
        { name: "Jugador ", score: 55 },
        { name: "Jugador ", score: 50 },
        { name: "Jugador ", score: 45 }
      ]
    }
  ],
  [
    {
      title: "Carrera 4",
      players: [
        { name: "Jugador ", score: 92 },
        { name: "Jugador ", score: 87 },
        { name: "Jugador ", score: 85 },
        { name: "Jugador ", score: 80 },
        { name: "Jugador ", score: 75 },
        { name: "Jugador ", score: 70 },
        { name: "Jugador ", score: 65 },
        { name: "Jugador ", score: 60 },
        { name: "Jugador ", score: 55 },
        { name: "Jugador ", score: 50 }
      ]
    },
    {
      title: "Carrera 5",
      players: [
        { name: "Jugador ", score: 90 },
        { name: "Jugador ", score: 88 },
        { name: "Jugador ", score: 84 },
        { name: "Jugador ", score: 80 },
        { name: "Jugador ", score: 75 },
        { name: "Jugador ", score: 70 },
        { name: "Jugador ", score: 65 },
        { name: "Jugador ", score: 60 },
        { name: "Jugador ", score: 55 },
        { name: "Jugador ", score: 50 }
      ]
    },
    {
      title: "Carrera 6",
      players: [
        { name: "Jugador ", score: 88 },
        { name: "Jugador ", score: 86 },
        { name: "Jugador ", score: 80 },
        { name: "Jugador ", score: 75 },
        { name: "Jugador ", score: 70 },
        { name: "Jugador ", score: 65 },
        { name: "Jugador ", score: 60 },
        { name: "Jugador ", score: 55 },
        { name: "Jugador ", score: 50 },
        { name: "Jugador ", score: 45 }
      ]
    }
  ],
  [
    {
      title: "Carrera 7",
      players: [
        { name: "Jugador ", score: 95 },
        { name: "Jugador ", score: 90 },
        { name: "Jugador ", score: 85 },
        { name: "Jugador ", score: 80 },
        { name: "Jugador ", score: 75 },
        { name: "Jugador ", score: 70 },
        { name: "Jugador ", score: 65 },
        { name: "Jugador ", score: 60 },
        { name: "Jugador ", score: 55 },
        { name: "Jugador ", score: 50 }
      ]
    },
    {
      title: "Carrera 8",
      players: [
        { name: "Jugador ", score: 93 },
        { name: "Jugador ", score: 89 },
        { name: "Jugador ", score: 83 },
        { name: "Jugador ", score: 80 },
        { name: "Jugador ", score: 78 },
        { name: "Jugador ", score: 75 },
        { name: "Jugador ", score: 72 },
        { name: "Jugador ", score: 70 },
        { name: "Jugador ", score: 68 },
        { name: "Jugador ", score: 65 },
       
      ]
    },
    {
      title: "Carrera 9",
      players: [
        { name: "Jugador ", score: 10 },
        { name: "Jugador ", score: 9 },
        { name: "Jugador ", score: 8 },
        { name: "Jugador ", score: 7 },
        { name: "Jugador ", score: 6 },
        { name: "Jugador ", score: 5 },
        { name: "Jugador ", score: 4 },
        { name: "Jugador ", score: 3 },
        { name: "Jugador ", score: 2 },
        { name: "Jugador ", score: 1 }
    ]
    }
  ]
]

// Estado reactivo para mostrar  tablas
const currentTables = ref(tableSets[0])
let currentIndex = 0
let intervalId = null

// Función para rotar al siguiente set de tablas
const rotateTables = () => {
  currentIndex = (currentIndex + 1) % tableSets.length
  currentTables.value = tableSets[currentIndex]
}

// Inicia el intervalo al montar
onMounted(() => {
  intervalId = setInterval(rotateTables, 5000) // Cambia cada 5 segundos
})

// Limpia el intervalo al desmontar
onUnmounted(() => {
  clearInterval(intervalId)
})
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
  overflow-x: scroll;
  padding-bottom: 4rem;
  padding-top: 2rem;
  font-size: 1.5rem;
}

.tables-slider {
  display: flex;
  gap: 10rem;
  flex-wrap: nowrap;
  padding: 2rem;
}

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
  grid-template-columns: 1fr 2fr 1fr;
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
.race-table__name,
.race-table__score {
  display: block;
  text-align: center;
  padding: 1rem;
}
</style>