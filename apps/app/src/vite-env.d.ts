/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
