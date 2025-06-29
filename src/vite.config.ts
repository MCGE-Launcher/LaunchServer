import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: 'resources',
  server: {
    host: true,
    port: 5173
  }
});