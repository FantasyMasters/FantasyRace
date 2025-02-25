<template>
    <nav class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/manage">Manage Data</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/years">Play</router-link>
    </nav>
  </template>
  
  <style scoped>
  .menu {
    display: flex;
    gap: 10px;
  }
  
  .menu__link {
    text-decoration: none;
    color: blue;
    font-weight: bold;
  }
  </style>