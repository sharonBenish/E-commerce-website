<script setup lang="ts">
import { useRoute } from 'vue-router';
import data from '../data/data.json';
import ProductComponent from '../components/ProductComponent.vue';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import CategoryProducts from '../types/CategoryProducts';
import Category from '../types/Category';
import ProductContent from '../components/ProductContent.vue';
import ShopLinksLayout from '../components/ShopLinksLayout.vue';
import AboutSection from '../components/AboutSection.vue';

const route = useRoute();
const category = route.query.category as string;
const products = ref<Category[]>(data);
const productList = computed(()=>{
    const types = products.value.find(product => product.title == category);
    if (types){
        return types.types
    }
    else{
        return []
    }
})
const product = productList.value.find((item:CategoryProducts)=> item.slug == route.params.id) as CategoryProducts;
</script>

<template>
    <div class="content">
        <ProductComponent :view="true" :product="product" :category="category"/>
        <div class="features">
            <div>
                <h3>Features</h3>
                <p>{{product.features}}</p>
            </div>
            <div class="in-the-box">
                <h3>In the box</h3>
                <div>
                    <ProductContent v-for="(item, index) in product.content" :key="index" :item="item" />
                </div>
            </div>
        </div>
        <div class="preview">
            <div v-for="(image,index) in product.previewImageUrls" :key="index" :class="[index == 2? 'large':'']">
                <img class="mobile img-fluid" :src="image.mobile" alt="" v-if="image.mobile.length >0">
                <img class="tablet img-fluid" :src="image.tablet" alt="" v-if="image.tablet.length >0">
                <img class="desktop img-fluid" :src="image.desktop" alt="" v-if="image.desktop.length >0" >
            </div>
        </div>
        <div class="recommended"></div>
        <ShopLinksLayout />
        <AboutSection />
    </div>
</template>

<style scoped>
.content{
    margin:4rem auto;
    gap:3rem;
}
.about-section{
    width:100%;
    margin-top: 5rem;
}
.content > div {
    margin-bottom: 3rem;
}
.features h3{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    letter-spacing: 1.14286px;
    margin: 0 0 32px
}
.features{
    text-align: left;
}
.features p{
    margin-bottom: 2rem;
    max-width: 635px;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: rgb(0, 0, 0);
    opacity: 0.5;
}
.preview{
        display: grid;
        gap:2rem;
        margin-bottom: 8rem!important;
}

img{
        border-radius: 10px !important;
        overflow: hidden;
    }

@media (min-width:675px){
    .in-the-box{
        max-width: 635px;
        display: flex;
        justify-content: space-between;
    }

    .preview{
        display: grid;
        gap:2rem;
        grid-template-columns: 1fr 1fr;
    }
    .large{
        grid-row: 1/3;
        grid-column: 2;
    }
    .large img{
        height: 100%;
        max-width: none !important;
    }
}

@media (min-width:1190px) {
    .in-the-box{
        display:block;
        margin-top:32px;
    }
    .features{
        max-width: 1000px;
        display: flex;
        justify-content: space-between;
    }
    .large{

    }
}
</style>