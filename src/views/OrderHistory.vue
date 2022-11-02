<script lang="ts" setup>
import { useStore } from '../store';

const store = useStore();
</script>

<template>
    <div class="order_history">
        <div class="content">
            <h2>ORDER HISTORY</h2>
            <div class="order_grid">
                <div v-for="(order, index) in store.orderHistory" :key="index">
                    <h3 class="items_heading">Items</h3>
                    <h3 class="date_heading">Ordered On</h3>
                    <div class="date">{{order.date}}</div>
                    <div class="items">
                        <div v-for="(item, index) in order.items" :key="index">
                            <h4>{{index +1}}) {{item.cart.name}}</h4>
                            <div class="info">
                                <div>
                                    <h5>Price</h5>
                                    <p>${{item.price}}</p>
                                </div>
                                <div>
                                    <h5>Quantity</h5>
                                    <p class="quantity">(x{{item.quantity}})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="total">
                        <h5>Total</h5>
                        <p>$ {{order.items.map(item => item.price).reduce((a,b)=> a+b, 0)}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
h2{
    text-align:center
}
.order_grid> div{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding:1rem 0;
    justify-content: center;
}
.order_grid >div:not(:last-of-type){
    border-bottom: 2px solid #d87d4a;
}
.items_heading{
    grid-column: 1;
    grid-row: 1;
    margin: 0.6rem 0;
}
.date_heading{
    grid-column: 2;
    grid-row: 1;
    margin: 0.6rem 0;
}
.date{
    grid-column: 2;
    grid-row: 2;
}
.items{
    grid-column: 1;
    grid-row: 2;
}
.items > div{
    margin-bottom: 1rem;
}
.total{
    grid-column: 2;
    grid-row: 3;
    font-weight:800;
    font-size:1rem;
}
.content{
    margin:0 auto;
    text-align:left;
    padding:1.5rem 0;
}
.info{
    display: flex;
    gap:1.5rem;
    margin-top:1rem;
}
.quantity{
    color:rgb(129, 125, 125)
}
h4{
    text-transform: uppercase;
}
.total > h5{
    text-decoration: underline;
    font-size: 1.1rem;
}

@media(min-width:675px){
    h2{
        text-align:left
    }
}
</style>