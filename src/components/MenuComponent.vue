<template>
  <nav class="menu">
    <div class="menu__container">
      <div class="menu__logo">
        <img src="@/assets/logo.png" alt="Logo" class="menu__logo-img">
      </div>
      <div class="menu__links">
        <router-link to="/" class="menu__link">HOME</router-link>
        <router-link to="/years" class="menu__link">JUEGO</router-link>
        <router-link to="/classification" class="menu__link">CLASIFICACION</router-link>
        <router-link to="/questions" class="menu__link">QUESTIONS</router-link>
        <router-link to="/guides" class="menu__link">GUIDES</router-link>
      </div>

      <div v-if="user" class="menu__user">
        <router-link to="/user-profile" class="menu__link menu__link--user">{{ user.nick }}</router-link>
      </div>
      <router-link v-else to="/login" class="menu__link menu__link--login">LOGIN</router-link>
    </div>

  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useF1Store } from '@/store/useF1Store';

const store = useF1Store();
const user = computed(() => store.user);
</script>

<style scoped>
.menu {
  background-color: black;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; 
}

.menu__container {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 10px 20px; 
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.menu__logo {
  width: 18rem; 
}

.menu__logo-img {
  max-width: 100%;
  height: auto;
}

.menu__links {
  display: flex;
  gap: 20px;
  flex-grow: 1; 
  justify-content: center; 
}

.menu__link {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.menu__link:hover {
text-shadow:0px 0px 8px #00ffff, 0px 0px 12px #00ffff;
}

.menu__link--login {
  margin-left: auto; /* Empuja el login a la derecha */
}
</style>