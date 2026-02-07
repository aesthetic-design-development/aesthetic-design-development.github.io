import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // Use relative base for GitHub Pages (works for both user and project pages when deploying from /docs or root)
    base: './', 

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    build: {
      // Output to docs for GitHub Pages "Deploy from branch" setup
      outDir: 'docs',
    },

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
