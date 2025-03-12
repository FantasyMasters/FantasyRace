<template>
    <div class="ranking">
      <h2 class="ranking__title">Ranking de Usuarios</h2>
      <table class="ranking__table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Total Score</th>
            <th>Nº de Partidas</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in topUsers" :key="index">
            <td>{{ user.name }} {{ user.lastname }}</td>
            <td>{{ user.totalScore }}</td>
            <td>{{ user.totalConstructors }}</td>
            <td>{{ user.ranking.toFixed(2) }}</td>
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
      
      const fetchUsers = async () => {
        try {
          const response = await fetch("http://localhost:3000/users");
          const data = await response.json();
          users.value = data.map(user => {
            const totalScore = user.score.reduce((sum, val) => sum + val, 0);
            const totalConstructors = user.constructors.length;
            const ranking = totalConstructors > 0 ? totalScore / totalConstructors : 0;
            return { ...user, totalScore, totalConstructors, ranking };
          })
          .sort((a, b) => b.ranking - a.ranking) // Orden descendente por ranking
          .slice(0, 10); // Solo los 10 mejores
        } catch (error) {
          console.error("Error al obtener usuarios:", error);
        }
      };
  
      onMounted(fetchUsers);
  
      return { topUsers: users };
    }
  };
  </script>
  
  <style scoped>
  .ranking {
    width: 100%;
    max-width: 80%;
    margin: 5rem auto;
    overflow-x: auto;
	  height:100vh;
  }
  
  .ranking__title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .ranking__table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .ranking__table th, 
  .ranking__table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  .ranking__table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  @media (max-width: 600px) {
    .ranking__table th, 
    .ranking__table td {
      padding: 5px;
      font-size: 0.9rem;
    }
  }
  </style>
  