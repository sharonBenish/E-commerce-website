<script setup lang="ts">
import ShopLink from './ShopLink.vue';
import Category from '../types/Category'
const categoryLinks:Category[] = [
    {
        name:"headphones",
        imgUrl:"shared/desktop/image-category-thumbnail-headphones.png"
    },
    {
        name:"speakers",
        imgUrl:"shared/desktop/image-category-thumbnail-speakers.png"
    },
    {
        name:"earphones",
        imgUrl:"shared/desktop/image-category-thumbnail-earphones.png"
    }
]
</script>

<template>
    <div class="categories">
        <ShopLink v-for="(link,index) in categoryLinks" :key="index" :link="link" />
    </div>
</template>

<style scoped>
.categories{
    display:flex;
    gap:1rem;
    flex-wrap: wrap;
}
.categories > div{
    width:100%;
    flex: 1 1 auto;
}

@media (min-width:675px) {
    .categories > div{
        width:calc(33.33% - 1rem);
    }
}
</style>