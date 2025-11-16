import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Páginas Web Económicas · Cristina Voda',
        short_name: 'Cristina Voda Web',
        description: 'Diseño de páginas web económicas y profesionales en España.',
        theme_color: '#00a7b3',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
          ]
      }
    })

  ],
  server: {
  
    port: 5201
  },
  build: {
    chunkSizeWarningLimit: 1500, 
  },
})
