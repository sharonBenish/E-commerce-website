<script setup lang="ts">
import {seeProduct} from '../composables/seeProduct'

const props=defineProps<{
    id:string,
    category:string
}>()
</script>

<template>
    <button @click="seeProduct(id, category)">see product</button>
</template>

<style scoped>
button{
  background-color: #d87d4a;
  color: #fff;
}
</style>