<template>
  <ClassificationComponent/>
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
  
     <!-- Banner con título -->
     <div class="classification__banner">
      <h1 class="classification__title">Classification</h1>
    </div>

    <!-- Tablas de premios -->
    <div class="classification__tables">
      <div class="classification__table">
        <h3 class="classification__table-title">Premio carrera</h3>
        <div class="classification__table-content">
          <div class="classification__table-row classification__table-row--header">
            <span>Posición</span>
            <span>Score</span>
          </div>
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <h3>4</h3>
          <h3>5</h3>
          <h3>6</h3>
          <h3>7</h3>
          <h3>8</h3>
          <h3>9</h3>
          <h3>10</h3>
        </div>
      </div>

      <div class="classification__table">
        <h3 class="classification__table-title">Premio carrera</h3>
        <div class="classification__table-content">
          <div class="classification__table-row classification__table-row--header">
            <span>Posición</span>
            <span>Score</span>
          </div>
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <h3>4</h3>
          <h3>5</h3>
          <h3>6</h3>
          <h3>7</h3>
          <h3>8</h3>
          <h3>9</h3>
          <h3>10</h3>
        </div>
      </div>

      <div class="classification__table">
        <h3 class="classification__table-title">Premio carrera</h3>
        <div class="classification__table-content">
          <div class="classification__table-row classification__table-row--header">
            <span>Posición</span>
            <span>Score</span>
          </div>
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
          <h3>4</h3>
          <h3>5</h3>
          <h3>6</h3>
          <h3>7</h3>
          <h3>8</h3>
          <h3>9</h3>
          <h3>10</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classification",
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

.classification-banner {
  background-image: url('@/assets/classificationbanner.jpg'); /* Aquí debes colocar tu banner real */
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