<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from '../store';
const emit = defineEmits<{
    (e: 'homeClicked'):void
}>();
const store = useStore();
const router = useRouter();

const goHome = ()=>{
    emit('homeClicked');
    store.removeAllItems();
    router.push({
        name:'home'
    })
}
</script>

<template>
    <div class="order_success_container">
        <div class="header">
            <h3>thank you for your order</h3>
            <img src="https://audiophilee.netlify.app/images/shared/complete.svg" alt="">
        </div>
        <p>You will receive an email confirmation shortly.</p>
        <div>
            <div class="items">
                <div v-for="item of store.cart">
                    <div>
                        <img :src="item.cart.imgUrl" alt="">
                    </div>
                    <div>
                        <h4>{{item.cart.name}}</h4>
                        <h5>$ {{item.price}}</h5>
                    </div>
                    <p>x{{item.quantity}}</p>
                </div>
            </div>
            <div class="total">
                <h4>Total:</h4>
                <h4>{{store.getTotal}}</h4>
            </div>
            <button @click="goHome">go back home</button>
        </div>
    </div>
</template>

<style scoped>
.order_success_container{
    background-color: #fff;
    max-width:450px;
    margin:0 auto;
    width:85%;
    text-align: left;
    padding:1.5rem;
    margin-top:2rem;
    max-height:500px;
    overflow:scroll;
}
.order_success_container > div:last-of-type{
    margin:1.5rem 0;
}
.header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap:0.5rem;
    text-align:left
}
.header h3{
    text-transform: uppercase;
    color: #000;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 1.14286px;
}

.header img{
    max-width:50px
}

p{
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: rgb(0, 0, 0);
    opacity: 0.5;
    margin: 24px 0px 0px;
}

.items{
    border-radius: 8px 8px 0 0;
    background: #f1f1f1;
    padding:1rem;
    text-transform: uppercase;
}

.items img{
    max-width:65px;
}
.items > div{
    display:flex;
    justify-content: space-between;
}
.total{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 198px;
    height: auto;
    background-color: #000;
    width: 100%;
    border-radius: 0 0 8px 8px;
    color:#FFF;
    padding:1rem;
}

button{
    background-color: #d87d4a;
    color: #fff;
    text-transform: uppercase;
    width:100%;
    margin-top:1.2rem;
}
</style>