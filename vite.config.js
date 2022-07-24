import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.obj'],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Mockup.vue'),
      name: 'vue-three-d-mockup',
      fileName: 'vue-three-d-mockup'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});