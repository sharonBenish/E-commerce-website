import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import { initializeApp } from 'firebase/app'

const pinia  = createPinia()

const firebaseConfig = {
    apiKey: "AIzaSyBo7QX4U_52e-My_hpEdsPHpy1C0F-N7lY",
    authDomain: "audiophile-site.firebaseapp.com",
    projectId: "audiophile-site",
    storageBucket: "audiophile-site.appspot.com",
    messagingSenderId: "308147222961",
    appId: "1:308147222961:web:dc80add28eb0d4edc9a590"
  };
  
// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).use(pinia).mount('#app')

