<script setup lang="ts">
import { ref,toRef,watch } from 'vue';

interface Props{
    currentPage:number,
    totalPages:number
}

interface Emits{
    (e:'pageChanged',page:number):void;
}

const props = defineProps<Props>();
const totalPages = toRef(props,'totalPages');
const emit = defineEmits<Emits>();
const totalPagesNumbers = ref<number[]>([]);
watch(totalPages,()=>{
    totalPagesNumbers.value = [...new Array(totalPages.value)].map((v,i)=> i + 1);
},{ immediate:true })

</script>

<template>
    <div>
        <button :disabled="currentPage===1"
            @click="emit('pageChanged',currentPage - 1)"
        >Previous</button>
        <button v-for="number of totalPagesNumbers"
            :key="number"
            @click="emit('pageChanged',number)"
            :class="{active:currentPage ===number}"
            >{{ number }}</button>
        <button
            :disabled="currentPage===totalPages"
            @click="emit('pageChanged',currentPage + 1)"
        >Next</button>
    </div>
</template>

<style scoped>
div {
    margin-top: 10px;
}
button:disabled {
    cursor: not-allowed;
}
.active {
    background-color: hsla(160, 100%, 37%, 0.2);
}

</style>