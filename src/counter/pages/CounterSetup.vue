<script setup lang="ts">
import { useCounterStoreSetup } from '@/store/counter-setup';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';

const store  = useCounterStoreSetup();
</script>

<template>
    <h1>Pinia Setup</h1>
    <h4>Counter: {{ store.count }}</h4>
    <h4>Square: {{ store.squareCount }}</h4>

    <button @click="store.increment()">+1</button>
    <button @click="store.incrementBy(2)">+2</button>
    <button @click="store.incrementBy(5)">+5</button>
    <button @click="store.$reset()">Reset</button>

    <br>

    <CounterOptionsValue/>
</template>

<style scoped>
button{
    margin-right: 5px;
}
</style>