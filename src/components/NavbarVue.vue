<script setup lang="ts">
import { ref } from '@vue/reactivity';
import ShopLinksLayout from './ShopLinksLayout.vue';

const emit  = defineEmits<{
    (e: 'cartClicked'):void
}>()

const showMenu = ref<boolean>(false);

const toggleMenu = ()=>{
    showMenu.value = !showMenu.value
}

const cartClciked = ()=>{
    emit('cartClicked')
}
</script>

<template>
    <div class="container">
        <div class="navigation content">
            <div class="logo">
                <div class="mobile-nav">
                    <div class="hamburger" @click="toggleMenu">
                        <img src="../assets/shared/tablet/hamburger.svg" alt="">
                    </div>
                    <div class="drop-down" v-show="showMenu">
                        <ShopLinksLayout />
                    </div>
                </div>
                <img src="../assets/shared/desktop/logo.svg" alt="">
            </div>
            <div>
                <nav class="desktop-nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/headphones">Headphones</router-link>
                    <router-link to="/speakers">Speakers</router-link>
                    <router-link to="/earphones">Earphones</router-link>
                </nav>
            </div>
            <div>
                <img src="../assets/shared/desktop/cart.svg" alt="" class="cart" @click="cartClciked">
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    background-color: #0e0e0e;
    height: 5rem;
    position: relative;
    justify-content: center;
    display:flex;
}
.navigation{
    /* width:85%;
    max-width: 1200px; */
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #fff;
}

nav.desktop-nav{
    display:none;
}

.drop-down{
    padding:4rem 2rem;
    background:#fff;
    position:absolute;
    top:100%;
    width:100%;
    left:0;
    right:0;
    z-index: 10000;
}
.logo{
    display:flex;
    gap:2rem;
}
@media (min-width:1200px) {
    .mobile-nav{
        display:none;
    }
    nav.desktop-nav {
        display: flex;
        justify-content:space-between;
        gap:1.5rem;
    }
    .desktop-nav a{
        font-weight:800;
    }
}
</style>