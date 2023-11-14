import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

import Manifest from './manifest.json';

// https://vitejs.dev/config/

const aliases = {
  _assets: path.resolve(__dirname, 'src/assets'),
  _classes: path.resolve(__dirname, 'src/classes'),
  _components: path.resolve(__dirname, 'src/components'),
  _hooks: path.resolve(__dirname, 'src/hooks'),
  _modules: path.resolve(__dirname, 'src/modules'),
  _style: path.resolve(__dirname, 'src/style'),
  _services: path.resolve(__dirname, 'src/services'),
  _types: path.resolve(__dirname, 'src/types'),
  _shared: '@jaderowley/shared/src',
  _utils: '@jaderowley/utils/src',
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const reactPlugin = react({
    include: 'src/**/*.{ts,tsx}',
    babel: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            pure: true,
            displayName: env.MODE !== 'production',
          },
        ],
      ],
    },
  });

  const pwaPlugin = VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: env.MODE !== 'production',
    },
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: Manifest,
  });

  return {
    base: './',
    baseUrl: '/',
    resolve: {
      alias: aliases,
    },
    plugins: [svgr(), reactPlugin, pwaPlugin],
  };
});
