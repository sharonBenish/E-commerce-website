<script setup lang="ts">
import ProductList from '../components/ProductList.vue';
import ShopLinksLayout from '../components/ShopLinksLayout.vue';
import AboutSection from '../components/AboutSection.vue';
</script>

<template>
  <div>
    <div class="hero">
      <h2>Speakers</h2>
    </div>
    <ProductList :category="'speakers'"/>
    <ShopLinksLayout class="content" />
    <AboutSection />
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
.content{
  margin: 8rem auto
}
</style>