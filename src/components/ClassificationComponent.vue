<template>
     <!-- Banner con título -->
     <div class="classification__banner">
      <h1 class="classification__title">Classification</h1>
      <img src="../assets/classificationbanner.jpg" alt="banner">
    </div>

    <!-- Tablas de premios -->
    <div class="classification__tables">
      <div class="classification__table">
        <h3 class="classification__table-title">Premio carrera 1</h3>
        <div class="classification__table-content">
          <div class="classification__table-position ">
            <span>Posición</span>
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

          <div class="classification__table-score">
            <span>Score</span>
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
        <h3 class="classification__table-title">Premio carrera 2</h3>
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
        <h3 class="classification__table-title">Premio carrera 3</h3>
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
  text-align: center;
}

.classification__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 10px 30px;
}

.classification__logo img {
  height: 50px;
}

.classification__nav {
  display: flex;
  gap: 20px;
}

.classification__nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.classification__nav-link:hover {
  color: cyan;
}

.classification__banner {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  margin-bottom: 20px;
}

.classification__title {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-text-stroke: 2px black;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}

.classification__tables {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: white;
}

.classification__table {
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 0 10px cyan;
}

.classification__table-title {
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
}

.classification__table-content {
  text-align: left;
}

.classification__table-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid gray;
}

.classification__table-row--header {
  font-weight: bold;
}
</style>