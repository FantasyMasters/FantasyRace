<template>
    <div class="classification">
      <!-- Header -->
      <header class="classificationheader">
        <div class="classificationlogo">
          <img src="@/assets/logo.png" alt="Fantasy Race Logo">
        </div>
        <nav class="classificationnav">
          <a class="classificationlink" href="#">HOME</a>
          <a class="classificationlink" href="#">Juego</a>
          <a class="classificationlink" href="#">Clasificación</a>
          <a class="classificationlink" href="#">Login</a>
        </nav>
      </header>
  
      <!-- Banner -->
      <div class="classificationbanner">
        <h1 class="classificationtitle">Clasificación</h1>
        <img src="@/assets/classificationbanner.jpg" alt="Fondo" class="background"/>
    </div>
  
      <!-- Tabla de Clasificación -->
      <div class="classificationtables">
        <div class="classificationtable" v-for="race in races" :key="race.id">
          <h3 class="classificationtable-title">Premio carrera {{ race.name }}</h3>
          <div class="classificationtable-header">
            <span class="classificationtable-column">Posición</span>
            <span class="classificationtable-column">Score</span>
          </div>
          <div class="classificationtable-row" v-for="position in race.positions" :key="position">
            <span class="classificationtable-cell">{{ position }}</span>
            <span class="classificationtable-cell">|</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        races: [
          { id: 1, name: 'Carrera 1', positions: [1, 2, 3, 4, 5,6,7,8,9,10] },
          { id: 2, name: 'Carrera 2', positions: [1, 2, 3, 4, 5,6,7,8,9,10] },
          { id: 3, name: 'Carrera 3', positions: [1, 2, 3, 4, 5,6,7,8,9,10] }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .classification {
  font-family: Arial, sans-serif;
  background-color: #000;
  color: white;
  padding: 0;
  margin: 0;
  text-align: center;
}

.classification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: black;
  border-bottom: 4px solid red;
}

.classification-logo img {
  height: 50px;
}

.classification-nav {
  display: flex;
  gap: 20px;
}

.classification-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.classification-banner { /* Aquí debes colocar tu banner real */
  background-size: cover;
  background-position: center;
  padding: 50px 0;
  margin: 0;
}

.classification-title {
  font-size: 48px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 2px black;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.8);
}

.classification-tables {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: white;
}

.classification-table {
  background-color: black;
  padding: 15px;
  border-radius: 10px;
  color: white;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.classification-table-title {
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
}

.classification-table-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
}

.classification-table-row {
  display: flex;
  justify-content: space-between;
  margin: 3px 0;
}

.classification-table-cell {
  width: 50%;
  text-align: center;
}
  
  </style>