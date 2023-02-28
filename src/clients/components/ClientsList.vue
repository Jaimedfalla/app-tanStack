<script setup lang="ts">
import { toRef } from 'vue';
import { Client } from '../interfaces/Client';

interface Props{
    clients:Client[]
}

const props = withDefaults(defineProps<Props>(),{
    clients:()=> []
});

</script>

<template>
    <ul>
        <li v-for="client of props.clients" :key="client.id">
            <RouterLink :to="{
                name:'clients-byId',
                params:{id:client.id}
            }">{{ client.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>

</style>