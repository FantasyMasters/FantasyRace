<script setup>
import { ref, onMounted } from "vue";
import guidesData from "@/assets/guides.json";

const guides = ref([]);

onMounted(() => {
  guides.value = guidesData;
});
</script>

<template>
  <main class="guides">
    <!-- Imagen de fondo -- Background image-->
    <img src="@/assets/f1_2.png" alt="Fondo F1" class="guides__background"/>

    <section class="guides__container">
      <h1 class="guides__title">🏁Cómo Jugar en la FantasyRace🏁</h1>

      <details v-for="(guide, index) in guides" :key="index" class="guides__item">
        <summary class="guides__question">{{ guide.question }}</summary>
        <p class="guides__answer">{{ guide.answer }}</p>
      </details>
    </section>
  </main>
</template>

<style scoped>
/* Contenedor principal - Main container */
.guides {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
}

/* Imagen de fondo - Background image*/
.guides__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}


.guides__container {  
  height: 80%;    
  padding: 2rem;    
  background: rgba(206, 7, 7, 0.7);
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.3);
  color: white;
  position: relative;
  z-index: 2;
  max-width: 800px;
  overflow-y: auto;
  scrollbar-width: none;
}

/* Título - Title*/
.guides__title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

/* Pregunta con efecto de despliegue - Dropdown effect for answer */
.guides__item {
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
}

.guides__item[open] {
  background: rgba(255, 255, 255, 0.1);
}

.guides__question {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Eliminar el icono por defecto del summary -- Remove default icon */
.guides__question::-webkit-details-marker {
  display: none;
}

/* Añadir icono de flecha -- Add arrow icon*/
.guides__question::after {
  content: "▼";
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.guides__item[open] .guides__question::after {
  transform: rotate(180deg);
}

/* Respuesta oculta por defecto - Answer hidden by default */
.guides__answer {
  font-size: 1rem;
  padding: 0 1rem 1rem;
  line-height: 1.5;
}
</style>
