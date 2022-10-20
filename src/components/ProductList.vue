<script setup lang="ts">
import ProductComponent from './ProductComponent.vue';
const products = [1,2,3,4]
</script>

<template>
  <div class="content">
    <ProductComponent v-for="(product, index) in products" :key="index"/>
  </div>
</template>

<style scoped>
.content{
    border:1px solid red;
    margin:0 auto;
}
</style>