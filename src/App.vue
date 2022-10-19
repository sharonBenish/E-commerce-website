<script setup lang="ts">
import NavbarVue from "./components/NavbarVue.vue";

</script>

<template>
  <div class="container">
    <header>
      <NavbarVue />
    </header>
    <router-view />
    <footer></footer>
  </div>
</template>

<style scoped>
</style>
