<template>
    <main class="guides">
      <!-- Imagen de fondo -->
      <img src="@/assets/f1_2.png" alt="Fondo F1" class="guides__background" />
  
      <section class="guides__container">
        <h1 class="guides__title">¿Guia?</h1>
  
      </section>
    </main>
  </template>
  
  <style scoped>
  /* Contenedor principal */
  .guides{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 2rem;
    overflow: hidden;
  }
  
  /* Imagen de fondo */
  .guides__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  
  }
  
  /* Caja principal */
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
  
  /* Título */
  .guides__title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  
 
  </style>