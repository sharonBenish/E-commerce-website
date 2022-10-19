<script setup lang="ts">
import ShopLinksLayout from './ShopLinksLayout.vue';
</script>

<template>
    <div class="view">
        <div class="navigation">
            <div class="mobile-nav">
                <div class="hamburger">
                    <img src="../assets/shared/tablet/hamburger.svg" alt="">
                </div>
                <div class="drop-down">
                    <ShopLinksLayout />
                </div>
            </div>
            <div class="logo">
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
                <img src="../assets/shared/desktop/cart.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.view{
    background-color: #0e0e0e;
    height: 5rem;
    position: relative;
}
.navigation{
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
}
@media (min-width:1200px) {
    .mobile-nav{
        display:none;
    }
    nav.desktop-nav {
        display: flex;
        justify-content:space-between;
        gap:10px;
    }
}
</style>