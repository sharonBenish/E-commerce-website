<script setup lang="ts">
import CategoryProducts from "../types/CategoryProducts"
import ProductBtn from "./ProductBtn.vue";
import ProductQuantity from "./ProductQuantity.vue";
import { useStore } from "../store"
const props = defineProps({
    index:{
        type:Number
    },
    product:{
        type:Object,
        required:true
    },
    view:{
        type:Boolean
    },
    category:{
        type:String,
        required:true
    }
});
const isOdd = (idx:number)=>{
    if( idx % 2 == 0){
        return false
    }
    return true
}

const store = useStore()

const addToCart = (amount:number)=>{
    const item = {
        slug:props.product.slug,
        price:props.product.price,
        cart:props.product.cart,
        quantity: amount
    };
    store.addToCart(item)
}

</script>

<template>
  <div class="grid" :class="[index && isOdd(index)?'odd': '']">
    <div class="product_image">
        <img class="desktop img-fluid" :src="product.imageUrl.desktop" alt="">
        <img class="tablet img-fluid" :src="product.imageUrl.tablet" alt="">
        <img class="mobile img-fluid" :src="product.imageUrl.mobile" alt="">
    </div>
    <div class="product-descr">
        <h4>new product</h4>
        <h3 class="product_name">{{product.productName}}</h3>
        <p class="text">{{product.productDescription}}</p>
        <ProductBtn v-if="!view" :id="product.slug" :category="category" />
        <div v-else>
            <p class="price">${{product.price}}</p>
            <ProductQuantity @addToCartClicked="addToCart" />
        </div>
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

.price{
    margin: 0 0 46px;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
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