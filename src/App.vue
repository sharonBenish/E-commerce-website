<script setup lang="ts">
import NavbarVue from "./components/NavbarVue.vue";
import FooterComponent from "./components/FooterComponent.vue";
import CartComponent from "./components/CartComponent.vue";
import FavoritesComponent from "./components/FavoritesComponent.vue";
import { onBeforeMount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import OrderSuccessModal from "./components/OrderSuccessModal.vue";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useStore } from "./store";
const route = useRoute();
const store = useStore();
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

onBeforeMount(()=>{
  const auth = getAuth()
  onAuthStateChanged(auth, (user)=>{
    if (user){
      console.log(user);
      store.setUser(user.uid);
      store.logIn();
      store.getDatabase();
    }
  })
})

// onMounted(()=>{
//   console.log(store.localCart)
//   if (store.localCart.length > 0){
//         store.updateCartFromLocal()
//       }
// })

/*
onBeforeMount(()=>{
  const auth = getAuth()
  onAuthStateChanged(auth, (user)=>{
         if(user){
             router.push({
                 path:"/invoices"
             })
             invoiceStore.setUser(user);
             invoiceStore.getDatabase()
             console.log('logged in')
         } else if(route.path != "/"){
            invoiceStore.demoMode = true;
            invoiceStore.loadInvoices(json)
         }
     })
})
*/
</script>

<template>
  <div class="container" :class="[cartOpen?'cart_open': '', favoritesOpen?'favorites_open':'', confirmationOpen?'confirmation_open':'']">
    <header>
      <div class="nav-modal" :class="[menuOpen?'menu_open':'']">
        <NavbarVue @cartClicked="showCart" @favoritesClicked="showFavorites" @menuClicked="showMenu" :modalOpen="cartOpen || favoritesOpen || menuOpen || confirmationOpen" />
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
