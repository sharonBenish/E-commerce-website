<script setup lang="ts">
import NavbarVue from "./components/NavbarVue.vue";
import FooterComponent from "./components/FooterComponent.vue";

</script>

<template>
  <div class="container">
    <header>
      <NavbarVue />
    </header>
    <router-view />
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>
footer{
  background:#101010
}
</style>
