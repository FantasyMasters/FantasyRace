<template>
  <nav class="menu">
    <div class="menu__container">
      <div class="menu__logo">
        <img src="@/assets/logo.png" alt="Logo" class="menu__logo-img">
      </div>
      <div class="menu__links">
        <router-link to="/" class="menu__link">HOME</router-link>
        <router-link to="/manage" class="menu__link">JUEGO</router-link>
        <router-link to="/register" class="menu__link">CLASIFICACION</router-link>
      </div>
      <router-link to="/years" class="menu__link menu__link--login">LOGIN</router-link>
    </div>
  </nav>
</template>
  
<style scoped>
.menu {
  background-color: black;
  width: 100%;
  position: fixed; /* Para que esté fijo en la parte superior */
  top: 0;
  left: 0;
  z-index: 1000; 
}

.menu__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; 
  max-width: 1200px;
  margin: 0 auto;
}

.menu__logo {
  width: 20rem; 
}

.menu__logo-img {
  max-width: 100%;
  height: auto;
}

.menu__links {
  display: flex;
  gap: 20px;
}

.menu__link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}

.menu__link--login {
  margin-left: auto;
}
</style>