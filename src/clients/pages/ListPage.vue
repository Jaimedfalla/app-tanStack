<script setup lang="ts">
import ClientList from '@/clients/components/ClientsList.vue';
import PaginationNumber from '../components/PaginationNumber.vue';
import useClients from '../composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue'

const {
    isLoading,
    clients,
    currentPage,
    totalPages,
    getPage}=useClients();
</script>

<template>
    <div>
        <LoadingModal v-if="isLoading"/>

        <template v-else>
            <h1>Clients list</h1>

            <ClientList :clients="clients"/>

            <pagination-number
                :current-page="currentPage"
                :total-pages="totalPages"
                @page-changed="getPage"/>
        </template>
    </div>
</template>

<style scoped>

</style>