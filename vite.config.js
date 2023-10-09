import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
        '@assets' : path.resolve(__dirname, './public/assets')
    },
  },
})