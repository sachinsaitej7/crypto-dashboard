import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//vite-plugin-svgr
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(),],
  // alias 
  resolve: {
    alias: {
    
      "@/providers": "/src/providers",
      "@/components": "/src/components",
      "@/modules": "/src/modules",
      "@/api": "/src/api",
      "@/constants": "/src/constants",
      "@/services": "/src/services",
      "@/hooks": "/src/hooks",
      "@/network": "/src/network",
    },
  },
})
