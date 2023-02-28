import axios from 'axios';
import { Client } from '../interfaces/Client';

const clientsApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default clientsApi;

// const queryClient = useQueryClient();

export const getClient = async (id:number):Promise<Client> => {
    const {data} = await clientsApi.get<Client>(`/clients/${id}`);
    return data;
}

export const updateclient = async(customer:Client):Promise<Client>=>{
    const {data} = await clientsApi.patch<Client>(`/clients/${customer.id}`,customer);
    /* //Con las siguientes líneas se actualiza la caché con la data actualizada
    const queries = queryClient.getQueryCache().findAll(['clients?page='],{exact:false});
    queries.forEach(query => query.fetch()); */
    return data;
}