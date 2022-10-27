<script setup lang="ts">
import { computed } from '@vue/reactivity';
import CustomInput from '../components/CustomInput.vue';
import CustomRadioInput from '../components/CustomRadioInput.vue';
import { useStore } from '../store';
import { ref } from 'vue';

const emit = defineEmits<{
    (e:'paid'):void
}>();
const store = useStore();

const cartItems = computed(()=>{
    return store.cart
})

const checkoutForm = ref({
    name:"",
    email:"",
    number:"",
    address:"",
    zipcode:"",
    city:"",
    country:"",
    cardNumber:"",
    pin:"",
    paymentMethod:"cash"
})

const isValid = ref<boolean>(true)
const formValidation = (event:Event)=>{
    const inputs =Array.from(document.querySelectorAll('input'));
    inputs.forEach((input:HTMLInputElement) =>{
        input.focus();
        input.blur();
        if(input.classList.value.includes('invalid')){
            isValid.value = false;
        }
    })
}


const pay = (e:Event)=>{
    formValidation(e)
    if(isValid.value){
        // console.log("PAID")
        emit('paid')
    }
    isValid.value = true
}
</script>

<template>
    <div class="checkout_page">
        <div class="checkout_form content">
            <h2>CHECKOUT</h2>
            <div>
                <h3>Billing Details</h3>
                <div class="inputs">
                    <CustomInput :label="'name'" :placeholder="'John Doe'" v-model="checkoutForm.name" :type="'text'" />
                    <CustomInput :label="'email'" :placeholder="'example@mail.com'" v-model="checkoutForm.email" :type="'email'" />
                    <CustomInput :label="'number'" :placeholder="'+2347037401277'" v-model="checkoutForm.number" :type="'number'" />
                </div>
            </div>
            <div>
                <h3>Shipping Details</h3>
                <div class="inputs">
                    <CustomInput :label="'address'" :placeholder="'No 9 Courier road'" v-model="checkoutForm.address" :type="'text'" />
                    <CustomInput :label="'zipcode'" :placeholder="'11072'" v-model="checkoutForm.zipcode" :type="'text'" />
                    <CustomInput :label="'city'" :placeholder="'Port Harcourt'" v-model="checkoutForm.city" :type="'text'" />
                    <CustomInput :label="'country'" :placeholder="'Nigeria'" v-model="checkoutForm.country" :type="'text'" />
                </div>
            </div>
            <div>
                <h3>Payment Method</h3>
                <div class="inputs">
                    <CustomRadioInput :name="'payment'" :id="'card'" :label="'Credit Card'" v-model="checkoutForm.paymentMethod" />
                    <CustomRadioInput :name="'payment'" :id="'cash'" :label="'Cash on delivery'" v-model="checkoutForm.paymentMethod" />
                </div>
            </div>
            <div class="extra_info">
                <div class="cash_on_delivery" v-if="checkoutForm.paymentMethod == 'cash'">
                    <img src="https://heroic-bombolone-1f02fb.netlify.app/assets/cart/cash-icon.svg" alt="">
                    <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
                <div class="e_money" v-else>
                    <div class="inputs">
                        <CustomInput :label="'card-number'" :placeholder="'238521993'" v-model="checkoutForm.cardNumber" :type="'number'" />
                        <CustomInput :label="'pin'" :placeholder="'6891'" v-model="checkoutForm.pin" :type="'number'" />
                    </div>
                </div>
            </div>
        </div>
        <div class="order_summary content">
            <h3>SUMMARY</h3>
            <div v-for="(item ,index) in cartItems" :key="index" class="item">
                <img :src="item.cart.imgUrl" alt="">
                <div>
                    <h4>{{item.cart.name}}</h4>
                    <p>$ {{item.price}}</p>
                </div>
                <p>x{{item.quantity}}</p>
            </div>
            <div class="charges">
                <p>Total <span> ${{store.getTotal}}</span></p>
                <p>Shipping <span>$ 50</span></p>
            </div>
            <p class="grand_total">Grand Total <span>$ {{store.getTotal + 50}}</span></p>
            <button class="pay" @click="pay">continue & pay</button>
        </div>
    </div>
</template>

<style scoped>
.checkout_page{
    background:#f2f2f2;
    padding:2rem 0;
}
.content{
    background-color: #fff;
    padding: 2rem 1rem;
    margin:0 auto;
}
.inputs{
    display: flex;
    flex-direction: column;
    gap:1rem;
}
.checkout_form{
    padding: 2rem 3rem;
}
.checkout_form h2{
    text-align: left;
}
.checkout_form h3{
    color:#d87d4a;
    text-align: left;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: .928571px;
    text-transform: uppercase;
    margin:2rem 0;
}

.order_summary{
    background-color: #fff;
    margin-top: 2rem;
}

.order_summary > h3{
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 1.3px;
    text-align: left;
}
.item{
    display: flex;
    gap:1.2rem;
    align-items: center;
    margin-bottom: 1.2rem;
    text-align: left;
}

.item > p{
    margin-left: auto;
    margin-right: 10px;
    opacity: 0.5;
    font-weight: 600;
}

.item img{
    max-width:65px
}

.item h4{
    font-weight: 700;
    text-transform: uppercase;
}

.charges>p, .grand_total{
    display: flex;
    justify-content: space-between;
    color: #868686;
    font-weight: 500;
}

.charges > p span{
    font-weight: 800;
    color:#000
}

.grand_total{
    margin-top:1rem;
}

.grand_total>span{
    color:#d87d4a;
    font-weight: 900;
}

.pay{
    background-color: #d87d4a;
    text-transform: uppercase;
    color:#fff;
    font-weight: 800;
    margin:1.5rem 0;
    width:100%;
}
.cash_on_delivery{
    display: flex;
    text-align: left;
    gap:1rem;
    margin-top: 1.5rem;
}
.cash_on_delivery >p{
    opacity: 0.5;
    font-weight: 500;
    line-height: 25px;
    font-size: 15px;
}

.extra_info{
    margin-top: 2rem;
}

@media(min-width:675px){
    .inputs{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .inputs > div{
        width:calc(50% - 1rem);
    }

    .checkout_form h2{
        font-size:2rem;
    }
}

@media (min-width:1190px){
    .checkout_page{
        display: flex;
        padding:2rem;
        gap:1.2rem;
        justify-content: space-between;
    }
    .order_summary{
        max-width: 400px;
        margin-top: 0;
        height: fit-content;
    }
}
</style>