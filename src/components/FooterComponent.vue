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
                <img src="" alt="FantasyRace footer__logo" />
            </div>
            <div class="footer__links">
                <a href="#" class="footer__link">Faqs</a>
                <a href="#" class="footer__link">Url</a>
                <a href="#" class="footer__link">Contacta con Nosotros</a>
            </div>
        </div>

        <div class="footer__bottom">
      <div class="footer__legal">
        <a href="#" class="footer__legal-link">P. de Privacidad</a>
        <a href="#" class="footer__legal-link">Aviso Legal</a>
        <a href="#" class="footer__legal-link">P. de Cookies</a>
      </div>
      <p class="footer__copyright">Copyright © 2025 FantasyRace.</p>
    </div>
    </footer>

</template>
  
<script setup>
  
</script>
  
<style scoped>

  .footer {
    background-color: black;
    color: white;
    text-align: center;
    padding: 20px 0;
  }
  
  .footer__top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 15px;
    border-bottom: 1px solid #444;
  }
  
  .footer__social-title {
    font-size: 16px;
    font-weight: bold;
  }
  
  .footer__social-icon {
    color: white;
    font-size: 20px;
    margin: 0 10px;
    text-decoration: none;
  }
  
  .footer__logo img {
    height: 60px;
  }
  
 .footer__link,
.footer__legal-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
}

.footer__legal {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.footer__copyright {
  font-size: 12px;
  margin-top: 10px;
}
  
  .footer__social-icons a:hover,
  .footer__links a:hover,
  .legal a:hover {
    color: red;
  }
</style>
  