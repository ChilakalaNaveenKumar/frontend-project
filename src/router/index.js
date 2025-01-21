import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home/index.vue';
import ClientLogin from '../components/client-login/index.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/client-login', name: 'ClientLogin', component: ClientLogin },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
