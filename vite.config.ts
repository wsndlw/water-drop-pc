import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,   // 想要的端口
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve('./src')
      }
    ]
  }
})
