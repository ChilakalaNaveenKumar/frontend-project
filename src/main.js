import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import './registerServiceWorker'
import store from './store'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router';
import '@fontsource/alumni-sans-inline-one';
import '@fontsource/amaranth';
import '@fontsource/anton-sc';

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App).use(vuetify).use(store).use(router).mount('#app')
