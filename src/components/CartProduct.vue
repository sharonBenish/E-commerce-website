<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useStore } from '../store';
import CartItem from '../types/CartItem';
import QuantityComponent from './QuantityComponent.vue';

const props = defineProps<{
    item:CartItem
}>();
const store = useStore();
const updateQuantity= (amount:number)=>{
    store.updateQuantity(props.item, amount)
}
const quantity = computed(()=>{
    return store.getQuantity(props.item)
})
</script>

<template>
    <div class="item">
        <div class="item_image">
            <img :src="item.cart.imgUrl" alt="">
        </div>
        <div>
            <h5>{{item.cart.name}}</h5>
            <p class="price">$ {{item.price}}</p>
        </div>
        <QuantityComponent :quantity="quantity" @valueChange="updateQuantity" class="quantity" />
    </div>
</template>

<style scoped>
.item{
    display: flex;
    gap:1rem;
    align-items: center
}
.item_image > img{
    width:65px
}
h5{
    text-transform: uppercase;
    font-size: 1rem;
}
.price{
    text-align: left;
    font-weight: 700;
}
.quantity{
    margin-left: auto;
}
</style>