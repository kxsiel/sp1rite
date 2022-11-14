import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createApp } from 'vue';
import VueFeather from 'vue-feather';

const app = createApp({});

app.component(VueFeather.name, VueFeather);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      
    }
  }
})

