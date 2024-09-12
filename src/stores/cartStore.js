// src/stores/cartStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  const addToCart = () => {
    console.log('Add to cart');
  };

  const deleteFromCart = () => {
    console.log('Delete from cart');
  };

  return { cart, addToCart, deleteFromCart };
});
