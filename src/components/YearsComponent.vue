<template>
    <div class="years">
      <label for="year-select" class="years__label">Select a year:</label>
      <select id="year-select" name="year-select" v-model="selectedYear" class="years__select" @change="handleYearChange">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useF1Store } from '../store/useF1Store';
  import { useRouter } from 'vue-router';
  
  const store = useF1Store();
  const router = useRouter();
  
  const years = computed(() => Array.from({ length: 26 }, (_, i) => 2000 + i));
  const selectedYear = computed({
    get: () => store.selectedYear,
    set: (value) => store.setYear(value)
  });
  
  const handleYearChange = () => {
    if (selectedYear.value) {
    router.push('/races');
  }
  };
  
  
  </script>
  
  <style scoped>
  .years {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 300px;
    margin: auto;
  }
  
  .years__label {
    font-size: 16px;
    font-weight: bold;
  }
  
  .years__select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  
