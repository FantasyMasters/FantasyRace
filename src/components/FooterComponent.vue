<template>

    <footer class="footer">
        <div class="footer-top">
            <div class="social-media">
                <p>Síguenos en Redes</p>
                    <div class="icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
            </div>
            
            <div class="logo">
                <img src="@/assets/logo.svg" alt="FantasyRace Logo" />
            </div>
            <div class="links">
                <a href="#">Faqs</a>
                <a href="#">Url</a>
                <a href="#">Contacta con Nosotros</a>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="legal">
                <a href="#">P. de Privacidad</a>
                <a href="#">Aviso Legal</a>
                <a href="#">P. de Cookies</a>
            </div>
            <p>Copyright © 2025 FantasyRace.</p>
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
  
  .footer-top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 15px;
    border-bottom: 1px solid #444;
  }
  
  .social-media p {
    font-size: 16px;
    font-weight: bold;
  }
  
  .icons a {
    color: white;
    font-size: 20px;
    margin: 0 10px;
    text-decoration: none;
  }
  
  .logo img {
    height: 60px;
  }
  
  .links a,
  .legal a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 14px;
  }
  
  .legal {
    margin-top: 10px;
  }
  
  .footer-bottom p {
    font-size: 12px;
    margin-top: 10px;
  }
  
  .icons a:hover,
  .links a:hover,
  .legal a:hover {
    color: red;
  }
</style>
  