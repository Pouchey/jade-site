import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

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

  return {
    base: './',
    baseUrl: '/',
    resolve: {
      alias: aliases,
    },
    plugins: [svgr(), reactPlugin],
  };
});
