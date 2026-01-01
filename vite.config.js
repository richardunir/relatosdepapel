import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@resources': path.resolve(__dirname, './src/resources/'),
      '@assets': path.resolve(__dirname, './src/resources/assets/'),
      '@booksImagesPath': path.resolve(__dirname, './src/resources/assets/books_image/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
    },
  },
})
