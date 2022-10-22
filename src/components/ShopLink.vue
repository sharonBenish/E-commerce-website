<script setup lang="ts">
import { PropType } from "@vue/runtime-core";
import ShopLinks from "../types/ShopLinks";

const props = defineProps({
    link:{
        required:true,
        type:Object as PropType<ShopLinks>
    }
})
</script>

<template>
    <div class="category-card">
        <img class="img-fluid" :src="link.imgUrl" alt="">
        <div class="text">
            <h4>{{link.name}}</h4>
            <router-link :to="`/${link.name}`">Shop <img src="../assets/shared/desktop/icon-arrow-right.svg" alt=""></router-link>
        </div>
    </div>
</template>

<style scoped>
.category-card{
    background-color:#f1f1f1;
    border-radius:5px;
}
.category-card > img{
    max-width:120px;
    position: relative;
    top:-2rem;
}
.text{
    position: relative;
    top:-2rem;
}
h4{
    text-transform: uppercase;
}
.text > * {
    color:#633d3d;
}

@media (min-width:1190px) {
    .category-card > img{
        max-width:170px;
        position: relative;
        top:-2rem;
    }
}
</style>