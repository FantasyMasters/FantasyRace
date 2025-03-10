<template>
  <nav class="menu">
    <div class="menu__container">
      <div class="menu__logo">
        <img src="@/assets/logo.png" alt="Logo" class="menu__logo-img">
      </div>

      <!-- Hamburger icon for mobile -->
      <div class="menu__hamburger" @click="toggleMobileMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </div>

      <!-- Menu links that transform based on screen size -->
      <div class="menu__links" :class="{ 'menu__links--open': isMobileMenuOpen }">
        <router-link to="/" class="menu__link" @click="handleLinkClick">HOME</router-link>
        <router-link to="/years" class="menu__link" @click="handleLinkClick">JUEGO</router-link>
        <router-link to="/classification" class="menu__link" @click="handleLinkClick">CLASIFICACION</router-link>
        <router-link to="/questions" class="menu__link" @click="handleLinkClick">QUESTIONS</router-link>
        <router-link to="/guides" class="menu__link" @click="handleLinkClick">GUIDES</router-link>
      
        <div v-if="user" class="menu__user">
          <router-link to="/user-profile" class="menu__link menu__link--user" @click="handleLinkClick">{{ user.nick }}</router-link>
        </div>
        <router-link v-else to="/login" class="menu__link menu__link--login" @click="handleLinkClick">LOGIN</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useF1Store } from '@/store/useF1Store';

const store = useF1Store();
const user = computed(() => store.user);
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleLinkClick = () => {
  // Only close menu if in mobile view
  if (window.innerWidth <= 992) {
    isMobileMenuOpen.value = false;
  }
};
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

.menu__hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  cursor: pointer;
  z-index: 1001;
}

.hamburger-line {
  width: 30px;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu__links {
  display: flex;
  gap: 20px;
  flex-grow: 1; 
  justify-content: center;
  align-items: center;
}

.menu__link {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.menu__link:hover {
  text-shadow: 0px 0px 8px #00ffff, 0px 0px 12px #00ffff;
}

.menu__link--login {
  margin-left: auto;
}

/* Media queries for responsive design */
@media (max-width: 992px) {
  .menu__hamburger {
    display: flex;
    order: 3;
  }
  
  .menu__logo {
    width: 12rem;
    order: 1;
  }
  
  .menu__container {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .menu__links {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    flex-direction: column;
    background-color: black;
    transition: height 0.3s ease;
    padding: 0;
    gap: 0;
    order: 2;
    flex-basis: 100%;
  }
  
  .menu__links--open {
    height: calc(100vh - 60px);
    padding: 20px 0;
  }
  
  .menu__link {
    width: 100%;
    padding: 15px 20px;
    border-bottom: 1px solid #333;
    font-size: 1.2rem;
  }
  
  .menu__user, .menu__link--login {
    margin-left: 0;
    width: 100%;
  }
}

@media (max-width: 576px) {
  .menu__container {
    padding: 10px;
  }
  
  .menu__logo {
    width: 10rem;
  }
}
</style>