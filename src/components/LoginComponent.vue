<template>
    <div class="background-gradient">
    
        <form @submit.prevent="login">
      
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>

.background-gradient {
    background-image: linear-gradient(to bottom right, #09090A, #0BABB0, #FF0404);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1; /* Para que el contenido del formulario esté encima */
}
</style>