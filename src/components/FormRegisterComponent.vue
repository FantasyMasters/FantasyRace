<template>
    <LoginComponent>
        <template #title>Register</template>
        <template #form>
            <form @submit.prevent="handleRegister" class="register__form">
                <div class="register__container">
                    <!-- Imagen de perfil --Profile image -->
                    <div class="register__profile">
                        <input type="file" id="profilePic" @change="previewImage" hidden>
                        <label for="profilePic" class="profile__label">
                            <img v-if="profileImage" :src="profileImage" class="profile__image">
                            <img v-else src="@/assets/userimage.png" alt="Pilot Icon" class="profile__icon">
                        </label>
                    </div>

                    <!-- Campos del formulario -- Form inputs-->
                    <div class="register__input-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" v-model="name" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" v-model="lastname" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="nick">Nick</label>
                        <input type="text" id="nick" v-model="nick" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="age">Age</label>
                        <input type="number" id="age" v-model="age" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="country">Country</label>
                        <input type="text" id="country" v-model="country" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="email" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" v-model="confirmPassword" required class="register__input">
                    </div>

                    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                </div>

                <button type="submit" class="register__button">Create Account</button>
            </form>
        </template>
    </LoginComponent>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useF1Store } from '@/store/useF1Store';
import LoginComponent from './LoginComponent.vue';
defineEmits(['close']); // Declaramos el evento emitido -- - Declare emited event 


const name = ref('');
const lastname = ref('');
const nick = ref('');
const age = ref('');
const country = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const profileImage = ref('');
const errorMessage = ref('');
const router = useRouter();
const f1Store = useF1Store();

// Validar si el usuario ya existe antes de registrarlo -- Validate user before registering
const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Passwords do not match';
        return;
    }

    errorMessage.value = '';

    try {
        const checkUser = await axios.get(`http://localhost:3000/users?email=${email.value}`);
        if (checkUser.data.length > 0) {
            errorMessage.value = 'User already exists';
            return;
        }
    } catch (error) {
        console.error('Error checking user:', error);
    }

    // Crear el objeto del usuario -- Create user object
    const newUser = {
        name: name.value,
        lastname: lastname.value,
        nick: nick.value,
        age: age.value,
        country: country.value,
        email: email.value,
        password: password.value,
        profileImage: profileImage.value || '@/assets/userimage.png'
    };

    try {
        const response = await axios.post('http://localhost:3000/users', newUser);
        f1Store.setUser(response.data); // Guarda el usuario en el store correctamente -- Save user
        router.push('/user-profile'); // Redirige al perfil - Redirect to profile
    } catch (error) {
        console.error('Error registering user:', error);
        errorMessage.value = 'An error occurred';
    }
};

// Función para previsualizar la imagen de perfil- function to show profile image
const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => profileImage.value = e.target.result;
        reader.readAsDataURL(file);
    }
};
</script>

<style scoped>
.register__form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.register__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    width: 100%;
}
.register__input-group {
    display: flex;
    flex-direction: column;
    color: white;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
}
.register__input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
}
.register__button {
    width: 30%;
    background-color: #0BABB0;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 1rem;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 1rem;
}
.register__profile {
    grid-column: span 2;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.profile__label {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
}
.profile__icon {
    width: 100%;
    object-fit: cover;
}
.profile__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.error-message {
    color: red;
    font-size: 1rem;
    margin-top: 10px;
}
/*media queries*/
/* Media Query para pantallas menores a 1024px -- Media Query for screens smaller than 1024px */
@media (max-width: 1024px) {

  


  .register__button {
    width: 50%; /* Aumenta el ancho del botón - Increase button width */
  }
}

/* Media Query para pantallas menores a 720px -- Media Query for screens smaller than 720px */
@media (max-width: 720px) {

  

  .register__input-group {
    margin-bottom: 15px; /* Reduce el margen inferior -- Decrease button width */
  }

  .register__input {
    font-size: 0.9rem; /* Reduce el tamaño de la fuente -- Decrease font size */
    padding: 8px; /* Reduce el padding -- Decrease padding */
  }

  .register__button {
    width: 80%; /* Aumenta el ancho del botón -- Increase button width */
    font-size: 1rem; /* Reduce el tamaño de la fuente -- Decrease font size */
    padding: 8px; /* Reduce el padding -- Decrease padding */
  }

  .profile__label {
    width: 80px; /* Reduce el tamaño de la imagen de perfil-- reduce size of profile image*/
    height: 80px;
  }

  .error-message {
    font-size: 0.9rem; /* Reduce el tamaño de la fuente del mensaje de error -- Reduce size of font for error message*/
  }
}

</style>