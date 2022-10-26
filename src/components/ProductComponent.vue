<script setup lang="ts">
import CategoryProducts from "../types/CategoryProducts"
import ProductBtn from "./ProductBtn.vue";
import ProductQuantity from "./ProductQuantity.vue";
import { useStore } from "../store"
import { ref } from "vue";
import CartItem from "../types/CartItem";
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

const liked = ref<boolean>(store.isLiked(props.product as CategoryProducts)||false)
const likeItem = ()=>{
    liked.value = !liked.value;
    if (liked.value){
        //add to favorites
        store.addToFavorites(props.product as CategoryProducts)
    }else{
        //remove from favorites
        store.removeFromFavorites(props.product as CategoryProducts);
    }
    console.log(store.favorites)
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
            <div class="price_like">
                <div class="like_button" @click="likeItem" :class="[liked? 'liked':'']">
                    <span class="tooltip">Add to wishlist!</span>
                    <svg v-if="liked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" fill="rgba(186,52,52,1)"/></svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" fill="#000"/></svg>
                </div>
                <p class="price">${{product.price}}</p>
            </div>
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

.price_like{
    display:flex ;
    gap:2rem;
    justify-content: center;
}

.like_button{
    cursor:pointer;
    position:relative
}
.like_button> span{
    display: none;
}
.like_button:not(.liked):hover > span{
    display: block;
    position:absolute;
    bottom:0;
    left:30%;
    width:150px;
    padding:0.5rem;
    font-size:14px;
    background:#000;
    color:#fff;
    border-radius:10px
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