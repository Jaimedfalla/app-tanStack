<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';
import { storeToRefs } from 'pinia';

const store = useCounterOptionsStore();
const {counter, squareCount} = storeToRefs(store);
const {increment,incrementBy} = store;
</script>

<template>
    <div>
        <CounterOptionsValue
            :count="store.count"
            :last-changed="store.lastChanged"/>
    

        <div>
            <button @click="increment()">+1</button>
            <button @click="incrementBy(2)">+2</button>
            <button @click="incrementBy(5)">+5</button>
            <button @click="store.$reset()">Reset</button>
        </div>
    </div>
</template>