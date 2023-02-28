<script setup lang="ts">
import LoadingModal from '@/shared/components/LoadingModal.vue';
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useClient from '../composables/useClient';

const route = useRoute();
const router = useRouter();
const {
    isLoading,
    client,
    isError,
    updating,
    isSuccess,
    mutate
} = useClient(+route.params.id);

watch(isError,()=>{
    if(isError.value){
        router.replace('/clients');
    }
});

</script>

<template>
    <h3 v-if="updating">Saving...</h3>
    <h3 v-if="isSuccess">Saved...</h3>

    <LoadingModal v-if="isLoading"/>

    <div v-if="client">
        <h1>{{ client.name }}</h1>
        <form @submit.prevent="mutate(client!)">
            <input 
                type="text"
                name="client"
                id="client"
                placeholder="Client"
                v-model="client.name"
            />
            <br>
            <input 
                type="text"
                name="address"
                id="address"
                placeholder="Addres"
                v-model="client.address"
            />
            <br>
            <button 
                :disabled="updating"
                type="submit">Save</button>
        </form>
    </div>

    <code>{{ client }}</code>
</template>

<style scoped>
input{
    width:100%;
    padding: 5px 10px;
    margin-bottom: 10px;
}
button{
    margin-bottom: 10px;
}
</style>