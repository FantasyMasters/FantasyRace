<template>
 
    <div class="user-manager">
      <h2>Gestión de Usuarios</h2>
      <!-- Form to add or edit users data -->
      <!-- Formulario para agregar o editar usuarios -->
      <form @submit.prevent="saveUser">
        <input v-model="form.name" placeholder="Nombre" required />
        <input v-model="form.lastname" placeholder="Apellido" required />
        <input v-model="form.email" placeholder="Correo" type="email" required />
        <input v-model="form.password" placeholder="Contraseña" type="password" required />
        <button type="submit">{{ editing ? 'Actualizar' : 'Agregar' }}</button>
      </form>
      <!-- Users Table -->
      <!-- Tabla de usuarios -->
      
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="editUser(user)">Editar</button>
              <button @click="deleteUser(user.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const users = ref([]);
      const form = ref({ name: "", lastname: "", email: "", password: "" });
      const editing = ref(false);
      let editingId = null;
  
      const fetchUsers = async () => {
        const res = await fetch("http://localhost:3000/users");
        users.value = await res.json();
      };
  
      const saveUser = async () => {
        if (editing.value) {
          await fetch(`http://localhost:3000/users/${editingId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form.value)
          });
        } else {
          await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form.value, id: Date.now().toString() })
          });
        }
        resetForm();
        fetchUsers();
      };
  
      const editUser = (user) => {
        form.value = { ...user };
        editing.value = true;
        editingId = user.id;
      };
  
      const deleteUser = async (id) => {
        await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
        fetchUsers();
      };
  
      const resetForm = () => {
        form.value = { name: "", lastname: "", email: "", password: "" };
        editing.value = false;
        editingId = null;
      };
  
      onMounted(fetchUsers);
  
      return { users, form, saveUser, editUser, deleteUser, editing };
    }
  };
  </script>
  
  <style scoped>

  .user-manager {
    max-width: 60%;
    margin: 6rem auto;
    height: 100vh;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  button {
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  td, th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  </style>
  