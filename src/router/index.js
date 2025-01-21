import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/home/index.vue';
import ClientLogin from '../components/client-login/index.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/client-login', name: 'ClientLogin', component: ClientLogin },
  { path: '/frontend-project/', redirect: '/' },  // Redirect to Home
  { path: '/frontend-project', redirect: '/' } // Handle missing trailing slash
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory('/frontend-project/'),
  routes,
});

export default router;
