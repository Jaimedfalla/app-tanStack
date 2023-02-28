import { useClientsStore } from '@/clients/store';
import type { Client } from "@/clients/interfaces/Client";
import clientsApi from "@/clients/api/Api";
import { useQuery } from "@tanstack/vue-query";
import { storeToRefs } from 'pinia';
import { watch, computed } from 'vue';

const getClients = async(page:number):Promise<Client[]> => {
    const {data} = await clientsApi.get<Client[]>('/clients',{
        params:{
            _page:page
        }
    });
    
    return data;
}

const useClients = () => {
    
    const store = useClientsStore();
    const {currentPage,clients,totalPages} = storeToRefs(store)

    const {isLoading,data} =useQuery(
        ['clients?page=',currentPage],
        () => getClients(currentPage.value)
    )
    
    watch(data,clients => {
        if(clients)
            store.setClients(clients);
    },{immediate:true})
    
    return {
        clients,
        currentPage,
        isLoading,
        totalPages,

        getPage:store.setPage
    }
}

export default useClients;