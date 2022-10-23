<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
const emit = defineEmits<{
  (e: 'valueChange', quantity: number): void
}>();
const props = defineProps<{
    quantity?:number
}>();
// const amount = computed (()=>{
//     if (props.quantity){
//         return props.quantity
//     }else return 1
// })
const amount = ref<number>(props.quantity || 1);


const minus = ()=>{
    if (amount.value == 1){
        return
    }
    amount.value--;
    emit("valueChange", amount.value)

}
const plus = ()=>{
    amount.value++;
    emit("valueChange", amount.value);
}

</script>

<template>
    <div class="quantity_control">
        <span class="minus" @click="minus">-</span>
        <div class="number">{{amount}}</div>
        <span class="plus" @click="plus">+</span>
    </div>
</template>

<style scoped>
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