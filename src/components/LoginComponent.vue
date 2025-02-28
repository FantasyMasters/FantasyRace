<template>
    <div class="login">
        
        <div class="login__container">
            <router-link to="/" class="close-button" @click="goHome">X</router-link>
            <img src="@/assets/logo2.png" alt="FantasyRace" class="login__logo">
            <h2 class="login__title">Login</h2>

            <form @submit.prevent="handleLogin" class="login__form">
                <div class="login__input-group">
                    <label for="email" class="login__label">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="username@gmail.com" required class="login__input">
                </div>

                <div class="login__input-group">
                    <label for="password" class="login__label">Password</label>
                    <input type="password" id="password" v-model="password" placeholder="password" required class="login__input">
                    <a href="#" class="login__forgot-password">Forgot password?</a>
                </div>

                <button type="submit" class="login__button">Sign in</button>
            </form>

            <p class="login__or">or continue with</p>

            <div class="login__social">
                <button class="login__social-btn login__social-btn--google">
                    <i class="fab fa-google"></i>
                </button>

                <button class="login__social-btn login__social-btn--github">
                    <i class="fab fa-github"></i>
                </button>

                <button class="login__social-btn login__social-btn--facebook">
                    <i class="fab fa-facebook"></i>
                </button>
            </div>

            <p class="login__register">
                Don't have an account yet? <a href="#" class="login__register-link">Register for free</a>
            </p>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleLogin = () => {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
}

</script>

<style scoped>

.login {
    background-image: linear-gradient(to bottom right, #09090A, #0BABB0, #FF0404);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    z-index: 10001; /* Para que el contenido del formulario esté encima */
}

.login__container {
    background-color: rgba(2, 0, 0, 0.8);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 15px rgba(2, 0, 0, 0.63);
    text-align: center;
}

.close-button {
    position: relative;
    background-color: #D22E40;
    top: 10px;
    left: 11rem;
    border: none;
    padding: 5px 10px;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
}

/* ------------ Elementos del formulario */
.login__logo {
    width: 100%;
    margin-bottom: 20px;
}
.login__title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: white;
}
.login__form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login__input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
}
.login__label {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: white;
}
.login__input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
}
.login__forgot-password {
    color: #D22E40;
    font-size: 0.9rem;
    text-decoration: none;
    margin-top: 5px;
    align-self: flex-end;
}
.login__button {
    width: 100%;
    background-color: #D22E40;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-top: 10px;
}
.login__or {
    color: white;
    margin-top: 15px 0;
}

/* ------------ Buttons social media */
.login__social {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}
.login__social-btn {
    width: 40px;
    height: 40px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 2rem;
    font-size: 1.5rem;
}
/* ------------ Buttons social media modifiers */
.login__social-btn--google {
    color: red;
}
.login__social-btn--github {
    color: black;
}
.login__social-btn--facebook {
    color: blue;
}
.login__social-btn:hover {
    background-color: #D22E40;
    color: white;
}
/* ------------ Register */
.login__register {
    color: white;
    margin-top: 20px;
}
.login__register-link {
    color: #00A0D2;
    text-decoration: none;
    font-weight: bold;
}
</style>