<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__social">
        <p class="footer__social-title">Síguenos en Redes</p>
        <div class="footer__social-icons">
          <a href="#" class="footer__social-icon"><i class="fab fa-facebook"></i></a>
          <a href="#" class="footer__social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="footer__social-icon"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <div class="footer__logo">
        <img src="@/assets/logo.png" alt="FantasyRace footer__logo" />
      </div>

      <div class="footer__links">
        <router-link to="/questions" class="footer__link">FAQ</router-link>
        <router-link to="/" class="footer__link">Contacta con Nosotros</router-link>
       
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__legal">
        <a href="#" class="footer__legal-link">Política de Privacidad</a>
        <a href="#" class="footer__legal-link">Aviso Legal</a>
        <a href="#" class="footer__legal-link">Política de Cookies</a>
      </div>
      <p class="footer__legal footer__legal--copyright">Copyright © 2025 FantasyRace.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
}

.footer__top {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer__social-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer__social-icon {
  color: white;
  font-size: 20px;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.8rem;
}

.footer__logo img {
  height: 60px;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.footer__legal {
  display: flex;
  gap: 5rem;
  margin-left: 3rem;
}

.footer__link,
.footer__legal-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.footer__legal--copyright {
  font-size: 12px;
  text-align: center;
  
}
/* Media queries for small screens */
/* Media queries para pantallas pequeñas */
@media screen and (max-width: 720px) {
  .footer__top {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
  }
  
  .footer__logo img {
    height: 50px;
    margin: 1rem 0;
  }
  
  .footer__bottom {
    flex-direction: column;
    gap: 1rem;
  }
  
  .footer__legal {
    flex-direction: column;
    gap: 1rem;
    margin-left: 0;
    margin-bottom: 1rem;
  }
  
  .footer__legal-link {
    padding: 0.5rem 0;
  }
}
</style>
