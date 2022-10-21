<script setup lang="ts">
import ProductComponent from './ProductComponent.vue';
import data from '../data/data.json'
import { ref } from 'vue';
import Category from '../types/Category';
import { computed } from '@vue/reactivity';

const props = defineProps({
  category:{
    type:String,
    required:true
  }
})
const products =ref<Category[]>(data);
const productList = computed(()=>{
  const types = products.value.find(product => product.title == props.category);
  if (types){
    return types.types
  }
  else{
    return []
  }
})
</script>

<template>
  <div class="content">
    <ProductComponent v-for="(product, index) in productList" :key="index" :index ="Number(index)" :product="product" :category="category"/>
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