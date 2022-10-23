<script setup lang="ts">
import NavbarVue from "./components/NavbarVue.vue";
import FooterComponent from "./components/FooterComponent.vue";
import CartComponent from "./components/CartComponent.vue";
import { ref } from "vue";

const cartOpen = ref<boolean>(false);
const showCart = ()=>{
  cartOpen.value= !cartOpen.value
}

</script>

<template>
  <div class="container" :class="[cartOpen?'cart_open': '']">
    <header>
      <NavbarVue @cartClicked="showCart" />
    </header>
    <div class="modal-container" v-if="cartOpen">
      <CartComponent />
    </div>
    <router-view :key="$route.fullPath" />
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>
.container.cart_open{
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
</style>
