import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['d24af122-8068-46ad-acba-9b0adaa230f3-00-34psqmjwlw9cg.picard.replit.dev']
  }
})
