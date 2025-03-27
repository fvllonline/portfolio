import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Force le traitement JSX pour les fichiers .js
    include: /src\/.*\.jsx?$/, // Applique à tous les .js/.jsx dans /src
  },
})