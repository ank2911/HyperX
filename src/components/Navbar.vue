<template>
  <h1>This is Navbar</h1>
  <p>{{ count }}</p>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    return { count };
  },
};
</script>
