import { defineStore } from "pinia"

interface CounterOptionsState{
    count: number,
    lastChanged?: Date
}

export const useCounterOptionsStore = defineStore('counterOptions',{
    state:():CounterOptionsState=>{
        return {
            count:0,
            lastChanged:undefined
        } as CounterOptionsState;
    },
    actions:{
        incrementBy(value:number){
            this.count += value;
            this.lastChanged = new Date();
        },
        increment(){
            this.incrementBy(1);
        }
    }
})