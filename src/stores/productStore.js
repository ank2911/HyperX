// src/stores/cartStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
  const products = ref([]);

  const fetchProducts = () => {
    console.log('Fetch products');
  };

  return { products, fetchProducts };
});
