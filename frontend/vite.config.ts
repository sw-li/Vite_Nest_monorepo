import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',       // listen on all interfaces
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true     // file watching works across Docker volumes
    },
    hmr: {
      host: 'localhost',   // the browser connects to your host machine
      port: 5173
    }
}})
