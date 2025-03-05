<template>
  <main class="years">
    <!-- Imagen de fondo principal -->
    <img src="../assets/f1_7.jpg" alt="Fondo F1" class="years__background" />  
    <section class="years__container">
      <div class="years-view">
        
        <YearsComponent />
      </div>
    </section>
  </main>
</template>

<script setup>
import YearsComponent from '../components/YearsComponent.vue';
</script>

<style scoped>
/* Estilos generales */
.years {
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
  position: relative;
}

/* Imagen de fondo principal */
.years__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Contenedor principal con la segunda imagen de fondo */
.years__container {  
  height: 80vh;    
  width: 60vw;
  padding: 2rem;    
  background: rgba(0, 0, 0, 0.5); 
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-image: url('../assets/bandera.png');
  opacity: 0.9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px; 
}
</style>

