<script setup lang="ts">
import CategoryProducts from '../types/CategoryProducts';
import ProductBtn from './ProductBtn.vue';
const props = defineProps<{
    products:CategoryProducts[]
}>()
</script>

<template>
    <div class="list">
        <div v-for="product of products" class="recommended">
            <div class="image">
                <img :src="product.imageUrl.mobile" alt="" class="mobile img-fluid">
                <img :src="product.imageUrl.tablet" alt="" class="tablet img-fluid">
                <img :src="product.imageUrl.desktop" alt="" class="desktop img-fluid">
            </div>
            <h4>{{product.productName}}</h4>
            <ProductBtn :id="product.slug" :category="product.category" />
        </div>
    </div>
</template>

<style scoped>
h4, button{
    text-transform: uppercase;
}
h4{
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 1.71429px;
    text-transform: uppercase;
    color: #000; 
    height: 80px;
}
.image{
    border-radius: 10px;
    overflow: hidden;
}

.image > img{
}
.recommended{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap:1.5rem;
    align-items: center;
}

.list{
    margin-top: 3rem;
    margin-bottom: 8rem;
}

@media (min-width:675px) {
    .list{
        display: flex;
        justify-content: space-between;
        gap:2rem;
    }
    .recommended{
        width:33.333%;
        margin: 0;
    }
}
</style>