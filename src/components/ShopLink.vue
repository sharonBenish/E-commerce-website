<script setup lang="ts">
import { PropType, ref} from "@vue/runtime-core";
import Category from "../types/Category"

const props = defineProps({
    link:{
        required:true,
        type:Object as PropType<Category>
    }
})
const image = ref();
</script>

<template>
    <div class="category-card">
        <img class="img-fluid" :src="image" alt="">
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
</style>