import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //Comment this line when you want to deploy to a different directory
  base: '/dev',
});
