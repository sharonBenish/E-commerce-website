<script lang="ts" setup>
import { useStore } from '../store';

const store = useStore();
</script>

<template>
    <div class="order_history">
        <div>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Order</th>
                    <th>Prices</th>
                    <th>Total</th>
                </tr>
                <tr v-for="order in store.orderHistory">
                    <td>{{order.date.toDate().toLocaleDateString()}}</td>
                    <td>
                        <ul>
                            <li v-for="item in order.items">
                                {{item.cart.name}}
                            </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li v-for="item in order.items">
                                {{item.price}}
                            </li>
                        </ul>
                    </td>
                    <td>
                        {{order.items.map(item => item.price).reduce((a,b)=> a+b, 0)}}
                    </td>
                </tr>
            </table>
        </div>
    </div>

</template>

<style scoped>
.order_history{
    border:1px solid red;

}
table{
    border:1px solid blue
}
</style>