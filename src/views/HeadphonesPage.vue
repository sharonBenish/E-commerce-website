<script setup lang="ts">
import ProductList from '../components/ProductList.vue';
</script>

<template>
  <div>
    <div class="hero">
      <h2>Headphones</h2>
    </div>
    <ProductList />
  </div>
</template>

<style scoped>
.hero{
  background-color: #0e0e0e;
  height:200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero > h2{
  color:#fff;
  font-size:2.1rem;
  text-transform:uppercase
}
</style>