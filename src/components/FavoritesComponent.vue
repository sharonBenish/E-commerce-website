<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { useStore } from '../store';
import {seeProduct} from '../composables/seeProduct'

const store = useStore();
const favorites = computed(()=>{
    return store.favorites
})
</script>

<template>
    <div class="favorites_container">
        <div class="header">
            <h3>Favorites( {{favorites.length}} )</h3>
            <p class="remove_all" @click="store.removeAllFavorites">Remove all</p>
        </div>
        <div class="favorites_list">
            <div v-for="favorite in favorites" :key="favorite.slug">
                <div class="product_image">
                    <img :src="favorite.cart.imgUrl" alt="">
                </div>
                <div>
                    <h4 class="product_name" @click="seeProduct(favorite.slug, favorite.category)">{{favorite.productName}}</h4>
                    <p class="price">$ {{favorite.price}}</p>
                    <p class="remove_item" @click="store.removeFromFavorites(favorite)">REMOVE ITEM</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.favorites_container{
    max-width:350px;
    margin:1.5rem auto;
    background-color: #fff;
    padding: 1rem;
    position: relative;
    z-index: 100000;
}

.header{
    display:flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
}

.favorites_list> div{
    display:flex;
    justify-content: space-between;
    text-align: right;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
}

.favorites_list img{
    max-width: 65px;
}

.remove_item{
    cursor: pointer;
    color:#d87d4a;
}
.remove_item:hover{
    text-decoration: underline;
}
.remove_all{
    cursor:pointer;
    font-weight:800;
    text-decoration: underline;
}
.remove_all:hover{
    color:#d87d4a
}

.product_name:hover{
    text-decoration: underline;
    cursor: pointer;
}
@media(min-width: 675px){
    .favorites_container{
        margin-left:auto;
        margin-right: 2rem;
    }
}
</style>
