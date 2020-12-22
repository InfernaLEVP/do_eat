import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Maska from 'maska';
import mitt from 'mitt';
const emitter = mitt();

const appVue = createApp(App).use(store).use(router).use(Maska);
appVue.config.globalProperties.emitter = emitter;
window.app = appVue.mount('#app');
