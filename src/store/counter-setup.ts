import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStoreSetup = defineStore('counterSetup',()=>{
    const count = ref<number>(0);
    const lastChanged=ref<Date>();

    const incrementBy = (value:number) => {
        count.value += value;
        lastChanged.value = new Date();
    }

    return{
        count,
        lastChanged,
        squareCount:computed(()=> count.value**2),
        
        incrementBy,
        increment: ()=> incrementBy(1)
    }
})