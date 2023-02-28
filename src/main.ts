import { createApp } from 'vue'
import {createPinia} from 'pinia';
import './assets/style.css'
import App from './App.vue'
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';

const store = createPinia();

const app = createApp(App);

VueQueryPlugin.install(app,{
    queryClientConfig:{
        defaultOptions:{
            queries:{
                cacheTime:1000 * 60 // 1 minuto en caché
            }
        }
    }
});

app.use(store)
.use(router)
.mount('#app')
