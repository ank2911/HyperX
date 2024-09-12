// src/stores/cartStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('user', () => {
  const user = ref([]);

  const getUserData = () => {
    console.log('Get user data');
  };


  return { user, getUserData };
});
