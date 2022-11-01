import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

import { createHtmlPlugin } from 'vite-plugin-html'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
 
  const env = loadEnv(mode, process.cwd());
 
  return {
    resolve: {
      alias: {
        '_components': path.resolve(__dirname, 'src/components'),
        '_hooks': path.resolve(__dirname, 'src/hooks'),
        '_modules': path.resolve(__dirname, 'src/modules'),
        '_services': path.resolve(__dirname, 'src/services'),
        '_style': path.resolve(__dirname, 'src/style'),
        '_utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    plugins: [
      svgr(),
      react({
        include: "src/**/*.ts",
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
        }
      }),
      createHtmlPlugin({
        minify:true,
        entry: 'src/main.tsx',
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
    ]
  }
})
