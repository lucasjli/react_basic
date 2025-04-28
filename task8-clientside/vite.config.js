import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend server
        changeOrigin: true,  // Ensures proper handling of origins
        rewrite: (path) => path.replace(/^\/api/, '')  // Rewrite /api/* to /api/*
      }
    }
  }
})
