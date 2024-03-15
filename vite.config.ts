import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CULT/',
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src'
    }
  }
})
