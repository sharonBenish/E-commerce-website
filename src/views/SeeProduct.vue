<script setup lang="ts">
import { useRoute } from 'vue-router';
import data from '../data/data.json';
import ProductComponent from '../components/ProductComponent.vue';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import CategoryProducts from '../types/CategoryProducts';
import Category from '../types/Category';

const route = useRoute();
const category = route.query.category as string;
const products = ref<Category[]>(data);
const productList = computed(()=>{
    const types = products.value.find(product => product.title == category);
    if (types){
        return types.types
    }
    else{
        return []
    }
})
const product = productList.value.find((item:CategoryProducts)=> item.slug == route.params.id) as object;
</script>

<template>
    <div class="content">
        <ProductComponent :view="true" :product="product" :category="category"/>
    </div>
</template>

<style scoped>
.content{
    margin:0 auto
}
</style>