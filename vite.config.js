import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(),'');

  return {
    plugins: [
      react(), 
    ],
    css: {
      postcss: {
        plugins: [tailwindcss()], 
      },
    },
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'https://api.timbu.cloud',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
  };
});
