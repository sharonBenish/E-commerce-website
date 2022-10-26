<script setup lang="ts">
const props = defineProps<{
    name:string,
    id:string,
    label:string,
    modelValue:string
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value:string ):void
}>();

const changing = (e:Event)=>{
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value)
}
</script>

<template>
    <div class="radio_component">
        <div class="radio">
            <input type="radio" :name="name" :id="id" @change="changing" :value="id" :checked="modelValue == id">
            <div class="custom_radio"></div>
        </div>
        <label :for="id">{{label}}</label>
    </div>
</template>

<style scoped>
.radio_component{

}
label{
    display: block;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -.214286px;
    color: #000;
    text-align: left;
    text-transform: capitalize;
}
.radio_component{
    outline:none;
    background: #fff;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 56px;
    padding-left: 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -.25px;
    color: #000;
    display: flex;
    gap:2rem;
    align-items: center;
}


.radio{
    position: relative;
    width:25px;
    height: 25px;
}
input{
    opacity: 0;
}
.custom_radio{
    position: absolute;
    top:0;
    width:25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #cfcfcf;
    pointer-events: none;
}
input:checked + .custom_radio::after{
    content: "";
    width:10px;
    height: 10px;
    background-color: #d87d4a;
    border-radius: 50%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>