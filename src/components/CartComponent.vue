<script setup lang="ts">
import {useStore} from "../store"
import { computed } from '@vue/reactivity';
import CartProduct from './CartProduct.vue';
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const cartItems = computed(()=>{
    return store.cart
})

const goToCheckOut = ()=>{
    router.push({
        name:'checkout'
    })
}

</script>

<template>
    <div class="cart_container">
        <div class="header">
            <div>Cart( {{cartItems.length}} )</div>
            <p class="remove_all" @click="store.removeAllItems">Remove all</p>
        </div>
        <p v-if="store.cart.length < 1">No Items in the Cart</p>
        <CartProduct v-else v-for="(item,index) in cartItems" :key="index" :item="item"/>
        <div class="summary" v-if="store.cart.length > 0">
            <span>Total:</span>
            <span class="total">$ {{store.getTotal}}</span>
        </div>
        <button v-if="store.cart.length > 0" @click="goToCheckOut">checkout</button>
    </div>
</template>

<style scoped>
.cart_container{
    max-width:350px;
    margin:1.5rem auto;
    background-color: #fff;
    padding: 1rem;
    position: relative;
    z-index: 100000;
}
.header{
    display:flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
}
.summary{
    display:flex;
    justify-content: space-between;
    margin:1.2rem 0;
}

.total{
    font-size:1.2rem;
    font-weight: 700;
}
button{
    text-transform: uppercase;
    background-color: #d87d4a;
    color: #fff;
    width:100%;
}

.remove_all{
    cursor:pointer;
    font-weight:800;
    text-decoration: underline;
}
.remove_all:hover{
    color:#d87d4a
}

@media(min-width: 675px){
    .cart_container{
        margin-left:auto;
        margin-right: 2rem;
    }
}
</style>