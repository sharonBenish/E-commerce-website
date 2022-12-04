<script setup lang="ts">
const props = defineProps<{
    user:string,
    modelValue:string[],
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value:string[] ):void
}>();

const changing = (e:Event)=>{
    const target = e.target as HTMLInputElement;
    let updatedValue:string[] = [...props.modelValue];
    if (target.checked){
        updatedValue.push(target.value);
        emit('update:modelValue', updatedValue)
    }else {
        console.log(props.modelValue)
        updatedValue = props.modelValue.filter(val=> val !== target.value)
        console.log(updatedValue);
        emit('update:modelValue', updatedValue)
    }
}
</script>

<template>
    <div class="radio_component">
        <label :for="user">{{user}}</label>
        <input type="checkbox" @change="changing" :value="user" :id="user">
    </div>
</template>

<style scoped></style>