import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Client } from '../interfaces/Client';

export const useClientsStore = defineStore('clients',()=>{
    
    const currentPage = ref<number>(1);
    const totalPages = ref<number>(5);
    const clients = ref<Client[]>([]);
    
    return {
        currentPage,
        totalPages,
        clients,

        setClients: (clientes:Client[])=> clients.value = clientes,
        setPage: (page:number) => {
            if(page <= 0 || page > totalPages.value || page === currentPage.value) return;

            currentPage.value = page
        }
    }
});