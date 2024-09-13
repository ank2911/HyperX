<template>
  <v-app>
    <v-system-bar class="black-system-bar"> 
      <v-carousel hide-delimiters height="30" cycle interval="3000" >
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-row align="center" justify="center">
            <v-col class="text-center white--text">{{ item }}</v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <a href="https://example.com" class="white--text move-left">United States EN</a>
    
      <v-spacer></v-spacer>

    </v-system-bar>
    
    <v-app-bar :elevation="2">
      <v-app-bar-title>E-COMM </v-app-bar-title>

      <!-- Align buttons to the left -->
      <v-btn variant="text">Button1</v-btn>
      <v-btn variant="text">Button2</v-btn>
      <v-btn variant="text">Button3</v-btn>
      <v-btn variant="text">Button4</v-btn>

      <v-spacer></v-spacer>

      <template v-slot:append>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-cart"></v-btn>
      </template>
    </v-app-bar>
  </v-app>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const items = ref(['Text 1', 'Text 2', 'Text 3'])
    return { items }
  },
}
</script>

<style>
.black-system-bar {
  background-color: black;
  color: white;
  padding: 5px 0;
  height: 2px;
}

.white--text {
  color: white;
  width: 200px;
}
.v-carousel-item {
  width: 80%;
}
.v-btn--icon.v-btn--density-default {
  display: none;
}

.move-left{
  margin-left: 10px;
}

</style>