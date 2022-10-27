<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    label:string,
    placeholder:string,
    modelValue:string,
    type:string
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value:string ):void
}>();

const errorMsg = ref<string>("");

const validateInput = (e:Event)=>{
    const target = e.target as HTMLInputElement;
    if (target.value.trim() == ""){
        errorMsg.value = "Required";
        target.classList.add('invalid')
    }else if(target.type == 'email'){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(target.value)){
            errorMsg.value = "Invalid email";
            target.classList.add('invalid')
        }
    }
}
const clearError = (e:Event)=>{
    const target = e.target as HTMLInputElement;
    errorMsg.value="";
    target.classList.remove('invalid')
}
const typing = (e:Event)=>{
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
}
</script>

<template>
    <div class="input_component">
        <label for="name">{{label}}</label>
        <input :type="type" :id="label" @blur="validateInput" @focus="clearError" :placeholder="placeholder" :value="modelValue" @input="typing" />
        <p class="form_error">{{errorMsg}}</p>
    </div>
</template>

<style scoped>
.input_component{ 
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
    margin-bottom: 0.8rem;
}
input{
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
}
input:focus{
    border-color: #d87d4a;
}
.form_error{
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    letter-spacing: -.214286px;
    color: #cd2c2c;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>