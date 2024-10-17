import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

export default defineConfig({
  base: '/personal-website-luca/', // Replace this with your repository name
  plugins: [react()]
})