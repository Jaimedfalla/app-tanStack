<script setup lang="ts">
import {ref,toRef,watch} from 'vue';

interface Props{
    count:number
    lastChanged:Date
}

const props = defineProps<Props>();
const count = toRef(props,'count');
const squareCount = ref<number>();

watch(count,()=> {
    squareCount.value = count.value **2;
},{immediate:true})

</script>

<template>
    <h1>El valor es: {{ count }}</h1>
    <h2>El cuadrado es: {{ squareCount }}</h2>
    <h6 v-if="lastChanged">último cambio: {{ lastChanged }}</h6>
</template>