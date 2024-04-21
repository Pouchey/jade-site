import { defineConfig } from 'vite';

const aliases = {
  _shared: '@jaderowley/shared/src',
  _utils: '@jaderowley/utils/src',
};

export default defineConfig({
  resolve: {
    alias: aliases,
  },
});
