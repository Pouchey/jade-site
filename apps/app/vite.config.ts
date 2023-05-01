import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

const aliases = {
  _classes: path.resolve(__dirname, 'src/classes'),
  _components: path.resolve(__dirname, 'src/components'),
  _hooks: path.resolve(__dirname, 'src/hooks'),
  _modules: path.resolve(__dirname, 'src/modules'),
  _style: path.resolve(__dirname, 'src/style'),
  _types: path.resolve(__dirname, 'src/types'),
  _utils: '@jaderowley/utils/src',
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const htmlPlugin = createHtmlPlugin({
    minify: true,
    entry: 'src/main.tsx',
    inject: {
      data: {
        title: env.VITE_APP_TITLE,
      },
    },
  });

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
    resolve: {
      alias: aliases,
    },
    plugins: [htmlPlugin, svgr(), reactPlugin],
  };
});
