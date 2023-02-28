import { useMutation, useQuery } from '@tanstack/vue-query';
import { ref, watch } from "vue";
import { getClient, updateclient } from '../api/Api';
import  type { Client } from "../interfaces/Client";

const useClient = (id:number) => {
    
    const client = ref<Client>();

    const {isLoading,data,isError} = useQuery(
        ['client',id],
        () => getClient(id),
        {
            retry:false
        }
    );

    const {
        isLoading:updating,
        isSuccess,
        reset,
        mutate} = useMutation(updateclient);
    
    watch(data,()=>{
        if(!data.value) return;

        client.value = {...data.value};
    },{immediate:true});

    watch(isSuccess,()=>{
        setTimeout(()=>{
            reset();
        },2000)
    }); 

    return {
        isLoading,
        isSuccess,
        client,
        isError,
        updating,
        
        mutate
    }
}

export default useClient;