<template>
    <LoginComponent>
        <template #title>Register</template>
        <template #form>
            <form @submit.prevent="handleRegister" class="register__form">

                <div class="register__container">

                    <div class="register__profile">
                        <input type="file" id="profilePic" @change="previewImage" hidden>
                        <label for="profilePic" class="profile__label">
                            <img v-if="profileImage" :src="profileImage" class="profile__image">
                            <img v-else src="@/assets/userimage.png" alt="Pilot Icon" class="profile__icon">
                        </label>
                    </div>

                    <div class="register__input-group">
                        <label for="name" class="register__label">Name</label>
                        <input type="text" id="name" v-model="name" placeholder="Name" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="lastname" class="register__label">Last Name</label>
                        <input type="text" id="lastname" v-model="lastname" placeholder="Last Name" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="nick" class="register__label">Nick</label>
                        <input type="text" id="nick" v-model="nick" placeholder="Your nickname" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="age" class="register__label">Age</label>
                        <input type="number" id="age" v-model="age" placeholder="Your age" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="country" class="register__label">Country</label>
                        <input type="text" id="country" v-model="country" placeholder="Your country" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="email" class="register__label">Email</label>
                        <input type="email" id="email" v-model="email" placeholder="username@gmail.com" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="password" class="register__label">Password</label>
                        <input type="password" id="password" v-model="password" placeholder="password" required class="register__input">
                    </div>

                    <div class="register__input-group">
                        <label for="confirmPassword" class="register__label">Confirm Password</label>
                        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="confirm password" required class="register__input">
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
import LoginComponent from './LoginComponent.vue';

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

const handleRegister = () => {

    if (password.value !== confirmPassword.value) {
        errorMessage.value = 'Passwords do not match';
        return;
    }

    console.log('Name:', name.value);
    console.log('Last Name:', lastname.value);
    console.log('Nick:', nick.value);
    console.log('Age:', age.value);
    console.log('Country:', country.value);
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log('Confirm Password:', confirmPassword.value);
}

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
    display: ruby;}

.register__signup {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-right: 3rem;
}
.register__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 49px;
}
.register__input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
}
.register__label {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: white;
}
.register__input {
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;

}
 /* ------------------- Image Profile */
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
    height: 100%;
    object-fit: cover;
}
.profile__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.error-message {
    color: #D22E40;
    font-size: 1.2rem;
    margin-top: 10px;
}
</style>