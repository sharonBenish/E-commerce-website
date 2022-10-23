<script setup lang="ts">
import { ref } from 'vue';
import QuantityComponent from './QuantityComponent.vue';

const emit = defineEmits<{
  (e: 'addToCartClicked', quantity: number): void
}>();

const clicked = ()=>{
    emit('addToCartClicked', quantity.value)
}

const quantity = ref<number>(1);
const updateQuantity = (amount:number)=>{
    quantity.value = amount;

    console.log(quantity.value)
}
</script>

<template>
    <div class="quantity_container">
        <QuantityComponent @valueChange="updateQuantity" />
        <button @click="clicked">add to cart</button>
    </div>
</template>

<style scoped>
.quantity_container{
    display: flex;
    gap:2rem;
    margin:2rem 0;
}
button{
  background-color: #d87d4a;
  color: #fff;
  text-transform: uppercase;
}
</style>