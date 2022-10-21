<script setup lang="ts">
import { ref } from 'vue';

const amount = ref<number>(1);
const minus = ()=>{
    if (amount.value == 1){
        return
    }
    amount.value--
}
const plus = ()=>{
    amount.value++
}
</script>

<template>
    <div class="quantity_container">
        <div class="quantity_control">
            <span class="minus" @click="minus">-</span>
            <div class="number">{{amount}}</div>
            <span class="plus" @click="plus">+</span>
        </div>
        <button>add to cart</button>
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
.quantity_control{
    display:flex;
    width:120px;
    justify-content:space-between;
    height:48px;
    align-items: center;
    padding:0 1rem ;
    background-color: #f1f1f1;
    color: #000;
    font-weight:600;
}
.minus:hover, .plus:hover{
    color:#d87d4a;
    cursor: pointer;
}
.number{
    font-weight:800
}
</style>