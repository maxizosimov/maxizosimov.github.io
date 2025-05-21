import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Change this since it's the root domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
