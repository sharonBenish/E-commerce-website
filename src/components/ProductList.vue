<script setup lang="ts">
import ProductComponent from './ProductComponent.vue';
import {products} from '../data/index';

const props = defineProps({
  category:{
    type:String,
    required:true
  }
})

</script>

<template>
  <div class="content">
    <ProductComponent v-for="(product, index) in products[category]" :key="index" :index ="Number(index)" :product="product"/>
  </div>
</template>

<style scoped>
.content{
    margin:3rem auto;
    display: grid;
    gap:2rem;
}
.content > div{

}
</style>