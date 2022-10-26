<script setup lang="ts">
import CustomInput from '../components/CustomInput.vue';
</script>

<template>
    <div class="checkout_page">
        <div class="checkout_form content">
            <h2>CHECKOUT</h2>
            <div>
                <h3>Billing Details</h3>
                <div class="inputs">
                    <CustomInput :label="'name'" />
                    <CustomInput :label="'email'" />
                    <CustomInput :label="'number'" />
                </div>
            </div>
            <div>
                <h3>Shipping Details</h3>
                <div class="inputs">
                    <CustomInput :label="'address'" />
                    <CustomInput :label="'zipcode'" />
                    <CustomInput :label="'city'" />
                    <CustomInput :label="'country'" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.checkout_page{
    background:#f2f2f2;
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
@media(min-width:675px){
    .inputs{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .inputs > div{
        width:calc(50% - 1rem);
    }
}
</style>