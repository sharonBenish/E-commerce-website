<script setup lang="ts">
import Content from "../types/Content"
const props = defineProps<{
    item:Content
}>()
</script>

<template>
    <div>
        <ul>
            <li><span class="quantity">{{item.quantity}}x</span><span>{{item.item}}</span></li>
        </ul>
    </div>
</template>

<style scoped>
ul{
    margin:0;
    list-style: none;
    text-align: left;
    text-transform: capitalize;
}
li>span:not(.quantity){
    display: inline-block;
    margin-bottom: 2rem;
    max-width: 635px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 25px;
    color: rgb(0, 0, 0);
    opacity: 0.5;
    margin: 0px;
}
.quantity{
    color:#d87d4a;
    display: inline-block;
    margin-right: 2rem;
    opacity: 1 !;
    font-weight: 700;
}
</style>