<script setup lang="ts">
import NavbarVue from "./components/NavbarVue.vue";
import FooterComponent from "./components/FooterComponent.vue";
import CartComponent from "./components/CartComponent.vue";
import FavoritesComponent from "./components/FavoritesComponent.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import OrderSuccessModal from "./components/OrderSuccessModal.vue";
const route = useRoute();
const cartOpen = ref<boolean>(false);
const favoritesOpen = ref<boolean>(false);
const menuOpen = ref<boolean>(false);
const confirmationOpen = ref<boolean>(false);

const showCart = ()=>{
  favoritesOpen.value = false;
  cartOpen.value= !cartOpen.value
}
const showFavorites = ()=>{
  cartOpen.value = false;
 favoritesOpen.value = !favoritesOpen.value
}
const showMenu = ()=>{
  menuOpen.value = !menuOpen.value
}
const showConfirmation = ()=>{
  confirmationOpen.value = !confirmationOpen.value
}

watch(route, ()=>{
  cartOpen.value = false;
  favoritesOpen.value = false;
})
</script>

<template>
  <div class="container" :class="[cartOpen?'cart_open': '', favoritesOpen?'favorites_open':'', confirmationOpen?'confirmation_open':'']">
    <header>
      <div class="nav-modal" :class="[menuOpen?'menu_open':'']">
        <NavbarVue @cartClicked="showCart" @favoritesClicked="showFavorites" @menuClicked="showMenu" />
      </div>
    </header>
    <div class="modal-container" v-if="cartOpen">
      <CartComponent />
    </div>
    <div class="modal-container" v-if="favoritesOpen">
      <FavoritesComponent />
    </div>
    <div class="modal-container" v-if="confirmationOpen">
      <OrderSuccessModal @homeClicked="showConfirmation" />
    </div>
    <router-view :key="$route.fullPath" @paid="showConfirmation" />
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>
.container.cart_open, .container.favorites_open, .container.confirmation_open{
  overflow: hidden;
  max-height: 100vh;
}

footer{
  background:#101010
}

.modal-container{
    height: calc(100vh - 5rem);
    position:absolute;
    width:100%;
    background: rgba(0,0,0,.8);
    overflow: hidden;
}
.nav-modal.menu_open{
    height: 100%;
    position:fixed;
    z-index:30000;
    width:100%;
    background: rgba(0,0,0,.8);
    top:0;
}
</style>
