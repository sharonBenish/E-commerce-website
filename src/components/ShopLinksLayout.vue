<script setup lang="ts">
import ShopLinks from '../types/ShopLinks';
import ShopLink from './ShopLink.vue';
const categoryLinks:ShopLinks[]= [
    {
        name:"headphones",
        imgUrl:"https://audiophilee.netlify.app/images/shared/desktop/image-category-thumbnail-headphones.png"
    },
    {
        name:"speakers",
        imgUrl:"https://audiophilee.netlify.app/images/shared/desktop/image-category-thumbnail-speakers.png"
    },
    {
        name:"earphones",
        imgUrl:"https://audiophilee.netlify.app/images/shared/desktop/image-category-thumbnail-earphones.png"
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
    gap:3rem;
    flex-wrap: wrap;
    background-color: #fff;
}
.categories > div{
    width:100%;
    flex: 1 1 auto;
}

@media (min-width:675px) {
    .categories{
        gap:1rem;
    }
    .categories > div{
        width:calc(33.33% - 1rem);
    }
}
</style>