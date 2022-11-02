<script setup lang="ts">
import { getAuth , signOut } from '@firebase/auth';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useStore } from '../store';
import ShopLinksLayout from './ShopLinksLayout.vue';

const store = useStore();
const router = useRouter();
const auth = getAuth();

const emit  = defineEmits<{
    (e: 'cartClicked'):void,
    (e: 'favoritesClicked'):void,
    (e: 'menuClicked'):void
}>();

const props = defineProps<{
    modalOpen:boolean
}>()

const showMenu = ref<boolean>(false);
const userDropdown = ref<boolean>(false);

const toggleMenu = ()=>{
    showMenu.value = !showMenu.value;
    userDropdown.value = false;
    emit('menuClicked')
}

const toggleUserDropdown = ()=>{
    if(props.modalOpen){
        return
    }
    userDropdown.value = !userDropdown.value;
}

const cartClciked = ()=>{
    userDropdown.value = false;
    emit('cartClicked')
}

const favoritesClicked = ()=>{
    userDropdown.value = false;
    emit('favoritesClicked')
}

const goToLogin = ()=>{
    router.push({
        name:'login'
    })
}
const goToSignup = ()=>{
    router.push({
        name:'signup'
    })
}

const logOut = ()=>{
    signOut(auth)
        .then(()=>{
            store.logOut();
            router.push({
                name:'home'
            })
            console.log("user logged out")
        })
        .catch((err)=>{
            console.log(err.message)
        })
}

const goToHistory = ()=>{
    router.push({
        name:'history'
    })
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
            <div class="user_icons">
                <div class="user_icon" @click="toggleUserDropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="rgba(255,255,255,1)"/></svg>
                    <img class="user-check" v-if="store.isLoggedIn" src="../assets/shared/desktop/check-fill.svg" alt="">
                    <div v-if="userDropdown">
                        <ul>
                            <li @click="goToLogin" v-if="!store.isLoggedIn">Login</li>
                            <li @click="logOut" v-else>Logout</li>
                            <li @click="goToSignup">Sign Up</li>
                            <li @click="goToHistory">Account History</li>
                        </ul>
                    </div>
                </div>
                <div class="favorites_icon" @click="favoritesClicked">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" fill="fff"/></svg>
                </div>
                <div class="cart_icon">
                    <img src="../assets/shared/desktop/cart.svg" alt="" class="cart" @click="cartClciked">
                    <span class="cart_number" v-show="store.getTotalCartItems > 0">{{store.getTotalCartItems}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a.router-link-exact-active{
    color: #d87d4a;
}
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
.user_icons{
    display: flex;
    gap:1.5rem;
    align-items: center;
}
.user_icons > div{
    cursor: pointer;
}
.favorites_icon path:last-of-type{
    fill:#fff;
    stroke-width:5;
}

.drop-down{
    padding:4rem 2rem;
    background:#fff;
    position:absolute;
    top:100%;
    width:100%;
    height:100vh;
    left:0;
    right:0;
    z-index: 1000000;
    overflow-x: hidden;
    background: rgba(0,0,0,.8);
}

.drop-down > div{
    width:100vw;
    position: absolute;
    padding: 3rem 2rem;
    top:0rem;
    left:50%;
    transform: translateX(-50%);
}
.logo{
    display:flex;
    gap:2rem;
}
.cart_icon{
    position: relative;
}
.cart_number{
    position: absolute;
    display: inline-block;
    background-color: #d87d4a;
    width:25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:center ;
    color:#fff;
    font-weight: 600;
    font-size: 12px;
    top:-15px;
    right:-20px;
}

.user_icon{
    position: relative;
}

.user_icon > div {
    position: absolute;
    background:#0e0e0e;
    border:1px solid #fff;
    width:150px;
    color:#fff;
    font-size:14px;
    top:100%;
    left:0;
    transform: translateX(calc( -50% + 15px));
}

.user_icon> div> ul{
    list-style: none;
    margin:0;
    text-align:left;
}

.user_icon > div li { 
    padding: 0.6rem 1rem;
}

.user_icon > div li:hover{
    color:#d87d4a
}

.user_icon > div li:not(:last-of-type){
    border-bottom:1px solid #fff;
}

.user-check{
    position:absolute;
    bottom: 0;
    right:-10px;
    border-radius: 50%;
    background:#fff;
    width:20px;
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