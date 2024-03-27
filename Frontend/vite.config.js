import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/Styles',
      '@scripts': '/src/Script'

    },
  },
});
