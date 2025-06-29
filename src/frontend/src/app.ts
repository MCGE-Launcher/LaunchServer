import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:uno.css';
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

createApp(App).use(router).mount('#app');