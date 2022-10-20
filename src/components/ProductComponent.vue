<script setup lang="ts">
import CategoryProducts from "../types/CategoryProducts"
const props = defineProps({
    index:{
        type:Number,
        required:true
    },
    product:{
        type:Object as PropType<CategoryProducts>,
        required:true
    }
});
const isOdd = (idx:number)=>{
    if( idx % 2 == 0){
        return false
    }
    return true
}
</script>

<template>
  <div class="grid" :class="[isOdd(index)?'odd': '']">
    <div class="product_image">
        <img class="desktop img-fluid" :src="product.imageUrl.desktop" alt="">
        <img class="tablet img-fluid" :src="product.imageUrl.tablet" alt="">
        <img class="mobile img-fluid" :src="product.imageUrl.mobile" alt="">
    </div>
    <div class="product-descr">
        <h4>new product</h4>
        <h3 class="product_name">{{product.productName}}</h3>
        <p class="text">{{product.productDescription}}</p>
        <button>see product</button>
    </div>
  </div>
</template>

<style scoped>
.tablet,.desktop{
    display:none;
}
.grid{
    display:grid;
    gap:2rem
}

.product_image{
    border-radius: 13px;
    overflow: hidden;
}
.product-descr{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h4{
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 10px;
    color: #d87d4a;
    text-transform: uppercase;
}
.product_name{
    max-width: 445px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    color: rgb(0, 0, 0);
    letter-spacing: 1.42857px;
    text-transform: uppercase !important;
    margin:1rem 0;
}

button{
    text-transform: uppercase;
    background-color: #d87d4a;
    color:#fff;
    margin:2rem;
}

.text{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: rgb(0, 0, 0);
    opacity: 0.5;
    margin: 32px 0px 38px;
    max-width:350px;
}

.odd{
    direction: rtl;
}

@media (min-width:675px){
    .mobile{
        display: none;
    }
    .tablet{
        display:block
    }

    .text{
        max-width: 430px;
    }
}

@media (min-width:1190px){
    .tablet{
        display: none;
    }
    .desktop{
        display:block;
    }

    .grid{
        grid-template-columns: 1fr 1fr;
    }
    .product-descr{
        justify-content: center;
    }
}
</style>